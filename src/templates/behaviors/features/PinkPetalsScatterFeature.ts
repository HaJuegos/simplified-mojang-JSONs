import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const PinkPetalsScatterFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:pink_petals_scatter_feature",
    scatter: {
        iterations: 96,
        x: {
            distribution: "triangle",
            extent: [
                -5,
                5
            ]
        },
        y: {
            distribution: "triangle",
            extent: [
                -2,
                2
            ]
        },
        z: {
            distribution: "triangle",
            extent: [
                -5,
                5
            ]
        },
        coordinateEvalOrder: "zxy",
        placesFeature: "minecraft:pink_petals_feature"
    }
});
