import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OverworldUndergroundCoalOreFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:overworld_underground_coal_ore_feature",
    idFeatureToPlace: "minecraft:coal_ore_feature",
    rules: {
        conditions: {
            placementPass: "underground_pass"
        },
        distribution: {
            iterations: 0,
            x: 0,
            y: 0,
            z: 0
        }
    }
});
