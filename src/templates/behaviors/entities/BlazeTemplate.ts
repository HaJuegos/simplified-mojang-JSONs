import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Blaze para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 04-10-2026
 */
export const BlazeTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Blaze,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "melee_mode": [
            new BPEntityComponents.SetAttack({
                damage: 6
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                priority: 3
            })
        ],
        "mode_switcher": [
            new BPEntityComponents.SetTargetNearbySensor({
                onInsideRange: {
                    event: "switch_to_melee",
                    target: "self"
                },
                insideRange: 2,
                mustSee: true,
                outsideRange: 3,
                onOutsideRange: {
                    event: "switch_to_ranged",
                    target: "self"
                }
            })
        ],
        "ranged_mode": [
            new BPEntityComponents.SetBehaviorRangedAttack({
                chargeShootTrigger: 4,
                attackInterval: {
                    min: 3,
                    max: 5
                },
                attackRange: {
                    min: 0,
                    max: 48
                },
                burstInterval: 0.3,
                burstShots: 3,
                priority: 3
            }),
            new BPEntityComponents.SetShooter({
                projectiles: [
                    {
                        def: "minecraft:small_fireball"
                    }
                ]
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.isFamily('player', 'other'),
                    maxDist: 48
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 4,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.8,
            width: 0.5
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? 10 : 0`
        }),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetFreezingVulnerable(),
        new BPEntityComponents.SetFollowRange({
            max: 48,
            value: 48
        }),
        new BPEntityComponents.SetHealth({
            max: 20,
            value: 20
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    cause: "drowning",
                    damagePerTick: 1,
                    filters: EntityFilters.inContactWithWater()
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/blaze.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.23
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidDamageBlocks: true,
            avoidWater: true,
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetOnHurt({
            event: "minecraft:on_hurt_event",
            target: "self"
        }),
        new BPEntityComponents.SetOnHurtByPlayer({
            event: "minecraft:on_hurt_event",
            target: "self"
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetTypeFamily({
            family: ["blaze", "monster", "mob"]
        })
    ],
    events: {
        "switch_to_melee": {
            add: {
                componentGroups: ["melee_mode"]
            },
            remove: {
                componentGroups: ["ranged_mode"]
            }
        },
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["mode_switcher"]
            }
        },
        "minecraft:on_hurt_event": {
            add: {
                componentGroups: ["mode_switcher"]
            }
        },
        "switch_to_ranged": {
            add: {
                componentGroups: ["ranged_mode"]
            },
            remove: {
                componentGroups: ["melee_mode"]
            }
        }
    }
});
