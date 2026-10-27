import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SulfurSpringExtraLarge1WithTuffFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:sulfur_spring_extra_large_1_with_tuff_feature",
    aggregate: {
        earlyOut: "first_failure",
        features: [
            "minecraft:sulfur_spring_extra_large_1_feature",
            "minecraft:sulfur_spring_extra_large_scatter_tuff_feature"
        ]
    }
});
