import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SmallDripstoneSnapToSurfaceFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.SnapToSurfaceFeature,
    idFeature: "minecraft:small_dripstone_snap_to_surface_feature",
    snapToSurface: {
        featureToSnap: "minecraft:pointed_dripstone_feature",
        verticalSearchRange: 12,
        surface: "random_horizontal",
        allowUnderwaterPlacement: true
    }
});
