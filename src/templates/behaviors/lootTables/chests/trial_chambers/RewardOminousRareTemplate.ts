import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const RewardOminousRareTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:emerald_block",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:iron_block",
                    weight: 4
                },
                {
                    type: "item",
                    name: "minecraft:crossbow",
                    weight: 4,
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
                    name: "minecraft:golden_apple",
                    weight: 3
                },
                {
                    type: "item",
                    name: "minecraft:diamond_axe",
                    weight: 3,
                    functions: [
                        {
                            function: "enchant_with_levels",
                            levels: {
                                min: 10.0,
                                max: 20.0
                            },
                            treasure: true
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:diamond_chestplate",
                    weight: 3,
                    functions: [
                        {
                            function: "enchant_with_levels",
                            levels: {
                                min: 10.0,
                                max: 20.0
                            },
                            treasure: true
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
                                    name: "knockback",
                                    min: 1,
                                    max: 2
                                },
                                {
                                    name: "punch",
                                    min: 1,
                                    max: 2
                                },
                                {
                                    name: "smite",
                                    min: 1,
                                    max: 5
                                },
                                {
                                    name: "looting",
                                    min: 1,
                                    max: 3
                                },
                                {
                                    name: "multishot",
                                    min: 1,
                                    max: 1
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
                                    name: "breach",
                                    min: 1,
                                    max: 4
                                },
                                {
                                    name: "density",
                                    min: 1,
                                    max: 5
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
                                    name: "wind_burst",
                                    min: 1,
                                    max: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:diamond_block",
                    weight: 1
                }
            ]
        }
    ]
});
