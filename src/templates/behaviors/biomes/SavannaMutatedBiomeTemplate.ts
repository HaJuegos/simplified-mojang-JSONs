import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const SavannaMutatedBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:savanna_mutated",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.0,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 2.0
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseParams: [
                0.3625,
                1.225
            ]
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
                        0.212,
                        1.0
                    ]
                },
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
                        -0.061,
                        0.212
                    ]
                }
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "monster",
                "mutated",
                "overworld",
                "savanna",
                "spawns_savanna_mobs",
                "spawns_warm_variant_farm_animals"
            ]
        })
    ]
});
