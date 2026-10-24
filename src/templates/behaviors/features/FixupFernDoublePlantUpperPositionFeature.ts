import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const FixupFernDoublePlantUpperPositionFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:fixup_fern_double_plant_upper_position_feature",
    scatter: {
        projectInputToFloor: false,
        placesFeature: "minecraft:fern_double_plant_upper_feature",
        distribution: {
            iterations: 1,
            x: 0,
            y: 1,
            z: 0
        }
    }
});
