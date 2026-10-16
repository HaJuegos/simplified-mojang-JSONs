import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const ColdTaigaMutatedBiomeTemplate = createBPBiome({
    idBiome: "minecraft:cold_taiga_mutated",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.4,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: -0.5
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseParams: [
                0.3,
                0.4
            ]
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
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "cold",
                "forest",
                "monster",
                "mutated",
                "taiga",
                "overworld_generation",
                "spawns_cold_variant_farm_animals"
            ]
        })
    ]
});
