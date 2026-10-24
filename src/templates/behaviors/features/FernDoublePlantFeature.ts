import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const FernDoublePlantFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:fern_double_plant_feature",
    aggregate: {
        earlyOut: "first_failure",
        features: [
            "minecraft:fern_double_plant_lower_feature",
            "minecraft:fixup_fern_double_plant_upper_position_feature"
        ]
    }
});
