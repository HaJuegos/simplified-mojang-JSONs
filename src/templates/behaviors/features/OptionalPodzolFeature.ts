import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OptionalPodzolFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:optional_podzol_feature",
    scatter: {
        iterations: 1,
        scatterChance: 20.0,
        x: 0,
        z: 0,
        y: 0,
        projectInputToFloor: false,
        placesFeature: "minecraft:podzol_area_feature"
    }
});
