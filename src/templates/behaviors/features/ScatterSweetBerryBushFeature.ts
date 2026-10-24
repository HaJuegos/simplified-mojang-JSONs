import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const ScatterSweetBerryBushFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_sweet_berry_bush_feature",
    scatter: {
        placesFeature: "minecraft:sweet_berry_bush_feature",
        distribution: {
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
            coordinateEvalOrder: "zyx"
        }
    }
});
