import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const FallenPoplarTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.MostRecent,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:fallen_poplar_tree_feature",
    tree: {
        fallenTrunk: {
            logLength: {
                rangeMin: 4,
                rangeMax: 7
            },
            trunkBlock: {
                name: "minecraft:poplar_log"
            },
            logDecorationFeature: "minecraft:select_dappled_forest_fallen_tree_decoration"
        },
        mayGrowOn: [
            {
                tags: MoLang.anyTag("dirt")
            }
        ],
        baseBlock: [
            "minecraft:dirt",
            "minecraft:coarse_dirt"
        ],
        mayGrowThrough: [
            {
                tags: MoLang.anyTag("dirt")
            }
        ],
        mayReplace: [
            "minecraft:air",
            "minecraft:snow_layer",
            {
                tags: MoLang.anyTag("minecraft:leaves")
            },
            "minecraft:wildflowers",
            "minecraft:leaf_litter",
            "minecraft:brown_mushroom",
            "minecraft:red_shrub"
        ]
    }
});
