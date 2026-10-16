import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const PaleGardenBiomeTemplate = createBPBiome({
    idBiome: "minecraft:pale_garden",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.8,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.7
        }),
        new BPBiomeComponents.SetMapTints({
            grass: {
                type: "tint",
                tint: "#778272"
            },
            foliage: "#878d76"
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
        new BPBiomeComponents.SetTags({
            tags: [
                "monster",
                "overworld",
                "pale_garden",
                "has_structure_abandoned_camp"
            ]
        })
    ]
});
