import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, basename } from "node:path";

/**
 * Esquema base para indicar los sitios a generar un indice de root.
 * @interface BarrelTarget
 * @author HaJuegos - 23-09-2026
 */
interface BarrelTarget {
    /**
     * Ubicacion central de todos los archivos que necesitan un indice root.
     * @type {string}
     */
    dir: string;

    /**
     * El namespace para llamar al indice root.
     * @type {string}
     */
    namespace: string;
}

/**
 * Funcion auxiliar que extrae y expone las clases en un solo import.
 * @param {string} filePath Ruta del archivo en concreto a exponer.
 * @returns {string[]} Lista de clases expuestas al final.
 * @author HaJuegos - 23-09-2026
 */
function extractExportedClasses(filePath: string): string[] {
    const content = readFileSync(filePath, "utf-8");
    const matches = [...content.matchAll(/export\s+(?:abstract\s+)?class\s+(\w+)/g)];

    return matches.map(m => m[1]);
}

/**
 * Funcion auxiliar que genera la clase principal anidando las demas expuestas en una variante final.
 * @param {BarrelTarget} param0 Parametros principales a obtener. 
 * @param {string} param0.dir Direccion de la ruta del archivo a obtener.
 * @param {string} param0.namespace Namespace de la clase principal anidada a crear.
 * @returns {void}
 * @author HaJuegos - 23-09-2026
 */
function generateBarrel({ dir, namespace }: BarrelTarget): void {
    const files = readdirSync(dir).filter(f => f.endsWith(".ts") && !f.startsWith("_") && f != "index.ts").sort();
    const reexports: string[] = [];

    for (const file of files) {
        const mod = basename(file, ".ts");
        const classNames = extractExportedClasses(join(dir, file));

        if (classNames.length == 0) {
            continue;
        };

        reexports.push(`export { ${classNames.join(", ")} } from "./${mod}";`);
    }

    writeFileSync(join(dir, "_root.ts"), reexports.join("\n") + "\n", "utf-8");
    writeFileSync(join(dir, "index.ts"), `export * as ${namespace} from "./_root";\n`, "utf-8");
}

/**
 * Las clases anidadas y las rutas a crear y considerar.
 * @type {BarrelTarget[]}
 * @author HaJuegos - 23-09-2026
 */
const targets: BarrelTarget[] = [
    { dir: "src/components/behaviors/entities", namespace: "BPEntityComponents" },
    { dir: "src/templates/behaviors/entities", namespace: "BPEntityTemplates" },
];

targets.forEach(generateBarrel);