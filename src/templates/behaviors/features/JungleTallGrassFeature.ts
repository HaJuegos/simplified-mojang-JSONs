import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const JungleTallGrassFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_21_40,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:jungle_tall_grass_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:short_grass"
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
