import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const RedWoolSlabTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    // TODO: Falta la propiedad requerida 'weight' segun el tipado.
                    type: "item",
                    name: "minecraft:red_wool_slab",
                    functions: [
                        {
                            // TODO: El valor 'explosion_decay' de 'function' no existe en el tipado.
                            function: "explosion_decay"
                        }
                    ]
                }
            ]
        }
    ]
});
