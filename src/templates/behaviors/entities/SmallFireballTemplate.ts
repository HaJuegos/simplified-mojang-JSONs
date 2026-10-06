import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla de la bola de fuego pequeña para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const SmallFireballTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.SmallFireball,
    description: {
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "small_fireball"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.31,
            width: 0.31
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 7,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetDimensionBound(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetProjectile({
            anchor: "middle",
            gravity: 0,
            inertia: 1,
            liquidInertia: 1,
            onHit: {
                catchFire: {
                    fireAffectedByGriefing: true
                },
                removeOnHit: {},
                impactDamage: {
                    applyKnockbackToBlockingTargets: true,
                    catchFire: true,
                    damage: {
                        min: 5,
                        max: 5
                    },
                    knockback: true
                }
            },
            offset: [0, 0.5, 0],
            reflectOnHurt: true,
            power: 1.3,
            uncertaintyBase: 10,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {}
});
