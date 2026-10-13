import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const SupplyTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 3,
                max: 5
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:arrow",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 14
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:arrow",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 8
                            }
                        },
                        {
                            function: "set_potion",
                            id: "poison"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:arrow",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 8
                            }
                        },
                        {
                            function: "set_potion",
                            id: "slowness"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:baked_potato",
                    weight: 2,
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
                    name: "minecraft:glow_berries",
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
                    name: "minecraft:acacia_planks",
                    weight: 1,
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
                    name: "minecraft:moss_block",
                    weight: 1,
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
                    name: "minecraft:bone_meal",
                    weight: 1,
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
                    name: "minecraft:tuff",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 5,
                                max: 10
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:torch",
                    weight: 1,
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
                    name: "minecraft:potion",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: 2.0
                        },
                        {
                            function: "set_potion",
                            id: "regeneration"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:potion",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: 2.0
                        },
                        {
                            function: "set_potion",
                            id: "strength"
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
                    name: "minecraft:milk_bucket",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        }
                    ]
                }
            ]
        }
    ]
});
