import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const WarpedFungusScatterFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:warped_fungus_scatter_feature",
    scatter: {
        projectInputToFloor: false,
        placesFeature: "minecraft:warped_fungus_feature",
        distribution: {
            iterations: 24,
            coordinateEvalOrder: "zyx",
            x: {
                extent: [
                    -8,
                    8
                ],
                distribution: "gaussian"
            },
            z: {
                extent: [
                    -8,
                    8
                ],
                distribution: "gaussian"
            },
            y: {
                extent: [
                    -4,
                    4
                ],
                distribution: "gaussian"
            }
        }
    }
});
