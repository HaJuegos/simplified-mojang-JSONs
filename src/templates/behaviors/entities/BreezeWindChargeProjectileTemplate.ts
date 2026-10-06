import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla del Breeze WindCharge para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 04-10-2026
 */
export const BreezeWindChargeProjectileTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.BreezeWindChargeProjectile,
    description: {
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: [
                "projectile",
                "wind_charge",
                "wind_charge_projectile",
                "breeze_wind_charge_projectile"
            ]
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
            knockbackScaling: 0.6,
            damageScaling: 0,
            allowUnderwater: true,
            breaksBlocks: false,
            causesFire: false,
            maxResistance: 0,
            negatesFallDamage: false,
            particleEffect: "breeze_wind_burst",
            togglesBlocks: true,
            power: 3,
            soundEffect: "breeze_wind_charge.burst"
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetProjectile({
            gravity: 0,
            uncertaintyBase: 5,
            inertia: 1,
            ignoredEntities: ["ender_crystal", "wind_charge_projectile", "breeze_wind_charge_projectile"],
            liquidInertia: 1,
            onHit: {
                impactDamage: {
                    applyKnockbackToBlockingTargets: true,
                    damage: {
                        min: 1,
                        max: 1
                    },
                    knockback: true
                },
                windBurstOnHit: {}
            },
            reflectOnHurt: true,
            power: 0.7,
            uncertaintyMultiplier: 4,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {}
});
