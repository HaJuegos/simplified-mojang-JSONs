import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const RandomRoofedForestFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:random_roofed_forest_feature",
    weightedRandom: {
        features: [
            [
                "minecraft:huge_mushroom_feature",
                75
            ],
            [
                "minecraft:select_roofed_tree_feature",
                630
            ],
            [
                "minecraft:select_birch_tree_feature",
                70
            ],
            [
                "minecraft:fancy_oak_tree_feature",
                30
            ],
            [
                "minecraft:select_oak_tree_feature",
                195
            ]
        ]
    }
});
