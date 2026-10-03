import { readdir, mkdir, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

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
     * @constructor
     * @public
     */
    public constructor () {
        this.exportTemplates().catch(error => {
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
            } else if ([".ts", ".tsx"].includes(extname(entry.name)) && !entry.name.endsWith(".d.ts")) {
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
    private async exportTemplates(): Promise<void> {
        const files = await this.findFiles(this.inputDirt);

        if (files.length == 0) {
            console.log(`No hay archivos validos en ${this.inputDirt}`);
            return;
        }

        await mkdir(this.exportDirt, { recursive: true });

        let exportedCount = 0;

        for (const file of files) {
            const module = await import(pathToFileURL(file).href) as Record<string, unknown>;
            const templates = Object.entries(module).filter(([, value]) => this.isBuildTemplate(value));

            if (templates.length == 0) {
                console.warn(`Sin templates exportables: ${relative(this.inputDirt, file)}`);
                continue;
            }

            const relativeName = relative(this.inputDirt, file).replace(/\.(?:tsx|ts)$/, "").split(sep).join(".");

            for (const [exportName, value] of templates) {
                const suffix = templates.length > 1 ? `.${exportName.replace(/[^A-Za-z0-9_-]/g, "_")}` : "";
                const output = join(this.exportDirt, `${relativeName}${suffix}.json`);
                // @ts-ignore
                const jsonBody = JSON.stringify(JSON.parse(value.finalBuild()), null, 2);
                const json = `${this.waterMarkTXT}\n${jsonBody}\n${this.waterMarkTXT}\n`;

                await writeFile(output, json, "utf8");

                exportedCount++;

                console.log(`Exportado: ${relative(this.inputDirt, file)} -> ${relative(this.projectRoot, output)}`);
            }
        }

        console.log(`${exportedCount} JSON exportados en ${relative(this.projectRoot, this.exportDirt) || "export"}`);
    }
}

new ExportToJson();
