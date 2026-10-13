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
                    type: "item",
                    name: "minecraft:record_13"
                },
                {
                    type: "item",
                    name: "minecraft:record_cat"
                },
                {
                    type: "item",
                    name: "minecraft:record_blocks"
                },
                {
                    type: "item",
                    name: "minecraft:record_chirp"
                },
                {
                    type: "item",
                    name: "minecraft:record_far"
                },
                {
                    type: "item",
                    name: "minecraft:record_mall"
                },
                {
                    type: "item",
                    name: "minecraft:record_mellohi"
                },
                {
                    type: "item",
                    name: "minecraft:record_stal"
                },
                {
                    type: "item",
                    name: "minecraft:record_strad"
                },
                {
                    type: "item",
                    name: "minecraft:record_ward"
                },
                {
                    type: "item",
                    name: "minecraft:record_11"
                },
                {
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
                    type: "item",
                    name: "minecraft:record_13"
                },
                {
                    type: "item",
                    name: "minecraft:record_cat"
                },
                {
                    type: "item",
                    name: "minecraft:record_blocks"
                },
                {
                    type: "item",
                    name: "minecraft:record_chirp"
                },
                {
                    type: "item",
                    name: "minecraft:record_far"
                },
                {
                    type: "item",
                    name: "minecraft:record_mall"
                },
                {
                    type: "item",
                    name: "minecraft:record_mellohi"
                },
                {
                    type: "item",
                    name: "minecraft:record_stal"
                },
                {
                    type: "item",
                    name: "minecraft:record_strad"
                },
                {
                    type: "item",
                    name: "minecraft:record_ward"
                },
                {
                    type: "item",
                    name: "minecraft:record_11"
                },
                {
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
                    type: "item",
                    name: "minecraft:record_13"
                },
                {
                    type: "item",
                    name: "minecraft:record_cat"
                },
                {
                    type: "item",
                    name: "minecraft:record_blocks"
                },
                {
                    type: "item",
                    name: "minecraft:record_chirp"
                },
                {
                    type: "item",
                    name: "minecraft:record_far"
                },
                {
                    type: "item",
                    name: "minecraft:record_mall"
                },
                {
                    type: "item",
                    name: "minecraft:record_mellohi"
                },
                {
                    type: "item",
                    name: "minecraft:record_stal"
                },
                {
                    type: "item",
                    name: "minecraft:record_strad"
                },
                {
                    type: "item",
                    name: "minecraft:record_ward"
                },
                {
                    type: "item",
                    name: "minecraft:record_11"
                },
                {
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
                    type: "item",
                    name: "minecraft:record_13"
                },
                {
                    type: "item",
                    name: "minecraft:record_cat"
                },
                {
                    type: "item",
                    name: "minecraft:record_blocks"
                },
                {
                    type: "item",
                    name: "minecraft:record_chirp"
                },
                {
                    type: "item",
                    name: "minecraft:record_far"
                },
                {
                    type: "item",
                    name: "minecraft:record_mall"
                },
                {
                    type: "item",
                    name: "minecraft:record_mellohi"
                },
                {
                    type: "item",
                    name: "minecraft:record_stal"
                },
                {
                    type: "item",
                    name: "minecraft:record_strad"
                },
                {
                    type: "item",
                    name: "minecraft:record_ward"
                },
                {
                    type: "item",
                    name: "minecraft:record_11"
                },
                {
                    type: "item",
                    name: "minecraft:record_wait"
                }
            ]
        }
    ]
});
