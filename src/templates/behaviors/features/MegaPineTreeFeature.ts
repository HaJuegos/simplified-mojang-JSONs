import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const MegaPineTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:mega_pine_tree_feature",
    tree: {
        megaTrunk: {
            trunkWidth: 2,
            trunkHeight: {
                base: 13,
                intervals: [
                    3,
                    15
                ]
            },
            trunkBlock: {
                name: "minecraft:spruce_log"
            }
        },
        megaPineCanopy: {
            canopyHeight: {
                rangeMin: 3,
                rangeMax: 8
            },
            baseRadius: 0,
            radiusStepModifier: 3.5,
            coreWidth: 2,
            leafBlock: {
                name: "minecraft:spruce_leaves"
            }
        },
        mayGrowOn: [
            {
                tags: MoLang.anyTag("dirt")
            }
        ],
        baseBlock: [
            "minecraft:podzol"
        ],
        baseCluster: {
            mayReplace: [
                {
                    tags: MoLang.anyTag("dirt")
                }
            ],
            numClusters: 5,
            clusterRadius: 2
        },
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
