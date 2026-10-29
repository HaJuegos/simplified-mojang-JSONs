import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, basename } from "node:path";

/**
 * Intefaz base que define la configuracion de un directorio para la generacion automatica de indices.
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

    /**
     * El tipo de exportacion que se buscara y extraera dentro de cada archivo modular.
     * @type {("class" | "const")}
     */
    kind: "class" | "const";

    /**
     * (Opcional) Si se establece, se debe mantener los IDs como se fijaron inicialmente.
     * @type {?boolean}
     */
    syncIds?: boolean;

    /**
     * (Opcional) Si es true, recorre las subcarpetas y las expone como namespaces anidadas.
     * @type {?boolean}
     */
    recursive?: boolean;
}

/**
 * Clase principal auxiliar encargada de la auto generacion de indices root para los componentes y/o plantillas generales de la API.
 * @class GenerateAutoIndexs
 * @author HaJuegos - 01-10-2026
 */
class GenerateAutoIndexs {
    /**
     * Directorios en concreto a considerar en la logica.
     * @type {BarrelTarget[]}
     * @author HaJuegos - 01-10-2026
     * @private
     */
    private readonly targetDirs: BarrelTarget[] = [
        { dir: "src/components/behaviors/entities", namespace: "BPEntityComponents", kind: "class", syncIds: true },
        { dir: "src/components/behaviors/items", namespace: "BPItemComponents", kind: "class", syncIds: true },
        { dir: "src/components/behaviors/biomes", namespace: "BPBiomeComponents", kind: "class", syncIds: true },
        { dir: "src/components/behaviors/dimensions", namespace: "BPDimensionComponents", kind: "class", syncIds: true },
        { dir: "src/components/behaviors/spawnRules", namespace: "BPSpawnRuleComponents", kind: "class", syncIds: true },
        { dir: "src/components/behaviors/blocks", namespace: "BPBlockComponents", kind: "class", syncIds: true },

        { dir: "src/templates/behaviors/entities", namespace: "BPEntityTemplates", kind: "const" },
        { dir: "src/templates/behaviors/lootTables", namespace: "BPLootTableTemplates", kind: "const", recursive: true },
        { dir: "src/templates/behaviors/recipes", namespace: "BPRecipeTemplates", kind: "const" },
        { dir: "src/templates/behaviors/biomes", namespace: "BPBiomeTemplates", kind: "const" },
        { dir: "src/templates/behaviors/spawnRules", namespace: "BPSpawnRuleTemplates", kind: "const" },
        { dir: "src/templates/behaviors/trading", namespace: "BPTradingTemplates", kind: "const", recursive: true },
        { dir: "src/templates/behaviors/features", namespace: "BPFeatureTemplates", kind: "const" },
        { dir: "src/templates/behaviors/featureRules", namespace: "BPFeatureRuleTemplates", kind: "const" },

        { dir: "src/templates/resources/animations", namespace: "RPAnimationsTemplates", kind: "const" },
    ];

    /**
     * Eventos principales de la clase cuando es llamada o inicializada.
     * @constructor
     * @public
     */
    public constructor () {
        this.targetDirs.forEach(target => this.generateRoot(target));
    }

    /**
     * Metodo auxiliar que extrae y expone las clases en un solo import.
     * @param {string} filePath Ruta del archivo en concreto a exponer.
     * @param {BarrelTarget["kind"]} kind Tipo de target a exponer en cuestion.
     * @returns {string[]} Lista de clases expuestas al final.
     * @author HaJuegos - 01-10-2026
     * @private
     */
    private extractClasses(filePath: string, kind: BarrelTarget["kind"]): string[] {
        const content = readFileSync(filePath, "utf-8");
        const regex = kind == "class" ? /export\s+(?:abstract\s+)?class\s+(\w+)/g : /export\s+const\s+(\w+)/g;

        return [...content.matchAll(regex)].map(m => m[1]);
    }

    /**
     * Metodo auxiliar que convierte y los IDs correspondientes a los componentes dados.
     * @param {string} filePath Ruta del archivo en concreto.
     * @returns {boolean} Devuelve true o false si el archivo esta correctamente sincronizado con el ID del componente.
     * @author HaJuegos - 01-10-2026
     * @private
     */
    private syncCompID(filePath: string): boolean {
        const src = readFileSync(filePath, "utf-8");
        const idMatch = src.match(/super\(\s*"([^"]+)"/);
        const marker = "extends BehaviorEntityComponentBuilder<";
        const start = src.indexOf(marker);

        if (!idMatch || start == -1) {
            return false;
        }

        const open = start + marker.length;
        let depth = 1;
        let end = open;
        let comma = -1;

        for (; end < src.length && depth > 0; end++) {
            const c = src[end];

            if ("<([{".includes(c)) {
                depth++;
            } else if (">)]}".includes(c) && !(c == ">" && src[end - 1] == "=")) {
                depth--;
            } else if (c == "," && depth == 1 && comma == -1) {
                comma = end;
            }
        }

        const data = src.slice(open, comma == -1 ? end - 1 : comma).trim();
        const next = `${data}, "${idMatch[1]}"`;

        if (src.slice(open, end - 1) == next) {
            return false;
        }

        writeFileSync(filePath, src.slice(0, open) + next + src.slice(end - 1), "utf-8");

        return true;
    }

    /**
     * Metodo auxiliar que convierte el nombre de una carpeta en PastalCase para usarlo como namespace.
     * @param {string} name Nombre de la carpeta en cuestion.
     * @returns {string} Nombre parseado a PascalCase.
     * @author HaJuegos - 13-10-2026 
     * @private
     */
    private toPascalCase(name: string): string {
        return name.split(/[^0-9A-Za-z]+/).filter(Boolean).map(p => p[0].toUpperCase() + p.slice(1)).join("");
    }

    /**
     * Metodo auxiliar que genera las lineas de re-exportacion de un directorio, y de sus subcarpetas si es recursivo.
     * @param {string} dir Directorio a recorrer.
     * @param {BarrelTarget['kind']} kind Tipo de target a exponer.
     * @param {(boolean | undefined)} [syncIds] (Opcional) Si se deben sincronizar los IDs de los componentes.
     * @param {(boolean | undefined)} [recursive] (Opcional) Si se deben recorrer las subcarpetas. 
     * @param {{ synced: number; }} stats Contador de IDs sincronizados. 
     * @returns {string[]} Lineas de exportacion finales del directorio.
     * @author HaJuegos - 13-10-2026
     * @private
     */
    private buildRoot(dir: string, kind: BarrelTarget['kind'], syncIds: boolean | undefined, recursive: boolean | undefined, stats: { synced: number; }): string[] {
        const entries = readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
        const reExports: string[] = [];

        for (const entry of entries) {
            const path = join(dir, entry.name);

            if (entry.isDirectory()) {
                if (!recursive || entry.name.startsWith('_')) {
                    continue;
                }

                const sub = this.buildRoot(path, kind, syncIds, recursive, stats);

                if (sub.length == 0) {
                    continue;
                }

                writeFileSync(join(path, "_root.ts"), sub.join("\n") + "\n", "utf-8");
                reExports.push(`export * as ${this.toPascalCase(entry.name)} from "./${entry.name}/_root";`);

                continue;
            }

            if (!entry.name.endsWith(".ts") || entry.name.startsWith("_") || entry.name == "index.ts") {
                continue;
            }

            if (syncIds && this.syncCompID(path)) {
                stats.synced++;
            }

            const names = this.extractClasses(path, kind);

            if (names.length == 0) {
                continue;
            }

            reExports.push(`export { ${names.join(", ")} } from "./${basename(entry.name, ".ts")}";`);
        }

        return reExports;
    }

    /**
     * Metodo principal auxiliar que genera la clase principal anidando las demas expuestas en una variante final.
     * @param {BarrelTarget} param0 Parametros principales a obtener.
     * @param {string} param0.dir Direccion de la ruta del archivo a exponer.
     * @param {string} param0.namespace Namespace de la clase principal anidada en cuestion.
     * @param {("class" | "const")} param0.kind Tipo de target de la clase anidada en cuestion.
     * @param {boolean} param0.syncIds Validador si se debe mantener sincronizadas los IDs respectivos a la version previa.
     * @param {boolean} param0.recursive Si se deben exponer las subcarpetas como namespace anidados.
     * @returns {void}
     * @author HaJuegos - 13-10-2026
     * @private
     */
    private generateRoot({ dir, namespace, kind, syncIds, recursive }: BarrelTarget): void {
        const stats = { synced: 0 };
        const reexports = this.buildRoot(dir, kind, syncIds, recursive, stats);

        writeFileSync(join(dir, "_root.ts"), reexports.join("\n") + "\n", "utf-8");
        writeFileSync(join(dir, "index.ts"), `export * as ${namespace} from "./_root";\n`, "utf-8");

        console.log(`${namespace}: ${reexports.length} exports${syncIds ? `, ${stats.synced} IDs sincronizados` : ""}`);
    }
}

new GenerateAutoIndexs();