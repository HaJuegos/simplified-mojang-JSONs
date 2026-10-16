import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const HellBiomeTemplate = createBPBiome({
    idBiome: "minecraft:hell",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.0,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 2.0
        }),
        new BPBiomeComponents.SetMultinoiseGenerationRules({
            targetTemperature: 0.0,
            targetHumidity: 0.0,
            targetAltitude: 0.0,
            targetWeirdness: 0.0,
            weight: 0.0
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:netherrack",
                foundationMaterial: "minecraft:netherrack",
                midMaterial: "minecraft:netherrack",
                topMaterial: "minecraft:netherrack",
                seaMaterial: "minecraft:lava"
            }
        }),
        new BPBiomeComponents.SetSurfaceMaterialAdjustments({
            adjustments: [
                {
                    materials: {
                        topMaterial: "minecraft:gravel",
                        seaFloorMaterial: "minecraft:gravel"
                    },
                    heightRange: [
                        "variable.sea_level - 3",
                        "variable.sea_level + 2"
                    ],
                    noiseFrequencyScale: 0.03125,
                    noiseRange: [
                        -1.0,
                        -0.4
                    ]
                },
                {
                    materials: {
                        topMaterial: "minecraft:soul_sand",
                        midMaterial: "minecraft:soul_sand",
                        seaFloorMaterial: "minecraft:soul_sand"
                    },
                    heightRange: [
                        "variable.sea_level - 3",
                        "variable.sea_level + 2"
                    ],
                    noiseFrequencyScale: 0.03125,
                    noiseRange: [
                        0.4,
                        1.0
                    ]
                }
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "nether",
                "nether_wastes",
                "spawn_endermen",
                "spawn_few_piglins",
                "spawn_ghast",
                "spawn_magma_cubes",
                "spawns_nether_mobs",
                "spawn_zombified_piglin",
                "spawns_warm_variant_farm_animals"
            ]
        })
    ]
});
