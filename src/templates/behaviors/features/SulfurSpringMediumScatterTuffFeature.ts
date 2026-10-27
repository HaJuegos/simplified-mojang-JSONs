import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SulfurSpringMediumScatterTuffFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:sulfur_spring_medium_scatter_tuff_feature",
    scatter: {
        iterations: 80,
        x: {
            distribution: "triangle",
            extent: [
                -8,
                8
            ]
        },
        y: {
            distribution: "gaussian",
            extent: [
                -3,
                3
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
        projectInputToFloor: true,
        placesFeature: "minecraft:sulfur_spring_tuff_snap_to_surface_feature"
    }
});
