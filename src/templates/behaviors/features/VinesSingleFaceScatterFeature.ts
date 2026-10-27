import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const VinesSingleFaceScatterFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:vines_single_face_scatter_feature",
    scatter: {
        iterations: 10,
        x: 8,
        y: 0,
        z: 8,
        projectInputToFloor: false,
        placesFeature: "minecraft:vines_single_face_feature"
    }
});
