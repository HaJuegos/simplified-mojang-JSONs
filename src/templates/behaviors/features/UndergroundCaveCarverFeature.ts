import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const UndergroundCaveCarverFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_100,
    typeFeature: FeatureListTypes.CaveCarverFeature,
    idFeature: "minecraft:underground_cave_carver_feature",
    caveCarver: {
        fillWith: "minecraft:air",
        widthModifier: 0.0,
        skipCarveChance: 33,
        yScale: [
            0.1,
            0.9
        ],
        heightLimit: 236,
        horizontalRadiusMultiplier: [
            0.7,
            1.4
        ],
        verticalRadiusMultiplier: [
            0.8,
            1.3
        ],
        floorLevel: [
            -1.0,
            -0.4
        ]
    }
});
