import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const UndecoratedJungleTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:undecorated_jungle_tree_feature",
    tree: {
        trunk: {
            trunkHeight: {
                rangeMin: 4,
                rangeMax: 11
            },
            trunkBlock: {
                name: "minecraft:log",
                states: {
                    oldLogType: "jungle"
                }
            }
        },
        canopy: {
            canopyOffset: {
                min: -3,
                max: 0
            },
            variationChance: [
                {
                    numerator: 1,
                    denominator: 2
                },
                {
                    numerator: 1,
                    denominator: 2
                },
                {
                    numerator: 1,
                    denominator: 2
                },
                {
                    numerator: 1,
                    denominator: 1
                }
            ],
            leafBlock: {
                name: "minecraft:leaves",
                states: {
                    oldLeafType: "jungle"
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
