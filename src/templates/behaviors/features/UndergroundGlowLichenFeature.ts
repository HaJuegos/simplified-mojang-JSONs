import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const UndergroundGlowLichenFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.SurfaceRelativeThresholdFeature,
    idFeature: "minecraft:underground_glow_lichen_feature",
    surfaceRelativeThreshold: {
        featureToPlace: "minecraft:glow_lichen_feature",
        minimumDistanceBelowSurface: 2
    }
});
