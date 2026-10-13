import { FinalEntityBuilderTemplate } from "../../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const VillageMasonTemplate = createBPLootTable({
    // TODO: La propiedad 'type' no existe en el tipado.
    type: "minecraft:chest",
    pools: [
        {
            rolls: {
                min: 1,
                max: 5
            },
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    functions: [
                        {
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }
                    ],
                    name: "minecraft:clay_ball"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
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
                            // TODO: El valor 'minecraft:set_count' de 'function' no existe en el tipado.
                            function: "minecraft:set_count",
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
                    name: "minecraft:yellow_dye"
                },
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:smooth_stone"
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
