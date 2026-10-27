import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SulfurSpringTuffSnapToSurfaceFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.SnapToSurfaceFeature,
    idFeature: "minecraft:sulfur_spring_tuff_snap_to_surface_feature",
    snapToSurface: {
        featureToSnap: "minecraft:sulfur_spring_tuff_feature",
        verticalSearchRange: 5,
        surface: "floor",
        allowAirPlacement: true,
        allowUnderwaterPlacement: false,
        embedInSurface: true
    }
});
