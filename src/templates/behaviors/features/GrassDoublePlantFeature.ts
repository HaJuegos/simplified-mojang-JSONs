import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const GrassDoublePlantFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.AggregateFeature,
    idFeature: "minecraft:grass_double_plant_feature",
    aggregate: {
        earlyOut: "first_failure",
        features: [
            "minecraft:grass_double_plant_lower_feature",
            "minecraft:fixup_grass_double_plant_upper_position_feature"
        ]
    }
});
