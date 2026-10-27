import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const CreakingHeartFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:creaking_heart_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:creaking_heart",
            states: {
                pillarAxis: "y",
                creakingHeartState: "dormant",
                natural: true
            }
        },
        enforceSurvivabilityRules: false,
        enforcePlacementRules: false,
        mayAttachTo: {
            autoRotate: false,
            top: "minecraft:pale_oak_log",
            bottom: "minecraft:pale_oak_log",
            north: "minecraft:pale_oak_log",
            east: "minecraft:pale_oak_log",
            south: "minecraft:pale_oak_log",
            west: "minecraft:pale_oak_log"
        },
        mayReplace: [
            "minecraft:pale_oak_log"
        ]
    }
});
