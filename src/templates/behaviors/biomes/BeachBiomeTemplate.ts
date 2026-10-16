import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const BeachBiomeTemplate = createBPBiome({
    idBiome: "minecraft:beach",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.4,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.8
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
                "monster",
                "overworld",
                "warm"
            ]
        })
    ]
});
