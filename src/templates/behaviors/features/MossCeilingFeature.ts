import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const MossCeilingFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.VegetationPatchFeature,
    idFeature: "minecraft:moss_ceiling_feature",
    vegetationPatch: {
        replaceableBlocks: [
            "minecraft:dirt",
            "minecraft:coarse_dirt",
            "minecraft:podzol",
            "minecraft:dirt_with_roots",
            "minecraft:grass_block",
            "minecraft:mycelium",
            "minecraft:stone",
            "minecraft:granite",
            "minecraft:polished_granite",
            "minecraft:diorite",
            "minecraft:polished_diorite",
            "minecraft:andesite",
            "minecraft:polished_andesite",
            "minecraft:deepslate",
            "minecraft:tuff",
            "minecraft:moss_block",
            "minecraft:cave_vines",
            "minecraft:cave_vines_body_with_berries",
            "minecraft:cave_vines_head_with_berries"
        ],
        groundBlock: "minecraft:moss_block",
        vegetationFeature: "minecraft:cave_vine_in_moss_feature",
        surface: "ceiling",
        depth: {
            rangeMin: 1,
            rangeMax: 3
        },
        verticalRange: 5,
        vegetationChance: 0.08,
        horizontalRadius: {
            rangeMin: 4,
            rangeMax: 8
        },
        extraEdgeColumnChance: 0.3
    }
});
