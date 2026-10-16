import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const ExtremeHillsMutatedBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:extreme_hills_mutated",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.3,
            snowAccumulation: [
                0.0,
                0.125
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
                        midMaterial: "minecraft:gravel",
                        topMaterial: "minecraft:gravel"
                    },
                    noiseFrequencyScale: 0.0625,
                    noiseRange: [
                        -1.0,
                        -0.012
                    ]
                },
                {
                    materials: {
                        midMaterial: "minecraft:gravel",
                        topMaterial: "minecraft:gravel"
                    },
                    noiseFrequencyScale: 0.0625,
                    noiseRange: [
                        0.024,
                        1.0
                    ]
                }
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "extreme_hills",
                "monster",
                "mutated",
                "overworld",
                "spawns_cold_variant_farm_animals"
            ]
        })
    ]
});
