import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SavannaTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:savanna_tree_feature",
    tree: {
        acaciaTrunk: {
            trunkWidth: 1,
            trunkHeight: {
                base: 5,
                intervals: [
                    3,
                    3
                ]
            },
            trunkBlock: {
                name: "minecraft:acacia_log"
            },
            trunkLean: {
                allowDiagonalGrowth: true,
                leanHeight: {
                    rangeMin: 1,
                    rangeMax: 5
                },
                leanSteps: {
                    rangeMin: 1,
                    rangeMax: 4
                }
            },
            branches: {
                branchChance: 100.0,
                branchLength: {
                    rangeMin: 1,
                    rangeMax: 4
                },
                branchPosition: {
                    rangeMin: 1,
                    rangeMax: 3
                },
                branchCanopy: {
                    acaciaCanopy: {
                        canopySize: 2,
                        leafBlock: {
                            name: "minecraft:acacia_leaves"
                        },
                        simplifyCanopy: true
                    }
                }
            }
        },
        acaciaCanopy: {
            canopySize: 3,
            leafBlock: {
                name: "minecraft:acacia_leaves"
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
