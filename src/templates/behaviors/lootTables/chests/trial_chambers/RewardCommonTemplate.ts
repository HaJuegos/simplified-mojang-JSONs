import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const RewardCommonTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:arrow",
                    weight: 4,
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
                    name: "minecraft:arrow",
                    weight: 4,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
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
                    name: "minecraft:emerald",
                    weight: 4,
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
                    name: "minecraft:wind_charge",
                    weight: 3,
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
                    name: "minecraft:iron_ingot",
                    weight: 3,
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
                    name: "minecraft:honey_bottle",
                    weight: 3,
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
                    name: "minecraft:ominous_bottle",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        },
                        {
                            function: "set_ominous_bottle_amplifier",
                            amplifier: {
                                min: 0,
                                max: 1
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:wind_charge",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 12
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:diamond",
                    weight: 1,
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
