import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const PaleHangingMossSnapToCeilingFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.SnapToSurfaceFeature,
    idFeature: "minecraft:pale_hanging_moss_snap_to_ceiling_feature",
    snapToSurface: {
        featureToSnap: "minecraft:pale_hanging_moss_feature",
        verticalSearchRange: 12,
        surface: "ceiling",
        allowedSurfaceBlocks: [
            {
                name: "minecraft:pale_oak_leaves"
            },
            {
                name: "minecraft:pale_oak_log"
            }
        ]
    }
});
