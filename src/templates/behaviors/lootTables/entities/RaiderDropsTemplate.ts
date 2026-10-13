import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const RaiderDropsTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:emerald",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 0,
                                max: 1
                            }
                        },
                        {
                            function: "looting_enchant",
                            count: {
                                min: 0,
                                max: 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            rolls: 1,
            conditions: [
                {
                    condition: "random_difficulty_chance",
                    defaultChance: 0.65,
                    peaceful: 0,
                    hard: 0.8
                }
            ],
            entries: [
                {
                    type: "item",
                    name: "minecraft:emerald",
                    weight: 40,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 0,
                                max: 1
                            }
                        },
                        {
                            function: "looting_enchant",
                            count: {
                                min: 0,
                                max: 1
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:emerald",
                    weight: 20,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 3
                            }
                        },
                        {
                            function: "looting_enchant",
                            count: {
                                min: 0,
                                max: 1
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:emerald",
                    weight: 8,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 5
                            }
                        },
                        {
                            function: "looting_enchant",
                            count: {
                                min: 0,
                                max: 1
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:book",
                    weight: 8,
                    functions: [
                        {
                            function: "enchant_with_levels",
                            levels: 30,
                            treasure: true
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_pickaxe",
                    weight: 10,
                    functions: [
                        {
                            function: "enchant_random_gear",
                            chance: 0.5
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.3,
                                max: 0.9
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_axe",
                    weight: 10,
                    functions: [
                        {
                            function: "enchant_random_gear",
                            chance: 0.5
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.3,
                                max: 0.9
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_shovel",
                    weight: 10,
                    functions: [
                        {
                            function: "enchant_random_gear",
                            chance: 0.5
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.3,
                                max: 0.9
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_sword",
                    weight: 10,
                    functions: [
                        {
                            function: "enchant_random_gear",
                            chance: 0.5
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.3,
                                max: 0.9
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_helmet",
                    weight: 10,
                    functions: [
                        {
                            function: "enchant_random_gear",
                            chance: 0.5
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.3,
                                max: 0.9
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_chestplate",
                    weight: 10,
                    functions: [
                        {
                            function: "enchant_random_gear",
                            chance: 0.5
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.3,
                                max: 0.9
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_leggings",
                    weight: 10,
                    functions: [
                        {
                            function: "enchant_random_gear",
                            chance: 0.5
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.3,
                                max: 0.9
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_boots",
                    weight: 10,
                    functions: [
                        {
                            function: "enchant_random_gear",
                            chance: 0.5
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.3,
                                max: 0.9
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
