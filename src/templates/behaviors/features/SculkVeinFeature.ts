import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SculkVeinFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.MultifaceFeature,
    idFeature: "minecraft:sculk_vein_feature",
    multiface: {
        searchRange: 20,
        placesBlock: "minecraft:sculk_vein",
        canPlaceOnFloor: true,
        canPlaceOnCeiling: true,
        canPlaceOnWall: true,
        chanceOfSpreading: 1.0,
        canPlaceOn: [
            "minecraft:stone",
            "minecraft:deepslate",
            "minecraft:cobbled_deepslate",
            "minecraft:deepslate_tiles",
            "minecraft:cracked_deepslate_tiles",
            "minecraft:deepslate_bricks",
            "minecraft:cracked_deepslate_bricks",
            "minecraft:tuff",
            "minecraft:planks"
        ]
    }
});
