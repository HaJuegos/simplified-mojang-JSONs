import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterRedMushroomFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_red_mushroom_feature",
    scatter: {
        iterations: 96,
        x: {
            distribution: "triangle",
            extent: [
                -7,
                7
            ]
        },
        y: {
            distribution: "triangle",
            extent: [
                -3,
                3
            ]
        },
        z: {
            distribution: "triangle",
            extent: [
                -7,
                7
            ]
        },
        coordinateEvalOrder: "zyx",
        placesFeature: "minecraft:red_mushroom_feature"
    }
});
