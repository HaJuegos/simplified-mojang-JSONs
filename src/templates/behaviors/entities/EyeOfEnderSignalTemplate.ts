import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla del Ojo del Ender para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const EyeOfEnderSignalTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.EyeOfEnderSignal,
    description: {
        spawnCategory: SpawnCategoryEntities.Misc,
        isExperimental: false,
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetCollisionBox({
            height: 0.25,
            width: 0.25
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 10,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity()
    ],
    events: {}
});
