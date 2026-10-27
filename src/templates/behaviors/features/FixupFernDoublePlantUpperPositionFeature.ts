import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const FixupFernDoublePlantUpperPositionFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:fixup_fern_double_plant_upper_position_feature",
    scatter: {
        iterations: 1,
        x: 0,
        y: 1,
        z: 0,
        projectInputToFloor: false,
        placesFeature: "minecraft:fern_double_plant_upper_feature"
    }
});
