import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const RedPoplarTreeWithLeafLitterFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.MostRecent,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:red_poplar_tree_with_leaf_litter_feature",
    aggregate: {
        earlyOut: "first_failure",
        features: [
            "minecraft:red_poplar_tree_feature",
            "minecraft:scatter_leaf_litter_feature"
        ]
    }
});
