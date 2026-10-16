import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const MushroomIslandBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:mushroom_island",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 1.0,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.9
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "mushroom"
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:overworld",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:dirt",
                topMaterial: "minecraft:mycelium",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "mooshroom_island",
                "overworld",
                "spawns_without_patrols"
            ]
        })
    ]
});
