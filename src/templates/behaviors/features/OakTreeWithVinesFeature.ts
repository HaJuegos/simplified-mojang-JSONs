import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OakTreeWithVinesFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:oak_tree_with_vines_feature",
    tree: {
        trunk: {
            trunkHeight: {
                rangeMin: 4,
                rangeMax: 7
            },
            trunkBlock: {
                name: "minecraft:oak_log"
            },
            trunkDecoration: {
                decorationChance: 100.0,
                decorationBlock: "minecraft:vine"
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
                name: "minecraft:oak_leaves"
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
        mayGrowThrough: [
            {
                tags: MoLang.anyTag("dirt")
            }
        ],
        mayReplace: [
            "minecraft:air",
            "minecraft:snow_layer",
            {
                tags: MoLang.anyTag("minecraft:leaves")
            },
            "minecraft:wildflowers",
            "minecraft:leaf_litter"
        ]
    }
});
