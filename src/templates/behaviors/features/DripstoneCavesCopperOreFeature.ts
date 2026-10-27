import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const DripstoneCavesCopperOreFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.OreFeature,
    idFeature: "minecraft:dripstone_caves_copper_ore_feature",
    ore: {
        count: 20,
        replaceRules: [
            {
                placesBlock: "minecraft:copper_ore",
                mayReplace: [
                    {
                        name: "minecraft:stone"
                    }
                ]
            },
            {
                placesBlock: "minecraft:deepslate_copper_ore",
                mayReplace: [
                    {
                        name: "minecraft:deepslate"
                    }
                ]
            }
        ]
    }
});
