import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const IntersectionTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 1,
                max: 3
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:diamond_block",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:emerald_block",
                    weight: 5,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:diamond_axe",
                    weight: 5,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.1,
                                max: 0.5
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:diamond_pickaxe",
                    weight: 5,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        },
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.1,
                                max: 0.5
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:diamond",
                    weight: 10,
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
                    name: "minecraft:cake",
                    weight: 20,
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
                    name: "minecraft:amethyst_shard",
                    weight: 20,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 8,
                                max: 20
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_block",
                    weight: 20,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
