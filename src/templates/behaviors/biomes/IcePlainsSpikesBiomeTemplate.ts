import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const IcePlainsSpikesBiomeTemplate = createBPBiome({
    idBiome: "minecraft:ice_plains_spikes",
    components: [
        new BPBiomeComponents.SetCreatureSpawnProbability({
            probability: 0.07
        }),
        new BPBiomeComponents.SetClimate({
            downfall: 1.0,
            snowAccumulation: [
                0.5,
                1.5
            ],
            temperature: 0.0
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseParams: [
                0.425,
                0.45
            ]
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:dirt",
                topMaterial: "minecraft:snow",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "frozen",
                "ice_plains",
                "monster",
                "mutated",
                "overworld",
                "spawns_cold_variant_farm_animals",
                "spawns_cold_variant_frogs",
                "spawns_white_rabbits"
            ]
        })
    ]
});
