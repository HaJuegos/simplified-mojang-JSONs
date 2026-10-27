import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const RandomClayWithDripleavesSnapToFloorFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.SnapToSurfaceFeature,
    idFeature: "minecraft:random_clay_with_dripleaves_snap_to_floor_feature",
    snapToSurface: {
        featureToSnap: "minecraft:random_clay_with_dripleaves_feature",
        verticalSearchRange: 12,
        surface: "floor"
    }
});
