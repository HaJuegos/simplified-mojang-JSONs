import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OverworldAfterSurfacePumpkinFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.MostRecent,
    idRule: "minecraft:overworld_after_surface_pumpkin_feature_rules",
    idFeatureToPlace: "minecraft:pumpkin_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag("overworld"),
                    EntityFilters.hasBiomeTag("overworld_generation")
                ),
                EntityFilters.hasBiomeTag("dappled_forest", "self", "not")
            )
        },
        distribution: {
            iterations: 1,
            scatterChance: {
                numerator: 1,
                denominator: 300
            },
            coordinateEvalOrder: "zxy",
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
