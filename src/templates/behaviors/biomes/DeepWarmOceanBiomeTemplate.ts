import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const DeepWarmOceanBiomeTemplate = createBPBiome({
    idBiome: "minecraft:deep_warm_ocean",
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
            noiseType: "deep_ocean"
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 3,
                seaFloorMaterial: "minecraft:sand",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:dirt",
                topMaterial: "minecraft:grass_block",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "deep",
                "monster",
                "ocean",
                "overworld",
                "warm",
                "spawns_warm_variant_farm_animals",
                "fast_fishing",
                "high_seas",
                "temperate_ocean"
            ]
        })
    ]
});
