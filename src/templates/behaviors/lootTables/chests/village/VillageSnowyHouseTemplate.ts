import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageSnowyHouseTemplate = createBPLootTable({
    // TODO: La propiedad 'type' no existe en el tipado.
    type: "minecraft:chest",
    pools: [
        {
            rolls: {
                min: 3,
                max: 8
            },
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:blue_ice"
                },
                {
                    type: "item",
                    weight: 4,
                    name: "minecraft:snow"
                },
                {
                    type: "item",
                    weight: 10,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 7
                            }
                        }
                    ],
                    name: "minecraft:potato"
                },
                {
                    type: "item",
                    weight: 10,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    name: "minecraft:bread"
                },
                {
                    type: "item",
                    weight: 10,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 5
                            }
                        }
                    ],
                    name: "minecraft:beetroot_seeds"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:beetroot_soup"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:furnace"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    name: "minecraft:emerald"
                },
                {
                    type: "item",
                    weight: 10,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 7
                            }
                        }
                    ],
                    name: "minecraft:snowball"
                },
                {
                    type: "item",
                    weight: 5,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    name: "minecraft:coal"
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "loot_table",
                    name: "loot_tables/chests/village/village_bundle.json"
                }
            ]
        }
    ]
});
