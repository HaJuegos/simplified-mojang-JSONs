import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SpruceTreeWithVinesFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:spruce_tree_with_vines_feature",
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
            },
            trunkDecoration: {
                decorationBlock: "minecraft:vine",
                decorationChance: 100.0
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
        baseBlock: [
            "minecraft:dirt",
            "minecraft:coarse_dirt"
        ],
        mayGrowOn: [
            "minecraft:dirt",
            "minecraft:grass_block",
            "minecraft:podzol",
            "minecraft:dirt_with_roots",
            "minecraft:moss_block",
            "minecraft:mycelium",
            "minecraft:mud",
            "minecraft:muddy_mangrove_roots",
            "minecraft:coarse_dirt",
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
                tags: MoLang.anyTag("minecraft:leaves")
            }
        ],
        mayGrowThrough: [
            "minecraft:dirt",
            "minecraft:grass_block",
            "minecraft:coarse_dirt"
        ]
    }
});
