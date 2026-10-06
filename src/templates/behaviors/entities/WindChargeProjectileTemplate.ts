import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla del Wind Charge para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const WindChargeProjectileTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.WindChargeProjectile,
    description: {
        isSummonable: true,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "wind_charge", "wind_charge_projectile"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.3125,
            width: 0.3125
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 7,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetExplode({
            knockbackScaling: 1.22,
            damageScaling: 0,
            allowUnderwater: true,
            breaksBlocks: false,
            causesFire: false,
            maxResistance: 0,
            negatesFallDamage: true,
            particleEffect: "wind_burst",
            togglesBlocks: true,
            power: 1.2,
            soundEffect: "wind_charge.burst"
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetProjectile({
            reflectImmunity: 0.5,
            gravity: 0,
            inertia: 1,
            ignoredEntities: ["ender_crystal", "wind_charge_projectile", "breeze_wind_charge_projectile"],
            multipleTargets: false,
            liquidInertia: 1,
            onHit: {
                impactDamage: {
                    applyKnockbackToBlockingTargets: true,
                    damage: {
                        min: 1,
                        max: 1
                    },
                    knockback: true,
                    maxCriticalDamage: 1
                },
                windBurstOnHit: {}
            },
            power: 1.5,
            reflectOnHurt: true,
            uncertaintyBase: 1,
            uncertaintyMultiplier: 0,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {}
});
