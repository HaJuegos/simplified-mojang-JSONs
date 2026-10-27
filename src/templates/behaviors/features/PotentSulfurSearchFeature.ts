import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const PotentSulfurSearchFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_21_40,
    typeFeature: FeatureListTypes.SearchFeature,
    idFeature: "minecraft:potent_sulfur_search_feature",
    search: {
        placesFeature: "minecraft:potent_sulfur_feature",
        searchVolume: {
            min: [
                -8,
                -8,
                -8
            ],
            max: [
                8,
                0,
                8
            ]
        },
        searchAxis: "-y",
        requiredSuccesses: 1
    }
});
