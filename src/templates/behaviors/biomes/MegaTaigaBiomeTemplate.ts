import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const MegaTaigaBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:mega_taiga",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.8,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.3
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "taiga"
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
                        topMaterial: {
                            name: "minecraft:dirt",
                            states: {
                                dirtType: "coarse"
                            }
                        }
                    },
                    noiseFrequencyScale: 0.0625,
                    noiseRange: [
                        0.212,
                        1.0
                    ]
                },
                {
                    materials: {
                        topMaterial: "minecraft:podzol"
                    },
                    noiseFrequencyScale: 0.0625,
                    noiseRange: [
                        -0.115,
                        0.212
                    ]
                }
            ]
        }),
        new BPBiomeComponents.SetOverworldGenerationRules({
            hillsTransformation: "minecraft:mega_taiga_hills",
            mutateTransformation: "minecraft:redwood_taiga_mutated",
            generateForClimates: [
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
                "mega",
                "monster",
                "overworld",
                "rare",
                "taiga",
                "has_structure_trail_ruins",
                "spawns_cold_variant_farm_animals",
                "has_structure_abandoned_camp"
            ]
        })
    ]
});
