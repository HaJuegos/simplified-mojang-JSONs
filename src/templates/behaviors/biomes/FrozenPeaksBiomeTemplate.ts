import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const FrozenPeaksBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:frozen_peaks",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.9,
            snowAccumulation: [
                0.125,
                0.25
            ],
            temperature: -0.7
        }),
        new BPBiomeComponents.SetMountainParameters({
            steepMaterialAdjustment: {
                material: "minecraft:packed_ice",
                northSlopes: true,
                eastSlopes: true
            }
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:ice",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:snow",
                topMaterial: "minecraft:snow",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetSurfaceMaterialAdjustments({
            adjustments: [
                {
                    materials: {
                        midMaterial: "minecraft:packed_ice"
                    },
                    noiseFrequencyScale: 0.0625,
                    noiseRange: [
                        -0.5,
                        0.2
                    ]
                },
                {
                    materials: {
                        topMaterial: "minecraft:packed_ice"
                    },
                    noiseFrequencyScale: 0.0625,
                    noiseRange: [
                        0.0,
                        0.2
                    ]
                },
                {
                    materials: {
                        midMaterial: "minecraft:ice"
                    },
                    noiseFrequencyScale: 0.5,
                    noiseRange: [
                        -0.0625,
                        0.025
                    ]
                },
                {
                    materials: {
                        topMaterial: "minecraft:ice"
                    },
                    noiseFrequencyScale: 0.5,
                    noiseRange: [
                        0.0,
                        0.025
                    ]
                }
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "mountains",
                "monster",
                "overworld",
                "frozen",
                "frozen_peaks",
                "spawns_cold_variant_farm_animals",
                "spawns_cold_variant_frogs",
                "spawns_snow_foxes",
                "spawns_white_rabbits"
            ]
        })
    ]
});
