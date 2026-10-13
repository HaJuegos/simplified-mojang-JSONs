import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const CorridorTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 1,
                max: 3
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:iron_axe",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.4,
                                max: 0.9
                            }
                        },
                        {
                            function: "enchant_randomly"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:honeycomb",
                    weight: 1,
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
                    name: "minecraft:stone_axe",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.15,
                                max: 0.8
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:stone_pickaxe",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.15,
                                max: 0.8
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:ender_pearl",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:bamboo_hanging_sign",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:bamboo_planks",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 3,
                                max: 6
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:scaffolding",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 10
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:torch",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 3,
                                max: 6
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:tuff",
                    weight: 3,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 8,
                                max: 20
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
