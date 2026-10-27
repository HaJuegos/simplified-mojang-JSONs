import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const TuffFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.OreFeature,
    idFeature: "minecraft:tuff_feature",
    ore: {
        count: 64,
        replaceRules: [
            {
                placesBlock: {
                    name: "minecraft:tuff"
                },
                mayReplace: [
                    {
                        name: "minecraft:stone"
                    },
                    {
                        name: "minecraft:deepslate"
                    }
                ]
            }
        ]
    }
});
