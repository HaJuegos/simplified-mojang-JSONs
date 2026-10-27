import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const RandomPaleOakTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:random_pale_oak_tree_feature",
    weightedRandom: {
        features: [
            [
                "minecraft:pale_oak_tree_with_decorations_feature",
                9
            ],
            [
                "minecraft:pale_oak_tree_with_decorations_and_creaking_heart_feature",
                1
            ]
        ]
    }
});
