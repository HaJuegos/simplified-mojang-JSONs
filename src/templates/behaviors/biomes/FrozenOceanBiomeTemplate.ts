import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const FrozenOceanBiomeTemplate = createBPBiome({
    idBiome: "minecraft:frozen_ocean",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.5,
            snowAccumulation: [
                0.125,
                0.25
            ],
            temperature: 0.0
        }),
        new BPBiomeComponents.SetPartiallyFrozen(),
        new BPBiomeComponents.SetMultinoiseGenerationRules({
            targetTemperature: -1.5,
            targetHumidity: 1.0,
            targetAltitude: -0.2,
            targetWeirdness: 1.0,
            weight: 0.0
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:frozen_ocean",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:dirt",
                topMaterial: "minecraft:grass_block",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "ocean"
        }),
        new BPBiomeComponents.SetOverworldGenerationRules({
            generateForClimates: [
                [
                    "frozen",
                    1
                ]
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "frozen",
                "monster",
                "ocean",
                "overworld",
                "spawns_polar_bears_on_alternate_blocks",
                "spawns_cold_variant_farm_animals",
                "spawns_cold_variant_frogs",
                "spawns_snow_foxes",
                "spawns_white_rabbits",
                "fast_fishing",
                "high_seas"
            ]
        })
    ]
});
