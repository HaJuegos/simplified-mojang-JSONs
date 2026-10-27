import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const MegaTaigaAfterSurfaceBrownMushroomFeatureRules = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:mega_taiga_after_surface_brown_mushroom_feature_rules",
    idFeatureToPlace: "minecraft:scatter_brown_mushroom_feature",
    rules: {
        conditions: {
            placementPass: "after_surface_pass",
            "minecraft:biome_filter": EntityFilters.anyOf(
                EntityFilters.hasBiomeTag("taiga"),
                EntityFilters.hasBiomeTag("mega")
            )
        },
        distribution: {
            iterations: 3,
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
