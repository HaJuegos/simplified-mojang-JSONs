import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SelectTaigaPlantFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.WeightedRandomFeature,
    idFeature: "minecraft:select_taiga_plant_feature",
    weightedRandom: {
        features: [
            [
                "minecraft:fern_feature",
                4
            ],
            [
                "minecraft:tall_grass_feature",
                1
            ]
        ]
    }
});
