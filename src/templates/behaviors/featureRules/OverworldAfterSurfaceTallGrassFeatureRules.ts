import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OverworldAfterSurfaceTallGrassFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:overworld_after_surface_tall_grass_feature_rules",
    idFeatureToPlace: "minecraft:scatter_tall_grass_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag("overworld"),
                    EntityFilters.hasBiomeTag("overworld_generation")
                ),
                EntityFilters.hasBiomeTag("plains", "self", "not"),
                EntityFilters.hasBiomeTag("taiga", "self", "not"),
                EntityFilters.hasBiomeTag("jungle", "self", "not"),
                EntityFilters.hasBiomeTag("mooshroom_island", "self", "not"),
                EntityFilters.hasBiomeTag("savanna", "self", "not"),
                EntityFilters.hasBiomeTag("swamp", "self", "not"),
                EntityFilters.hasBiomeTag("mangrove_swamp", "self", "not"),
                EntityFilters.anyOf(
                    EntityFilters.allOf(
                        EntityFilters.hasBiomeTag("forest", "self", "not"),
                        EntityFilters.hasBiomeTag("forest_generation", "self", "not")
                    ),
                    EntityFilters.hasBiomeTag("extreme_hills")
                )
            )
        },
        distribution: {
            iterations: 1,
            scatterChance: `${MoLang.variable("is_legacy")} ? 0.0 : 100.0`,
            x: {
                distribution: "uniform",
                extent: [
                    0,
                    16
                ]
            },
            y: MoLang.heightmap(MoLang.variable("worldx"), MoLang.variable("worldz")),
            z: {
                distribution: "uniform",
                extent: [
                    0,
                    16
                ]
            }
        }
    }
});
