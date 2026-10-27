import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const CherryTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:cherry_tree_feature",
    tree: {
        cherryTrunk: {
            trunkBlock: "minecraft:cherry_log",
            trunkHeight: {
                base: 7,
                intervals: [1, 1]
            },
            branches: {
                treeTypeWeights: {
                    oneBranch: 10,
                    twoBranches: 10,
                    twoBranchesAndTrunk: 10
                },
                branchHorizontalLength: {
                    rangeMin: 2,
                    rangeMax: 4
                },
                branchStartOffsetFromTop: {
                    rangeMin: -4,
                    rangeMax: -3
                },
                branchEndOffsetFromTop: {
                    rangeMin: -1,
                    rangeMax: 0
                },
                branchCanopy: {
                    cherryCanopy: {
                        leafBlock: "minecraft:cherry_leaves",
                        height: 5,
                        radius: 4,
                        wideBottomLayerHoleChance: 25,
                        cornerHoleChance: 50,
                        hangingLeavesChance: 16.6666,
                        hangingLeavesExtensionChance: 33.3333
                    }
                }
            }
        },
        cherryCanopy: {
            leafBlock: "minecraft:cherry_leaves",
            height: 5,
            radius: 4,
            wideBottomLayerHoleChance: 25,
            cornerHoleChance: 50,
            hangingLeavesChance: 16.6666,
            hangingLeavesExtensionChance: 33.3333
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
            "minecraft:leaf_litter"
        ]
    }
});
