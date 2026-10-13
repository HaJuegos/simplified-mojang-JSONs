import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const BrownMooshroomShearTemplate = createBPLootTable({
    pools: [
        {
            rolls: 5,
            entries: [
                {
                    type: "item",
                    name: "minecraft:brown_mushroom",
                    weight: 1,
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_data_from_color_index' de 'function' no existe en el tipado.
                            function: "minecraft:set_data_from_color_index"
                        },
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
