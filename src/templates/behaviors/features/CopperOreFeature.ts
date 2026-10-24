import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const CopperOreFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.OreFeature,
    idFeature: "minecraft:copper_ore_feature",
    ore: {
        count: 9,
        replaceRules: [
            {
                placesBlock: "minecraft:copper_ore",
                mayReplace: [
                    {
                        name: "minecraft:stone"
                    }
                ]
            }
        ]
    }
});
