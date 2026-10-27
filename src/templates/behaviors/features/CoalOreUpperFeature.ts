import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const CoalOreUpperFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.OreFeature,
    idFeature: "minecraft:coal_ore_upper_feature",
    ore: {
        count: 17,
        replaceRules: [
            {
                placesBlock: "minecraft:coal_ore",
                mayReplace: [
                    {
                        name: "minecraft:stone"
                    }
                ]
            },
            {
                placesBlock: "minecraft:deepslate_coal_ore",
                mayReplace: [
                    {
                        name: "minecraft:deepslate"
                    }
                ]
            }
        ]
    }
});
