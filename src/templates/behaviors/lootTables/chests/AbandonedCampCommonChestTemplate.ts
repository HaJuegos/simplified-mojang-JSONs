import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const AbandonedCampCommonChestTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 4,
                max: 6
            },
            bonusRolls: 0,
            entries: [
                {
                    type: "item",
                    functions: [
                        {
                            function: "set_count",
                            count: 4
                        }
                    ],
                    name: "minecraft:arrow",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:empty_map",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 4
                            }
                        }
                    ],
                    name: "minecraft:bone",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:web",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:compass",
                    weight: 1,
                    count: 1
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
                    name: "minecraft:empty_map",
                    weight: 1
                },
                {
                    type: "item",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 4
                            }
                        }
                    ],
                    name: "minecraft:gunpowder",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:fishing_rod",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:flint_and_steel",
                    weight: 1,
                    count: 1
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
                    name: "minecraft:glass_bottle",
                    weight: 1
                },
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
                    name: "minecraft:lead",
                    weight: 1
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
                    name: "minecraft:leather",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:bundle",
                    weight: 1,
                    count: 1
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
                    name: "minecraft:rabbit_hide",
                    weight: 1
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
                    name: "minecraft:saddle",
                    weight: 1
                },
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
                    name: "minecraft:white_candle",
                    weight: 1
                }
            ]
        },
        {
            rolls: 2,
            bonusRolls: 0,
            entries: [
                {
                    type: "item",
                    name: "minecraft:bow",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:bucket",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:copper_axe",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:copper_boots",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:copper_chestplate",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:copper_leggings",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:copper_spear",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:copper_sword",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:spyglass",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:shears",
                    weight: 1,
                    count: 1
                }
            ]
        },
        {
            rolls: 1,
            bonusRolls: 0,
            entries: [
                {
                    type: "item",
                    name: "minecraft:map",
                    weight: 1,
                    conditions: [
                        {
                            condition: "biome_has_tag",
                            operator: "!=",
                            tag: "dappled_forest"
                        }
                    ],
                    functions: [
                        {
                            function: "exploration_map",
                            destination: "abandoned_camp_dappled_forest"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:map",
                    weight: 1,
                    conditions: [
                        {
                            condition: "biome_has_tag",
                            operator: "!=",
                            tag: "bamboo"
                        }
                    ],
                    functions: [
                        {
                            function: "exploration_map",
                            destination: "abandoned_camp_bamboo_jungle"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:map",
                    weight: 1,
                    conditions: [
                        {
                            condition: "biome_has_tag",
                            operator: "!=",
                            tag: "cherry_grove"
                        }
                    ],
                    functions: [
                        {
                            function: "exploration_map",
                            destination: "abandoned_camp_cherry_grove"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:map",
                    weight: 1,
                    conditions: [
                        {
                            condition: "biome_has_tag",
                            operator: "!=",
                            tag: "birch"
                        }
                    ],
                    functions: [
                        {
                            function: "exploration_map",
                            destination: "abandoned_camp_birch_forest"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:map",
                    weight: 1,
                    conditions: [
                        {
                            condition: "biome_has_tag",
                            operator: "!=",
                            tag: "flower_forest"
                        }
                    ],
                    functions: [
                        {
                            function: "exploration_map",
                            destination: "abandoned_camp_flower_forest"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:map",
                    weight: 1,
                    conditions: [
                        {
                            condition: "biome_has_tag",
                            operator: "!=",
                            tag: "pale_garden"
                        }
                    ],
                    functions: [
                        {
                            function: "exploration_map",
                            destination: "abandoned_camp_pale_garden"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:map",
                    weight: 1,
                    conditions: [
                        {
                            condition: "biome_has_tag",
                            operator: "!=",
                            tag: "swamp"
                        }
                    ],
                    functions: [
                        {
                            function: "exploration_map",
                            destination: "abandoned_camp_swampland"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:map",
                    weight: 1,
                    conditions: [
                        {
                            condition: "biome_has_tag",
                            operator: "!=",
                            tag: "extreme_hills"
                        }
                    ],
                    functions: [
                        {
                            function: "exploration_map",
                            destination: "abandoned_camp_extreme_hills_plus_trees"
                        }
                    ]
                }
            ]
        }
    ]
});
