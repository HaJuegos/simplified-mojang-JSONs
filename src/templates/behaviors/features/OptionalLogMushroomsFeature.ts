import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OptionalLogMushroomsFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:optional_log_mushrooms_feature",
    scatter: {
        iterations: 1,
        scatterChance: {
            numerator: 1,
            denominator: 10
        },
        x: 0,
        z: 0,
        y: 1,
        projectInputToFloor: false,
        placesFeature: "minecraft:select_log_mushroom_feature"
    }
});
