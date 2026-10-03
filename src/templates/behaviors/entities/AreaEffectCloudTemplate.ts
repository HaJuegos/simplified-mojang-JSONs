import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate, FinalEntityBuilderTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla del Area Effect Cloud para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 02-10-2026
 */
export const AreaEffectCloudTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.AreaEffectCloud,
    description: {
        spawnCategory: SpawnCategoryEntities.Misc,
        isExperimental: false,
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetPhysics({
            hasCollision: false
        })
    ],
    events: {}
});
