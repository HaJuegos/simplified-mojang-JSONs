import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const TrailRuinsBrushableBlockRareTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 1,
                max: 1
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:howl_pottery_sherd",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:sheaf_pottery_sherd",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:heart_pottery_sherd",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:heartbreak_pottery_sherd",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:friend_pottery_sherd",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:danger_pottery_sherd",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:burn_pottery_sherd",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:wayfinder_armor_trim_smithing_template",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:raiser_armor_trim_smithing_template",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:shaper_armor_trim_smithing_template",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:host_armor_trim_smithing_template",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:music_disc_relic",
                    weight: 1
                }
            ]
        }
    ]
});
