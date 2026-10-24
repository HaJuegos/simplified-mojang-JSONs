import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const JungleTreeWithCocoaFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SequenceFeature,
    idFeature: "minecraft:jungle_tree_with_cocoa_feature",
    sequence: {
        features: [
            "minecraft:jungle_tree_feature",
            "minecraft:optional_jungle_tree_cocoa_feature"
        ]
    }
});
