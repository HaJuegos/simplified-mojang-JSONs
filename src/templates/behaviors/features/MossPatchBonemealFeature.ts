import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const MossPatchBonemealFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.VegetationPatchFeature,
    idFeature: "minecraft:moss_patch_bonemeal_feature",
    vegetationPatch: {
        replaceableBlocks: [
            "minecraft:dirt",
            "minecraft:coarse_dirt",
            "minecraft:podzol",
            "minecraft:dirt_with_roots",
            "minecraft:grass_block",
            "minecraft:mycelium",
            {
                name: "minecraft:stone",
                states: {
                    stoneType: 0
                }
            },
            "minecraft:granite",
            "minecraft:diorite",
            "minecraft:andesite",
            "minecraft:deepslate",
            "minecraft:tuff",
            "minecraft:moss_block",
            "minecraft:pale_moss_block"
        ],
        groundBlock: "minecraft:moss_block",
        vegetationFeature: "minecraft:moss_vegetation_feature",
        surface: "floor",
        depth: {
            rangeMin: 1,
            rangeMax: 2
        },
        verticalRange: 5,
        vegetationChance: 0.6,
        horizontalRadius: {
            rangeMin: 1,
            rangeMax: 3
        },
        extraEdgeColumnChance: 0.75
    }
});
