import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const TaigaBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:taiga",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.8,
            snowAccumulation: [
                0.0,
                0.25
            ],
            temperature: 0.25
        }),
        new BPBiomeComponents.SetMultinoiseGenerationRules({
            targetTemperature: 0.0,
            targetHumidity: -0.4,
            targetAltitude: 0.0,
            targetWeirdness: 0.0,
            weight: 0.1
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "default"
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
        new BPBiomeComponents.SetOverworldGenerationRules({
            hillsTransformation: "minecraft:taiga_hills",
            mutateTransformation: "minecraft:taiga_mutated",
            generateForClimates: [
                [
                    "cold",
                    1
                ]
            ]
        }),
        new BPBiomeComponents.SetVillageType({
            type: "taiga"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "forest",
                "monster",
                "overworld",
                "taiga",
                "has_structure_trail_ruins",
                "spawns_cold_variant_farm_animals",
                "has_structure_abandoned_camp"
            ]
        })
    ]
});
