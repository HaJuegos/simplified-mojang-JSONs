import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SculkPatchFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_16_0,
    idRule: "minecraft:sculk_patch_feature",
    idFeatureToPlace: "minecraft:sculk_patch_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("deep_dark")
        },
        distribution: {
            iterations: 256,
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
                    -63,
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
