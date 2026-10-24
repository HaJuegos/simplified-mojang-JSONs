import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const NoopUndecoratedJungleTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:noop_undecorated_jungle_tree_feature",
    scatter: {
        projectInputToFloor: false,
        placesFeature: "minecraft:select_undecorated_jungle_tree_feature",
        distribution: {
            iterations: 0,
            scatterChance: 100.0,
            x: 0,
            z: 0,
            y: 0
        }
    }
});
