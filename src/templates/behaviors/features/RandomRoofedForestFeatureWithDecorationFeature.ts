import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const RandomRoofedForestFeatureWithDecorationFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:random_roofed_forest_feature_with_decoration_feature",
    aggregate: {
        earlyOut: "none",
        features: [
            "minecraft:random_roofed_forest_feature_with_leaf_litter_feature",
            "minecraft:scatter_tall_grass_around_forest_foliage_feature"
        ]
    }
});
