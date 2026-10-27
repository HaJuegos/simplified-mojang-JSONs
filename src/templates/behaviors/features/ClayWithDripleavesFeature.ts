import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ClayWithDripleavesFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.VegetationPatchFeature,
    idFeature: "minecraft:clay_with_dripleaves_feature",
    vegetationPatch: {
        replaceableBlocks: [
            "minecraft:clay",
            "minecraft:sand",
            "minecraft:gravel",
            "minecraft:dirt",
            "minecraft:coarse_dirt",
            "minecraft:podzol",
            "minecraft:dirt_with_roots",
            "minecraft:grass",
            "minecraft:mycelium",
            "minecraft:stone",
            "minecraft:deepslate",
            "minecraft:tuff",
            "minecraft:moss_block",
            "minecraft:cave_vines",
            "minecraft:cave_vines_body_with_berries",
            "minecraft:cave_vines_head_with_berries"
        ],
        groundBlock: "minecraft:clay",
        vegetationFeature: "minecraft:dripleaf_feature",
        surface: "floor",
        depth: 3,
        verticalRange: 2,
        vegetationChance: 0.05,
        horizontalRadius: {
            rangeMin: 4,
            rangeMax: 8
        },
        extraDeepBlockChance: 0.8,
        extraEdgeColumnChance: 0.7
    }
});
