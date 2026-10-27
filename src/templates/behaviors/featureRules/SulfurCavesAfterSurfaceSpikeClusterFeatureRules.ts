import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SulfurCavesAfterSurfaceSpikeClusterFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_16_0,
    idRule: "minecraft:sulfur_caves_after_surface_spike_cluster_feature_rules",
    idFeatureToPlace: "minecraft:sulfur_spike_cluster_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("sulfur_caves")
        },
        distribution: {
            iterations: "Math.Random(48, 96)",
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
