import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const IglooChestTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 2,
                max: 8
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:apple",
                    weight: 15,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:coal",
                    weight: 15,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:gold_nugget",
                    weight: 10,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:stone_axe",
                    weight: 2
                },
                {
                    type: "item",
                    name: "minecraft:rotten_flesh",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:emerald",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:wheat",
                    weight: 10,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
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
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:golden_apple",
                    weight: 1
                }
            ]
        }
    ]
});
