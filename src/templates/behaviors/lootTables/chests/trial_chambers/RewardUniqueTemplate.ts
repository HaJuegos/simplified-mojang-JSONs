import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const RewardUniqueTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:golden_apple",
                    weight: 4
                },
                {
                    type: "item",
                    name: "minecraft:bolt_armor_trim_smithing_template",
                    weight: 3
                },
                {
                    type: "item",
                    name: "minecraft:guster_banner_pattern",
                    weight: 2
                },
                {
                    type: "item",
                    name: "minecraft:music_disc_precipice",
                    weight: 2
                },
                {
                    type: "item",
                    name: "minecraft:trident",
                    weight: 1
                }
            ]
        }
    ]
});
