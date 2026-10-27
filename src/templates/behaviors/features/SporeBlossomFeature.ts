import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SporeBlossomFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:spore_blossom_feature",
    singleBlock: {
        placesBlock: "minecraft:spore_blossom",
        enforceSurvivabilityRules: true,
        enforcePlacementRules: false
    }
});
