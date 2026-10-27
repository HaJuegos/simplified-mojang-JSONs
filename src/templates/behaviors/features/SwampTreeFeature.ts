import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
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
                name: "minecraft:oak_log"
            },
            canBeSubmerged: {
                maxDepth: 2
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
                name: "minecraft:oak_leaves"
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
        mayGrowOn: [
            {
                tags: MoLang.anyTag("dirt")
            }
        ],
        baseBlock: [
            "minecraft:dirt",
            "minecraft:coarse_dirt"
        ],
        mayReplace: [
            "minecraft:air",
            "minecraft:snow_layer",
            {
                tags: MoLang.anyTag("minecraft:leaves")
            },
            "minecraft:water",
            "minecraft:flowing_water",
            "minecraft:wildflowers",
            "minecraft:leaf_litter"
        ]
    }
});
