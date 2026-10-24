import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const MegaJungleTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:mega_jungle_tree_feature",
    tree: {
        megaTrunk: {
            trunkWidth: 2,
            trunkHeight: {
                base: 10,
                intervals: [
                    3,
                    20
                ]
            },
            trunkBlock: {
                name: "minecraft:log",
                states: {
                    oldLogType: "jungle"
                }
            },
            trunkDecoration: {
                decorationBlock: "minecraft:vine",
                decorationChance: {
                    numerator: 1,
                    denominator: 3
                }
            },
            branches: {
                branchLength: 5,
                branchSlope: 0.5,
                branchInterval: {
                    rangeMin: 2,
                    rangeMax: 6
                },
                branchAltitudeFactor: {
                    min: 0.5,
                    max: 1.0
                },
                branchCanopy: {
                    megaCanopy: {
                        canopyHeight: {
                            rangeMin: 2,
                            rangeMax: 4
                        },
                        baseRadius: 1,
                        simplifyCanopy: true,
                        leafBlock: {
                            name: "minecraft:leaves",
                            states: {
                                oldLeafType: "jungle"
                            }
                        }
                    }
                }
            }
        },
        megaCanopy: {
            canopyHeight: 3,
            baseRadius: 2,
            coreWidth: 2,
            leafBlock: {
                name: "minecraft:leaves",
                states: {
                    oldLeafType: "jungle"
                }
            }
        },
        baseBlock: "minecraft:dirt",
        mayGrowOn: [
            "minecraft:grass",
            "minecraft:dirt",
            "minecraft:podzol",
            {
                name: "minecraft:dirt",
                states: {
                    dirtType: "coarse"
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
