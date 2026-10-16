import { createBPBiomeTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponents } from "../../../components/behaviors/biomes";

/**
 * Plantilla vanilla del bioma para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalBiomeBuilderTemplate}
 * @author HaJuegos - 15-10-2026
 */
export const LegacyFrozenOceanBiomeTemplate = createBPBiomeTemplate({
    idBiome: "minecraft:legacy_frozen_ocean",
    components: [
        new BPBiomeComponents.SetClimate({
            downfall: 0.5,
            snowAccumulation: [
                0.125,
                0.25
            ],
            temperature: 0.0
        }),
        new BPBiomeComponents.SetOverworldHeight({
            noiseType: "ocean"
        }),
        new BPBiomeComponents.SetTags({
            tags: [
                "legacy",
                "frozen",
                "ocean",
                "overworld",
                "spawns_cold_variant_farm_animals",
                "spawns_polar_bears_on_alternate_blocks",
                "fast_fishing",
                "high_seas"
            ]
        })
    ]
});
