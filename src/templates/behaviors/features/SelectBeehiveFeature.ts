import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const SelectBeehiveFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:select_beehive_feature",
    weightedRandom: {
        features: [
            [
                "minecraft:beehive_esw_order_feature",
                1
            ],
            [
                "minecraft:beehive_swe_order_feature",
                1
            ],
            [
                "minecraft:beehive_wes_order_feature",
                1
            ]
        ]
    }
});
