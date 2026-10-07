/**
 * Clase principal que se encarga de los manejos respectivos a los UUID, codigos unicos claves de 16 bytes.
 * @class UUIDManager
 * @author HaJuegos - 06-10-2026
 * @export
 */
export class UUIDManager {
    private constructor () { }

    /**
     * Metodo principal que genera automaticamente un UUIDv4 de 16 bytes aleatorio para establecerlo como ID unico en manifest. 
     * @returns {string} ID generado automaticamente.
     * @author HaJuegos - 06-10-2026
     * @public
     * @static
     */
    public static generateUUID(): string {
        const bytes = globalThis.crypto.getRandomValues(new Uint8Array(16));

        bytes[6] = (bytes[6] & 0x0f) | 0x40;
        bytes[8] = (bytes[8] & 0x3f) | 0x80;

        const hex = Array.from(bytes, value => value.toString(16).padStart(2, "0")).join("");

        return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    }
}