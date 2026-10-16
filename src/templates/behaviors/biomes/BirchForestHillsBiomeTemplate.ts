import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const BirchForestHillsBiomeTemplate = createBPBiome({
    idBiome: "minecraft:birch_forest_hills",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.6,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.6
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
        new BPBiomeComponents.SetOverworldGenerationRules({
            mutateTransformation: "minecraft:birch_forest_hills_mutated"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "birch",
                "forest",
                "hills",
                "monster",
                "overworld",
                "bee_habitat"
            ]
        })
    ]
});
