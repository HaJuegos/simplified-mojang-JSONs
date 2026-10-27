import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const RedShrubSingleBlockFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.MostRecent,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:red_shrub_single_block_feature",
    singleBlock: {
        placesBlock: [
            {
                block: "minecraft:red_shrub",
                weight: 1
            }
        ],
        randomizeRotation: false,
        enforceSurvivabilityRules: true,
        enforcePlacementRules: true
    }
});
