import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const TreasureTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:nautilus_shell",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:name_tag",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:saddle",
                    weight: 5
                },
                {
                    type: "item",
                    name: "minecraft:bow",
                    weight: 5,
                    functions: [
                        {
                            function: "set_damage",
                            damage: {
                                min: 0,
                                max: 0.25
                            }
                        },
                        {
                            function: "enchant_with_levels",
                            levels: 30,
                            treasure: true
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:fishing_rod",
                    weight: 5,
                    functions: [
                        {
                            function: "set_damage",
                            damage: {
                                min: 0,
                                max: 0.25
                            }
                        },
                        {
                            function: "enchant_with_levels",
                            levels: 30,
                            treasure: true
                        }
                    ]
                },
                {
                    type: "item",
                    name: "minecraft:book",
                    weight: 6,
                    functions: [
                        {
                            function: "enchant_with_levels",
                            levels: 30,
                            treasure: true
                        }
                    ]
                }
            ]
        }
    ]
});
