import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const FixupMesaGoldPositionFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:fixup_mesa_gold_position_feature",
    scatter: {
        projectInputToFloor: false,
        placesFeature: "minecraft:gold_ore_feature",
        distribution: {
            iterations: 1,
            x: 0,
            y: 32,
            z: 0
        }
    }
});
