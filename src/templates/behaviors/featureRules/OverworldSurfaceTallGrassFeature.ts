import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const OverworldSurfaceTallGrassFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:overworld_surface_tall_grass_feature",
    idFeatureToPlace: "minecraft:scatter_tall_grass_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.anyOf(
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag("overworld"),
                    EntityFilters.hasBiomeTag("overworld_generation")
                ),
                EntityFilters.hasBiomeTag("taiga", "self", '!='),
                EntityFilters.hasBiomeTag("jungle", "self", "!="),
                EntityFilters.hasBiomeTag("mooshroom_island", "self", "!="),
                EntityFilters.hasBiomeTag("savanna", "self", "!="),
                EntityFilters.hasBiomeTag("swamp", "self", "!="),
                EntityFilters.anyOf(
                    EntityFilters.allOf(
                        EntityFilters.hasBiomeTag("forest", "self", "!="),
                        EntityFilters.hasBiomeTag("forest_generation", "self", "!=")
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
            y: {
                distribution: "uniform",
                extent: [
                    0,
                    `${MoLang.heightmap(MoLang.variable("worldx"), MoLang.variable("worldz"))} * 2`
                ]
            },
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
