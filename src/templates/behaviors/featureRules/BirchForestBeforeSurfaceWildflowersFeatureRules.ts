import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const BirchForestBeforeSurfaceWildflowersFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:birch_forest_before_surface_wildflowers_feature_rules",
    idFeatureToPlace: "minecraft:scatter_birch_forest_wildflowers_feature",
    rules: {
        conditions: {
            placementPass: "before_surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag("birch"),
                EntityFilters.hasBiomeTag("forest"),
                EntityFilters.hasBiomeTag("hills", "self", "!=")
            )
        },
        distribution: {
            iterations: 3,
            scatterChance: {
                numerator: 1,
                denominator: 2
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
