import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageSavannaHouseTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 3,
                max: 8
            },
            entries: [
                {
                    type: "item",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:gold_nugget"
                },
                {
                    type: "item",
                    weight: 5,
                    name: "minecraft:short_grass"
                },
                {
                    type: "item",
                    weight: 5,
                    name: "minecraft:tall_grass"
                },
                {
                    type: "item",
                    weight: 10,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    name: "minecraft:bread"
                },
                {
                    type: "item",
                    weight: 10,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 5
                            }
                        }
                    ],
                    name: "minecraft:wheat_seeds"
                },
                {
                    type: "item",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    name: "minecraft:emerald"
                },
                {
                    type: "item",
                    weight: 10,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }
                    ],
                    name: "minecraft:acacia_sapling"
                },
                {
                    type: "item",
                    name: "minecraft:saddle"
                },
                {
                    type: "item",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }
                    ],
                    name: "minecraft:torch"
                },
                {
                    type: "item",
                    name: "minecraft:bucket"
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    type: "loot_table",
                    name: "loot_tables/chests/village/village_bundle.json"
                }
            ]
        }
    ]
});
