import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const PolarBearTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:fish",
                    weight: 3,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 0,
                                max: 2
                            }
                        },
                        {
                            function: "furnace_smelt",
                            conditions: [
                                {
                                    condition: "entity_properties",
                                    entity: "this",
                                    properties: {
                                        on_fire: true
                                    }
                                }
                            ]
                        },
                        {
                            function: "looting_enchant",
                            count: {
                                min: 0,
                                max: 1
                            }
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
                    name: "minecraft:salmon",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 0,
                                max: 2
                            }
                        },
                        {
                            function: "furnace_smelt",
                            conditions: [
                                {
                                    condition: "entity_properties",
                                    entity: "this",
                                    properties: {
                                        on_fire: true
                                    }
                                }
                            ]
                        },
                        {
                            function: "looting_enchant",
                            count: {
                                min: 0,
                                max: 1
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
