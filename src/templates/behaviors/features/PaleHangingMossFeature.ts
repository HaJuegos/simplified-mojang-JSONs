import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const PaleHangingMossFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.GrowingPlantFeature,
    idFeature: "minecraft:pale_hanging_moss_feature",
    growingPlant: {
        heightDistribution: [
            [
                {
                    rangeMin: 1,
                    rangeMax: 1
                },
                128
            ],
            [
                {
                    rangeMin: 2,
                    rangeMax: 2
                },
                64
            ],
            [
                {
                    rangeMin: 3,
                    rangeMax: 3
                },
                32
            ],
            [
                {
                    rangeMin: 4,
                    rangeMax: 4
                },
                16
            ],
            [
                {
                    rangeMin: 5,
                    rangeMax: 5
                },
                8
            ],
            [
                {
                    rangeMin: 6,
                    rangeMax: 6
                },
                4
            ],
            [
                {
                    rangeMin: 7,
                    rangeMax: 7
                },
                2
            ],
            [
                {
                    rangeMin: 8,
                    rangeMax: 8
                },
                1
            ]
        ],
        growthDirection: "DOWN",
        bodyBlocks: [
            [
                "minecraft:pale_hanging_moss",
                1
            ]
        ],
        headBlocks: [
            [
                {
                    name: "minecraft:pale_hanging_moss",
                    states: {
                        tip: true
                    }
                },
                1
            ]
        ],
        allowWater: false
    }
});
