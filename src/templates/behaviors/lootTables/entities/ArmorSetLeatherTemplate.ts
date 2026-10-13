import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const ArmorSetLeatherTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:leather_helmet",
                    weight: 1,
                    functions: [
                        {
                            function: "enchant_random_gear",
                            chance: 0.25
                        }
                    ],
                    pools: [
                        {
                            conditions: [
                                {
                                    condition: "random_difficulty_chance",
                                    defaultChance: 0.5,
                                    peaceful: 0,
                                    hard: 0.6
                                }
                            ],
                            rolls: 1,
                            entries: [
                                {
                                    type: "item",
                                    name: "minecraft:leather_chestplate",
                                    weight: 1,
                                    functions: [
                                        {
                                            function: "enchant_random_gear",
                                            chance: 0.25
                                        }
                                    ],
                                    pools: [
                                        {
                                            conditions: [
                                                {
                                                    condition: "random_difficulty_chance",
                                                    defaultChance: 0.5,
                                                    peaceful: 0,
                                                    hard: 0.6
                                                }
                                            ],
                                            rolls: 1,
                                            entries: [
                                                {
                                                    type: "item",
                                                    name: "minecraft:leather_leggings",
                                                    weight: 1,
                                                    functions: [
                                                        {
                                                            function: "enchant_random_gear",
                                                            chance: 0.25
                                                        }
                                                    ],
                                                    pools: [
                                                        {
                                                            conditions: [
                                                                {
                                                                    condition: "random_difficulty_chance",
                                                                    defaultChance: 0.5,
                                                                    peaceful: 0,
                                                                    hard: 0.6
                                                                }
                                                            ],
                                                            rolls: 1,
                                                            entries: [
                                                                {
                                                                    type: "item",
                                                                    name: "minecraft:leather_boots",
                                                                    weight: 1,
                                                                    functions: [
                                                                        {
                                                                            function: "enchant_random_gear",
                                                                            chance: 0.25
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
