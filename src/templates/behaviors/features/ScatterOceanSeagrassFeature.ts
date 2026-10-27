import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterOceanSeagrassFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_ocean_seagrass_feature",
    scatter: {
        iterations: 48,
        x: {
            distribution: "triangle",
            extent: [
                -8,
                8
            ]
        },
        y: MoLang.heightmap(MoLang.variable("worldx"), MoLang.variable("worldz")),
        z: {
            distribution: "triangle",
            extent: [
                -8,
                8
            ]
        },
        coordinateEvalOrder: "zxy",
        placesFeature: "minecraft:shortest_seagrass_feature"
    }
});
