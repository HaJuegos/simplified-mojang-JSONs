import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const ArmorSetDiamondTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:diamond_helmet",
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
                                    name: "minecraft:diamond_chestplate",
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
                                                    name: "minecraft:diamond_leggings",
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
                                                                    name: "minecraft:diamond_boots",
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
