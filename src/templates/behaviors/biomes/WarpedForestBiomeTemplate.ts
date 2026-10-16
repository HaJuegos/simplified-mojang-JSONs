import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const WarpedForestBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:warped_forest",
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
            targetHumidity: 0.5,
            targetAltitude: 0.0,
            targetWeirdness: 0.0,
            weight: 0.375
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 1,
                seaFloorMaterial: "minecraft:warped_nylium",
                foundationMaterial: "minecraft:netherrack",
                midMaterial: "minecraft:netherrack",
                topMaterial: "minecraft:warped_nylium",
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
                }
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "nether",
                "netherwart_forest",
                "warped_forest",
                "spawn_endermen",
                "spawns_warm_variant_farm_animals"
            ]
        })
    ]
});
