import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const RandomClayWithDripleavesFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:random_clay_with_dripleaves_feature",
    weightedRandom: {
        features: [
            [
                "minecraft:clay_with_dripleaves_feature",
                1
            ],
            [
                "minecraft:clay_pool_with_dripleaves_feature",
                1
            ]
        ]
    }
});
