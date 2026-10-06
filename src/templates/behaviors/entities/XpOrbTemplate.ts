import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla de la petita de Experiencia para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const XpOrbTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.XpOrb,
    description: {
        spawnCategory: SpawnCategoryEntities.Misc,
        isSummonable: true,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetBuoyant({
            applyGravity: false,
            liquidBlocks: ["minecraft:flowing_water", "minecraft:water"]
        }),
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
        new BPEntityComponents.SetHealth({
            max: 5,
            value: 5
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetTypeFamily({
            family: ["inanimate"]
        })
    ],
    events: {}
});
