import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const MegaSpruceTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:mega_spruce_tree_feature",
    tree: {
        megaTrunk: {
            trunkWidth: 2,
            trunkHeight: {
                base: 13,
                intervals: [
                    3,
                    15
                ]
            },
            trunkBlock: {
                name: "minecraft:log",
                states: {
                    oldLogType: "spruce"
                }
            }
        },
        megaPineCanopy: {
            canopyHeight: {
                rangeMin: 13,
                rangeMax: 18
            },
            baseRadius: 0,
            radiusStepModifier: 3.5,
            coreWidth: 2,
            leafBlock: {
                name: "minecraft:leaves",
                states: {
                    oldLeafType: "spruce"
                }
            }
        },
        baseBlock: "minecraft:podzol",
        baseCluster: {
            mayReplace: [
                "minecraft:grass",
                {
                    name: "minecraft:dirt",
                    states: {
                        dirtType: "normal"
                    }
                },
                {
                    name: "minecraft:dirt",
                    states: {
                        dirtType: "coarse"
                    }
                }
            ],
            numClusters: 5,
            clusterRadius: 2
        },
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
