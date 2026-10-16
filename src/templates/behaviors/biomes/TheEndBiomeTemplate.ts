import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const TheEndBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:the_end",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.5,
            snowAccumulation: [
                0.0,
                0.125
            ],
            temperature: 0.5
        }),
        new BPBiomeComponents.SetSurfaceBuilder({
            builder: {
                type: "minecraft:the_end"
            }
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "the_end",
                "spawns_cold_variant_farm_animals",
                "spawns_cold_variant_frogs"
            ]
        })
    ]
});
