import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const PillagerRaidTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "loot_table",
                    name: "loot_tables/entities/pillager.json"
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    type: "loot_table",
                    name: "loot_tables/entities/raider_drops.json"
                }
            ]
        }
    ]
});
