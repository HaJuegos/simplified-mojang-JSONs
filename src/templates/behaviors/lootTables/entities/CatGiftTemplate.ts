import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const CatGiftTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:rabbit_hide",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:rabbit_foot",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:chicken",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:feather",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:rotten_flesh",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:string",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:phantom_membrane",
                    weight: 2
                }
            ]
        }
    ]
});
