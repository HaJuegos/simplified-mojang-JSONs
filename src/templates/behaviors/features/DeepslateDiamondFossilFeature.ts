import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const DeepslateDiamondFossilFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.FossilFeature,
    idFeature: "minecraft:deepslate_diamond_fossil_feature",
    fossil: {
        oreBlock: "minecraft:deepslate_diamond_ore",
        maxEmptyCorners: 4
    }
});
