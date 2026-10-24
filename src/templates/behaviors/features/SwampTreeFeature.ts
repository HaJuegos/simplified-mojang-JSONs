import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const SwampTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:swamp_tree_feature",
    tree: {
        trunk: {
            trunkHeight: {
                rangeMin: 5,
                rangeMax: 9
            },
            trunkBlock: {
                name: "minecraft:log",
                states: {
                    oldLogType: "oak"
                }
            },
            canBeSubmerged: {
                maxDepth: 1
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
            minWidth: 2,
            leafBlock: {
                name: "minecraft:leaves",
                states: {
                    oldLeafType: "oak"
                }
            },
            canopyDecoration: {
                decorationBlock: "minecraft:vine",
                decorationChance: {
                    numerator: 1,
                    denominator: 4
                },
                numSteps: 4,
                stepDirection: "down"
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
            "minecraft:water",
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
        ]
    }
});
