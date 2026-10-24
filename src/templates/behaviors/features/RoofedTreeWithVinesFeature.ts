import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
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
                name: "minecraft:log2",
                states: {
                    newLogType: "dark_oak"
                }
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
                            name: "minecraft:leaves2",
                            states: {
                                newLeafType: "dark_oak"
                            }
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
                name: "minecraft:leaves2",
                states: {
                    newLeafType: "dark_oak"
                }
            }
        },
        baseBlock: [
            "minecraft:dirt",
            {
                name: "minecraft:dirt",
                states: {
                    dirtType: "coarse"
                }
            }
        ],
        mayGrowOn: [
            "minecraft:dirt",
            "minecraft:grass",
            "minecraft:podzol",
            {
                name: "minecraft:dirt",
                states: {
                    dirtType: "coarse"
                }
            },
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
                name: "minecraft:leaves",
                states: {
                    oldLeafType: "oak"
                }
            },
            {
                name: "minecraft:leaves",
                states: {
                    oldLeafType: "spruce"
                }
            },
            {
                name: "minecraft:leaves",
                states: {
                    oldLeafType: "birch"
                }
            },
            {
                name: "minecraft:leaves",
                states: {
                    oldLeafType: "jungle"
                }
            },
            {
                name: "minecraft:leaves2",
                states: {
                    newLeafType: "acacia"
                }
            },
            {
                name: "minecraft:leaves2",
                states: {
                    newLeafType: "dark_oak"
                }
            }
        ],
        mayGrowThrough: [
            "minecraft:dirt",
            "minecraft:grass",
            {
                name: "minecraft:dirt",
                states: {
                    dirtType: "coarse"
                }
            }
        ]
    }
});
