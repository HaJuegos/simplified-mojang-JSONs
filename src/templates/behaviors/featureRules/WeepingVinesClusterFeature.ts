import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const WeepingVinesClusterFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:weeping_vines_cluster_feature",
    idFeatureToPlace: "minecraft:_weeping_vines_cluster_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("crimson_forest")
        },
        distribution: {
            iterations: 10,
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
                    0,
                    124
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
