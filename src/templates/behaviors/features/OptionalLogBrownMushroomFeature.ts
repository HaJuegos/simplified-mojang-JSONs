import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const OptionalLogBrownMushroomFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:optional_log_brown_mushroom_feature",
    scatter: {
        projectInputToFloor: false,
        placesFeature: "minecraft:brown_mushroom_feature",
        distribution: {
            iterations: 1,
            scatterChance: 50.0,
            x: 0,
            z: 0,
            y: 0
        }
    }
});
