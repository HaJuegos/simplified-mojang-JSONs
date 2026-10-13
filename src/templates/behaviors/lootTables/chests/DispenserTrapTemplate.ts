import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const DispenserTrapTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 2,
                max: 2
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:arrow",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 7
                            }
                        }
                    ],
                    weight: 30
                }
            ]
        }
    ]
});
