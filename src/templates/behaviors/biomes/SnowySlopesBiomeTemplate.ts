import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const SnowySlopesBiomeTemplate = createBPBiome({
    idBiome: "minecraft:snowy_slopes",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.9,
            snowAccumulation: [
                0.125,
                0.5
            ],
            temperature: -0.3
        }),
        new BPBiomeComponents.SetMountainParameters({
            steepMaterialAdjustment: {
                material: "minecraft:stone",
                northSlopes: true,
                eastSlopes: true
            },
            topSlide: {
                enabled: false
            }
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:snow",
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
        new BPBiomeComponents.SetTags({
            tags: [
                "frozen",
                "mountains",
                "monster",
                "overworld",
                "spawns_cold_variant_frogs",
                "spawns_snow_foxes",
                "spawns_white_rabbits",
                "snowy_slopes",
                "spawns_cold_variant_farm_animals"
            ]
        })
    ]
});
