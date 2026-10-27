import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OceanAfterSurfaceKelpFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:ocean_after_surface_kelp_feature_rules",
    idFeatureToPlace: "minecraft:kelp_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag("ocean"),
                EntityFilters.hasBiomeTag("warm", "self", "not"),
                EntityFilters.hasBiomeTag("lukewarm", "self", "not"),
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag("frozen", "self", "not"),
                    EntityFilters.hasBiomeTag("legacy")
                )
            )
        },
        distribution: {
            iterations: MoLang.ceil(`${MoLang.noise(`${MoLang.variable("originx")} / 80.0`, `${MoLang.variable("originz")} / 80.0`)} * 120.0`),
            coordinateEvalOrder: "zxy",
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
