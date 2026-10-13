import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const RewardOminousUniqueTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:enchanted_golden_apple",
                    weight: 3
                },
                {
                    type: "item",
                    name: "minecraft:flow_armor_trim_smithing_template",
                    weight: 3
                },
                {
                    type: "item",
                    name: "minecraft:flow_banner_pattern",
                    weight: 2
                },
                {
                    type: "item",
                    name: "minecraft:music_disc_creator",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:heavy_core",
                    weight: 1
                }
            ]
        }
    ]
});
