import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OptionalShelfMushroomFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:optional_shelf_mushroom_feature",
    scatter: {
        iterations: 1,
        scatterChance: {
            numerator: 1,
            denominator: 4
        },
        x: 0,
        y: 0,
        z: 0,
        placesFeature: "minecraft:shelf_mushroom_feature"
    }
});
