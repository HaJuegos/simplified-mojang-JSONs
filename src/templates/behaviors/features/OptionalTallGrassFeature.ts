import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const OptionalTallGrassFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:optional_tall_grass_feature",
    scatter: {
        projectInputToFloor: false,
        placesFeature: "minecraft:scatter_tall_grass_feature",
        distribution: {
            iterations: 1,
            scatterChance: {
                numerator: 1,
                denominator: 5
            },
            x: 0,
            z: 0,
            y: 0
        }
    }
});
