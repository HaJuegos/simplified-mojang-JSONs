import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterBushFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_21_60,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_bush_feature",
    scatter: {
        placesFeature: "minecraft:bush_feature",
        distribution: {
            iterations: 24,
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
                    -3,
                    3
                ]
            },
            z: {
                distribution: "triangle",
                extent: [
                    -5,
                    5
                ]
            },
            coordinateEvalOrder: "zyx"
        }
    }
});
