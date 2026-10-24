import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const FancyOakTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:fancy_oak_tree_feature",
    tree: {
        fancyTrunk: {
            trunkHeight: {
                base: 5,
                variance: 12,
                scale: 0.618
            },
            trunkWidth: 1,
            trunkBlock: {
                name: "minecraft:log",
                states: {
                    oldLogType: "oak"
                }
            },
            branches: {
                slope: 0.381,
                density: 1.0,
                minAltitudeFactor: 0.2
            },
            widthScale: 1.0,
            foliageAltitudeFactor: 0.3
        },
        fancyCanopy: {
            height: 4,
            radius: 3,
            leafBlock: {
                name: "minecraft:leaves",
                states: {
                    oldLeafType: "oak"
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
