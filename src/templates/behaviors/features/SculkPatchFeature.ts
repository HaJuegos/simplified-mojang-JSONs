import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SculkPatchFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.SculkPatchFeature,
    idFeature: "minecraft:sculk_patch_feature",
    sculkPatch: {
        canPlaceSculkPatchOn: [],
        centralBlock: "minecraft:sculk_catalyst",
        centralBlockPlacementChance: 0.5,
        cursorCount: 10,
        chargeAmount: 32,
        spreadAttempts: 64,
        growthRounds: 0,
        spreadRounds: 1
    }
});
