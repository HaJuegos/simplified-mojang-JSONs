import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const SunflowerPlainsBiomeTemplate = createBPBiome({
    idBiome: "minecraft:sunflower_plains",
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
            noiseType: "lowlands"
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
            type: "default"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "monster",
                "mutated",
                "overworld",
                "plains",
                "bee_habitat"
            ]
        })
    ]
});
