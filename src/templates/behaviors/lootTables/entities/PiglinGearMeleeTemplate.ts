import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const PiglinGearMeleeTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:golden_sword",
                    weight: 95,
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
                },
                {
                    type: "item",
                    name: "minecraft:golden_spear",
                    weight: 5,
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
            // TODO: Falta la propiedad requerida 'rolls' segun el tipado.
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
                // TODO: Falta la propiedad requerida 'bonusChance' segun el tipado.
                // TODO: Falta la propiedad requerida 'bonusRolls' segun el tipado.
                initialRange: 1
            },
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_gold.json"
                }
            ]
        }
    ]
});
