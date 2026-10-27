import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const CherryBiomeSurfaceTallGrassFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:cherry_biome_surface_tall_grass_feature_rules",
    idFeatureToPlace: "minecraft:scatter_tall_grass_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("cherry_grove")
        },
        distribution: {
            iterations: `(${MoLang.noise(`(${MoLang.variable("originx")} + 8) / 200.0`, `(${MoLang.variable("originz")} + 8) / 200.0`)} < -0.8) ? 5 : 10`,
            scatterChance: `${MoLang.variable("is_legacy")} ? 0.0 : 100.0`,
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
