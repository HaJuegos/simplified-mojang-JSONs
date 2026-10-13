import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const SkeletonGearTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:bow",
                    weight: 1,
                    functions: [
                        {
                            function: "looting_enchant",
                            count: {
                                min: 0,
                                max: 1
                            }
                        },
                        {
                            function: "enchant_random_gear",
                            chance: 0.1
                        }
                    ]
                }
            ]
        },
        {
            conditions: [
                {
                    condition: "random_difficulty_chance",
                    defaultChance: 1.0,
                    peaceful: 0,
                    easy: 0
                },
                {
                    condition: "random_regional_difficulty_chance",
                    maxChance: 0.15
                }
            ],
            tiers: {
                initialRange: 3,
                bonusRolls: 3,
                bonusChance: 0.1087
            },
            entries: [
                {
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_leather.json"
                },
                {
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_copper.json"
                },
                {
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_gold.json"
                },
                {
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_chain.json"
                },
                {
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_iron.json"
                },
                {
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_diamond.json"
                }
            ]
        }
    ]
});
