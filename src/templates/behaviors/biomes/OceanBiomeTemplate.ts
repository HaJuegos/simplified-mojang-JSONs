import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const OceanBiomeTemplate = createBPBiome({
    idBiome: "minecraft:ocean",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.5,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.5
        }),
        new BPBiomeComponents.SetMultinoiseGenerationRules({
            targetTemperature: 0.0,
            targetHumidity: 0.1,
            targetAltitude: -0.1,
            targetWeirdness: 0.0,
            weight: 0.3
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "ocean"
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:dirt",
                topMaterial: "minecraft:grass_block",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetOverworldGenerationRules({
            hillsTransformation: "minecraft:deep_ocean",
            generateForClimates: [
                [
                    "medium",
                    1
                ]
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "monster",
                "ocean",
                "overworld",
                "fast_fishing",
                "high_seas"
            ]
        })
    ]
});
