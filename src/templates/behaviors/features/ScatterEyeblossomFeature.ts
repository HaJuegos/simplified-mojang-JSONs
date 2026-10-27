import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterEyeblossomFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_16_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_eyeblossom_feature",
    scatter: {
        iterations: 5,
        scatterChance: {
            numerator: 1,
            denominator: 8
        },
        x: {
            distribution: "gaussian",
            extent: [
                0,
                8
            ]
        },
        y: MoLang.heightmap(MoLang.variable("worldx"), MoLang.variable("worldz")),
        z: {
            distribution: "gaussian",
            extent: [
                0,
                8
            ]
        },
        placesFeature: "minecraft:eyeblossom_feature"
    }
});
