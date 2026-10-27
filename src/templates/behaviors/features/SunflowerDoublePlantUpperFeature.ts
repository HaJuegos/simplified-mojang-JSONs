import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SunflowerDoublePlantUpperFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:sunflower_double_plant_upper_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:sunflower",
            states: {
                upperBlockBit: true
            }
        },
        enforceSurvivabilityRules: false,
        enforcePlacementRules: false,
        mayReplace: [
            "minecraft:air"
        ]
    }
});
