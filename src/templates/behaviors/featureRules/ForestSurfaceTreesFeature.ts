import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ForestSurfaceTreesFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.MostRecent,
    idRule: "minecraft:forest_surface_trees_feature",
    idFeatureToPlace: "minecraft:legacy:forest_tree_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.anyOf(EntityFilters.hasBiomeTag("forest"), EntityFilters.hasBiomeTag("forest_generation")),
                EntityFilters.hasBiomeTag("birch", "self", "!="),
                EntityFilters.hasBiomeTag("roofed", "self", "!="),
                EntityFilters.hasBiomeTag("extreme_hills", "self", "!="),
                EntityFilters.hasBiomeTag("taiga", "self", "!="),
                EntityFilters.hasBiomeTag("dappled_forest", "self", "!=")
            )
        },
        distribution: {
            iterations: 1,
            coordinateEvalOrder: "zxy",
            x: 0,
            y: MoLang.heightmap(MoLang.variable("worldx"), MoLang.variable("worldz")),
            z: 0
        }
    }
});
