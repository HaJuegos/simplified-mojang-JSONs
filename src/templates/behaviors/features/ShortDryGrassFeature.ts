import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ShortDryGrassFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_21_60,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:short_dry_grass_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:short_dry_grass"
        },
        enforceSurvivabilityRules: true,
        enforcePlacementRules: true,
        mayReplace: [
            "minecraft:air"
        ]
    }
});
