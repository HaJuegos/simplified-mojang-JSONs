import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { FeatureListTypes, VanillaFormatVersionsFeature } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @type {FinalFeatureBuilderTemplate}
 * @author HaJuegos - 22-10-2026
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
                    name: "minecraft:leaves",
                    states: {
                        oldLeafType: "oak"
                    }
                },
                {
                    name: "minecraft:leaves",
                    states: {
                        oldLeafType: "birch"
                    }
                }
            ],
            west: [
                {
                    name: "minecraft:log",
                    states: {
                        oldLogType: "oak"
                    }
                },
                {
                    name: "minecraft:log",
                    states: {
                        oldLogType: "birch"
                    }
                }
            ],
            north: [
                {
                    name: "minecraft:log",
                    states: {
                        oldLogType: "oak"
                    }
                },
                {
                    name: "minecraft:log",
                    states: {
                        oldLogType: "birch"
                    }
                }
            ],
            east: [
                {
                    name: "minecraft:log",
                    states: {
                        oldLogType: "oak"
                    }
                },
                {
                    name: "minecraft:log",
                    states: {
                        oldLogType: "birch"
                    }
                }
            ],
            south: "minecraft:air"
        }
    }
});
