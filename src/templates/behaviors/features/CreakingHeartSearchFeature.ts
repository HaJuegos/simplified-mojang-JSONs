import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const CreakingHeartSearchFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SearchFeature,
    idFeature: "minecraft:creaking_heart_search_feature",
    search: {
        placesFeature: "minecraft:creaking_heart_feature",
        searchVolume: {
            min: [
                0,
                1,
                0
            ],
            max: [
                2,
                9,
                2
            ]
        },
        searchAxis: "+y",
        requiredSuccesses: 1
    }
});
