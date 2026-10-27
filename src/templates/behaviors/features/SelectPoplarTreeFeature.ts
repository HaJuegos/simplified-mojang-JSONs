import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SelectPoplarTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.MostRecent,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:select_poplar_tree_feature",
    weightedRandom: {
        features: [
            [
                "minecraft:orange_poplar_tree_feature",
                1
            ],
            [
                "minecraft:red_poplar_tree_feature",
                1
            ],
            [
                "minecraft:yellow_poplar_tree_feature",
                1
            ]
        ]
    }
});
