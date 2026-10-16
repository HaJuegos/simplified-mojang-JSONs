import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const SavannaBiomeTemplate = createBPBiome({
    idBiome: "minecraft:savanna",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.0,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 1.2
        }),
        new BPBiomeComponents.SetMultinoiseGenerationRules({
            targetTemperature: 0.1,
            targetHumidity: -0.1,
            targetAltitude: 0.0,
            targetWeirdness: 0.1,
            weight: 0.2
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
                midMaterial: "minecraft:dirt",
                topMaterial: "minecraft:grass_block",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetOverworldGenerationRules({
            hillsTransformation: "minecraft:savanna_plateau",
            mutateTransformation: "minecraft:savanna_mutated",
            generateForClimates: [
                [
                    "warm",
                    2
                ]
            ]
        }),
        new BPBiomeComponents.SetVillageType({
            type: "savanna"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "monster",
                "overworld",
                "savanna",
                "spawns_savanna_mobs",
                "spawns_warm_variant_farm_animals",
                "has_structure_abandoned_camp"
            ]
        })
    ]
});
