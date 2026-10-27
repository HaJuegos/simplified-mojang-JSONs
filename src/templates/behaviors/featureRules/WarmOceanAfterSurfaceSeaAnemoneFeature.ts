import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const WarmOceanAfterSurfaceSeaAnemoneFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:warm_ocean_after_surface_sea_anemone_feature",
    idFeatureToPlace: "minecraft:sea_anemone_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.anyOf(
                EntityFilters.hasBiomeTag("warm"),
                EntityFilters.hasBiomeTag("ocean")
            )
        },
        distribution: {
            iterations: 20,
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
