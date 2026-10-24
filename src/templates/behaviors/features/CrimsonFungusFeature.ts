import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const CrimsonFungusFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:crimson_fungus_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:crimson_fungus"
        },
        enforceSurvivabilityRules: false,
        enforcePlacementRules: true,
        mayReplace: [
            "minecraft:air"
        ]
    }
});
