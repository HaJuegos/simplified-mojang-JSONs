import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const DeepWarmOceanAfterSurfaceSeagrassFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:deep_warm_ocean_after_surface_seagrass_feature_rules",
    idFeatureToPlace: "minecraft:scatter_deep_warm_ocean_seagrass_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag("ocean"),
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag("warm"),
                    EntityFilters.hasBiomeTag("lukewarm")
                ),
                EntityFilters.hasBiomeTag("deep")
            )
        },
        distribution: {
            iterations: 1,
            coordinateEvalOrder: "zxy",
            x: {
                distribution: "uniform",
                extent: [
                    0,
                    16
                ]
            },
            y: MoLang.heightmap(MoLang.variable("worldx"), MoLang.variable("worldz")),
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
