import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const FishTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:fish",
                    weight: 60
                },
                {
                    type: "item",
                    name: "minecraft:salmon",
                    weight: 25
                },
                {
                    type: "item",
                    name: "minecraft:clownfish",
                    weight: 2
                },
                {
                    type: "item",
                    name: "minecraft:pufferfish",
                    weight: 13
                }
            ]
        }
    ]
});
