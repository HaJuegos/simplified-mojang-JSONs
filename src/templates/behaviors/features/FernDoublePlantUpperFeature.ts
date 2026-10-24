import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const FernDoublePlantUpperFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:fern_double_plant_upper_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:large_fern",
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
