import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
 */
export const FossilFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.FossilFeature,
    idFeature: "minecraft:fossil_feature",
    fossil: {
        oreBlock: "minecraft:coal_ore",
        maxEmptyCorners: 4
    }
});
