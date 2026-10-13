import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const DesertPyramidBrushableBlockTemplate = createBPLootTable({
    pools: [
        {
            rolls: {
                min: 1,
                max: 1
            },
            entries: [
                {
                    type: "item",
                    name: "minecraft:archer_pottery_sherd",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:miner_pottery_sherd",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:prize_pottery_sherd",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:skull_pottery_sherd",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:gunpowder",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:tnt",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:diamond",
                    weight: 1
                },
                {
                    type: "item",
                    name: "minecraft:emerald",
                    weight: 1
                }
            ]
        }
    ]
});
