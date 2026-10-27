import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SulfurSpringTrailToSurfaceSnapToCeilingFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_26_10,
    typeFeature: FeatureListTypes.SnapToSurfaceFeature,
    idFeature: "minecraft:sulfur_spring_trail_to_surface_snap_to_ceiling_feature",
    snapToSurface: {
        featureToSnap: "minecraft:sulfur_spring_trail_to_surface_feature",
        verticalSearchRange: 64,
        surface: "ceiling"
    }
});
