import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const JungleFernFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_21_40,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:jungle_fern_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:fern"
        },
        enforceSurvivabilityRules: true,
        enforcePlacementRules: false,
        mayReplace: [
            "minecraft:air"
        ],
        mayNotAttachTo: {
            bottom: "minecraft:podzol"
        }
    }
});
