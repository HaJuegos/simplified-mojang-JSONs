import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/entities/EntitiesEnums";

/**
 * Plantilla vanilla del item que spawnea el ominous spawner para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const OminousItemSpawnerTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.OminousItemSpawner,
    description: {
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [],
    events: {}
});
