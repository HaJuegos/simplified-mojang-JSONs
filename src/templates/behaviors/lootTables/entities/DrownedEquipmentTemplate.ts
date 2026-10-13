import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const DrownedEquipmentTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            conditions: [
                {
                    condition: "random_chance",
                    chance: 0.0375
                }
            ],
            entries: [
                {
                    type: "item",
                    name: "minecraft:fishing_rod",
                    weight: 5
                }
            ]
        },
        {
            rolls: 1,
            conditions: [
                {
                    condition: "random_chance",
                    chance: 0.08
                }
            ],
            entries: [
                {
                    type: "item",
                    name: "minecraft:nautilus_shell",
                    weight: 5
                }
            ]
        }
    ]
});
