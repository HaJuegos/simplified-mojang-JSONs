import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const BeehiveFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:beehive_feature",
    singleBlock: {
        placesBlock: {
            name: "minecraft:bee_nest",
            states: {
                direction: 0
            }
        },
        enforceSurvivabilityRules: true,
        enforcePlacementRules: true,
        mayAttachTo: {
            autoRotate: false,
            minSidesMustAttach: 2,
            top: [
                {
                    name: "minecraft:oak_leaves"
                },
                {
                    name: "minecraft:birch_leaves"
                },
                {
                    name: "minecraft:mangrove_leaves"
                },
                {
                    name: "minecraft:cherry_leaves"
                }
            ],
            west: [
                {
                    name: "minecraft:oak_log"
                },
                {
                    name: "minecraft:birch_log"
                },
                {
                    name: "minecraft:mangrove_roots"
                },
                {
                    name: "minecraft:cherry_log"
                }
            ],
            north: [
                {
                    name: "minecraft:oak_log"
                },
                {
                    name: "minecraft:birch_log"
                },
                {
                    name: "minecraft:mangrove_roots"
                },
                {
                    name: "minecraft:cherry_log"
                }
            ],
            east: [
                {
                    name: "minecraft:oak_log"
                },
                {
                    name: "minecraft:birch_log"
                },
                {
                    name: "minecraft:mangrove_roots"
                },
                {
                    name: "minecraft:cherry_log"
                }
            ],
            south: "minecraft:air"
        }
    }
});
