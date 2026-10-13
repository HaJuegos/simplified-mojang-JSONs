import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const AncientCityIceBoxTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 4,
                max: 10.0
            },
            // TODO: La propiedad 'bonus_rolls' no existe en el tipado.
            bonusRolls: 0,
            entries: [
                {
                    type: "item",
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_stew_effect' de 'function' no existe en el tipado.
                            function: "minecraft:set_stew_effect",
                            effects: [
                                {
                                    id: 0
                                },
                                {
                                    id: 3
                                }
                            ]
                        },
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 6.0
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:suspicious_stew",
                    weight: 1
                },
                {
                    type: "item",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 10.0
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:golden_carrot",
                    weight: 1
                },
                {
                    type: "item",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 10.0
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:baked_potato",
                    weight: 1
                },
                {
                    type: "item",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 6.0
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:packed_ice"
                },
                {
                    type: "item",
                    weight: 4,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 6.0
                            },
                            // TODO: La propiedad 'add' no existe en el tipado de 'set_count'.
                            add: false
                        }
                    ],
                    name: "minecraft:snowball"
                }
            ]
        }
    ]
});
