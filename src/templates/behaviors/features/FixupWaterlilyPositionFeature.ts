import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const FixupWaterlilyPositionFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:fixup_waterlily_position_feature",
    scatter: {
        iterations: 10,
        x: {
            distribution: "gaussian",
            extent: [
                -8,
                8
            ]
        },
        y: {
            distribution: "gaussian",
            extent: [
                -4,
                4
            ]
        },
        z: {
            distribution: "gaussian",
            extent: [
                -8,
                8
            ]
        },
        projectInputToFloor: true,
        placesFeature: "minecraft:waterlily_feature"
    }
});
