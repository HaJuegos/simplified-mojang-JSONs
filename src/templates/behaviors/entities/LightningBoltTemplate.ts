import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla del Rayo para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const LightningBoltTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.LightningBolt,
    description: {
        spawnCategory: SpawnCategoryEntities.Misc,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 10,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["lightning"]
        })
    ],
    events: {}
});
