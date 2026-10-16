import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const SulfurCavesBiomeTemplate = createBPBiome({
    idBiome: "minecraft:sulfur_caves",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.4,
            temperature: 0.8
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "default"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "caves",
                "sulfur_caves",
                "overworld",
                "monster"
            ]
        }),
        new BPBiomeComponents.SetSubsurfaceBuilder({
            builder: {
                type: "minecraft:noise_gradient",
                noiseDescriptor: {
                    name: "minecraft:sulfur_cave_gradient",
                    firstOctave: -5,
                    amplitudes: [
                        1.0,
                        0.0,
                        1.0
                    ]
                },
                nonReplaceableBlocks: [
                    "minecraft:bedrock"
                ],
                noiseBlockSpecifiers: [
                    {
                        range: {
                            min: -0.4,
                            max: -0.1
                        },
                        block: "minecraft:cinnabar"
                    },
                    {
                        range: {
                            min: 0.0,
                            max: 0.4
                        },
                        block: "minecraft:sulfur"
                    },
                    {
                        range: {
                            min: 0.4,
                            max: 1.0
                        },
                        block: "minecraft:cinnabar"
                    }
                ]
            }
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:noise_gradient",
                noiseDescriptor: {
                    name: "minecraft:sulfur_cave_gradient",
                    firstOctave: -5,
                    amplitudes: [
                        1.0,
                        0.0,
                        1.0
                    ]
                },
                nonReplaceableBlocks: [
                    "minecraft:bedrock"
                ],
                noiseBlockSpecifiers: [
                    {
                        range: {
                            min: -0.4,
                            max: -0.1
                        },
                        block: "minecraft:cinnabar"
                    },
                    {
                        range: {
                            min: 0.0,
                            max: 0.4
                        },
                        block: "minecraft:sulfur"
                    },
                    {
                        range: {
                            min: 0.4,
                            max: 1.0
                        },
                        block: "minecraft:cinnabar"
                    }
                ]
            }
        })
    ]
});
