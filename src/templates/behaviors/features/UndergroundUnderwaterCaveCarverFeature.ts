import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const UndergroundUnderwaterCaveCarverFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_100,
    typeFeature: FeatureListTypes.UnderwaterCaveCarverFeature,
    idFeature: "minecraft:underground_underwater_cave_carver_feature",
    underwaterCaveCarver: {
        fillWith: "minecraft:water",
        widthModifier: 0.0,
        replaceAirWith: "minecraft:water",
        skipCarveChance: 15,
        yScale: [
            0.5,
            0.5
        ],
        heightLimit: 120,
        horizontalRadiusMultiplier: [
            1.0,
            1.0
        ],
        verticalRadiusMultiplier: [
            1.0,
            1.0
        ],
        floorLevel: [
            -0.7,
            -0.7
        ]
    }
});
