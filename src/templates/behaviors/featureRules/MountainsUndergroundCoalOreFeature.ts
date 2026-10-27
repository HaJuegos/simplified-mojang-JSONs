import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const MountainsUndergroundCoalOreFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:mountains_underground_coal_ore_feature",
    idFeatureToPlace: "minecraft:coal_ore_feature",
    rules: {
        conditions: {
            placementPass: "underground_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("mountains")
        },
        distribution: {
            iterations: 20,
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
                    128,
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
