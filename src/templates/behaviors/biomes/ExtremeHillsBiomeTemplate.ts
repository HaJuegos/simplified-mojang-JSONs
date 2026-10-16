import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const ExtremeHillsBiomeTemplate = createBPBiome({
    idBiome: "minecraft:extreme_hills",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.3,
            snowAccumulation: [
                0.0,
                0.25
            ],
            temperature: 0.2
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "extreme"
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
        new BPBiomeComponents.SetSurfaceMaterialAdjustments({
            adjustments: [
                {
                    materials: {
                        midMaterial: "minecraft:stone",
                        topMaterial: "minecraft:stone"
                    },
                    noiseFrequencyScale: 0.0625,
                    noiseRange: [
                        0.121,
                        1.0
                    ]
                }
            ]
        }),
        new BPBiomeComponents.SetOverworldGenerationRules({
            hillsTransformation: "minecraft:extreme_hills_plus_trees",
            mutateTransformation: "minecraft:extreme_hills_mutated",
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
                "extreme_hills",
                "monster",
                "overworld",
                "spawns_cold_variant_farm_animals"
            ]
        })
    ]
});
