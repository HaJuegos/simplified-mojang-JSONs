import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const MesaUndergroundGoldOreFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:mesa_underground_gold_ore_feature",
    idFeatureToPlace: "minecraft:gold_ore_extra_feature",
    rules: {
        conditions: {
            placementPass: "underground_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("mesa")
        },
        distribution: {
            iterations: 50,
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
                    32,
                    256
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
