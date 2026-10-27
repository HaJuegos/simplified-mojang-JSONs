import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OverworldUndergroundDioriteFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:overworld_underground_diorite_feature",
    idFeatureToPlace: "minecraft:diorite_feature",
    rules: {
        conditions: {
            placementPass: "underground_pass",
            "minecraft:biome_filter": EntityFilters.anyOf(EntityFilters.hasBiomeTag("overworld"), EntityFilters.hasBiomeTag("overworld_generation"))
        },
        distribution: {
            iterations: 0,
            x: 0,
            y: 0,
            z: 0
        }
    }
});
