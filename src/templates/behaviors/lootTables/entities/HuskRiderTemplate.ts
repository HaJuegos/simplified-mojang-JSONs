import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const HuskRiderTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:rotten_flesh",
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
                },
                {
                    type: "item",
                    name: "minecraft:rabbit_foot",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 0,
                                max: 1
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
                    condition: "killed_by_player_or_pets"
                },
                {
                    condition: "random_chance_with_looting",
                    chance: 0.025,
                    lootingMultiplier: 0.01
                }
            ],
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:iron_ingot",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:carrot",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:potato",
                    weight: 1
                }
            ]
        },
        {
            conditions: [
                {
                    condition: "killed_by_player_or_pets"
                },
                {
                    condition: "passenger_of_entity",
                    entityType: "minecraft:chicken"
                },
                {
                    condition: "is_baby"
                }
            ],
            rolls: 1,
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:music_disc_lava_chicken"
                }
            ]
        }
    ]
});
