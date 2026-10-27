import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const TallMangroveTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:tall_mangrove_tree_feature",
    tree: {
        mangroveRoots: {
            maxRootWidth: 8,
            maxRootLength: 15,
            yOffset: {
                rangeMin: 5,
                rangeMax: 8
            },
            rootBlock: {
                name: "minecraft:mangrove_roots"
            },
            muddyRootBlock: {
                name: "minecraft:muddy_mangrove_roots"
            },
            mudBlock: {
                name: "minecraft:mud"
            },
            aboveRoot: {
                aboveRootBlock: "minecraft:moss_carpet",
                aboveRootChance: {
                    numerator: 1,
                    denominator: 2
                }
            },
            rootsMayGrowThrough: [
                "minecraft:air",
                "minecraft:snow_layer",
                "minecraft:mud",
                "minecraft:mangrove_roots",
                "minecraft:muddy_mangrove_roots",
                "minecraft:water",
                "minecraft:flowing_water",
                "minecraft:vine",
                "minecraft:moss_carpet",
                "minecraft:mangrove_propagule"
            ]
        },
        mangroveTrunk: {
            trunkWidth: 1,
            trunkHeight: {
                base: 4,
                heightRandA: 1,
                heightRandB: 9
            },
            trunkBlock: {
                name: "minecraft:mangrove_log"
            },
            branches: {
                branchChance: 100.0,
                branchLength: {
                    rangeMin: 0,
                    rangeMax: 1
                },
                branchSteps: {
                    rangeMin: 1,
                    rangeMax: 6
                }
            }
        },
        mangroveCanopy: {
            canopyHeight: 2,
            canopyRadius: 3,
            leafPlacementAttempts: 70,
            leafBlocks: [
                [
                    "minecraft:mangrove_leaves",
                    1
                ]
            ],
            canopyDecoration: {
                decorationBlock: "minecraft:vine",
                decorationChance: {
                    numerator: 1,
                    denominator: 4
                },
                numSteps: 4,
                stepDirection: "down"
            },
            hangingBlock: {
                name: "minecraft:mangrove_propagule",
                states: {
                    hanging: true
                }
            },
            hangingBlockPlacementChance: {
                numerator: 1,
                denominator: 7
            }
        },
        mayGrowOn: [
            {
                tags: MoLang.anyTag("dirt")
            },
            "minecraft:clay"
        ],
        baseBlock: [
            "minecraft:mud"
        ],
        mayGrowThrough: [
            {
                tags: MoLang.anyTag("dirt")
            },
            "minecraft:clay"
        ],
        mayReplace: [
            "minecraft:air",
            "minecraft:snow_layer",
            {
                tags: MoLang.anyTag("minecraft:leaves")
            },
            "minecraft:water",
            "minecraft:flowing_water",
            "minecraft:vine",
            "minecraft:moss_carpet",
            "minecraft:mangrove_propagule",
            "minecraft:wildflowers",
            "minecraft:leaf_litter"
        ]
    }
});
