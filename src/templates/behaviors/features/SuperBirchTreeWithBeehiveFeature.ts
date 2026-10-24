import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const SuperBirchTreeWithBeehiveFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:super_birch_tree_with_beehive_feature",
    aggregate: {
        earlyOut: "first_failure",
        features: [
            "minecraft:super_birch_tree_feature",
            "minecraft:beehive_search_feature"
        ]
    }
});
