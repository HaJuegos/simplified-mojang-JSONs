import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const GroveBiomeTemplate = createBPBiome({
    idBiome: "minecraft:grove",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.8,
            snowAccumulation: [
                0.125,
                0.25
            ],
            temperature: -0.2
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:dirt",
                topMaterial: "minecraft:snow",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetSurfaceMaterialAdjustments({
            adjustments: [
                {
                    materials: {
                        topMaterial: "minecraft:powder_snow"
                    },
                    noiseFrequencyScale: 0.1,
                    noiseRange: [
                        0.35,
                        0.6
                    ]
                },
                {
                    materials: {
                        midMaterial: "minecraft:powder_snow"
                    },
                    noiseFrequencyScale: 0.1,
                    noiseRange: [
                        0.45,
                        0.58
                    ]
                }
            ]
        }),
        new BPBiomeComponents.SetMountainParameters({
            topSlide: {
                enabled: false
            }
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "mountains",
                "cold",
                "monster",
                "overworld",
                "grove",
                "spawns_cold_variant_farm_animals",
                "spawns_cold_variant_frogs",
                "spawns_snow_foxes",
                "spawns_white_rabbits"
            ]
        })
    ]
});
