import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const ScatterTallGrassAroundTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_tall_grass_around_tree_feature",
    scatter: {
        placesFeature: "minecraft:tall_grass_feature",
        distribution: {
            iterations: 23,
            x: {
                distribution: "gaussian",
                extent: [
                    -3,
                    3
                ]
            },
            y: {
                distribution: "gaussian",
                extent: [
                    -4,
                    4
                ]
            },
            z: {
                distribution: "gaussian",
                extent: [
                    -3,
                    3
                ]
            },
            coordinateEvalOrder: "zyx"
        }
    }
});
