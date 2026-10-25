import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const OceanSurfaceKelpFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:ocean_surface_kelp_feature",
    idFeatureToPlace: "minecraft:kelp_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag('ocean'),
                EntityFilters.hasBiomeTag('warm', 'self', '!='),
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag('frozen', 'self', '!='),
                    EntityFilters.hasBiomeTag('monster', 'self', '!=')
                )
            )
        },
        distribution: {
            iterations: 20,
            scatterChance: {
                numerator: 1,
                denominator: 18
            },
            x: {
                distribution: "uniform",
                extent: [
                    0,
                    35
                ]
            },
            y: 43,
            z: {
                distribution: "uniform",
                extent: [
                    0,
                    35
                ]
            }
        }
    }
});
