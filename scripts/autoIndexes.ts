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
    private targetDirs: BarrelTarget[] = [
        { dir: "src/components/behaviors/entities", namespace: "BPEntityComponents", kind: "class", syncIds: true },
        { dir: "src/templates/behaviors/entities", namespace: "BPEntityTemplates", kind: "const" },
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
     * Metodo principal auxiliar que genera la clase principal anidando las demas expuestas en una variante final.
     * @param {BarrelTarget} param0 Parametros principales a obtener.
     * @param {string} param0.dir Direccion de la ruta del archivo a obtener.
     * @param {string} param0.namespace Namespace de la clase principal anidada a crear.
     * @param {("class" | "const")} param0.kind Tipo de target de la clase anidada en cuestion.
     * @param {boolean} param0.syncIds Validador si se debe mantener sincronizadas los IDs respecto a la version previa.
     * @author HaJuegos - 01-10-2026
     * @private
     */
    private generateRoot({ dir, namespace, kind, syncIds }: BarrelTarget): void {
        const files = readdirSync(dir).filter(f => f.endsWith(".ts") && !f.startsWith("_") && f != "index.ts").sort();
        const reexports: string[] = [];
        let synced = 0;

        for (const file of files) {
            const mod = basename(file, ".ts");
            const path = join(dir, file);

            if (syncIds && this.syncCompID(path)) {
                synced++;
            }

            const names = this.extractClasses(path, kind);

            if (names.length == 0) {
                continue;
            }

            reexports.push(`export { ${names.join(", ")} } from "./${mod}";`);
        }

        writeFileSync(join(dir, "_root.ts"), reexports.join("\n") + "\n", "utf-8");
        writeFileSync(join(dir, "index.ts"), `export * as ${namespace} from "./_root";\n`, "utf-8");

        console.log(`${namespace}: ${reexports.length} archivos${syncIds ? `, ${synced} IDs sincronizados` : ""}`);
    }
}

new GenerateAutoIndexs();