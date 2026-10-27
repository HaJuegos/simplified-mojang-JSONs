import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const UnderwaterMagmaUndergroundFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.SurfaceRelativeThresholdFeature,
    idFeature: "minecraft:underwater_magma_underground_feature",
    surfaceRelativeThreshold: {
        featureToPlace: "minecraft:underwater_magma_snap_to_surface_feature",
        minimumDistanceBelowSurface: 2
    }
});
