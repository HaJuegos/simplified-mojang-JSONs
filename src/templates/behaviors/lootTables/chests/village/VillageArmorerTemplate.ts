import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageArmorerTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 1,
                max: 5
            },
            entries: [
                {
                    type: "item",
                    weight: 2,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:iron_ingot"
                },
                {
                    type: "item",
                    weight: 4,
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    name: "minecraft:bread"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:iron_helmet"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:emerald"
                }
            ]
        }
    ]
});
