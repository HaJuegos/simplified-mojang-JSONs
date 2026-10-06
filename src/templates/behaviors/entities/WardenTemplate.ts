import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Warden para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const WardenTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Warden,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "emerging": [
            new BPEntityComponents.SetBehaviorEmerge({
                duration: 7,
                onDone: {
                    event: "minecraft:emerged",
                    target: "self"
                }
            })
        ],
        "pushable": [
            new BPEntityComponents.SetPushableByBlock(),
            new BPEntityComponents.SetPushableByEntity()
        ]
    },
    components: [
        new BPEntityComponents.SetAmbientSoundInterval({
            soundEvents: [
                {
                    soundID: "angry",
                    condition: `${MoLang.angerLevel()} >= 80`
                },
                {
                    soundID: "agitated",
                    condition: `${MoLang.angerLevel()} >= 40`
                }
            ],
            minRandomCooldownSound: 2,
            maxRandomCooldownSound: 4
        }),
        new BPEntityComponents.SetAngelevel({
            angryThreshold: 80,
            angryBoost: 20,
            angerDecrementInterval: 1,
            defaultAnnoyingness: 35,
            defaultProjectileAnnoyingness: 10,
            maxAnger: 150,
            onIncreaseSounds: [
                {
                    condition: `${MoLang.angerLevel()} >= 40`,
                    soundID: "listening_angry"
                },
                {
                    condition: `${MoLang.angerLevel()} >= 0`,
                    soundID: "listening"
                }
            ],
            nuisanceFilter: EntityFilters.allOf(
                EntityFilters.isFamily("warden", "other", "not"),
                EntityFilters.isFamily("inanimate", "other", "not")
            ),
            removeTargetsBelowAngryThreshold: true
        }),
        new BPEntityComponents.SetAttack({
            damage: 30
        }),
        new BPEntityComponents.SetBehaviorDig({
            duration: 5.5,
            idleTime: 60,
            vibrationIsDisturbance: true,
            suspicionIsDisturbance: true,
            onStart: {
                event: "on_digging_event"
            },
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorInvestigateSuspiciousLocation({
            speedMultiplier: 0.7,
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            meleeFov: 360,
            speedMultiplier: 1.2,
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 11
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 9,
            speedMultiplier: 0.5
        }),
        new BPEntityComponents.SetBehaviorRoar({
            duration: 4.2,
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorSniff({
            duration: 4.16,
            sniffingRadius: 24,
            suspicionRadiusHorizontal: 6,
            suspicionRadiusVertical: 20,
            cooldownRange: {
                min: 5,
                max: 10
            },
            priority: 6
        }),
        new BPEntityComponents.SetBehaviorSonicBoom({
            duration: 3,
            speedMultiplier: 1.2,
            attackDamage: 10,
            attackCooldown: 2,
            knockbackVerticalStrength: 0.5,
            knockbackHorizontalStrength: 2.5,
            knockbackHeightCap: 0.5,
            attackSound: "sonic_boom",
            chargeSound: "sonic_charge",
            priority: 3
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 2.9,
            width: 0.9
        }),
        new BPEntityComponents.SetExperienceReward({
            onBred: "Math.Random(1,7)",
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 : 0`
        }),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetFollowRange({
            value: 30
        }),
        new BPEntityComponents.SetHealth({
            max: 500,
            value: 500
        }),
        new BPEntityComponents.SetHeartbeat({
            interval: `2.0 - math.clamp(${MoLang.angerLevel()} / 80 * 1.5, 0, 1.5)`
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetKnockbackResistance({
            value: 1
        }),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/warden.json"
        }),
        new BPEntityComponents.SetMobEffect({
            cooldownTime: 6,
            effectRange: 20,
            effectTime: 13,
            entityFilter: EntityFilters.allOf(
                EntityFilters.isFamily("player", "other"),
                EntityFilters.hasAbility("invulnerable", "other", "not")
            ),
            mobEffect: "darkness"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.3
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetMovementSoundDistanceOffset({
            value: 0.55
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidDamageBlocks: true,
            canPathOverLava: true,
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPreferredPath({
            maxFallBlocks: 20
        }),
        new BPEntityComponents.SetSuspectTracking(),
        new BPEntityComponents.SetTypeFamily({
            family: ["warden", "monster", "mob"]
        }),
        new BPEntityComponents.SetVibrationDamper(),
        new BPEntityComponents.SetVibrationListener()
    ],
    events: {
        "minecraft:emerged": {
            add: {
                componentGroups: ["pushable"]
            },
            remove: {
                componentGroups: ["emerging"]
            }
        },
        "minecraft:spawn_emerging": {
            add: {
                componentGroups: ["emerging"]
            }
        },
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["pushable"]
            }
        },
        "on_digging_event": {
            remove: {
                componentGroups: ["pushable"]
            }
        }
    }
});
