import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const JungleEdgeBiomeTemplate = createBPBiome({
    idBiome: "minecraft:jungle_edge",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.8,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.95
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
            mutateTransformation: "minecraft:jungle_edge_mutated"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "edge",
                "jungle",
                "monster",
                "overworld",
                "spawns_jungle_mobs",
                "spawns_warm_variant_farm_animals",
                "has_structure_abandoned_camp"
            ]
        })
    ]
});
