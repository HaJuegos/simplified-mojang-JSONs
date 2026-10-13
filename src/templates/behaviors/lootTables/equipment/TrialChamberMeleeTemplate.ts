import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const TrialChamberMeleeTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "loot_table",
                    name: "loot_tables/equipment/trial_chamber.json",
                    weight: 1
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:iron_sword",
                    weight: 4
                },
                {
                    type: "item",
                    name: "minecraft:iron_sword",
                    functions: [
                        {
                            function: "specific_enchants",
                            // TODO: Se esperaba un texto y llego una lista.
                            enchants: [
                                {
                                    id: "sharpness",
                                    level: 1
                                }
                            ]
                        }
                    ],
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:iron_sword",
                    functions: [
                        {
                            function: "specific_enchants",
                            // TODO: Se esperaba un texto y llego una lista.
                            enchants: [
                                {
                                    id: "knockback",
                                    level: 1
                                }
                            ]
                        }
                    ],
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:diamond_sword",
                    weight: 1
                }
            ]
        }
    ]
});
