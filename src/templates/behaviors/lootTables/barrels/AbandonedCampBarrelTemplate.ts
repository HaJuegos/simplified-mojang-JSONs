import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const AbandonedCampBarrelTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 4,
                max: 8
            },
            // TODO: La propiedad 'bonus_rolls' no existe en el tipado.
            bonusRolls: 0,
            entries: [
                {
                    type: "item",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:arrow",
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
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:bone",
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
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:bowl",
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
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:bread",
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
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:coal",
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
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
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
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:leather",
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
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
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
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:string",
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
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:wheat",
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
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:white_candle",
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
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:white_cushion",
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
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:straw_bed",
                    weight: 1
                }
            ]
        },
        {
            rolls: 1,
            // TODO: La propiedad 'bonus_rolls' no existe en el tipado.
            bonusRolls: 0,
            entries: [
                {
                    type: "item",
                    name: "minecraft:bundle",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:wooden_axe",
                    weight: 1,
                    count: 1
                },
                {
                    type: "item",
                    name: "minecraft:fishing_rod",
                    weight: 1,
                    count: 1
                }
            ]
        }
    ]
});
