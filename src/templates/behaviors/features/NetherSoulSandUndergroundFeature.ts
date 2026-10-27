import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const NetherSoulSandUndergroundFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.OreFeature,
    idFeature: "minecraft:nether_soul_sand_underground_feature",
    ore: {
        count: 12,
        replaceRules: [
            {
                placesBlock: "minecraft:soul_sand",
                mayReplace: [
                    {
                        name: "minecraft:netherrack",
                        states: {}
                    }
                ]
            }
        ]
    }
});
