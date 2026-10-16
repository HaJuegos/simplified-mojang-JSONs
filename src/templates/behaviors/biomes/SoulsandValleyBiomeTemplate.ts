import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const SoulsandValleyBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:soulsand_valley",
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
            targetTemperature: 0.0,
            targetHumidity: -0.5,
            targetAltitude: 0.0,
            targetWeirdness: 0.0,
            weight: 0.0
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:capped",
                floorMaterials: [
                    "minecraft:soul_sand",
                    "minecraft:soul_soil"
                ],
                ceilingMaterials: [
                    "minecraft:soul_sand",
                    "minecraft:soul_soil"
                ],
                seaMaterial: "minecraft:lava",
                beachMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:netherrack"
            }
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "nether",
                "soulsand_valley",
                "spawn_ghast",
                "spawn_endermen",
                "spawns_warm_variant_farm_animals"
            ]
        })
    ]
});
