import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const PlainsFirstDoublePlantSunflowerFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:plains_first_double_plant_sunflower_feature",
    idFeatureToPlace: "minecraft:sunflower_double_plant_patch_feature",
    rules: {
        conditions: {
            placementPass: "first_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag('plains'),
                EntityFilters.hasBiomeTag('mutated'),
            )
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
                    `${MoLang.heightmap(MoLang.variable("worldx"), MoLang.variable("worldz"))} + 32`
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
