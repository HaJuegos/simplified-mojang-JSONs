import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const JaggedPeaksBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:jagged_peaks",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.9,
            snowAccumulation: [
                0.125,
                0.25
            ],
            temperature: -0.7
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
                seaFloorMaterial: "minecraft:stone",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:stone",
                topMaterial: "minecraft:snow",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "mountains",
                "monster",
                "overworld",
                "frozen",
                "jagged_peaks",
                "spawns_cold_variant_farm_animals",
                "spawns_cold_variant_frogs",
                "spawns_snow_foxes",
                "spawns_white_rabbits"
            ]
        })
    ]
});
