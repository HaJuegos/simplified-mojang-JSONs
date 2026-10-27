import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const BeehiveSearchFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SearchFeature,
    idFeature: "minecraft:beehive_search_feature",
    search: {
        placesFeature: "minecraft:select_beehive_feature",
        searchVolume: {
            min: [
                0,
                0,
                0
            ],
            max: [
                0,
                12,
                0
            ]
        },
        searchAxis: "+y",
        requiredSuccesses: 1
    }
});
