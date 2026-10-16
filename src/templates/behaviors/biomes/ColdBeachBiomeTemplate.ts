import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const ColdBeachBiomeTemplate = createBPBiome({
    idBiome: "minecraft:cold_beach",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.3,
            snowAccumulation: [
                0.125,
                0.25
            ],
            temperature: 0.05
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "beach"
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:sand",
                topMaterial: "minecraft:sand",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "beach",
                "cold",
                "monster",
                "overworld",
                "spawns_cold_variant_farm_animals",
                "spawns_cold_variant_frogs",
                "spawns_snow_foxes",
                "spawns_white_rabbits"
            ]
        })
    ]
});
