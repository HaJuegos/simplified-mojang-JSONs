import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const SavannaTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:savanna_tree_feature",
    tree: {
        acaciaTrunk: {
            trunkWidth: 1,
            trunkHeight: {
                base: 5,
                intervals: [
                    3,
                    3
                ]
            },
            trunkBlock: {
                name: "minecraft:log2",
                states: {
                    newLogType: "acacia"
                }
            },
            trunkLean: {
                allowDiagonalGrowth: true,
                leanHeight: {
                    rangeMin: 1,
                    rangeMax: 5
                },
                leanSteps: {
                    rangeMin: 1,
                    rangeMax: 4
                }
            },
            branches: {
                branchChance: 100.0,
                branchLength: {
                    rangeMin: 1,
                    rangeMax: 4
                },
                branchPosition: {
                    rangeMin: 1,
                    rangeMax: 3
                },
                branchCanopy: {
                    acaciaCanopy: {
                        canopySize: 2,
                        leafBlock: {
                            name: "minecraft:leaves2",
                            states: {
                                newLeafType: "acacia"
                            }
                        },
                        simplifyCanopy: true
                    }
                }
            }
        },
        acaciaCanopy: {
            canopySize: 3,
            leafBlock: {
                name: "minecraft:leaves2",
                states: {
                    newLeafType: "acacia"
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
