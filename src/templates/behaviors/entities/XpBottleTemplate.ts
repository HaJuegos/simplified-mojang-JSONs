import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla de la botella de XP para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const XpBottleTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.XpBottle,
    description: {
        spawnCategory: SpawnCategoryEntities.Misc,
        isSummonable: true,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "xp_bottle"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.25,
            width: 0.25
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 5,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetProjectile({
            angleOffset: -20,
            onHit: {
                grantXp: {
                    maxXP: 11,
                    minXP: 3
                },
                removeOnHit: {}
            },
            gravity: 0.05,
            hitSound: "glass",
            power: 0.5,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {}
});
