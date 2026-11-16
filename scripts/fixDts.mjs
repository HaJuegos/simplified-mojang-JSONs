import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

/**
 * Funcion que recorre recusrivamente un directorio buscando archivos de declaraciones .d.ts
 * @param {string} dir Ruta a explorar.
 * @returns {string[]} Array de rutas de los archivos .d.ts encontrados.
 * @author HaJuegos - 15-11-2026
 */
function walk(dir) {
    return readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith(".d.ts") ? [join(dir, e.name)] : []);
}

/**
 * Funcion principal que corrige las extensiones de los imports relativos en archivos .d.ts.
 * @param {string} [targetDir] Directorio a procesar.
 * @returns {void}
 * @author HaJuegos - 15-11-2026 
 */
function fixDecExtensions(targetDir = "dist") {
    for (const file of walk(targetDir)) {
        const src = readFileSync(file, "utf-8");

        const out = src.replace(/(\bfrom\s+|\bimport\()(["'])(\.{1,2}(?:\/[^"']*)?)\2/g, (match, pre, q, spec) => {
            const base = resolve(dirname(file), spec);

            if (existsSync(base + ".d.ts")) {
                return `${pre}${q}${spec}.js${q}`;
            }

            if (existsSync(join(base, "index.d.ts"))) {
                return `${pre}${q}${spec.replace(/\/$/, "")}/index.js${q}`;
            }

            return match;
        });

        if (out !== src) {
            writeFileSync(file, out, "utf-8");
        }
    }
}

const target = process.argv[2] || "dist";

fixDecExtensions(target);