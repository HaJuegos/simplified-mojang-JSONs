import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const NetherSproutsFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:nether_sprouts_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:nether_sprouts"
        },
        enforceSurvivabilityRules: true,
        enforcePlacementRules: true,
        mayReplace: [
            "minecraft:air"
        ]
    }
});
