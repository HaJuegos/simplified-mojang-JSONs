import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterFernFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_fern_feature",
    scatter: {
        iterations: 90,
        x: {
            distribution: "triangle",
            extent: [
                -8,
                8
            ]
        },
        y: {
            distribution: "triangle",
            extent: [
                -4,
                4
            ]
        },
        z: {
            distribution: "triangle",
            extent: [
                -8,
                8
            ]
        },
        coordinateEvalOrder: "zyx",
        placesFeature: "minecraft:fern_feature"
    }
});
