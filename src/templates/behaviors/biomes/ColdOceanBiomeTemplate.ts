import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const ColdOceanBiomeTemplate = createBPBiome({
    idBiome: "minecraft:cold_ocean",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.5,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.5
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
            generateForClimates: [
                [
                    "cold",
                    1
                ]
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "cold",
                "monster",
                "ocean",
                "overworld",
                "spawns_cold_variant_farm_animals",
                "fast_fishing",
                "high_seas"
            ]
        })
    ]
});
