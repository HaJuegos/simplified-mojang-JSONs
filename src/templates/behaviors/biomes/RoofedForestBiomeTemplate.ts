import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const RoofedForestBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:roofed_forest",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.8,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.7
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
            hillsTransformation: "minecraft:plains",
            mutateTransformation: "minecraft:roofed_forest_mutated",
            generateForClimates: [
                [
                    "medium",
                    1
                ]
            ]
        }),
        new BPBiomeComponents.SetHumidity({
            isHumid: true
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "forest",
                "monster",
                "no_legacy_worldgen",
                "overworld",
                "roofed"
            ]
        })
    ]
});
