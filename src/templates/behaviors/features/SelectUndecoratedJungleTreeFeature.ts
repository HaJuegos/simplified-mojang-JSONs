import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const SelectUndecoratedJungleTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:select_undecorated_jungle_tree_feature",
    aggregate: {
        earlyOut: "first_success",
        features: [
            "minecraft:optional_undecorated_jungle_tree_with_vines_feature",
            "minecraft:undecorated_jungle_tree_feature"
        ]
    }
});
