import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const MegaTaigaSurfaceMushroomsFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:mega_taiga_surface_mushrooms_feature",
    idFeatureToPlace: "minecraft:legacy:small_mushrooms_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag('taiga'),
                EntityFilters.hasBiomeTag('mega'),
            )
        },
        distribution: {
            iterations: 3,
            x: 0,
            y: 0,
            z: 0
        }
    }
});
