import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const MesaBeforeSurfaceGoldOreFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:mesa_before_surface_gold_ore_feature",
    idFeatureToPlace: "minecraft:fixup_mesa_gold_position_feature",
    rules: {
        conditions: {
            placementPass: "before_surface_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("mesa")
        },
        distribution: {
            iterations: 0,
            x: 0,
            y: 0,
            z: 0
        }
    }
});
