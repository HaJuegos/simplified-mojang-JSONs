import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const DiamondOreLargeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.OreFeature,
    idFeature: "minecraft:diamond_ore_large_feature",
    ore: {
        count: 12,
        discardChanceOnAirExposure: 0.7,
        replaceRules: [
            {
                placesBlock: "minecraft:diamond_ore",
                mayReplace: [
                    {
                        name: "minecraft:stone"
                    }
                ]
            },
            {
                placesBlock: "minecraft:deepslate_diamond_ore",
                mayReplace: [
                    {
                        name: "minecraft:deepslate"
                    }
                ]
            }
        ]
    }
});
