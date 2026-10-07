import { readdir, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { basename, dirname, extname, join, relative, resolve, sep } from "node:path";
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
     * Marca temporal para separar los archivos fantasma en caso de que se requiera.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly tempMarker: string = ".__export__";

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
     * @param {unknown} value Valor y datos del template.
     * @returns {(string | undefined)} Puede devolver el string final del JSON si todo sale correcto.
     * @author HaJuegos - 06-10-2026
     * @private
     */
    private getBuildTemplate(value: unknown): string | undefined {
        if (this.isBuildTemplate(value)) {
            return value.finalBuild();
        }

        if (typeof value == "function" && value.length == 0) {
            let r: unknown;

            try {
                r = (value as () => unknown)();
            } catch {
                return undefined;
            }

            return this.isBuildTemplate(r) ? r.finalBuild() : this.asJSONtxt(r);
        }

        return this.asJSONtxt(value);
    }

    /**
     * Metodo auxiliar que comprueba y devuelve el string final del JSON convertido directamente en txt si es declarado a secas.
     * @param {unknown} value Valor y datos del template.
     * @returns {(string | undefined)} Puede devolver el string final del JSON si todo sale correcto.
     * @author HaJuegos - 06-10-2026
     * @private
     */
    private asJSONtxt(value: unknown): string | undefined {
        if (typeof value != "string") {
            return undefined;
        }

        try {
            const parsed: unknown = JSON.parse(value);

            return parsed != null && typeof parsed == "object" && !Array.isArray(parsed) ? value : undefined;
        } catch {
            return undefined;
        }
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
            } else if ([".ts", ".tsx"].includes(extname(entry.name)) && !entry.name.endsWith(".d.ts") && entry.name != "_root.ts" && entry.name != "index.ts" && !entry.name.includes(this.tempMarker)) {
                files.push(path);
            }
        }

        return files.sort();
    }

    /**
     * Metodo auxiliar que reescribe el codigo de un archivo para las llamadas sueltas sin ningun export para que este mismo se pueda exportar a un JSON.
     * @param {string} src Codigo original en cuestion.
     * @param {string} fileName Ruta del archivo en concreto, qu esolo se usa para que TS lo interprete.
     * @returns {{ code: string; count: number; }} Devuelve el codigo reescrito y la cantidad de llamadas capturadas.
     * @author HaJuegos - 07-10-2026
     * @private
     */
    private captureCells(src: string, fileName: string): { code: string; count: number; } {
        const sourceFile = ts.createSourceFile(fileName, src, ts.ScriptTarget.Latest, true);
        const starts: number[] = [];

        for (const state of sourceFile.statements) {
            if (!ts.isExpressionStatement(state)) {
                continue;
            }

            let exp = state.expression;

            while (ts.isParenthesizedExpression(exp) || ts.isAwaitExpression(exp)) {
                exp = exp.expression;
            }

            if (ts.isCallExpression(exp) || ts.isCallOrNewExpression(exp)) {
                starts.push(state.getStart(sourceFile));
            }
        }

        let code = src;

        for (let i = starts.length - 1; i >= 0; i--) {
            code = `${code.slice(0, starts[i])}export const __call_${i + 1} = ${code.slice(starts[i])}`;
        }

        return { code, count: starts.length };
    }

    /**
     * Metodo auxiliar que importa un archivo TS y devuelve todo lo que exporta. Si el archivo tiene llamadas sueltas, importa una copia temporal reescrita para la correcta exportacion del mismo.
     * @param {string} file Ruta del archivo a considerar.
     * @returns {Promise<Record<string, unknown>>} Devuelve los exportos del modulo, incluyendo las llamadas capturadas de forma asincrona.
     * @author HaJuegos - 07-10-2026
     * @private
     * @async
     */
    private async loadModule(file: string): Promise<Record<string, unknown>> {
        const { code, count } = this.captureCells(await readFile(file, 'utf-8'), file);

        if (count == 0) {
            return await import(pathToFileURL(file).href) as Record<string, unknown>;
        }

        const tempFile = join(dirname(file), `${basename(file, extname(file))}${this.tempMarker}${extname(file)}`);

        try {
            await writeFile(tempFile, code, "utf8");

            return await import(pathToFileURL(tempFile).href) as Record<string, unknown>;
        } finally {
            await rm(tempFile, { force: true });
        }
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
                const module = await this.loadModule(file);
                const templates = Object.entries(module).flatMap(([exportName, value]) => {
                    const built = this.getBuildTemplate(value);

                    return built == undefined ? [] : [{ exportName, built }];
                });

                if (templates.length == 0) {
                    console.warn(`Sin templates exportables: ${relative(inputDir, file)}`);
                    continue;
                }

                const relativeName = relative(inputDir, file).replace(/\.(?:tsx|ts)$/, "").split(sep).join(".");

                for (const { exportName, built } of templates) {
                    const suffix = templates.length > 1 ? `.${exportName.replace(/^__call_/, "call").replace(/[^A-Za-z0-9_-]/g, "_")}` : "";
                    const output = join(this.exportDirt, `${relativeName}${suffix}.json`);
                    const jsonBody = JSON.stringify(JSON.parse(built), null, 2);
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

new ExportToJson(true);