import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const CopperGolemTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:copper_ingot",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ]
                }
            ]
        },
        {
            conditions: [
                {
                    condition: "bool_property",
                    domain: "minecraft:has_flower",
                    value: true
                }
            ],
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:poppy",
                    weight: 1
                }
            ]
        }
    ]
});
