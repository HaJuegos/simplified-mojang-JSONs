import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageCartographerTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 1,
                max: 5
            },
            entries: [
                {
                    type: "item",
                    weight: 10,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:map"
                },
                {
                    type: "item",
                    weight: 15,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 5
                            }
                        }
                    ],
                    name: "minecraft:paper"
                },
                {
                    type: "item",
                    weight: 5,
                    name: "minecraft:compass"
                },
                {
                    type: "item",
                    weight: 15,
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
                    weight: 5,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }
                    ],
                    name: "minecraft:oak_sapling"
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
