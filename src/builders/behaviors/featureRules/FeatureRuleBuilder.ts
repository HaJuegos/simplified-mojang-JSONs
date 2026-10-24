import { ConditionsRulesParams, DistributionRulesParams, VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal de base para la creacion de un nuevo feature rule con una estructura fija. 
 * @class BehaviorFeatureRuleBuilder
 * @author HaJuegos - 24-10-2026
 * @export
 */
export class BehaviorFeatureRuleBuilder {
    /**
     * Version del format version que tomara el archivo en concreto.
     * @type {VanillaFormatVersionList}
     * @private
     */
    private formatVersion: VanillaFormatVersionList = VanillaFormatVersionList.v1_16_100;

    /**
     * ID del feature rule a crear.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly idFeatureRule: string = "ha:test";

    /**
     * (Opcional) ID del feature a colocar en el feature rule.
     * @type {(string | undefined)}
     * @private
     */
    private placeFeatureID: string | undefined;

    /**
     * (Opcional) Lista de condiciones en concreto asignados para ejecutar el feature rule.
     * @type {(ConditionsRulesParams | undefined)}
     * @private
     */
    private conditionsData: ConditionsRulesParams | undefined;

    /**
     * (Opcional) Forma de distribucion del feature a colocar en concreto.
     * @type {(DistributionRulesParams | undefined)}
     * @private
     */
    private distributionData: DistributionRulesParams | undefined;

    /**
     * Parametros iniciales y eventos para la creacion de un nuevo feature rule en concreto.
     * @param {string} idRule ID del feature rule a crear.
     * @param {VanillaFormatVersionList} [formatVerion] (Opcional) Version del format version a asignar en concreto. Por defecto es la version "1.16.100".
     * @author HaJuegos - 24-10-2026
     * @constructor
     * @protected
     */
    protected constructor (idRule: string, formatVerion: VanillaFormatVersionList = VanillaFormatVersionList.v1_16_100) {
        this.idFeatureRule = idRule;
        this.formatVersion = formatVerion;
    }

    /**
     * Metodo principal que asigna la version del format version del feature rule a crear.
     * @param {VanillaFormatVersionList} newVersion Nueva version a asignar.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 24-10-2026
     * @protected
     */
    protected setFormatVersion(newVersion: VanillaFormatVersionList): this {
        this.formatVersion = newVersion;

        return this;
    }

    /**
     * Metodo principal que asigna el feature en concreto a establecer cuando se ejecute las condiciones.
     * @param {string} idPlaceFeature ID del feature a poner en concreto.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 24-10-2026
     * @protected
     */
    protected setPlaceFeature(idPlaceFeature: string): this {
        this.placeFeatureID = idPlaceFeature;

        return this;
    }

    /**
     * Metodo principal que asigna las condiciones para poder ejecutar este feature rule en concreto.
     * @param {ConditionsRulesParams} params Parametros necesarios a ejecutar.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 24-10-2026
     * @protected
     */
    protected setConditions(params: ConditionsRulesParams): this {
        this.conditionsData = params;

        return this;
    }

    /**
     * Metodo principal que asigna la forma de distribucion del feature en concreto.
     * @param {DistributionRulesParams} params Parametros necesarios a ejecutar.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 24-10-2026
     * @protected
     */
    protected setDistribution(params: DistributionRulesParams): this {
        this.distributionData = params;

        return this;
    }

    /**
     * Metodo principal que construye la estructura del feature_rule.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
     * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
     * @returns {string | Record<string, unknown>} Devuelve el Feature listo en sus versiones respectivas.
     * 
     * @throws {Error} Puede marcar error si, no se establece el ID de la feature.
     * 
     * @author HaJuegos - 24-10-2026  
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        if (!this.idFeatureRule) {
            throw new Error("[CATLOG] Error: No se establecio un ID en el FeatureRule a crear. Asigna uno.");
        }

        const preRule = {
            format_version: this.formatVersion,
            "minecraft:feature_rules": {
                description: {
                    identifier: this.idFeatureRule,
                    places_feature: this.placeFeatureID
                },
                conditions: {
                    ...(this.conditionsData)
                },
                distribution: {
                    ...(this.distributionData)
                }
            }
        };

        const finalObj = Object.freeze(SnakeCase.deepSnakeCase(preRule) as Record<string, unknown>);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}