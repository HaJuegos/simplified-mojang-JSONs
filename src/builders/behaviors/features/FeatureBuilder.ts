import { FeatureListTypes, FeatureMapList, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase fija de construccion de un nuevo feature con una estructura fija definida.
 * @class BehaviorFeatureBuilder
 * @author HaJuegos - 22-10-2026
 * @export
 */
export class BehaviorFeatureBuilder {
    /**
     * Verion del format version que tomar el archivo en concreto.
     * @type {VanillaFormatVersionsFeature}
     * @private
     */
    private featureVersion: VanillaFormatVersionsFeature = VanillaFormatVersionsFeature.v1_16_100;

    /**
     * ID del feature a crear en cuestion.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly idFeature: string = "ha:test_feature";

    /**
     * (Opcional) Tipo de feature general a crear.
     * @type {(FeatureListTypes | undefined)}
     * @readonly
     * @private
     */
    private readonly typeFeature: FeatureListTypes | undefined;

    /**
     * (Opcional) Parametros en concreto asignados al feature a crear.
     * @type {(Record<string, unknown> | undefined)}
     * @private
     */
    private paramDataFeature: Record<string, unknown> | undefined;

    /**
     * Parametros iniciales y eventos para la creacion de un feature en concreto. Se asigna por defecto la version 1.16.100 del format version.
     * @param {string} idFeature ID del feature a crear.
     * @param {FeatureListTypes} typeFeature Tipo de feature a crear.
     * @param {VanillaFormatVersionsFeature} [featureVersion] (Opcional) Tipo de format version a asignar en concreto. 
     * @author HaJuegos - 22-10-2026
     * @constructor
     * @protected
     */
    protected constructor (idFeature: string, typeFeature: FeatureListTypes, featureVersion: VanillaFormatVersionsFeature = VanillaFormatVersionsFeature.v1_16_100) {
        this.idFeature = idFeature;
        this.typeFeature = typeFeature;
        this.featureVersion = featureVersion;
    }

    protected setVersion(version: VanillaFormatVersionsFeature): this {
        this.featureVersion = version;

        return this;
    }

    protected setDataFeature<Types extends FeatureListTypes>(params: FeatureMapList[Types]): this {
        this.paramDataFeature = params as Record<string, unknown>;

        return this;
    }

    /**
     * Metodo principal que construye la estructura del feature.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
     * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
     * @returns {string | Record<string, unknown>} Devuelve el Feature listo en sus versiones respectivas.
     * 
     * @throws {Error} Puede marcar error si, no se establece el ID de la feature.
     * @throws {Error} Puede marcar error si, no se establece el tipo de feature en concreto.
     * 
     * @author HaJuegos - 22-10-2026  
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        if (!this.idFeature) {
            throw new Error("[CATLOG] Error: No se ha establecido el ID de la feature. Asigna uno.");
        }
        if (!this.typeFeature) {
            throw new Error("[CATLOG] Error: No se ha establecido el tipo de feature en concreto. Asigna uno.");
        }

        const preFeature = {
            format_version: this.featureVersion,
            [this.typeFeature]: {
                description: {
                    identifier: this.idFeature
                },
                ...(this.paramDataFeature || {})
            }
        };

        const finalObj = Object.freeze(SnakeCase.deepSnakeCase(preFeature) as Record<string, unknown>);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}