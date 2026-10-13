import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const RewardOminousTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "loot_table",
                    name: "loot_tables/chests/trial_chambers/reward_ominous_common.json",
                    weight: 2
                },
                {
                    type: "loot_table",
                    name: "loot_tables/chests/trial_chambers/reward_ominous_rare.json",
                    weight: 8
                }
            ]
        },
        {
            rolls: {
                min: 1,
                max: 3
            },
            entries: [
                {
                    type: "loot_table",
                    name: "loot_tables/chests/trial_chambers/reward_ominous_common.json",
                    weight: 1
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    type: "loot_table",
                    name: "loot_tables/chests/trial_chambers/reward_ominous_unique.json",
                    weight: 1
                }
            ],
            conditions: [
                {
                    condition: "random_chance",
                    chance: 0.75
                }
            ]
        }
    ]
});
