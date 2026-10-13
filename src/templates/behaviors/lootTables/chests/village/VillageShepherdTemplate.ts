import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageShepherdTemplate = createBPLootTable({
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
                            function: "set_count",
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
                            function: "set_count",
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
                            function: "set_count",
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
                            function: "set_count",
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
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:light_gray_wool"
                },
                {
                    type: "item",
                    name: "minecraft:emerald"
                },
                {
                    type: "item",
                    name: "minecraft:shears"
                },
                {
                    type: "item",
                    weight: 6,
                    functions: [
                        {
                            function: "set_count",
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
