import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const LapisOreBuriedFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.OreFeature,
    idFeature: "minecraft:lapis_ore_buried_feature",
    ore: {
        count: 7,
        discardChanceOnAirExposure: 1.0,
        replaceRules: [
            {
                placesBlock: "minecraft:lapis_ore",
                mayReplace: [
                    {
                        name: "minecraft:stone"
                    }
                ]
            },
            {
                placesBlock: "minecraft:deepslate_lapis_ore",
                mayReplace: [
                    {
                        name: "minecraft:deepslate"
                    }
                ]
            }
        ]
    }
});
