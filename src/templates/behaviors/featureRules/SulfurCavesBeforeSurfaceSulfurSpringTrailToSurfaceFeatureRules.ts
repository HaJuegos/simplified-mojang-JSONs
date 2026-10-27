import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SulfurCavesBeforeSurfaceSulfurSpringTrailToSurfaceFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_26_10,
    idRule: "minecraft:sulfur_caves_before_surface_sulfur_spring_trail_to_surface_feature_rules",
    idFeatureToPlace: "minecraft:sulfur_spring_trail_to_surface_snap_to_ceiling_feature",
    rules: {
        conditions: {
            placementPass: "before_surface_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("sulfur_caves")
        },
        distribution: {
            iterations: "Math.Random(1, 2)",
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
