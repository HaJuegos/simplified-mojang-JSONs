import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterLeafLitterFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_leaf_litter_feature",
    scatter: {
        iterations: 96,
        x: {
            distribution: "gaussian",
            extent: [
                -4,
                4
            ]
        },
        y: {
            distribution: "gaussian",
            extent: [
                -2,
                2
            ]
        },
        z: {
            distribution: "gaussian",
            extent: [
                -4,
                4
            ]
        },
        coordinateEvalOrder: "zxy",
        placesFeature: "minecraft:leaf_litter_feature"
    }
});
