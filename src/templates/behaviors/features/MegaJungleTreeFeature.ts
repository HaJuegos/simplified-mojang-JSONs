import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const MegaJungleTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:mega_jungle_tree_feature",
    tree: {
        megaTrunk: {
            trunkWidth: 2,
            trunkHeight: {
                base: 10,
                intervals: [
                    3,
                    20
                ]
            },
            trunkBlock: {
                name: "minecraft:jungle_log"
            },
            trunkDecoration: {
                decorationBlock: "minecraft:vine",
                decorationChance: {
                    numerator: 1,
                    denominator: 3
                }
            },
            branches: {
                branchLength: 5,
                branchSlope: 0.5,
                branchInterval: {
                    rangeMin: 2,
                    rangeMax: 6
                },
                branchAltitudeFactor: {
                    min: 0.5,
                    max: 1.0
                },
                branchCanopy: {
                    megaCanopy: {
                        canopyHeight: {
                            rangeMin: 2,
                            rangeMax: 4
                        },
                        baseRadius: 1,
                        simplifyCanopy: true,
                        leafBlock: {
                            name: "minecraft:jungle_leaves"
                        }
                    }
                }
            }
        },
        megaCanopy: {
            canopyHeight: 3,
            baseRadius: 2,
            coreWidth: 2,
            leafBlock: {
                name: "minecraft:jungle_leaves"
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
