import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const TrialChamberTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "loot_table",
                    name: "loot_tables/equipment/trial_chamber_chainmail.json",
                    weight: 4
                },
                {
                    type: "loot_table",
                    name: "loot_tables/equipment/trial_chamber_iron.json",
                    weight: 2
                },
                {
                    type: "loot_table",
                    name: "loot_tables/equipment/trial_chamber_diamond.json",
                    weight: 1
                }
            ]
        }
    ]
});
