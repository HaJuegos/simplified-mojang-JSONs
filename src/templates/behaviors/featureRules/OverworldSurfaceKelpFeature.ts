import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const OverworldSurfaceKelpFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:overworld_surface_kelp_feature",
    idFeatureToPlace: "minecraft:kelp_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.anyOf(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag('ocean', 'self', '!='),
                    EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag('overworld'),
                        EntityFilters.hasBiomeTag('overworld_generation'),
                    )
                ),
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag('ocean'),
                    EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag('warm'),
                        EntityFilters.allOf(
                            EntityFilters.hasBiomeTag('frozen'),
                            EntityFilters.hasBiomeTag('monster'),
                        )
                    )
                )
            )
        },
        distribution: {
            iterations: 0,
            scatterChance: {
                numerator: 1,
                denominator: 18
            },
            x: 0,
            y: 0,
            z: 0
        }
    }
});
