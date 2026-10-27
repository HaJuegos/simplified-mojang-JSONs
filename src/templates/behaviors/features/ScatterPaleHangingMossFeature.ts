import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterPaleHangingMossFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_pale_hanging_moss_feature",
    scatter: {
        iterations: 20,
        scatterChance: 100.0,
        x: {
            extent: [
                -4,
                4
            ],
            distribution: "uniform"
        },
        z: {
            extent: [
                -4,
                4
            ],
            distribution: "uniform"
        },
        y: 0,
        projectInputToFloor: false,
        placesFeature: "minecraft:pale_hanging_moss_snap_to_ceiling_feature"
    }
});
