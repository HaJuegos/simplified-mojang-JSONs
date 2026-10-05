import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla de la Fireball para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const FireballTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Fireball,
    description: {
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {
        "minecraft:exploding": [
            new BPEntityComponents.SetExplode({
                causesFire: true,
                fireAffectedByGriefing: true,
                fuseLit: true,
                power: 1,
                destroyAffectedByGriefing: true,
                fuseLength: 0
            })
        ]
    },
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "fireball"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 1,
            width: 1
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 7,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetDimensionBound(),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetProjectile({
            anchor: "middle",
            gravity: 0,
            catchFire: true,
            inertia: 1,
            liquidInertia: 1,
            onHit: {
                definitionEvent: {
                    affectProjectile: true,
                    eventTrigger: {
                        event: "minecraft:explode",
                        target: "self"
                    }
                },
                impactDamage: {
                    applyKnockbackToBlockingTargets: true,
                    damage: {
                        min: 6,
                        max: 6
                    },
                    knockback: false
                }
            },
            offset: [0, -1.5, 0],
            power: 1.6,
            reflectOnHurt: true,
            uncertaintyBase: 0,
            uncertaintyMultiplier: 0,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {
        "minecraft:explode": {
            add: {
                componentGroups: ["minecraft:exploding"]
            }
        }
    }
});
