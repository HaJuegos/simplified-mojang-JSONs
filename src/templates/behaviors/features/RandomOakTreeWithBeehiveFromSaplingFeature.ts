import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const RandomOakTreeWithBeehiveFromSaplingFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:random_oak_tree_with_beehive_from_sapling_feature",
    weightedRandom: {
        features: [
            [
                "minecraft:oak_tree_with_beehive_feature",
                9
            ],
            [
                "minecraft:fancy_oak_tree_with_beehive_feature",
                1
            ]
        ]
    }
});
