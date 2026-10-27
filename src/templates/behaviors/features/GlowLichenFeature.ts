import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const GlowLichenFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.MultifaceFeature,
    idFeature: "minecraft:glow_lichen_feature",
    multiface: {
        searchRange: 20,
        placesBlock: "minecraft:glow_lichen",
        canPlaceOnFloor: false,
        canPlaceOnCeiling: true,
        canPlaceOnWall: true,
        chanceOfSpreading: 0.5,
        canPlaceOn: [
            "minecraft:stone",
            "minecraft:andesite",
            "minecraft:diorite",
            "minecraft:granite",
            "minecraft:dripstone_block",
            "minecraft:calcite",
            "minecraft:tuff",
            "minecraft:deepslate",
            "minecraft:sulfur",
            "minecraft:cinnabar"
        ]
    }
});
