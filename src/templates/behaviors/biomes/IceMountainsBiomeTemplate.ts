import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const IceMountainsBiomeTemplate = createBPBiome({
    idBiome: "minecraft:ice_mountains",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.5,
            snowAccumulation: [
                0.375,
                1.5
            ],
            temperature: 0.0
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "mountains"
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
        new BPBiomeComponents.SetTags({
            tags: [
                "frozen",
                "ice",
                "mountain",
                "overworld",
                "spawns_cold_variant_farm_animals",
                "spawns_cold_variant_frogs",
                "spawns_snow_foxes",
                "spawns_white_rabbits"
            ]
        })
    ]
});
