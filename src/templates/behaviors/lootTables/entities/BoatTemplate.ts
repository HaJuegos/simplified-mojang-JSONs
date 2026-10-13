import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const BoatTemplate = createBPLootTable({
    pools: [
        {
            // TODO: Falta la propiedad requerida 'rolls' segun el tipado.
            // TODO: Falta la propiedad requerida 'entries' segun el tipado.
        }
    ]
});
