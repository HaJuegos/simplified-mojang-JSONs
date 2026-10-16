import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const BasaltDeltasBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:basalt_deltas",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.0,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 2.0
        }),
        new BPBiomeComponents.SetMultinoiseGenerationRules({
            targetTemperature: -0.5,
            targetHumidity: 0.0,
            targetAltitude: 0.0,
            targetWeirdness: 0.0,
            weight: 0.175
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:capped",
                floorMaterials: [
                    "minecraft:basalt",
                    "minecraft:blackstone"
                ],
                ceilingMaterials: [
                    "minecraft:basalt"
                ],
                seaMaterial: "minecraft:lava",
                foundationMaterial: "minecraft:netherrack"
            }
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "nether",
                "basalt_deltas",
                "spawn_many_magma_cubes",
                "spawn_ghast",
                "spawns_warm_variant_farm_animals"
            ]
        })
    ]
});
