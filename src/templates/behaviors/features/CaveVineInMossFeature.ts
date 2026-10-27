import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const CaveVineInMossFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.GrowingPlantFeature,
    idFeature: "minecraft:cave_vine_in_moss_feature",
    growingPlant: {
        heightDistribution: [
            [
                {
                    rangeMin: 1,
                    rangeMax: 4
                },
                5
            ],
            [
                {
                    rangeMin: 2,
                    rangeMax: 7
                },
                1
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
