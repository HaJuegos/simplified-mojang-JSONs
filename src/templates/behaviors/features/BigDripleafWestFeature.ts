import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const BigDripleafWestFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.GrowingPlantFeature,
    idFeature: "minecraft:big_dripleaf_west_feature",
    growingPlant: {
        heightDistribution: [
            [
                {
                    rangeMin: 1,
                    rangeMax: 6
                },
                2
            ],
            [
                {
                    rangeMin: 1,
                    rangeMax: 2
                },
                1
            ]
        ],
        growthDirection: "UP",
        bodyBlocks: [
            [
                {
                    name: "minecraft:big_dripleaf",
                    states: {
                        bigDripleafHead: false,
                        direction: 1
                    }
                },
                1
            ]
        ],
        headBlocks: [
            [
                {
                    name: "minecraft:big_dripleaf",
                    states: {
                        bigDripleafHead: true,
                        direction: 1
                    }
                },
                1
            ]
        ],
        allowWater: true
    }
});
