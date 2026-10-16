import { createBPBiome } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const MesaPlateauBiomeTemplate = createBPBiome({
    idBiome: "minecraft:mesa_plateau",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.0,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 2.0
        }),
        new BPBiomeComponents.SetMapTints({
            grass: {
                type: "tint",
                tint: "#aea42a"
            },
            foliage: "#90814d"
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:mesa",
                brycePillars: false,
                clayMaterial: "minecraft:white_terracotta",
                seaFloorDepth: 7,
                seaFloorMaterial: "minecraft:gravel",
                foundationMaterial: "minecraft:stone",
                hardClayMaterial: "minecraft:hardened_clay",
                hasForest: false,
                midMaterial: "minecraft:hardened_clay",
                topMaterial: "minecraft:red_sand",
                seaMaterial: "minecraft:water"
            }
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "highlands"
        }),
        new BPBiomeComponents.SetOverworldGenerationRules({
            hillsTransformation: "minecraft:mesa",
            mutateTransformation: "minecraft:mesa_plateau_mutated",
            generateForClimates: [
                [
                    "warm",
                    1
                ]
            ]
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "animal",
                "mesa",
                "monster",
                "overworld",
                "plateau",
                "rare",
                "spawns_mesa_mobs",
                "spawns_warm_variant_farm_animals",
                "surface_mineshaft"
            ]
        })
    ]
});
