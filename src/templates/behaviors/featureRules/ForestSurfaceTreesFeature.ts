import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const ForestSurfaceTreesFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:forest_surface_trees_feature",
    idFeatureToPlace: "minecraft:legacy:forest_tree_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag('birch', 'self', '!='),
                EntityFilters.hasBiomeTag('roofed', 'self', '!='),
                EntityFilters.hasBiomeTag('extreme_hills', 'self', '!='),
                EntityFilters.hasBiomeTag('taiga', 'self', '!='),
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag('forest'),
                    EntityFilters.hasBiomeTag('forest_generation')
                ),
            )
        },
        distribution: {
            iterations: 1,
            x: 0,
            y: 0,
            z: 0
        }
    }
});
