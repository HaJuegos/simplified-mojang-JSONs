import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const RandomDryGrassBlockFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_21_60,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:random_dry_grass_block_feature",
    weightedRandom: {
        features: [
            [
                "minecraft:short_dry_grass_feature",
                1
            ],
            [
                "minecraft:tall_dry_grass_feature",
                1
            ]
        ]
    }
});
