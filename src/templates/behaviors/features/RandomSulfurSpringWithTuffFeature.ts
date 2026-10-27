import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const RandomSulfurSpringWithTuffFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_26_10,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:random_sulfur_spring_with_tuff_feature",
    weightedRandom: {
        features: [
            [
                "minecraft:sulfur_spring_small_1_with_tuff_feature",
                5000
            ],
            [
                "minecraft:sulfur_spring_small_2_with_tuff_feature",
                5000
            ],
            [
                "minecraft:sulfur_spring_small_3_with_tuff_feature",
                5000
            ],
            [
                "minecraft:sulfur_spring_small_4_with_tuff_feature",
                5000
            ],
            [
                "minecraft:sulfur_spring_medium_1_with_tuff_feature",
                3000
            ],
            [
                "minecraft:sulfur_spring_medium_2_with_tuff_feature",
                3000
            ],
            [
                "minecraft:sulfur_spring_medium_3_with_tuff_feature",
                3000
            ],
            [
                "minecraft:sulfur_spring_large_1_with_tuff_feature",
                1000
            ],
            [
                "minecraft:sulfur_spring_large_2_with_tuff_feature",
                1000
            ],
            [
                "minecraft:sulfur_spring_extra_large_1_with_tuff_feature",
                500
            ]
        ]
    }
});
