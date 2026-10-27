import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const BushFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_21_60,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:bush_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:bush"
        },
        enforceSurvivabilityRules: true,
        enforcePlacementRules: true,
        mayReplace: [
            "minecraft:air"
        ]
    }
});
