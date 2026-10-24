import { BPFeatureRuleDefinition, BPFeatureRuleOverride, VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { BehaviorFeatureRuleBuilder } from "./FeatureRuleBuilder";

/**
 * Clase final para la creacion de una plantilla base de un nuevo feature rule en concreto. Permitiendo tambien las ediciones post-edicion de la misma. 
 * @class FinalFeatureRuleTemplateBuilder
 * @template {BPFeatureRuleDefinition} Types Parametros definidos en la plantilla base.
 * @extends {BehaviorFeatureRuleBuilder}
 * @author HaJuegos - 24-10-2026
 * @export
 */
export class FinalFeatureRuleTemplateBuilder<
    Types extends BPFeatureRuleDefinition = BPFeatureRuleDefinition
> extends BehaviorFeatureRuleBuilder {
    /**
     * Parametros iniciales y eventos de la clase para la asignacion de un nuevo feature rule creando inicialmente la plantilla base. Para despues, permitir la edicion de esta misma en post-edicion a la misma. 
     * @param {Types} def Parametros iniciales de la plantilla base en concreto. 
     * @param {BPFeatureRuleOverride<Types>} over Parametros post-edicion para la edicion de la plantilla base definida.
     * @author HaJuegos - 24-10-2026 
     * @constructor
     * @public
     */
    public constructor (def: Types, over: BPFeatureRuleOverride<Types>) {
        super(def.idRule);

        let finalFeatureToPlace: string;
        let finalConditions: any;
        let finalDistributions: any;

        if (over.clearAllData) {
            finalFeatureToPlace = over.idFeatureToPlace;
            finalConditions = over.add?.conditions;
            finalDistributions = over.add?.distribution;
        } else {
            finalFeatureToPlace = over.changeFeatureToPlace ?? def.idFeatureToPlace;

            const finalFormatVersion = over.changeFormatVersion ?? def.formatVersion ?? VanillaFormatVersionList.v1_16_100;

            this.setFormatVersion(finalFormatVersion);

            finalConditions = {
                ...def.rules.conditions,
                ...(over.changeConditions || {}),
                ...(over.add?.conditions || {})
            };

            finalDistributions = {
                ...def.rules.distribution,
                ...(over.changeDistributions || {}),
                ...(over.add?.distribution || {})
            };
        }

        this.setPlaceFeature(finalFeatureToPlace);
        this.setConditions(finalConditions);
        this.setDistribution(finalDistributions);
    }

    /**
     * Metodo final principal que convierte toda la plantilla definitiva en un JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura definitiva.
     * @author HaJuegos - 22-10-2026
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }
}

/**
 * Funcion principal de fabrica para la creacion de un nuevo feature rule definiendo la plantilla base principal para luego devolver una funcion que permite las ediciones de la plantilla base en post-edicion.
 * @param {Types} def Parametros y datos definidos en la plantilla base para la post-edicion.
 * @template {BPFeatureRuleDefinition} Types Parametros definidos de la plantilla base.
 * @returns {(over: BPFeatureRuleOverride<Types>) => FinalFeatureRuleTemplateBuilder<Types>} Devuelve una funcion que permite la edicion de la misma plantilla creada, y finalmente, devuelve la clase para la exportacion final en formato JSON adaptado. 
 * @author HaJuegos - 24-10-2026
 * @export
 */
export function createBPFeatureRule<
    Types extends BPFeatureRuleDefinition
>(def: Types) {
    return (over: BPFeatureRuleOverride<Types>) => {
        return new FinalFeatureRuleTemplateBuilder(def, over);
    };
}