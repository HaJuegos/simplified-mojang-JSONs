import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const OptionalBeehiveFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:optional_beehive_feature",
    scatter: {
        projectInputToFloor: false,
        placesFeature: "minecraft:beehive_search_feature",
        distribution: {
            iterations: 1,
            scatterChance: "query.has_biome_tag('bee_habitat') ? (query.has_biome_tag('plains') || query.has_biome_tag('sunflower_plains') ? 5.0 : (query.has_biome_tag('flower_forest') ? 3.0 : (query.has_biome_tag('birch_forest') || query.has_biome_tag('birch_forest_hills') || query.has_biome_tag('birch_forest_mutated') || query.has_biome_tag('forest') || query.has_biome_tag('forest_mutated') ? 0.035 : 0.0))) : 0.0",
            x: 0,
            z: 0,
            y: 0
        }
    }
});
