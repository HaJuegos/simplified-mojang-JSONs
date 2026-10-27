import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const FixupLapisPositionFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:fixup_lapis_position_feature",
    scatter: {
        iterations: 1,
        coordinateEvalOrder: "zyx",
        x: {
            distribution: "uniform",
            extent: [
                0,
                16
            ]
        },
        y: {
            distribution: "uniform",
            extent: [
                0,
                16
            ]
        },
        z: 0,
        projectInputToFloor: false,
        placesFeature: "minecraft:lapis_ore_feature"
    }
});
