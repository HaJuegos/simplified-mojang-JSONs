import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const PotentSulfurFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_21_40,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:potent_sulfur_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:potent_sulfur",
            states: {
                potentSulfurState: "wet"
            }
        },
        mayReplace: [
            "minecraft:sulfur"
        ],
        mayAttachTo: {
            minSidesMustAttach: 1,
            top: "minecraft:water"
        },
        enforcePlacementRules: false,
        enforceSurvivabilityRules: false
    }
});
