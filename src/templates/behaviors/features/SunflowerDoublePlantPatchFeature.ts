import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SunflowerDoublePlantPatchFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:sunflower_double_plant_patch_feature",
    scatter: {
        iterations: 96,
        x: {
            extent: [
                -7,
                7
            ],
            distribution: "triangle"
        },
        y: {
            extent: [
                -3,
                3
            ],
            distribution: "triangle"
        },
        z: {
            extent: [
                -7,
                7
            ],
            distribution: "triangle"
        },
        coordinateEvalOrder: "zyx",
        placesFeature: "minecraft:sunflower_double_plant_feature"
    }
});
