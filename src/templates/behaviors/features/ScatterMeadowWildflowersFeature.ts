import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterMeadowWildflowersFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_meadow_wildflowers_feature",
    scatter: {
        iterations: 8,
        x: {
            distribution: "triangle",
            extent: [
                -6,
                6
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
                -6,
                6
            ]
        },
        coordinateEvalOrder: "zyx",
        placesFeature: "minecraft:wildflowers_feature"
    }
});
