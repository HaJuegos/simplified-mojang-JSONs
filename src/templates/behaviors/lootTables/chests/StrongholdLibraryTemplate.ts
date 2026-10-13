import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const StrongholdLibraryTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 2,
                max: 10
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:book",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    weight: 100
                },
                {
                    type: "item",
                    name: "minecraft:paper",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 7
                            }
                        }
                    ],
                    weight: 100
                },
                {
                    type: "item",
                    name: "minecraft:map",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:compass",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:book",
                    weight: 60,
                    functions: [
                        {
                            function: "enchant_with_levels",
                            levels: 30,
                            treasure: true
                        }
                    ]
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:eye_armor_trim_smithing_template",
                    weight: 1
                }
            ]
        }
    ]
});
