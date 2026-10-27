import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const YellowPoplarTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.MostRecent,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:yellow_poplar_tree_feature",
    tree: {
        poplarTrunk: {
            trunkHeight: {
                rangeMin: 7,
                rangeMax: 11
            },
            trunkBlock: {
                name: "minecraft:poplar_log"
            },
            remainingTrunkHeightAboveBranches: {
                rangeMin: 4,
                rangeMax: 4
            },
            amountOfFoliageSupportBranches: {
                rangeMin: 1,
                rangeMax: 4
            },
            logDecorationFeature: "minecraft:optional_shelf_mushroom_feature"
        },
        poplarCanopy: {
            radius: [
                {
                    value: 5,
                    weight: 5
                },
                {
                    value: 6,
                    weight: 5
                },
                {
                    value: 7,
                    weight: 1
                },
                {
                    value: 8,
                    weight: 1
                }
            ],
            height: {
                rangeMin: 5,
                rangeMax: 6
            },
            sideHoleChance: 0.15,
            leafBlock: {
                name: "minecraft:yellow_poplar_leaves"
            },
            branchBlock: {
                name: "minecraft:poplar_log"
            }
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
            "minecraft:red_shrub",
            "minecraft:shelf_mushroom"
        ]
    }
});
