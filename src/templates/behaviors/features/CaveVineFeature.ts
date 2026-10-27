import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const CaveVineFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.GrowingPlantFeature,
    idFeature: "minecraft:cave_vine_feature",
    growingPlant: {
        heightDistribution: [
            [
                {
                    rangeMin: 1,
                    rangeMax: 13
                },
                2
            ],
            [
                {
                    rangeMin: 1,
                    rangeMax: 2
                },
                3
            ],
            [
                {
                    rangeMin: 1,
                    rangeMax: 7
                },
                10
            ]
        ],
        growthDirection: "DOWN",
        age: {
            rangeMin: 17,
            rangeMax: 26
        },
        bodyBlocks: [
            [
                "minecraft:cave_vines",
                4
            ],
            [
                "minecraft:cave_vines_body_with_berries",
                1
            ]
        ],
        headBlocks: [
            [
                "minecraft:cave_vines",
                4
            ],
            [
                "minecraft:cave_vines_head_with_berries",
                1
            ]
        ]
    }
});
