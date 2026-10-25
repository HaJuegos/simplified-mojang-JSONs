import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const ForestSurfaceFlowersFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:forest_surface_flowers_feature",
    idFeatureToPlace: "minecraft:legacy:forest_flower_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag('extreme_hills', 'self', '!='),
                EntityFilters.hasBiomeTag('taiga', 'self', '!='),
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag('forest'),
                    EntityFilters.hasBiomeTag('forest_generation')
                ),
            )
        },
        distribution: {
            iterations: 2,
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
                    `${MoLang.heightmap(MoLang.variable("worldx"), MoLang.variable("worldz"))} + 32`
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
