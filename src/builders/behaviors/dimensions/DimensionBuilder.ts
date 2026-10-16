import { BehaviorDimensionComponentBuilder } from "./DimensionCompBuilder";

/**
 * Clase principal que construye una dimension en formato json con una estructura fija.
 * @class BehaviorDimensionBuilder
 * @author HaJuegos - 15-10-2026
 * @export
 */
export class BehaviorDimensionBuilder {
    /**
     * Version fija del format version de la dimension a crear.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly dimensionVersion: string = "1.26.50";

    /**
     * ID de la dimension en concreto a crear.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly idDimension: string = "ha:custom_dimension";

    /**
     * Lista de componentes a asignar a la dimension en concreto.
     * @type {(BehaviorDimensionComponentBuilder<any>[] | undefined)}
     * @private
     */
    private comps: BehaviorDimensionComponentBuilder<any>[] | undefined;

    /**
     * Parametros iniciales y eventos de la clase cuando es llamada o inicializada.
     * @param {string} idDimension ID de la dimension en concreto a crear.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @protected
     */
    protected constructor (idDimension: string) {
        this.idDimension = idDimension;
    }

    /**
     * Metodo principal auxiliar que asigna los componentes a dicha dimension a crear.
     * @param {BehaviorDimensionComponentBuilder<any>[]} comps Lista de componentes a crear.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 15-10-2026
     * @protected
     */
    protected setComponents(comps: BehaviorDimensionComponentBuilder<any>[]): this {
        this.comps = comps;

        return this;
    }

    /**
     * Metodo principal que construye la estructura del dimension.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
     * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
     * @returns {string | Record<string, unknown>} Devuelve el biome listo en sus versiones respectivas.
     * 
     * @throws {Error} Puede marcar error si, no se fijo un ID a la dimension.
     * 
     * @author HaJuegos - 15-10-2026  
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        if (!this.idDimension) {
            throw new Error("[CATLOG] Error: El Custom Dimension no tiene un ID definido. Define uno primero.");
        }

        const componentsObj: Record<string, unknown> = {};

        if (this.comps && Array.isArray(this.comps)) {
            for (const comp of this.comps) {
                Object.assign(componentsObj, comp.build());
            }
        }

        const preBiome = {
            format_version: this.dimensionVersion,
            "minecraft:dimension": {
                description: {
                    identifier: this.idDimension
                },
                ...(Object.keys(componentsObj).length > 0 ? { components: componentsObj } : {})
            }
        };

        const finalObj = Object.freeze(preBiome);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}