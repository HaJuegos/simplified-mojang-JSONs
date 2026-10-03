import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";

export const OminousItemSpawnerTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.OminousItemSpawner,
    formatVersion: FormatVersionEntities.V1_26_0,
    description: {
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [],
    events: {}
});
