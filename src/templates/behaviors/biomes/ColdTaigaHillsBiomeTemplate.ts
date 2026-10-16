import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const ColdTaigaHillsBiomeTemplate = createBPBiome({
    idBiome: "minecraft:cold_taiga_hills",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.4,
            snowAccumulation: [
                0.125,
                0.5
            ],
            temperature: -0.5
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
        new BPBiomeComponents.SetVillageType({
            type: "taiga"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "cold",
                "forest",
                "hills",
                "monster",
                "overworld",
                "taiga",
                "spawns_cold_variant_farm_animals",
                "spawns_cold_variant_frogs",
                "spawns_white_rabbits"
            ]
        })
    ]
});
