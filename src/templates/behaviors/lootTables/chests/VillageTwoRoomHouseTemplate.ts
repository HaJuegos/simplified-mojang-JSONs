import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageTwoRoomHouseTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 6,
                max: 8
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:potato",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 5,
                                max: 8
                            }
                        }
                    ],
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:carrot",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 8
                            }
                        }
                    ],
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:wheat",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 8,
                                max: 12
                            }
                        }
                    ],
                    weight: 15
                },
                {
                    type: "item",
                    name: "minecraft:wheat_seeds",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 4
                            }
                        }
                    ],
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:beetroot",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 5,
                                max: 8
                            }
                        }
                    ],
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:wooden_hoe",
                    functions: [
                        {
                            function: "set_count",
                            count: 1
                        }
                    ],
                    weight: 1
                }
            ]
        }
    ]
});
