import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const LushCavesBiomeTemplate = createBPBiome({
    idBiome: "minecraft:lush_caves",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.0,
            temperature: 0.9
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "default"
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
                "caves",
                "lush_caves",
                "overworld",
                "monster",
                "spawns_tropical_fish_at_any_height"
            ]
        })
    ]
});
