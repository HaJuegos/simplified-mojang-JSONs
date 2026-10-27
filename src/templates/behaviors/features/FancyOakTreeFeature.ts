import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const FancyOakTreeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.TreeFeature,
    idFeature: "minecraft:fancy_oak_tree_feature",
    tree: {
        fancyTrunk: {
            trunkHeight: {
                base: 5,
                variance: 12,
                scale: 0.618
            },
            trunkWidth: 1,
            trunkBlock: {
                name: "minecraft:oak_log"
            },
            branches: {
                slope: 0.381,
                density: 1.0,
                minAltitudeFactor: 0.2
            },
            widthScale: 1.0,
            foliageAltitudeFactor: 0.3
        },
        fancyCanopy: {
            height: 4,
            radius: 3,
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
