import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const OverworldSurfaceFlowersFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:overworld_surface_flowers_feature",
    idFeatureToPlace: "minecraft:legacy:overworld_flower_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag('jungle', 'self', '!='),
                EntityFilters.hasBiomeTag('flower_forest', 'self', '!='),
                EntityFilters.hasBiomeTag('swamp', 'self', '!='),
                EntityFilters.hasBiomeTag('mesa', 'self', '!='),
                EntityFilters.hasBiomeTag('mooshroom_island', 'self', '!='),
                EntityFilters.hasBiomeTag('plains', 'self', '!='),
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag('overworld'),
                    EntityFilters.hasBiomeTag('overworld_generation'),
                ),
                EntityFilters.anyOf(
                    EntityFilters.allOf(
                        EntityFilters.hasBiomeTag('forest', 'self', '!='),
                        EntityFilters.hasBiomeTag('forest_generation', 'self', '!='),
                    ),
                    EntityFilters.hasBiomeTag('extreme_hills'),
                    EntityFilters.hasBiomeTag('taiga'),
                ),
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag('savanna', 'self', '!='),
                    EntityFilters.hasBiomeTag('mutated')
                )
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
