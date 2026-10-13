import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const PillagerOutpostTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 0,
                max: 1
            },
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:crossbow"
                }
            ]
        },
        {
            rolls: {
                min: 2,
                max: 3
            },
            entries: [
                {
                    type: "item",
                    weight: 7,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 3,
                                max: 5
                            }
                        }
                    ],
                    name: "minecraft:wheat"
                },
                {
                    type: "item",
                    weight: 5,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 5
                            }
                        }
                    ],
                    name: "minecraft:potato"
                },
                {
                    type: "item",
                    weight: 5,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 3,
                                max: 5
                            }
                        }
                    ],
                    name: "minecraft:carrot"
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
                    name: "minecraft:dark_oak_log",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 3
                            }
                        }
                    ]
                }
            ]
        },
        {
            rolls: {
                min: 2,
                max: 3
            },
            entries: [
                {
                    type: "item",
                    weight: 7,
                    name: "minecraft:experience_bottle"
                },
                {
                    type: "item",
                    weight: 4,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 6
                            }
                        }
                    ],
                    name: "minecraft:string"
                },
                {
                    type: "item",
                    weight: 4,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 7
                            }
                        }
                    ],
                    name: "minecraft:arrow"
                },
                {
                    type: "item",
                    weight: 3,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:tripwire_hook"
                },
                {
                    type: "item",
                    weight: 3,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:iron_ingot"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    functions: [
                        {
                            // TODO: El valor 'minecraft:enchant_randomly' de 'function' no existe en el tipado.
                            function: "minecraft:enchant_randomly"
                        }
                    ],
                    name: "minecraft:book"
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
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:goat_horn",
                    functions: [
                        {
                            function: "set_data",
                            data: {
                                min: 0,
                                max: 3
                            }
                        }
                    ]
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    type: "empty",
                    weight: 3
                },
                {
                    type: "item",
                    name: "minecraft:sentry_armor_trim_smithing_template",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: 2
                        }
                    ]
                }
            ]
        }
    ]
});
