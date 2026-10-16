import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const JungleMutatedBiomeTemplate = createBPBiome({
    idBiome: "minecraft:jungle_mutated",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.9,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.95
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "default_mutated"
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
                "animal",
                "jungle",
                "monster",
                "mutated",
                "overworld_generation",
                "spawns_warm_variant_farm_animals"
            ]
        })
    ]
});
