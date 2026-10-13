import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const ConsumablesTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:cooked_chicken",
                    weight: 3,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:bread",
                    weight: 3,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:baked_potato",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:potion",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        },
                        {
                            function: "set_potion",
                            id: "regeneration"
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:potion",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: 1.0
                        },
                        {
                            function: "set_potion",
                            id: "swiftness"
                        }
                    ]
                }
            ]
        }
    ]
});
