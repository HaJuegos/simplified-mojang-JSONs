import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const DesertAfterSurfaceDryGrassFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_21_60,
    idRule: "minecraft:desert_after_surface_dry_grass_feature_rules",
    idFeatureToPlace: "minecraft:scatter_dry_grass_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("desert")
        },
        distribution: {
            iterations: 1,
            scatterChance: {
                numerator: 1,
                denominator: 3
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
