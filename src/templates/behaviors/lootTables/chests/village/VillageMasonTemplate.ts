import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageMasonTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 1,
                max: 5
            },
            entries: [
                {
                    type: "item",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:clay_ball"
                },
                {
                    type: "item",
                    name: "minecraft:flower_pot"
                },
                {
                    type: "item",
                    weight: 2,
                    name: "minecraft:stone"
                },
                {
                    type: "item",
                    weight: 2,
                    name: "minecraft:stone_bricks"
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
                    type: "item",
                    name: "minecraft:yellow_dye"
                },
                {
                    type: "item",
                    name: "minecraft:smooth_stone"
                },
                {
                    type: "item",
                    name: "minecraft:emerald"
                }
            ]
        }
    ]
});
