import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const ScatterJungleTreeLowerCocoaFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_jungle_tree_lower_cocoa_feature",
    scatter: {
        projectInputToFloor: false,
        placesFeature: "minecraft:optional_lower_cocoa_feature",
        distribution: {
            iterations: 4,
            scatterChance: 100.0,
            x: {
                distribution: "fixed_grid",
                extent: [
                    -1,
                    1
                ],
                stepSize: 2,
                gridOffset: 1
            },
            z: {
                distribution: "fixed_grid",
                extent: [
                    -1,
                    1
                ],
                stepSize: 1
            },
            y: -5
        }
    }
});
