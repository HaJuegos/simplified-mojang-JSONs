import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const IronGolemTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:poppy",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 0,
                                max: 2
                            }
                        }
                    ]
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:iron_ingot",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 3,
                                max: 5
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
