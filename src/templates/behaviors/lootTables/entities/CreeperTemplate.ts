import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const CreeperTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:gunpowder",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 0,
                                max: 2
                            }
                        },
                        {
                            function: "looting_enchant",
                            count: {
                                min: 0,
                                max: 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            conditions: [
                {
                    condition: "killed_by_entity",
                    entityType: "minecraft:skeleton"
                }
            ],
            rolls: 1,
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_13"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_cat"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_blocks"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_chirp"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_far"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_mall"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_mellohi"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_stal"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_strad"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_ward"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_11"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_wait"
                }
            ]
        },
        {
            conditions: [
                {
                    condition: "killed_by_entity",
                    entityType: "minecraft:stray"
                }
            ],
            rolls: 1,
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_13"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_cat"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_blocks"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_chirp"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_far"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_mall"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_mellohi"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_stal"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_strad"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_ward"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_11"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_wait"
                }
            ]
        },
        {
            conditions: [
                {
                    condition: "killed_by_entity",
                    entityType: "minecraft:bogged"
                }
            ],
            rolls: 1,
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_13"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_cat"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_blocks"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_chirp"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_far"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_mall"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_mellohi"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_stal"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_strad"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_ward"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_11"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_wait"
                }
            ]
        },
        {
            conditions: [
                {
                    condition: "killed_by_entity",
                    entityType: "minecraft:parched"
                }
            ],
            rolls: 1,
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_13"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_cat"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_blocks"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_chirp"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_far"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_mall"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_mellohi"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_stal"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_strad"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_ward"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_11"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:record_wait"
                }
            ]
        }
    ]
});
