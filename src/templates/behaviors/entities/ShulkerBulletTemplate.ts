import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla de la bala de Shulker para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const ShulkerBulletTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.ShulkerBullet,
    description: {
        spawnCategory: SpawnCategoryEntities.Misc,
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "shulker_bullet"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.625,
            width: 0.625
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 7,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetPhysics({
            hasCollision: false
        }),
        new BPEntityComponents.SetProjectile({
            anchor: "eye_height",
            critParticleOnHurt: true,
            homing: true,
            destroyOnHurt: true,
            gravity: 0.05,
            hitSound: "bullet.hit",
            onHit: {
                impactDamage: {
                    applyKnockbackToBlockingTargets: true,
                    damage: {
                        min: 4,
                        max: 4
                    },
                    knockback: true
                },
                mobEffect: {
                    effects: [
                        {
                            amplifier: 0,
                            durationhard: 200,
                            effect: "levitation",
                            durationeasy: 200,
                            durationnormal: 200
                        }
                    ]
                },
                particleOnHit: {
                    onOtherHit: true,
                    particleType: "largeexplode"
                },
                removeOnHit: {}
            },
            offset: [0, -0.1, 0],
            power: 1.6,
            shouldBounce: "if_no_damage_dealt",
            uncertaintyBase: 16,
            uncertaintyMultiplier: 4,
            isolatedPhysics: false
        })
    ],
    events: {}
});
