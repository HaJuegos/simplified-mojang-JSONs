import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const BirchForestBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:birch_forest",
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
        new BPBiomeComponents.SetOverworldGenerationRules({
            hillsTransformation: "minecraft:birch_forest_hills",
            mutateTransformation: "minecraft:birch_forest_mutated",
            generateForClimates: [
                [
                    "medium",
                    1
                ]
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "birch",
                "forest",
                "monster",
                "overworld",
                "bee_habitat",
                "has_structure_abandoned_camp"
            ]
        })
    ]
});
