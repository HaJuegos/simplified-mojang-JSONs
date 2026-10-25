import { createBPFeatureRule } from "../../../builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
import { VanillaFormatVersionList } from "../../../types/behaviors/featureRules/FeatureRuleTemplate";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del feature rule para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 24-10-2026
 */
export const MesaPlateauStoneSurfaceTreesFeature = createBPFeatureRule({
    formatVersion: VanillaFormatVersionList.v1_13_0,
    idRule: "minecraft:mesa_plateau_stone_surface_trees_feature",
    idFeatureToPlace: "minecraft:legacy:mesa_plateau_stone_tree_feature",
    rules: {
        conditions: {
            placementPass: "surface_pass",
            "minecraft:biome_filter": EntityFilters.allOf(
                EntityFilters.hasBiomeTag('stone'),
                EntityFilters.hasBiomeTag('mesa'),
            )
        },
        distribution: {
            iterations: 1,
            x: 0,
            y: 0,
            z: 0
        }
    }
});
