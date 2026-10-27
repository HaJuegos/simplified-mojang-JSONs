import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const BambooJungleBeforeSurfaceBambooFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:bamboo_jungle_before_surface_bamboo_feature_rules",
    idFeatureToPlace: "minecraft:bamboo_then_podzol_feature",
    rules: {
        conditions: {
            placementPass: "before_surface_pass",
            "minecraft:biome_filter": EntityFilters.anyOf(
                EntityFilters.hasBiomeTag("bamboo"),
                EntityFilters.hasBiomeTag("jungle")
            )
        },
        distribution: {
            iterations: MoLang.ceil(`(${MoLang.noise(`${MoLang.variable("originx")} / 80.0`, `${MoLang.variable("originz")} / 80.0`)} + 0.3) * 160.0`),
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
