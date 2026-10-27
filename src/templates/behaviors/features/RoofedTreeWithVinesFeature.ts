import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const RoofedTreeWithVinesFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:roofed_tree_with_vines_feature",
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
            trunkDecoration: {
                decorationBlock: "minecraft:vine",
                decorationChance: {
                    numerator: 6,
                    denominator: 7
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
        baseBlock: [
            "minecraft:dirt",
            "minecraft:coarse_dirt"
        ],
        mayGrowOn: [
            "minecraft:dirt",
            "minecraft:grass_block",
            "minecraft:podzol",
            "minecraft:dirt_with_roots",
            "minecraft:moss_block",
            "minecraft:mycelium",
            "minecraft:mud",
            "minecraft:muddy_mangrove_roots",
            "minecraft:coarse_dirt",
            {
                name: "minecraft:farmland",
                states: {
                    moisturizedAmount: 0
                }
            },
            {
                name: "minecraft:farmland",
                states: {
                    moisturizedAmount: 1
                }
            },
            {
                name: "minecraft:farmland",
                states: {
                    moisturizedAmount: 2
                }
            },
            {
                name: "minecraft:farmland",
                states: {
                    moisturizedAmount: 3
                }
            },
            {
                name: "minecraft:farmland",
                states: {
                    moisturizedAmount: 4
                }
            },
            {
                name: "minecraft:farmland",
                states: {
                    moisturizedAmount: 5
                }
            },
            {
                name: "minecraft:farmland",
                states: {
                    moisturizedAmount: 6
                }
            },
            {
                name: "minecraft:farmland",
                states: {
                    moisturizedAmount: 7
                }
            }
        ],
        mayReplace: [
            "minecraft:air",
            {
                tags: MoLang.anyTag("minecraft:leaves")
            }
        ],
        mayGrowThrough: [
            "minecraft:dirt",
            "minecraft:grass_block",
            "minecraft:coarse_dirt"
        ]
    }
});
