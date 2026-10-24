import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const BeehiveSweOrderFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:beehive_swe_order_feature",
    aggregate: {
        earlyOut: "first_success",
        features: [
            "minecraft:beehive_south_feature",
            "minecraft:beehive_west_feature",
            "minecraft:beehive_east_feature"
        ]
    }
});
