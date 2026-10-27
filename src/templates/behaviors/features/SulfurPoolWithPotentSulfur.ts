import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SulfurPoolWithPotentSulfur = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_21_40,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:sulfur_pool_with_potent_sulfur",
    aggregate: {
        earlyOut: "first_failure",
        features: [
            "minecraft:sulfur_pool",
            "minecraft:potent_sulfur_search_feature"
        ]
    }
});
