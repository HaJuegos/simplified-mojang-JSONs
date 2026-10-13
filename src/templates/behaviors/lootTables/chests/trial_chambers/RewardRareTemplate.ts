import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const RewardRareTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:emerald",
                    weight: 3,
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
                    name: "minecraft:shield",
                    weight: 3,
                    functions: [
                        {
                            function: "set_damage",
                            damage: {
                                min: 0.5,
                                max: 1.0
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:bow",
                    weight: 3,
                    functions: [
                        {
                            function: "enchant_with_levels",
                            levels: {
                                min: 5.0,
                                max: 15.0
                            },
                            treasure: true
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:crossbow",
                    weight: 2,
                    functions: [
                        {
                            function: "enchant_with_levels",
                            levels: {
                                min: 5.0,
                                max: 20.0
                            },
                            treasure: true
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_axe",
                    weight: 2,
                    functions: [
                        {
                            function: "enchant_with_levels",
                            levels: {
                                min: 0.0,
                                max: 10.0
                            },
                            treasure: true
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_chestplate",
                    weight: 2,
                    functions: [
                        {
                            function: "enchant_with_levels",
                            levels: {
                                min: 0.0,
                                max: 10.0
                            },
                            treasure: true
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:golden_carrot",
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
                    name: "minecraft:book",
                    weight: 2,
                    functions: [
                        {
                            // TODO: Falta la propiedad requerida 'baseCost' segun el tipado.
                            // TODO: Falta la propiedad requerida 'baseRandomCost' segun el tipado.
                            // TODO: Falta la propiedad requerida 'perLevelCost' segun el tipado.
                            // TODO: Falta la propiedad requerida 'perLevelRandomCost' segun el tipado.
                            function: "enchant_book_for_trading",
                            // TODO: La propiedad 'enchantments' no existe en el tipado de 'enchant_book_for_trading'.
                            enchantments: [
                                {
                                    name: "sharpness",
                                    min: 1,
                                    max: 5
                                },
                                {
                                    name: "bane_of_arthropods",
                                    min: 1,
                                    max: 5
                                },
                                {
                                    name: "efficiency",
                                    min: 1,
                                    max: 5
                                },
                                {
                                    name: "fortune",
                                    min: 1,
                                    max: 3
                                },
                                {
                                    name: "silk_touch",
                                    min: 1,
                                    max: 1
                                },
                                {
                                    name: "feather_falling",
                                    min: 1,
                                    max: 4
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:book",
                    weight: 2,
                    functions: [
                        {
                            // TODO: Falta la propiedad requerida 'baseCost' segun el tipado.
                            // TODO: Falta la propiedad requerida 'baseRandomCost' segun el tipado.
                            // TODO: Falta la propiedad requerida 'perLevelCost' segun el tipado.
                            // TODO: Falta la propiedad requerida 'perLevelRandomCost' segun el tipado.
                            function: "enchant_book_for_trading",
                            // TODO: La propiedad 'enchantments' no existe en el tipado de 'enchant_book_for_trading'.
                            enchantments: [
                                {
                                    name: "riptide",
                                    min: 1,
                                    max: 3
                                },
                                {
                                    name: "loyalty",
                                    min: 1,
                                    max: 3
                                },
                                {
                                    name: "channeling",
                                    min: 1,
                                    max: 1
                                },
                                {
                                    name: "impaling",
                                    min: 1,
                                    max: 5
                                },
                                {
                                    name: "mending",
                                    min: 1,
                                    max: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:diamond_chestplate",
                    weight: 1,
                    functions: [
                        {
                            function: "enchant_with_levels",
                            levels: {
                                min: 5.0,
                                max: 15.0
                            },
                            treasure: true
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:diamond_axe",
                    weight: 1,
                    functions: [
                        {
                            function: "enchant_with_levels",
                            levels: {
                                min: 5.0,
                                max: 15.0
                            },
                            treasure: true
                        }
                    ]
                }
            ]
        }
    ]
});
