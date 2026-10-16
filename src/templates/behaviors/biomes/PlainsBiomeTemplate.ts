import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const PlainsBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:plains",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.4,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.8
        }),
        new BPBiomeComponents.SetMultinoiseGenerationRules({
            targetTemperature: 0.0,
            targetHumidity: 0.0,
            targetAltitude: 0.0,
            targetWeirdness: 0.0,
            weight: 0.4
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
        new BPBiomeComponents.SetOverworldGenerationRules({
            hillsTransformation: [
                [
                    "minecraft:forest_hills",
                    1
                ],
                [
                    "minecraft:forest",
                    2
                ]
            ],
            mutateTransformation: "minecraft:sunflower_plains",
            generateForClimates: [
                [
                    "medium",
                    3
                ],
                [
                    "warm",
                    1
                ],
                [
                    "cold",
                    1
                ]
            ]
        }),
        new BPBiomeComponents.SetVillageType({
            type: "default"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "monster",
                "overworld",
                "plains",
                "bee_habitat"
            ]
        })
    ]
});
