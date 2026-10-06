import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla del Tridente Lanzado para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const ThrownTridentTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.ThrownTrident,
    description: {
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "thrown_trident"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.35,
            width: 0.25
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
            hitGroundSound: "item.trident.hit_ground",
            anchor: "eye_height",
            gravity: 0.1,
            hitSound: "item.trident.hit",
            multipleTargets: false,
            liquidInertia: 0.99,
            onHit: {
                impactDamage: {
                    applyKnockbackToBlockingTargets: true,
                    damage: {
                        min: 8,
                        max: 8
                    },
                    knockback: true,
                    destroyOnHit: false
                },
                stickInGround: {
                    shakeTime: 0
                }
            },
            offset: [0, -0.1, 0],
            power: 4,
            shouldBounce: "if_no_damage_dealt",
            stopOnHurt: true,
            uncertaintyBase: 1,
            uncertaintyMultiplier: 0,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {}
});
