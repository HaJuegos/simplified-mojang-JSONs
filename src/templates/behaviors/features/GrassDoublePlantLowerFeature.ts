import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const GrassDoublePlantLowerFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:grass_double_plant_lower_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:tall_grass",
            states: {
                upperBlockBit: false
            }
        },
        enforceSurvivabilityRules: false,
        enforcePlacementRules: true,
        mayReplace: [
            "minecraft:air",
            "minecraft:short_grass"
        ]
    }
});
