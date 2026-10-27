import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const BeehiveWesOrderFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:beehive_wes_order_feature",
    aggregate: {
        earlyOut: "first_success",
        features: [
            "minecraft:beehive_west_feature",
            "minecraft:beehive_east_feature",
            "minecraft:beehive_south_feature"
        ]
    }
});
