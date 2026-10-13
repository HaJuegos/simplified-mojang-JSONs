import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageShepherdTemplate = createBPLootTable({
    // TODO: La propiedad 'type' no existe en el tipado.
    type: "minecraft:chest",
    pools: [
        {
            rolls: {
                min: 1,
                max: 5
            },
            entries: [
                {
                    type: "item",
                    weight: 6,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }
                    ],
                    name: "minecraft:white_wool"
                },
                {
                    type: "item",
                    weight: 3,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:black_wool"
                },
                {
                    type: "item",
                    weight: 2,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:gray_wool"
                },
                {
                    type: "item",
                    weight: 2,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:brown_wool"
                },
                {
                    type: "item",
                    weight: 2,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:light_gray_wool"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:emerald"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:shears"
                },
                {
                    type: "item",
                    weight: 6,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 6
                            }
                        }
                    ],
                    name: "minecraft:wheat"
                }
            ]
        }
    ]
});
