import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const BirchForestMutatedSurfaceTreesFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:birch_forest_mutated_surface_trees_feature",
    idFeatureToPlace: "minecraft:legacy:birch_forest_mutated_tree_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.anyOf(
                EntityFilters.hasBiomeTag("forest"),
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("birch"),
                    EntityFilters.hasBiomeTag("mutated")
                )
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
