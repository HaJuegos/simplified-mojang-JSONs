import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const CocoaAge0Feature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:cocoa_age_0_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:cocoa",
            states: {
                age: 0
            }
        },
        enforceSurvivabilityRules: false,
        enforcePlacementRules: false,
        mayAttachTo: {
            minSidesMustAttach: 1,
            sides: {
                name: "minecraft:jungle_log"
            }
        }
    }
});
