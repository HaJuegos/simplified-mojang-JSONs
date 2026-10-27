import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SmallDripstoneFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:small_dripstone_feature",
    scatter: {
        placesFeature: "minecraft:small_dripstone_snap_to_surface_feature",
        iterations: "Math.Random(1, 5)",
        x: {
            distribution: "gaussian",
            extent: [
                -10,
                10
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
                -10,
                10
            ]
        }
    }
});
