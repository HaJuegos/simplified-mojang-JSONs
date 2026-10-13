import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const LowTierItemsTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:leather_chestplate",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:iron_chestplate",
                    weight: 1
                },
                {
                    type: "empty",
                    weight: 5
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:leather_helmet",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:iron_helmet",
                    weight: 1
                },
                {
                    type: "empty",
                    weight: 5
                }
            ]
        }
    ]
});
