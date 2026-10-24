import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const FixupWaterlilyPositionFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:fixup_waterlily_position_feature",
    scatter: {
        projectInputToFloor: true,
        placesFeature: "minecraft:waterlily_feature",
        distribution: {
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
            }
        }
    }
});
