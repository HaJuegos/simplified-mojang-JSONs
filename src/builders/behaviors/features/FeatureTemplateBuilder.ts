import { BPFeatureDefinition, BPFeatureOverride, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { BehaviorFeatureBuilder } from "./FeatureBuilder";

/**
 * Clase final de fabrica para la construccion de un feature nuevo en concreto con unos parametros iniciales para la definicion base y su edicion post-edicion de la misma base.
 * @class FinalFeatureBuilderTemplate
 * @template {FeatureListTypes} Types Lista de tipos de features disponibles.
 * @extends {BehaviorFeatureBuilder}
 * @author HaJuegos - 22-10-2026
 * @export
 */
export class FinalFeatureBuilderTemplate<
    const Types extends FeatureListTypes = FeatureListTypes
> extends BehaviorFeatureBuilder {
    /**
     * Parametros iniciales y eventos para la definicion de un nuevo feature en concreto en una plantilla base a crear.
     * @param {BPFeatureDefinition<Types>} def Lista de definiciones base principales a considerar para crear la base principal.
     * @param {BPFeatureOverride<Types>} over Lista de parametros adiccionales para las ediciones post-ediciones de la base principal.
     * @author HaJuegos - 22-10-2026 
     * @constructor
     * @public
     */
    public constructor (def: BPFeatureDefinition<Types>, over: BPFeatureOverride<Types>) {
        super(def.idFeature, def.typeFeature);

        if (def.formatVersion) {
            this.setVersion(def.formatVersion);
        }

        const { idFeature, typeFeature, formatVersion, ...baseFeatureParams } = def;

        let finalParams: Record<string, unknown> = {};

        if (over.clearAllData == true) {
            finalParams = {};
        } else {
            const baseParams = Object.values(baseFeatureParams)[0] || {};
            const changeParams = ('changeFeature' in over && over.changeFeature) ? over.changeFeature : {};

            finalParams = {
                ...(baseParams as Record<string, unknown>),
                ...changeParams
            };
        }

        if (over.add && over.add.feature) {
            finalParams = {
                ...finalParams,
                ...over.add.feature
            };
        }

        if ('changeFormatVersion' in over && over.changeFormatVersion) {
            this.setVersion(over.changeFormatVersion);
        }

        this.setDataFeature(finalParams as any);
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
 * Funcion principal de fabrica para la creacion de un nuevo feature, creando primero la plantilla base principal para luego, devolver una funcion auxiliar para permitir las ediciones post-edicion.
 * @param {BPFeatureDefinition<Types>} def Lista de parametros iniciales para la creacion de una plantilla base de un nuevo feature.
 * @template {FeatureListTypes} Types Lista de tipos de feature disponibles a crear. 
 * @returns {(over?: BPFeatureOverride<Types>) => FinalFeatureBuilderTemplate<FeatureListTypes>} Devuelve una funcion auxiliar para las ediciones post-edicion de la plantilla base creada.
 * @author HaJuegos - 22-10-2026
 * @export
 */
export function createBPFeature<
    const Types extends FeatureListTypes = FeatureListTypes
>(def: BPFeatureDefinition<Types>) {
    return (over: BPFeatureOverride<Types> = {}) => {
        return new FinalFeatureBuilderTemplate(def, over);
    };
}