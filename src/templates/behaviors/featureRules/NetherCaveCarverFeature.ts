import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const NetherCaveCarverFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_16_100,
    idRule: "minecraft:nether_cave_carver_feature",
    idFeatureToPlace: "minecraft:nether_cave_carver_feature",
    rules: {
        conditions: {
            placementPass: "pregeneration_pass",
            "minecraft:biome_filter": EntityFilters.anyOf(
                EntityFilters.hasBiomeTag('hell'),
                EntityFilters.hasBiomeTag('nether')
            )
        },
        distribution: {}
    }
});
