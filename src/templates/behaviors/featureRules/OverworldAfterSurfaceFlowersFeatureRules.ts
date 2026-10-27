import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OverworldAfterSurfaceFlowersFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.MostRecent,
    idRule: "minecraft:overworld_after_surface_flowers_feature_rules",
    idFeatureToPlace: "minecraft:scatter_overworld_flower_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag("overworld"),
                    EntityFilters.hasBiomeTag("overworld_generation")
                ),
                EntityFilters.hasBiomeTag("jungle", "self", "not"),
                EntityFilters.hasBiomeTag("flower_forest", "self", "not"),
                EntityFilters.hasBiomeTag("swamp", "self", "not"),
                EntityFilters.hasBiomeTag("mangrove_swamp", "self", "not"),
                EntityFilters.hasBiomeTag("mesa", "self", "not"),
                EntityFilters.hasBiomeTag("mooshroom_island", "self", "not"),
                EntityFilters.hasBiomeTag("plains", "self", "not"),
                EntityFilters.hasBiomeTag("cherry_grove", "self", "not"),
                EntityFilters.hasBiomeTag("pale_garden", "self", "not"),
                EntityFilters.hasBiomeTag("dappled_forest", "self", "not"),
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag("savanna", "self", "not"),
                    EntityFilters.hasBiomeTag("mutated")
                )
            )
        },
        distribution: {
            iterations: 1,
            scatterChance: {
                numerator: 1,
                denominator: 32
            },
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
