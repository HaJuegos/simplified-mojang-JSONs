import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SulfurPoolWithPotentSulfurSnapToSurfaceFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_21_40,
    typeFeature: FeatureListTypes.SnapToSurfaceFeature,
    idFeature: "minecraft:sulfur_pool_with_potent_sulfur_snap_to_surface_feature",
    snapToSurface: {
        featureToSnap: "minecraft:sulfur_pool_with_potent_sulfur",
        allowedSurfaceBlocks: [
            "minecraft:sulfur"
        ],
        verticalSearchRange: 32,
        surface: "floor",
        allowAirPlacement: true,
        allowUnderwaterPlacement: true,
        embedInSurface: true
    }
});
