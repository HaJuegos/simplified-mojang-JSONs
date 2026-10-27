import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterJungleTreeUpperCocoaFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_jungle_tree_upper_cocoa_feature",
    scatter: {
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
        y: -4,
        projectInputToFloor: false,
        placesFeature: "minecraft:optional_upper_cocoa_feature"
    }
});
