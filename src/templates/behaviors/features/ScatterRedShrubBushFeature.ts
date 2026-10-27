import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ScatterRedShrubBushFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.MostRecent,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:scatter_red_shrub_bush_feature",
    scatter: {
        placesFeature: "minecraft:red_shrub_single_block_feature",
        distribution: {
            iterations: 8,
            x: {
                distribution: "triangle",
                extent: [
                    -7,
                    7
                ]
            },
            y: {
                distribution: "triangle",
                extent: [
                    -3,
                    3
                ]
            },
            z: {
                distribution: "triangle",
                extent: [
                    -7,
                    7
                ]
            }
        }
    }
});
