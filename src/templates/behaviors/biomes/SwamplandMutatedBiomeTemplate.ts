import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const SwamplandMutatedBiomeTemplate = createBPBiome({
    idBiome: "minecraft:swampland_mutated",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.5,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.8
        }),
        new BPBiomeComponents.SetMapTints({
            grass: {
                type: "noise"
            },
            foliage: "#6a7039"
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseParams: [
                -0.1,
                0.3
            ]
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:swamp",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:dirt",
                topMaterial: "minecraft:grass_block",
                seaMaterial: "minecraft:water",
                maxPuddleDepthBelowSeaLevel: 1
            }
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "monster",
                "mutated",
                "swamp",
                "overworld_generation",
                "spawns_slimes_on_surface",
                "slime",
                "swamp_water_huge_mushroom"
            ]
        })
    ]
});
