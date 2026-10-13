import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const TropicalfishTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:clownfish",
                    weight: 1
                }
            ]
        },
        {
            rolls: 1,
            conditions: [
                {
                    condition: "random_chance_with_looting",
                    chance: 0.25,
                    lootingMultiplier: 0.01
                }
            ],
            entries: [
                {
                    type: "item",
                    name: "minecraft:bone",
                    weight: 1,
                    functions: [
                        {
                            function: "looting_enchant",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
