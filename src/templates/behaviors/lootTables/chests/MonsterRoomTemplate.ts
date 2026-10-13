import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const MonsterRoomTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:iron_ingot",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 5
                            }
                        }
                    ],
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:redstone",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:bread",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:golden_apple",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:wheat",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:gunpowder",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:string",
                    functions: [
                        {
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }
                    ],
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:name_tag",
                    weight: 10
                },
                {
                    type: "item",
                    name: "minecraft:bucket",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:horsearmoriron",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:copper_horse_armor",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:horsearmorgold",
                    weight: 2
                },
                {
                    type: "item",
                    name: "minecraft:book",
                    weight: 1,
                    functions: [
                        {
                            function: "enchant_randomly"
                        }
                    ]
                }
            ]
        }
    ]
});
