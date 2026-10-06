/**
 * Clase tipada y general para el correcto formateo de textos en "snake_case" para algunos formatos que lo requieran.
 * @class SnakeCase
 * @author HaJuegos - 01-10-2026
 * @export
 */
export class SnakeCase {
    private constructor () { }

    /**
     * Metodo principal auxiliar que convierte una cadena de texto de tipo camelCase o PascalCase a snake_case.
     * @param {string} txt Texto a transformar.
     * @returns {string} Devuelve el texto transformado.
     * @author HaJuegos - 01-10-2026
     * @static
     * @public
     */
    public static toSnakeCase(txt: string): string {
        return txt.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
    }

    /**
     * Metodo principal auxiliar que convierte de forma recursiva todas las clases de un objecto o array a tipo snake_case. Mantiene intacto los valores definidos.
     * @param {unknown} obj Objecto o valor en cuestion a procesar.
     * @returns {unknown} Nueva estructura o valor procesado.
     * @author HaJuegos - 01-10-2026
     * @static
     * @public
     */
    public static deepSnakeCase(obj: unknown): unknown {
        if (Array.isArray(obj)) {
            return obj.map(item => this.deepSnakeCase(item));
        }

        if (obj != null && typeof obj == "object") {
            const result: Record<string, unknown> = {};

            for (const [key, value] of Object.entries(obj)) {
                result[this.toSnakeCase(key)] = this.deepSnakeCase(value);
            }

            return result;
        }

        return obj;
    }
}