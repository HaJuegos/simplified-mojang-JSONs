import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const IcePlainsBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:ice_plains",
    components: [
        new BPBiomeComponents.SetCreatureSpawnProbability({
            probability: 0.07
        }),
        new BPBiomeComponents.SetClimate({
            downfall: 0.5,
            snowAccumulation: [
                0.25,
                1.0
            ],
            temperature: 0.0
        }),
        new BPBiomeComponents.SetMultinoiseGenerationRules({
            targetTemperature: -1.0,
            targetHumidity: 1.0,
            targetAltitude: 0.2,
            targetWeirdness: 1.0,
            weight: 0.0
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "lowlands"
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
            hillsTransformation: "minecraft:ice_mountains",
            mutateTransformation: "minecraft:ice_plains_spikes",
            generateForClimates: [
                [
                    "frozen",
                    3
                ]
            ]
        }),
        new BPBiomeComponents.SetVillageType({
            type: "ice"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "frozen",
                "ice",
                "ice_plains",
                "overworld",
                "spawns_cold_variant_farm_animals",
                "spawns_cold_variant_frogs",
                "spawns_snow_foxes",
                "spawns_white_rabbits"
            ]
        })
    ]
});
