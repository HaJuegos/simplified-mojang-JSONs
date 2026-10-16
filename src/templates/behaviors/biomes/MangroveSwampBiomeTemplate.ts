import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const MangroveSwampBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:mangrove_swamp",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.9,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.8
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "swamp"
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:swamp",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:mud",
                foundationMaterial: "minecraft:stone",
                midMaterial: "minecraft:mud",
                topMaterial: "minecraft:mud",
                seaMaterial: "minecraft:water",
                maxPuddleDepthBelowSeaLevel: 3
            }
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "mangrove_swamp",
                "overworld",
                "monster",
                "spawns_slimes_on_surface",
                "spawns_warm_variant_farm_animals",
                "spawns_warm_variant_frogs",
                "slime"
            ]
        })
    ]
});
