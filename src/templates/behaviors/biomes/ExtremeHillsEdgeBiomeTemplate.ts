import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const ExtremeHillsEdgeBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:extreme_hills_edge",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.3,
            snowAccumulation: [
                0.0,
                0.25
            ],
            temperature: 0.2
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "less_extreme"
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
                "edge",
                "extreme_hills",
                "monster",
                "mountain",
                "overworld",
                "spawns_cold_variant_farm_animals"
            ]
        })
    ]
});
