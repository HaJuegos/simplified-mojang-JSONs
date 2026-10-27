import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const PlainsFirstDoublePlantGrassFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:plains_first_double_plant_grass_feature",
    idFeatureToPlace: "minecraft:grass_double_plant_patch_feature",
    rules: {
        conditions: {
            placementPass: "first_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("plains")
        },
        distribution: {
            iterations: `${MoLang.variable("is_legacy")} == 0.0 ? 1 : 0`,
            scatterChance: {
                numerator: 1,
                denominator: 4
            },
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
