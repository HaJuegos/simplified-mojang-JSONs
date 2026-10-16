import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const CrimsonForestBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:crimson_forest",
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
            targetTemperature: 0.4,
            targetHumidity: 0.0,
            targetAltitude: 0.0,
            targetWeirdness: 0.0,
            weight: 0.0
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 1,
                seaFloorMaterial: "minecraft:crimson_nylium",
                foundationMaterial: "minecraft:netherrack",
                midMaterial: "minecraft:netherrack",
                topMaterial: "minecraft:crimson_nylium",
                seaMaterial: "minecraft:lava"
            }
        }),
        new BPBiomeComponents.SetSurfaceMaterialAdjustments({
            adjustments: [
                {
                    materials: {
                        topMaterial: "minecraft:netherrack",
                        seaFloorMaterial: "minecraft:netherrack"
                    },
                    noiseFrequencyScale: 0.1,
                    noiseRange: [
                        0.4,
                        1.0
                    ]
                },
                {
                    materials: {
                        topMaterial: "minecraft:nether_wart_block",
                        seaFloorMaterial: "minecraft:nether_wart_block"
                    },
                    noiseRange: [
                        -0.75,
                        -0.5
                    ]
                }
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "nether",
                "netherwart_forest",
                "crimson_forest",
                "spawn_few_zombified_piglins",
                "spawn_piglin",
                "spawns_warm_variant_farm_animals"
            ]
        })
    ]
});
