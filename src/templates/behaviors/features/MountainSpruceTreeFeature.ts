import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const MountainSpruceTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:mountain_spruce_tree_feature",
    tree: {
        trunk: {
            trunkHeight: {
                rangeMin: 6,
                rangeMax: 10
            },
            heightModifier: {
                rangeMin: -2,
                rangeMax: 1
            },
            trunkBlock: {
                name: "minecraft:spruce_log"
            }
        },
        spruceCanopy: {
            lowerOffset: {
                rangeMin: 1,
                rangeMax: 3
            },
            upperOffset: {
                rangeMin: 0,
                rangeMax: 3
            },
            maxRadius: {
                rangeMin: 2,
                rangeMax: 4
            },
            leafBlock: {
                name: "minecraft:spruce_leaves"
            }
        },
        mayGrowOn: [
            {
                tags: MoLang.anyTag("dirt")
            },
            "minecraft:snow"
        ],
        baseBlock: [
            "minecraft:dirt",
            "minecraft:coarse_dirt"
        ],
        mayGrowThrough: [
            {
                tags: MoLang.anyTag("dirt")
            },
            "minecraft:snow"
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
