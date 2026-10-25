import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const BambooJungleAfterSurfaceBambooFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:bamboo_jungle_after_surface_bamboo_feature",
    idFeatureToPlace: "minecraft:bamboo_then_podzol_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag('bamboo'),
                EntityFilters.hasBiomeTag('jungle')
            )
        },
        distribution: {
            iterations: MoLang.max(15, MoLang.min(MoLang.trunc(MoLang.ceil(`(${MoLang.noise(MoLang.trunc(`${MoLang.variable("originx")} / 80`), MoLang.trunc(`${MoLang.variable("originz")} / 80`))} + 0.3) * 160`)), 160)),
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
