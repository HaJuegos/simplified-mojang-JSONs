import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const PillagerCaptainTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:ominous_bottle",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: 1
                        },
                        {
                            function: "set_ominous_bottle_amplifier",
                            amplifier: {
                                min: 0,
                                max: 4
                            }
                        }
                    ]
                }
            ],
            conditions: [
                {
                    condition: "killed_by_player"
                }
            ]
        }
    ]
});
