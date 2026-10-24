import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const GrassDoublePlantPatchFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:grass_double_plant_patch_feature",
    scatter: {
        projectInputToFloor: false,
        placesFeature: "minecraft:grass_double_plant_feature",
        distribution: {
            iterations: 64,
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
