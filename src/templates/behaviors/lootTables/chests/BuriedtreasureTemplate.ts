import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const BuriedtreasureTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:heart_of_the_sea"
                }
            ]
        },
        {
            rolls: {
                min: 5,
                max: 8
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:iron_ingot",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    weight: 20
                },
                {
                    type: "item",
                    name: "minecraft:gold_ingot",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:tnt",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 5
                            }
                        }
                    ],
                    weight: 5
                }
            ]
        },
        {
            rolls: {
                min: 1,
                max: 3
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:emerald",
                    weight: 5,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 8
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:diamond",
                    weight: 5,
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
                    name: "minecraft:prismarine_crystals",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 5
                            }
                        }
                    ],
                    weight: 5
                }
            ]
        },
        {
            rolls: {
                min: 0,
                max: 1
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:leather_chestplate",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:iron_sword",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:iron_spear",
                    weight: 1
                }
            ]
        },
        {
            rolls: 2,
            entries: [
                {
                    type: "item",
                    name: "minecraft:cooked_cod",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 4
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:cooked_salmon",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 4
                            }
                        }
                    ]
                }
            ]
        },
        {
            rolls: {
                min: 0,
                max: 2
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:potion",
                    functions: [
                        {
                            function: "set_potion",
                            id: "water_breathing"
                        }
                    ],
                    weight: 15
                }
            ]
        },
        {
            rolls: 1,
            conditions: [
                {
                    condition: "random_chance",
                    chance: 0.2
                }
            ],
            entries: [
                {
                    type: "item",
                    name: "minecraft:copper_nautilus_armor",
                    weight: 100
                },
                {
                    type: "item",
                    name: "minecraft:iron_nautilus_armor",
                    weight: 50
                },
                {
                    type: "item",
                    name: "minecraft:golden_nautilus_armor",
                    weight: 25
                },
                {
                    type: "item",
                    name: "minecraft:diamond_nautilus_armor",
                    weight: 10
                }
            ]
        }
    ]
});
