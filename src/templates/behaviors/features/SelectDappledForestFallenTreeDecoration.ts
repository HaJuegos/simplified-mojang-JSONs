import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SelectDappledForestFallenTreeDecoration = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.MostRecent,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:select_dappled_forest_fallen_tree_decoration",
    weightedRandom: {
        features: [
            [
                "minecraft:optional_shelf_mushroom_feature",
                1
            ],
            [
                "minecraft:optional_log_brown_mushroom_feature",
                1
            ]
        ]
    }
});
