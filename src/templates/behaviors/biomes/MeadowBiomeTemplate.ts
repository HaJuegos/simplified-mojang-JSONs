import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const MeadowBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:meadow",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.8,
            temperature: 0.3
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
        new BPBiomeComponents.SetMountainParameters({
            topSlide: {
                enabled: false
            }
        }),
        new BPBiomeComponents.SetVillageType({
            type: "default"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "mountains",
                "monster",
                "overworld",
                "meadow",
                "bee_habitat",
                "has_structure_abandoned_camp"
            ]
        })
    ]
});
