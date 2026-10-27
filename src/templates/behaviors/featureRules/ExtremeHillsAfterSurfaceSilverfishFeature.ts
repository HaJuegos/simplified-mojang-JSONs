import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ExtremeHillsAfterSurfaceSilverfishFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:extreme_hills_after_surface_silverfish_feature",
    idFeatureToPlace: "minecraft:silverfish_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("extreme_hills")
        },
        distribution: {
            iterations: 0,
            coordinateEvalOrder: "xyz",
            x: {
                distribution: "uniform",
                extent: [
                    0,
                    1
                ]
            },
            y: {
                distribution: "uniform",
                extent: [
                    0,
                    1
                ]
            },
            z: {
                distribution: "uniform",
                extent: [
                    0,
                    1
                ]
            }
        }
    }
});
