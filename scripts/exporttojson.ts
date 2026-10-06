import { readdir, mkdir, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import * as ts from "typescript";

interface BuildableTemplate {
    finalBuild(): string;
}

/**
 * Clase principal auxiliar que exporta los archivos TS de template a JSON leible y formateado.
 * @class ExportToJson
 * @author HaJuegos - 03-10-2026
 */
class ExportToJson {
    /**
     * Ruta central del proyecto a considerar.
     * @type {string}
     * @author HaJuegos - 03-10-2026
     * @private
     */
    private readonly projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

    /**
     * Ruta principal donde estan los archivos TS a convertir.
     * @type {string}
     * @author HaJuegos - 03-10-2026
     * @private
     */
    private readonly inputDirt = join(this.projectRoot, "test");

    /**
     * Ruta central de las plantillas vanilla y de entidades a exportar.
     * @type {string}
     * @private
     */
    private readonly templatesDirt = join(this.projectRoot, "src", "templates", "behaviors", "entities");

    /**
     * Ruta principal donde se van a exportar los archivos de TS a JSON leibles.
     * @type {string}
     * @private
     */
    private readonly exportDirt = join(this.projectRoot, "export");

    /**
     * URL de la API en concreto para la marca de agua de los JSON a exportar.
     * @type {string}
     * @author HaJuegos - 03-10-2026
     * @private
     */
    private readonly waterMarkURL: string = "https://github.com/HaJuegos/simplified-mojang-JSONs";

    /**
     * Autores involucrados en la creacion de los archivos a exportar en la marca de agua.
     * @type {string}
     * @author HaJuegos - 03-10-2026
     * @private
     */
    private readonly waterMarkAuthors: string = "HaJuegos";

    /**
     * Marca de agua de los JSONs a exportar.
     * @type {string}
     * @author HaJuegos - 03-10-2026
     * @private
     */
    private readonly waterMarkTXT: string = [
        `// Este archivo fue generado automáticamente usando la API: ${this.waterMarkURL}. Si tienes alguna duda, pregunta o reporte de bugs. Por favor, crea un issue en la página mencionada. Autor: ${this.waterMarkAuthors}`,
        `// This file was automatically generated using the API: ${this.waterMarkURL}. If you have any questions, concerns, or bug reports, please create an issue on the page mentioned above. Author: ${this.waterMarkAuthors}`
    ].join("\n");


    /**
     * Eventos principales de la clase cuando es llamada o inicializada.
     * @param {boolean} [testOnly] Por defecto, solo se exportaran los archivos de la entrada input a export. Si se pone en false, se exportan todos los archivos vanilla, con fines de testeo. 
     * @constructor
     * @public
     */
    public constructor (testOnly: boolean = true) {
        const exportTask = testOnly ? this.exportTestTemplates() : this.exportAllTemplates();

        exportTask.catch(error => {
            console.error("Error exportando templates a JSON:", error);
            process.exitCode = 1;
        });
    }

    /**
     * Metodo auxiliar que valida si la plantilla a construir es un template.
     * @param {unknown} value Valor en concreto a considerar.
     * @returns {value is BuildableTemplate} Devuelve si tiene el argumento de finalBuild().
     * @author HaJuegos - 03-10-2026
     * @private
     */
    private isBuildTemplate(value: unknown): value is BuildableTemplate {
        return typeof value == "object" && value != null && "finalBuild" in value && typeof value.finalBuild == "function";
    }

    /**
     * Metodo auxiliar que obtiene las plantillas a construir de un template.
     * @param {string} exportName Nombre de la exportacion del template.
     * @param {unknown} value Valor y datos del template.
     * @returns {(BuildableTemplate | undefined)} Puede devolver el template con el metodo build funcional o errores.
     * @author HaJuegos - 06-10-2026
     * @private
     */
    private getBuildTemplate(exportName: string, value: unknown): BuildableTemplate | undefined {
        if (this.isBuildTemplate(value)) {
            return value;
        }

        if (exportName.endsWith("Template") && typeof value == "function") {
            const template = (value as () => unknown)();

            if (this.isBuildTemplate(template)) {
                return template;
            }
        }

        return undefined;
    }

    /**
     * Metodo auxiliar que revisa todos los archivos de la rutas establecidas para buscar los archivos TS.
     * @param {string} dir Directorio a considerar.
     * @returns {Promise<string[]>} Devuelve La lista de rutas donde hay archivos validos. De forma asincrona.
     * @author HaJuegos - 03-10-2026
     * @private
     * @async
     */
    private async findFiles(dir: string): Promise<string[]> {
        const entries = await readdir(dir, { withFileTypes: true });
        const files: string[] = [];

        for (const entry of entries) {
            const path = join(dir, entry.name);

            if (entry.isDirectory()) {
                files.push(...await this.findFiles(path));
            } else if ([".ts", ".tsx"].includes(extname(entry.name)) && !entry.name.endsWith(".d.ts") && entry.name != "_root.ts" && entry.name != "index.ts") {
                files.push(path);
            }
        }

        return files.sort();
    }

    /**
     * Metodo auxiliar que convierte los templates disponibles a JSON leibles.
     * @returns {Promise<void>} Es un metodo asincrono, no retorna un valor.
     * @author HaJuegos - 03-10-2026
     * @private
     * @async
     */
    private async exportTestTemplates(): Promise<void> {
        return this.exportTemplates(this.inputDirt);
    }

    /**
     * Exporta todas las plantillas vanilla del directorio de entidades.
     * @returns {Promise<void>} Exportacion asincrona de las plantillas.
     * @private
     * @async
     */
    private async exportAllTemplates(): Promise<void> {
        return this.exportTemplates(this.templatesDirt);
    }

    /**
     * Metodo principal que obtiene todos los archivos vanilla a exportar y los convierte a JSONs leibles.
     * @param {string} inputDir Input de la carpeta con los archivos a considerar.
     * @returns {Promise<void>} 
     * @author HaJuegos - 06-10-2026
     * @private
     * @async Es metodo asincrono por si hay cambios a tiempo real.
     */
    private async exportTemplates(inputDir: string): Promise<void> {
        const files = await this.findFiles(inputDir);

        if (files.length == 0) {
            console.log(`No hay archivos validos en ${inputDir}`);
            return;
        }

        this.checkTypeScript(files);

        await mkdir(this.exportDirt, { recursive: true });

        let exportedCount = 0;
        let failedCount = 0;

        for (const file of files) {
            try {
                const module = await import(pathToFileURL(file).href) as Record<string, unknown>;
                const templates = Object.entries(module).filter(([exportName, value]) =>
                    this.isBuildTemplate(value) || (exportName.endsWith("Template") && typeof value == "function")
                );

                if (templates.length == 0) {
                    console.warn(`Sin templates exportables: ${relative(inputDir, file)}`);
                    continue;
                }

                const relativeName = relative(inputDir, file).replace(/\.(?:tsx|ts)$/, "").split(sep).join(".");

                for (const [exportName, value] of templates) {
                    const template = this.getBuildTemplate(exportName, value);

                    if (!template) {
                        console.warn(`No se pudo construir el template ${exportName}: ${relative(inputDir, file)}`);
                        continue;
                    }

                    const suffix = templates.length > 1 ? `.${exportName.replace(/[^A-Za-z0-9_-]/g, "_")}` : "";
                    const output = join(this.exportDirt, `${relativeName}${suffix}.json`);
                    const jsonBody = JSON.stringify(JSON.parse(template.finalBuild()), null, 2);
                    const json = `${this.waterMarkTXT}\n${jsonBody}\n${this.waterMarkTXT}\n`;

                    await writeFile(output, json, "utf8");

                    exportedCount++;

                    console.log(`Exportado: ${relative(inputDir, file)} -> ${relative(this.projectRoot, output)}`);
                }
            } catch (error) {
                failedCount++;
                console.error(`Fallo al exportar ${relative(inputDir, file)}:`, error);
            }
        }

        console.log(`${exportedCount} JSON exportados; ${failedCount} archivos con error en ${relative(this.projectRoot, this.exportDirt) || "export"}`);
    }

    /**
     * Metodo auxiliar que revisa y comprueba primero los tipados y compraciones TS antes de compilar y exportar.
     * @param {string[]} files Archivos a revisar en cuestion.
     * @returns {void}
     * @author HaJuegos - 06-10-2026 
     * @private
     */
    private checkTypeScript(files: string[]): void {
        const configPath = join(this.projectRoot, "tsconfig.json");
        const configFile = ts.readConfigFile(configPath, ts.sys.readFile);

        if (configFile.error) {
            throw new Error(ts.flattenDiagnosticMessageText(configFile.error.messageText, ts.sys.newLine));
        }

        const config = ts.parseJsonConfigFileContent(configFile.config, ts.sys, this.projectRoot);
        const program = ts.createProgram({
            rootNames: files,
            options: {
                ...config.options,
                noEmit: true,
                rootDir: this.projectRoot
            }
        });
        const diagnostics = ts.getPreEmitDiagnostics(program).filter(diagnostic => diagnostic.category == ts.DiagnosticCategory.Error);

        if (diagnostics.length > 0) {
            const formatHost: ts.FormatDiagnosticsHost = {
                getCanonicalFileName: fileName => fileName,
                getCurrentDirectory: () => this.projectRoot,
                getNewLine: () => ts.sys.newLine
            };

            console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, formatHost));
            throw new Error(`TypeScript encontró ${diagnostics.length} errores; se canceló la exportación.`);
        }

        console.log(`TypeScript: ${files.length} archivos raíz y sus dependencias validados.`);
    }
}

new ExportToJson(false);