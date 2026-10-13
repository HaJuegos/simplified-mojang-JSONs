import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const NautilusTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            conditions: [
                {
                    condition: "killed_by_player_or_pets"
                },
                {
                    condition: "random_chance_with_looting",
                    chance: 0.05,
                    lootingMultiplier: 0.01
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
