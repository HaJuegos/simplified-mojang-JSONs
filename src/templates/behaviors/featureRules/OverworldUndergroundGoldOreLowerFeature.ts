import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OverworldUndergroundGoldOreLowerFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:overworld_underground_gold_ore_lower_feature",
    idFeatureToPlace: "minecraft:gold_ore_lower_feature",
    rules: {
        conditions: {
            placementPass: "underground_pass",
            "minecraft:biome_filter": EntityFilters.anyOf(EntityFilters.hasBiomeTag("overworld"), EntityFilters.hasBiomeTag("overworld_generation"))
        },
        distribution: {
            iterations: 1,
            scatterChance: {
                numerator: 1,
                denominator: 2
            },
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
                    -64,
                    -48
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
