import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const WolfTemplate = createBPLootTable({
    // TODO: Falta la propiedad requerida 'pools' segun el tipado.
    // TODO: El JSON original no contiene la propiedad 'pools'; se dejo vacia.
    pools: []
});
