import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OverworldUndergroundAndesiteUpperFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:overworld_underground_andesite_upper_feature",
    idFeatureToPlace: "minecraft:andesite_feature",
    rules: {
        conditions: {
            placementPass: "underground_pass",
            "minecraft:biome_filter": EntityFilters.anyOf(EntityFilters.hasBiomeTag("overworld"), EntityFilters.hasBiomeTag("overworld_generation"))
        },
        distribution: {
            scatterChance: {
                numerator: 1,
                denominator: 6
            },
            iterations: 1,
            coordinateEvalOrder: "zyx",
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
                    64,
                    128
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
