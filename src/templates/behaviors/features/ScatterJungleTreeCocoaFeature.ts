import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterJungleTreeCocoaFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:scatter_jungle_tree_cocoa_feature",
    aggregate: {
        features: [
            "minecraft:scatter_jungle_tree_lower_cocoa_feature",
            "minecraft:scatter_jungle_tree_upper_cocoa_feature"
        ]
    }
});
