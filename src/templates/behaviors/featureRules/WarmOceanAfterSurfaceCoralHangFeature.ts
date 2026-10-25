import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const WarmOceanAfterSurfaceCoralHangFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:warm_ocean_after_surface_coral_hang_feature",
    idFeatureToPlace: "minecraft:coral_hang_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag('warm'),
                EntityFilters.hasBiomeTag('ocean'),
            )
        },
        distribution: {
            iterations: 16,
            x: {
                distribution: "uniform",
                extent: [
                    0,
                    16
                ]
            },
            y: 62,
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
