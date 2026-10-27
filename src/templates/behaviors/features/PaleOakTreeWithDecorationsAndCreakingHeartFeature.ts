import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const PaleOakTreeWithDecorationsAndCreakingHeartFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:pale_oak_tree_with_decorations_and_creaking_heart_feature",
    aggregate: {
        earlyOut: "first_failure",
        features: [
            "minecraft:pale_oak_tree_feature",
            "minecraft:scatter_pale_hanging_moss_feature",
            "minecraft:pale_moss_patch_feature",
            "minecraft:creaking_heart_search_feature"
        ]
    }
});
