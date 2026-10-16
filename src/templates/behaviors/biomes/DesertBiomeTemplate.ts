import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const DesertBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:desert",
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
            targetTemperature: 0.4,
            targetHumidity: -0.4,
            targetAltitude: 0.0,
            targetWeirdness: 0.0,
            weight: 0.1
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "lowlands"
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:sand",
                topMaterial: "minecraft:sand",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetOverworldGenerationRules({
            hillsTransformation: "minecraft:desert_hills",
            mutateTransformation: "minecraft:desert_mutated",
            generateForClimates: [
                [
                    "warm",
                    3
                ]
            ]
        }),
        new BPBiomeComponents.SetVillageType({
            type: "desert"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "desert",
                "monster",
                "overworld",
                "spawns_gold_rabbits",
                "spawns_warm_variant_farm_animals",
                "spawns_warm_variant_frogs"
            ]
        })
    ]
});
