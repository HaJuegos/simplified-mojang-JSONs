import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SelectOakTreeWithLeafLitterFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:select_oak_tree_with_leaf_litter_feature",
    aggregate: {
        earlyOut: "first_failure",
        features: [
            "minecraft:select_oak_tree_feature",
            "minecraft:scatter_leaf_litter_feature"
        ]
    }
});
