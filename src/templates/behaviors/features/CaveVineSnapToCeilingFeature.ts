import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const CaveVineSnapToCeilingFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.SnapToSurfaceFeature,
    idFeature: "minecraft:cave_vine_snap_to_ceiling_feature",
    snapToSurface: {
        featureToSnap: "minecraft:cave_vine_feature",
        verticalSearchRange: 12,
        surface: "ceiling"
    }
});
