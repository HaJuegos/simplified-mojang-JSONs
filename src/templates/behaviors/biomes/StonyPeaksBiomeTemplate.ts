import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const StonyPeaksBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:stony_peaks",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.3,
            temperature: 1.0
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
                midMaterial: "minecraft:stone",
                topMaterial: "minecraft:stone",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetSurfaceMaterialAdjustments({
            adjustments: [
                {
                    materials: {
                        midMaterial: "minecraft:calcite",
                        topMaterial: "minecraft:calcite"
                    },
                    noiseFrequencyScale: 0.015,
                    noiseRange: [
                        -0.0125,
                        0.0125
                    ]
                }
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "mountains",
                "monster",
                "overworld",
                "spawns_cold_variant_farm_animals"
            ]
        })
    ]
});
