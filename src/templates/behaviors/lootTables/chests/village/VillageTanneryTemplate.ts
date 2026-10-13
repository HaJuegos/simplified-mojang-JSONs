import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageTanneryTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 1,
                max: 5
            },
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:leather"
                },
                {
                    type: "item",
                    weight: 2,
                    name: "minecraft:leather_chestplate"
                },
                {
                    type: "item",
                    weight: 2,
                    name: "minecraft:leather_boots"
                },
                {
                    type: "item",
                    weight: 2,
                    name: "minecraft:leather_helmet"
                },
                {
                    type: "item",
                    weight: 5,
                    functions: [
                        {
                            function: "set_count",
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
                    weight: 2,
                    name: "minecraft:leather_leggings"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:saddle"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    name: "minecraft:emerald"
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
