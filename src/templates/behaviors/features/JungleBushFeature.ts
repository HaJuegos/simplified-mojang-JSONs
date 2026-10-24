import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const JungleBushFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:jungle_bush_feature",
    tree: {
        trunk: {
            trunkHeight: 1,
            trunkBlock: {
                name: "minecraft:log",
                states: {
                    oldLogType: "jungle"
                }
            },
            canBeSubmerged: {
                maxDepth: 1
            }
        },
        canopy: {
            canopyOffset: {
                min: -1,
                max: 1
            },
            leafBlock: {
                name: "minecraft:leaves",
                states: {
                    oldLeafType: "jungle"
                }
            },
            minWidth: 0,
            canopySlope: {
                rise: 1,
                run: 1
            },
            variationChance: {
                numerator: 1,
                denominator: 2
            }
        },
        baseBlock: [
            "minecraft:grass",
            "minecraft:dirt"
        ],
        mayGrowOn: [
            "minecraft:grass",
            "minecraft:dirt"
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
