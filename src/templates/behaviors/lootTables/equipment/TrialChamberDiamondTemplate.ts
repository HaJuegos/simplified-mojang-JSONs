import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const TrialChamberDiamondTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            conditions: [
                {
                    chance: 0.5,
                    condition: "random_chance"
                }
            ],
            entries: [
                {
                    type: "item",
                    functions: [
                        {
                            function: "set_armor_trim",
                            material: "copper",
                            pattern: "flow"
                        },
                        {
                            function: "specific_enchants",
                            enchants: [
                                {
                                    id: "protection",
                                    level: 4
                                },
                                {
                                    id: "fire_protection",
                                    level: 4
                                },
                                {
                                    id: "projectile_protection",
                                    level: 4
                                }
                            ]
                        }
                    ],
                    name: "minecraft:diamond_helmet"
                }
            ]
        },
        {
            rolls: 1,
            conditions: [
                {
                    chance: 0.5,
                    condition: "random_chance"
                }
            ],
            entries: [
                {
                    type: "item",
                    functions: [
                        {
                            function: "set_armor_trim",
                            material: "copper",
                            pattern: "flow"
                        },
                        {
                            function: "specific_enchants",
                            enchants: [
                                {
                                    id: "protection",
                                    level: 4
                                },
                                {
                                    id: "fire_protection",
                                    level: 4
                                },
                                {
                                    id: "projectile_protection",
                                    level: 4
                                }
                            ]
                        }
                    ],
                    name: "minecraft:diamond_chestplate"
                }
            ]
        }
    ]
});
