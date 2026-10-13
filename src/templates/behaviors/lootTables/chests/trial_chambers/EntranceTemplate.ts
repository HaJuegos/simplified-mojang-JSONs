import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const EntranceTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 2,
                max: 3
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:trial_key",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:stick",
                    weight: 5,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 5
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:wooden_axe",
                    weight: 10,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:honeycomb",
                    weight: 10,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 8
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:arrow",
                    weight: 10,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 5,
                                max: 10
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
