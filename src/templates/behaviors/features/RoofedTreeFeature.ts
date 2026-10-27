import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const RoofedTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:roofed_tree_feature",
    tree: {
        acaciaTrunk: {
            trunkWidth: 2,
            trunkHeight: {
                base: 6,
                intervals: [
                    3,
                    2
                ]
            },
            trunkBlock: {
                name: "minecraft:dark_oak_log"
            },
            trunkLean: {
                allowDiagonalGrowth: false,
                leanHeight: {
                    rangeMin: 0,
                    rangeMax: 4
                },
                leanSteps: {
                    rangeMin: 0,
                    rangeMax: 3
                }
            },
            branches: {
                branchChance: {
                    numerator: 1,
                    denominator: 3
                },
                branchLength: {
                    rangeMin: 2,
                    rangeMax: 5
                },
                branchPosition: 1,
                branchCanopy: {
                    acaciaCanopy: {
                        canopySize: 2,
                        leafBlock: {
                            name: "minecraft:dark_oak_leaves"
                        },
                        simplifyCanopy: true
                    }
                }
            }
        },
        roofedCanopy: {
            canopyHeight: 4,
            coreWidth: 2,
            outerRadius: 2,
            innerRadius: 3,
            leafBlock: {
                name: "minecraft:dark_oak_leaves"
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
            "minecraft:leaf_litter"
        ]
    }
});
