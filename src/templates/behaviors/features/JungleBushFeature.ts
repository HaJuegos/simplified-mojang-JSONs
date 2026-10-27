import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const JungleBushFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:jungle_bush_feature",
    tree: {
        trunk: {
            trunkHeight: 1,
            trunkBlock: {
                name: "minecraft:jungle_log"
            }
        },
        canopy: {
            canopyOffset: {
                min: -1,
                max: 1
            },
            leafBlock: {
                name: "minecraft:oak_leaves"
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
        mayGrowOn: [
            {
                tags: MoLang.anyTag("dirt")
            },
            "minecraft:clay"
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
