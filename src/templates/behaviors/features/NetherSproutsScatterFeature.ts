import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const NetherSproutsScatterFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:nether_sprouts_scatter_feature",
    scatter: {
        iterations: 64,
        coordinateEvalOrder: "zyx",
        x: {
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
        z: {
            extent: [
                -8,
                8
            ],
            distribution: "triangle"
        },
        projectInputToFloor: false,
        placesFeature: "minecraft:nether_sprouts_feature"
    }
});
