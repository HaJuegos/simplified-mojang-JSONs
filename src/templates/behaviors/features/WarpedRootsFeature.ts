import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const WarpedRootsFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:warped_roots_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:warped_roots"
        },
        enforceSurvivabilityRules: false,
        enforcePlacementRules: true,
        mayReplace: [
            "minecraft:air"
        ]
    }
});
