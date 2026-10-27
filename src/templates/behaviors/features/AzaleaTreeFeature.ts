import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const AzaleaTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:azalea_tree_feature",
    tree: {
        acaciaTrunk: {
            trunkWidth: 1,
            trunkHeight: {
                base: 4,
                intervals: [2, 2],
                minHeightForCanopy: 3
            },
            trunkBlock: {
                name: "minecraft:oak_log"
            },
            trunkLean: {
                allowDiagonalGrowth: true,
                leanHeight: {
                    rangeMin: 2,
                    rangeMax: 3
                },
                leanSteps: {
                    rangeMin: 3,
                    rangeMax: 4
                },
                leanLength: {
                    rangeMin: 1,
                    rangeMax: 2
                }
            }
        },
        randomSpreadCanopy: {
            canopyHeight: 2,
            canopyRadius: 3,
            leafPlacementAttempts: 50,
            leafBlocks: [
                [
                    "minecraft:azalea_leaves",
                    3
                ],
                [
                    "minecraft:azalea_leaves_flowered",
                    1
                ]
            ]
        },
        mayGrowOn: [
            {
                tags: MoLang.anyTag("dirt")
            },
            "minecraft:clay"
        ],
        baseBlock: [
            "minecraft:dirt_with_roots"
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
            "minecraft:azalea",
            "minecraft:flowering_azalea",
            "minecraft:moss_carpet",
            "minecraft:short_grass",
            "minecraft:fern",
            "minecraft:grass_block",
            "minecraft:sunflower",
            "minecraft:lilac",
            "minecraft:tall_grass",
            "minecraft:large_fern",
            "minecraft:rose_bush",
            "minecraft:peony",
            "minecraft:wildflowers",
            "minecraft:leaf_litter"
        ]
    }
});
