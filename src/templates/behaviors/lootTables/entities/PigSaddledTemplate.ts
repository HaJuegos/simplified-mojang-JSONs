import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const PigSaddledTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:porkchop",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        },
                        {
                            function: "furnace_smelt",
                            conditions: [
                                {
                                    // TODO: El valor 'entity_properties' de 'condition' no existe en el tipado.
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
                    name: "minecraft:saddle",
                    weight: 1,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 1
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
