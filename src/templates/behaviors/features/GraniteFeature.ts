import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const GraniteFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.OreFeature,
    idFeature: "minecraft:granite_feature",
    ore: {
        count: 33,
        replaceRules: [
            {
                placesBlock: {
                    name: "minecraft:stone",
                    states: {
                        stoneType: "granite"
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
