import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SelectCocoaFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:select_cocoa_feature",
    weightedRandom: {
        features: [
            [
                "minecraft:cocoa_age_0_feature",
                1
            ],
            [
                "minecraft:cocoa_age_1_feature",
                1
            ],
            [
                "minecraft:cocoa_age_2_feature",
                1
            ]
        ]
    }
});
