import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const PlainsFirstDoublePlantGrassFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:plains_first_double_plant_grass_feature",
    idFeatureToPlace: "minecraft:grass_double_plant_patch_feature",
    rules: {
        conditions: {
            placementPass: "first_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag('plains')
        },
        distribution: {
            iterations: 7,
            scatterChance: `((${MoLang.noise(`(${MoLang.variable("originx")} + 8) / 200.0`, `(${MoLang.variable("originz")} + 8) / 200.0`)} >= -.8) && ${MoLang.variable("is_legacy")} == 0.0) ? 100.0 : 0.0`,
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
