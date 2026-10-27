import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const UnderwaterMagmaFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.PartiallyExposedBlobFeature,
    idFeature: "minecraft:underwater_magma_feature",
    partiallyExposedBlob: {
        placesBlock: "minecraft:magma",
        placementRadiusAroundFloor: 1,
        placementProbabilityPerValidPosition: 0.5,
        exposedFace: "up"
    }
});
