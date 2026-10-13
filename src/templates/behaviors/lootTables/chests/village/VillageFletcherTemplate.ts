import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageFletcherTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 1.0,
                max: 5.0
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:emerald"
                },
                {
                    type: "item",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1.0,
                                max: 3.0
                            }
                        }
                    ],
                    name: "minecraft:arrow"
                },
                {
                    type: "item",
                    weight: 6,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1.0,
                                max: 3.0
                            }
                        }
                    ],
                    name: "minecraft:feather"
                },
                {
                    type: "item",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1.0,
                                max: 3.0
                            }
                        }
                    ],
                    name: "minecraft:egg"
                },
                {
                    type: "item",
                    weight: 6,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1.0,
                                max: 3.0
                            }
                        }
                    ],
                    name: "minecraft:flint"
                },
                {
                    type: "item",
                    weight: 6,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1.0,
                                max: 3.0
                            }
                        }
                    ],
                    name: "minecraft:stick"
                }
            ]
        }
    ]
});
