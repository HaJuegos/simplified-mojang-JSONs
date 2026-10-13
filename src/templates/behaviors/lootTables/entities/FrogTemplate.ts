import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const FrogTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:slime_ball",
                    weight: 1
                }
            ],
            conditions: [
                {
                    condition: "entity_killed",
                    entityType: "minecraft:slime"
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:ochre_froglight",
                    weight: 1
                }
            ],
            conditions: [
                {
                    condition: "has_variant",
                    value: 0
                },
                {
                    condition: "entity_killed",
                    entityType: "minecraft:magma_cube"
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:verdant_froglight",
                    weight: 1
                }
            ],
            conditions: [
                {
                    condition: "has_variant",
                    value: 1
                },
                {
                    condition: "entity_killed",
                    entityType: "minecraft:magma_cube"
                }
            ]
        },
        {
            rolls: 1,
            entries: [
                {
                    type: "item",
                    name: "minecraft:pearlescent_froglight",
                    weight: 1
                }
            ],
            conditions: [
                {
                    condition: "has_variant",
                    value: 2
                },
                {
                    condition: "entity_killed",
                    entityType: "minecraft:magma_cube"
                }
            ]
        }
    ]
});
