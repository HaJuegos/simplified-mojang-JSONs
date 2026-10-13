import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const JunkTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:leather_boots",
                    weight: 10,
                    functions: [
                        {
                            function: "set_damage",
                            damage: {
                                min: 0,
                                max: 0.9
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:waterlily",
                    weight: 17
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: 10.0
                        }
                    ],
                    name: "minecraft:ink_sac"
                },
                {
                    type: "item",
                    name: "minecraft:leather",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:bone",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:potion",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:string",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:fishing_rod",
                    weight: 2,
                    functions: [
                        {
                            function: "set_damage",
                            damage: {
                                min: 0,
                                max: 0.9
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:bowl",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:stick",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:dye",
                    weight: 1,
                    functions: [
                        {
                            function: "set_data",
                            data: 0
                        },
                        {
                            function: "set_count",
                            count: 10
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:tripwire_hook",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:rotten_flesh",
                    weight: 10
                }
            ]
        }
    ]
});
