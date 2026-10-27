import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const RedwoodTaigaMutatedSurfaceTreesFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:redwood_taiga_mutated_surface_trees_feature",
    idFeatureToPlace: "minecraft:legacy:redwood_taiga_mutated_tree_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag("taiga"),
                EntityFilters.hasBiomeTag("mega"),
                EntityFilters.hasBiomeTag("hills", "self", "!="),
                EntityFilters.hasBiomeTag("mutated")
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
