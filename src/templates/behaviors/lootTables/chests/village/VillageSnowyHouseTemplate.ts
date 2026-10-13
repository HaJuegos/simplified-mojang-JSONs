import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageSnowyHouseTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 3,
                max: 8
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:blue_ice"
                },
                {
                    type: "item",
                    weight: 4,
                    name: "minecraft:snow"
                },
                {
                    type: "item",
                    weight: 10,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 7
                            }
                        }
                    ],
                    name: "minecraft:potato"
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
                    name: "minecraft:beetroot_seeds"
                },
                {
                    type: "item",
                    name: "minecraft:beetroot_soup"
                },
                {
                    type: "item",
                    name: "minecraft:furnace"
                },
                {
                    type: "item",
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
                                max: 7
                            }
                        }
                    ],
                    name: "minecraft:snowball"
                },
                {
                    type: "item",
                    weight: 5,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    name: "minecraft:coal"
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
