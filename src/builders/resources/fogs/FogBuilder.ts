import { DistanceFogParams, FormatVersionListFog, VolumetricFogParams } from "../../../types/resources/fogs/FogTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal para la construccion de un nuevo fog con sus parametros fijos establecidos.
 * @class ResourceFogBuilder
 * @author HaJuegos - 30-10-2026
 * @export
 */
export class ResourceFogBuilder {
    /**
     * Version del format version en concreto que tomara el fog. Por defecto es la version "1.21.90"
     * @type {FormatVersionListFog}
     * @private
     */
    private fogVersion: FormatVersionListFog = FormatVersionListFog.MostRecent;

    /**
     * ID del fog a crear en concreto. Por defecto, siempre sera un placeholder.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly fogID: string = "ha:fog_test";

    /**
     * (Opcional) Los parametros de distancia establecidos en el fog.
     * @type {?DistanceFogParams}
     * @private
     */
    private distanceFogData?: DistanceFogParams;

    /**
     * (Opcional) Los parametros de datos volumetricos del fog en concreto.
     * @type {?VolumetricFogParams}
     * @private
     */
    private volumetricFogData?: VolumetricFogParams;

    /**
     * Parametros y eventos principales para crear un nuevo fog.
     * @param {string} idFog ID del fog a crear en concreto.
     * @author HaJuegos - 30-10-2026 
     * @constructor
     * @protected
     */
    protected constructor (idFog: string) {
        this.fogID = idFog;
    }

    /**
     * Metodo principal auxiliar para asignar una nueva version del format version del fog en concreto.
     * @param {FormatVersionListFog} newVer Nueva version en concreto a asignar.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 30-10-2026 
     * @protected
     */
    protected setVersionFog(newVer: FormatVersionListFog): this {
        this.fogVersion = newVer;

        return this;
    }

    /**
     * Metodo principal auxiliar que asigna los parametros de distancia de un fog en concreto.
     * @param {DistanceFogParams} params Lista de parametros en concreto asignados en la distancia del fog.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 30-10-2026
     * @protected
     */
    protected setDistanceData(params: DistanceFogParams): this {
        this.distanceFogData = params;

        return this;
    }

    /**
     * Metodo principal auxiliar que asignar los parametros volumetricos del fog en concreto.
     * @param {VolumetricFogParams} params Lista de parametros en concreto asignados.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 30-10-2026
     * @protected
     */
    protected setVolumetricData(params: VolumetricFogParams): this {
        this.volumetricFogData = params;

        return this;
    }

    /**
    * Metodo principal que construye la estructura del fog.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
    * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
    * @returns {string | Record<string, unknown>} Devuelve el attachable listo en sus versiones respectivas. 
    * @author HaJuegos - 30-10-2026  
    * @protected
    */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        const preFog = {
            format_version: this.fogVersion,
            "minecraft:fog_settings": {
                description: {
                    identifier: this.fogID
                },
                distance: {
                    ...(this.distanceFogData)
                },
                volumetric: {
                    ...(this.volumetricFogData)
                }
            },
        };

        const finalObj = Object.freeze(SnakeCase.deepSnakeCase(preFog));
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}