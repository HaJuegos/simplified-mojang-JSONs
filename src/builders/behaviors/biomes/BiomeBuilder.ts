import { BehaviorBiomeComponentBulder } from "./BiomeCompBuilder";

/**
 * Clase principal que define la estructura fija de un archivo Biome de un BP.
 * @class BehaviorBiomeBuilder
 * @author HaJuegos - 15-10-2026
 * @export
 */
export class BehaviorBiomeBuilder {
    /**
     * Version fija del format version del bioma en concreto a crear.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly versionBiome: string = "1.26.50";

    /**
     * ID del bioma a crear en concreto.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly idBiome: string = "ha:test_biome";

    /**
     * (Opcional) Componentes del bioma en concreto a crear.
     * @type {(BehaviorBiomeComponentBulder<any>[] | undefined)}
     * @private
     */
    private comps: BehaviorBiomeComponentBulder<any>[] | undefined;

    /**
     * Parametros y eventos iniciales de la clase cuando es llamada o inicializada.
     * @param {string} idBiome ID del bioma a crear.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @protected
     */
    protected constructor (idBiome: string) {
        this.idBiome = idBiome;
    }

    /**
     * Metodo principal auxiliar que asigna los componentes del archivo Biome a crear en concreto.
     * @param {BehaviorBiomeComponentBulder<any>[]} comps Lista de componentes a asignar en cuestion.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 15-10-2026 
     * @protected
     */
    protected setComponentsBiome(comps: BehaviorBiomeComponentBulder<any>[]): this {
        this.comps = comps;

        return this;
    }

    /**
     * Metodo principal que construye la estructura del biome.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
     * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
     * @returns {string | Record<string, unknown>} Devuelve el biome listo en sus versiones respectivas.
     * 
     * @throws {Error} Puede marcar error si, no se fijo un ID al biome.
     * 
     * @author HaJuegos - 15-10-2026  
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        if (!this.idBiome) {
            throw new Error("[CATLOG] Error: El biome no tiene un ID definido. Define uno primero.");
        }

        const componentsObj: Record<string, unknown> = {};

        if (this.comps && Array.isArray(this.comps)) {
            for (const comp of this.comps) {
                Object.assign(componentsObj, comp.build());
            }
        }

        const preBiome = {
            format_version: this.versionBiome,
            "minecraft:biome": {
                description: {
                    identifier: this.idBiome
                },
                ...(Object.keys(componentsObj).length > 0 ? { components: componentsObj } : {})
            }
        };

        const finalObj = Object.freeze(preBiome);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}