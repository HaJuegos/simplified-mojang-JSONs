import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const AzaleaRootSystemSnapToCeilingFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.SnapToSurfaceFeature,
    idFeature: "minecraft:azalea_root_system_snap_to_ceiling_feature",
    snapToSurface: {
        featureToSnap: "minecraft:azalea_root_system_feature",
        verticalSearchRange: 64,
        surface: "ceiling"
    }
});
