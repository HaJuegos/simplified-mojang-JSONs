import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterTallGrassAroundForestFoliageFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_tall_grass_around_forest_foliage_feature",
    scatter: {
        iterations: 20,
        x: {
            distribution: "triangle",
            extent: [
                -3,
                3
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
                -3,
                3
            ]
        },
        coordinateEvalOrder: "zyx",
        placesFeature: "minecraft:tall_grass_feature"
    }
});
