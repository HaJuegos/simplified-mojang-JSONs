import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const DesertOrSwampAfterSurfaceFossilFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:desert_or_swamp_after_surface_fossil_feature",
    idFeatureToPlace: "minecraft:fossil_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.anyOf(
                EntityFilters.hasBiomeTag('desert'),
                EntityFilters.hasBiomeTag('swamp'),
            )
        },
        distribution: {
            iterations: 1,
            scatterChance: {
                numerator: 1,
                denominator: 64
            },
            x: 0,
            y: {
                distribution: "uniform",
                extent: [
                    0,
                    320
                ]
            },
            z: 0
        }
    }
});
