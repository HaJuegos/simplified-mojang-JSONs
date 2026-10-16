import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const ForestBiomeTemplate = createBPBiome({
    idBiome: "minecraft:forest",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.8,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.7
        }),
        new BPBiomeComponents.SetMultinoiseGenerationRules({
            targetTemperature: 0.0,
            targetHumidity: 0.5,
            targetAltitude: 0.0,
            targetWeirdness: 0.0,
            weight: 0.375
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
            hillsTransformation: "minecraft:forest_hills",
            mutateTransformation: "minecraft:flower_forest",
            generateForClimates: [
                [
                    "medium",
                    1
                ],
                [
                    "cold",
                    1
                ]
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "forest",
                "monster",
                "overworld",
                "bee_habitat",
                "has_structure_abandoned_camp",
                "oak_forest"
            ]
        })
    ]
});
