import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const ZombieEquipmentTemplate = createBPLootTable({
    pools: [
        {
            conditions: [
                {
                    condition: "random_regional_difficulty_chance",
                    maxChance: 0.05
                }
            ],
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:iron_spear",
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
                            chance: 0.25
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_sword",
                    weight: 2,
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
                            chance: 0.25
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:iron_shovel",
                    weight: 3,
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
                            chance: 0.25
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
                initialRange: 3,
                bonusRolls: 3,
                bonusChance: 0.1087
            },
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_leather.json"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_copper.json"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_gold.json"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_chain.json"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_iron.json"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "loot_table",
                    name: "loot_tables/entities/armor_set_diamond.json"
                }
            ]
        }
    ]
});
