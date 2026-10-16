import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const StoneBeachBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:stone_beach",
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
            noiseType: "stone_beach"
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:stone",
                topMaterial: "minecraft:stone",
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
                    noiseFrequencyScale: 0.03175,
                    noiseRange: [
                        -0.05,
                        0.05
                    ]
                }
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "beach",
                "monster",
                "overworld",
                "stone"
            ]
        })
    ]
});
