import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const WarpedFungusScatterFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:warped_fungus_scatter_feature",
    scatter: {
        iterations: 24,
        coordinateEvalOrder: "zyx",
        x: {
            extent: [
                -8,
                8
            ],
            distribution: "triangle"
        },
        z: {
            extent: [
                -8,
                8
            ],
            distribution: "triangle"
        },
        y: {
            extent: [
                -4,
                4
            ],
            distribution: "triangle"
        },
        projectInputToFloor: false,
        placesFeature: "minecraft:warped_fungus_feature"
    }
});
