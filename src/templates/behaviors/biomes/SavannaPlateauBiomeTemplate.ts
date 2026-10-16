import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const SavannaPlateauBiomeTemplate = createBPBiome({
    idBiome: "minecraft:savanna_plateau",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.0,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 1.0
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "highlands"
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
            mutateTransformation: "minecraft:savanna_plateau_mutated"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "monster",
                "overworld",
                "plateau",
                "savanna",
                "spawns_savanna_mobs",
                "spawns_warm_variant_farm_animals"
            ]
        })
    ]
});
