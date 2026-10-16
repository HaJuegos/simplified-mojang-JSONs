import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const ColdTaigaBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:cold_taiga",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.4,
            snowAccumulation: [
                0.125,
                0.5
            ],
            temperature: -0.5
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "taiga"
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
            hillsTransformation: "minecraft:cold_taiga_hills",
            mutateTransformation: "minecraft:cold_taiga_mutated",
            generateForClimates: [
                [
                    "frozen",
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
                "cold",
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
