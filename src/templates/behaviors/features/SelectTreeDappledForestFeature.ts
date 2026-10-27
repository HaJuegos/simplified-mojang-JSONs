import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SelectTreeDappledForestFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.MostRecent,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:select_tree_dappled_forest_feature",
    weightedRandom: {
        features: [
            [
                "minecraft:red_poplar_tree_with_leaf_litter_feature",
                200
            ],
            [
                "minecraft:orange_poplar_tree_with_leaf_litter_feature",
                240
            ],
            [
                "minecraft:yellow_poplar_tree_with_leaf_litter_feature",
                90
            ],
            [
                "minecraft:select_standing_spruce_tree_feature",
                27
            ],
            [
                "minecraft:fallen_poplar_tree_feature",
                120
            ]
        ]
    }
});
