import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SelectStandingSpruceTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:select_standing_spruce_tree_feature",
    aggregate: {
        earlyOut: "first_success",
        features: [
            "minecraft:optional_spruce_tree_with_vines_feature",
            "minecraft:spruce_tree_feature"
        ]
    }
});
