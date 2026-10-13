import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const DesertWellBrushableBlockTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 1,
                max: 1
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:arms_up_pottery_sherd",
                    weight: 2
                },
                {
                    type: "item",
                    name: "minecraft:brewer_pottery_sherd",
                    weight: 2
                },
                {
                    type: "item",
                    name: "minecraft:brick",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:emerald",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:stick",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:suspicious_stew",
                    weight: 1,
                    functions: [
                        {
                            function: "random_aux_value",
                            values: {
                                min: 0,
                                max: 6
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
