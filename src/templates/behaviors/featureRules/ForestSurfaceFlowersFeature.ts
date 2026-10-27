import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad.
 * @author HaJuegos - 26-10-2026
 */
export const ForestSurfaceFlowersFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:forest_surface_flowers_feature",
    idFeatureToPlace: "minecraft:legacy:forest_flower_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.hasBiomeTag("deprecated")
        }
    }
});
