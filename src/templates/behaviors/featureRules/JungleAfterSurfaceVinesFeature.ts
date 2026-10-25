import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const JungleAfterSurfaceVinesFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:jungle_after_surface_vines_feature",
    idFeatureToPlace: "minecraft:fixup_vines_position_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag('jungle')
        },
        distribution: {
            iterations: 50,
            coordinateEvalOrder: "xyz",
            x: {
                distribution: "uniform",
                extent: [
                    0,
                    16
                ]
            },
            y: 64,
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
