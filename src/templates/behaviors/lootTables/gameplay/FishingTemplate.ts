import { FinalEntityBuilderTemplate } from "../../../../builders/behaviors/entities/EntityTemplateBuilder";
import { createBPLootTable } from "../../../../builders/behaviors/lootTables/LootTablesTemplateBuilder";

/**
 * Plantilla vanilla del LootTable para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 12-10-2026
 */
export const FishingTemplate = createBPLootTable({
    pools: [
        {
            rolls: 1,
            entries: [
                {
                    type: "loot_table",
                    name: "loot_tables/gameplay/fishing/junk.json",
                    weight: 10,
                    // TODO: La propiedad 'quality' no existe en el tipado de 'loot_table'.
                    quality: -2
                },
                {
                    type: "loot_table",
                    name: "loot_tables/gameplay/fishing/treasure.json",
                    weight: 5,
                    // TODO: La propiedad 'quality' no existe en el tipado de 'loot_table'.
                    quality: 2
                },
                {
                    type: "loot_table",
                    name: "loot_tables/gameplay/fishing/fish.json",
                    weight: 85,
                    // TODO: La propiedad 'quality' no existe en el tipado de 'loot_table'.
                    quality: -1
                }
            ]
        }
    ]
});
