import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const DioriteFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.OreFeature,
    idFeature: "minecraft:diorite_feature",
    ore: {
        count: 64,
        replaceRules: [
            {
                placesBlock: {
                    name: "minecraft:stone",
                    states: {
                        stoneType: "diorite"
                    }
                },
                mayReplace: [
                    {
                        name: "minecraft:stone"
                    }
                ]
            }
        ]
    }
});
