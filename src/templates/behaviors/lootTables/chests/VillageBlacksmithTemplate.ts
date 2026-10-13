import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageBlacksmithTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 3,
                max: 8
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:diamond",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    weight: 3
                },
                {
                    type: "item",
                    name: "minecraft:iron_ingot",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 5
                            }
                        }
                    ],
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:gold_ingot",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:bread",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    weight: 15
                },
                {
                    type: "item",
                    name: "minecraft:apple",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    weight: 15
                },
                {
                    type: "item",
                    name: "minecraft:iron_pickaxe",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:iron_sword",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:iron_chestplate",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:iron_helmet",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:iron_leggings",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:iron_boots",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:obsidian",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 3,
                                max: 7
                            }
                        }
                    ],
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:sapling",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 3,
                                max: 7
                            }
                        }
                    ],
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:saddle",
                    weight: 3
                },
                {
                    type: "item",
                    name: "minecraft:horsearmoriron",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:horsearmorgold",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:horsearmordiamond",
                    weight: 1
                }
            ]
        }
    ]
});
