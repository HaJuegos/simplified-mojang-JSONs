import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SwampAfterSurfaceFireflyBushWaterCluster = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_21_60,
    idRule: "minecraft:swamp_after_surface_firefly_bush_water_cluster",
    idFeatureToPlace: "minecraft:firefly_bush_water_cluster_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("swamp")
        },
        distribution: {
            iterations: 1,
            scatterChance: {
                numerator: 1,
                denominator: 4
            },
            x: 0,
            y: MoLang.heightmap(MoLang.variable("worldx"), MoLang.variable("worldz")),
            z: 0
        }
    }
});
