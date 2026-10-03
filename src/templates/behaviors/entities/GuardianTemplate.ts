import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const GuardianTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Guardian,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    componentsGroups: {
        "minecraft:guardian_aggressive": [
            new BPEntityComponents.SetBehaviorGuardianAttack({
                priority: 4
            }),
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                attackInterval: {
                    max: 1
                },
                mustSee: true,
                entityTypes: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.anyOf(
                                {
                                    test: "is_family",
                                    subject: 1,
                                    operator: 0,
                                    value: "player"
                                },
                                {
                                    test: "is_family",
                                    subject: 1,
                                    operator: 0,
                                    value: "squid"
                                },
                                {
                                    test: "is_family",
                                    subject: 1,
                                    operator: 0,
                                    value: "axolotl"
                                }
                            )
                        )
                    }
                ],
                priority: 1
            }),
            new BPEntityComponents.SetTargetNearbySensor({
                insideRange: 3,
                onInsideRange: {
                    event: "minecraft:target_too_close",
                    target: "self"
                },
                outsideRange: 4
            })
        ],
        "minecraft:guardian_passive": [
            new BPEntityComponents.SetBehaviorAvoidMobType({
                entityTypes: [
                    {
                        filters: EntityFilters.allOf({
                            test: "is_family",
                            subject: 1,
                            operator: 0,
                            value: "player"
                        }),
                        maxDist: 8
                    }
                ],
                priority: 1
            }),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: [1, 3],
                timeDownEvent: {
                    event: "minecraft:target_far_enough",
                    target: "self"
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAmbientSoundInterval({
            soundEvents: [
                {
                    soundID: "ambient.in.water",
                    condition: "query.head_is_in_water"
                }
            ],
            minRandomCooldownSound: 8,
            maxRandomCooldownSound: 16
        }),
        new BPEntityComponents.SetAttack({
            damage: 5
        }),
        new BPEntityComponents.SetBehaviorGuardianAttack({
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 12,
            probability: 0.01,
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorMoveTowardsHomeRestriction({
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            attackInterval: {
                max: 1
            },
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "player"
                            },
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "squid"
                            },
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "axolotl"
                            }
                        )
                    )
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorRandomSwim({
            avoidSurface: false,
            speedMultiplier: 1,
            interval: 80,
            priority: 7
        }),
        new BPEntityComponents.SetBreathable({
            breathesWater: true
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.85,
            width: 0.85
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: "query.last_hit_by_player ? 10 : 0"
        }),
        new BPEntityComponents.SetFollowRange({
            max: 16,
            value: 16
        }),
        new BPEntityComponents.SetHealth({
            max: 30,
            value: 30
        }),
        // TODO(migrate): componente sin clase "minecraft:home": {"restriction_radius": 16, "restriction_type": "random_movement"}
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    cause: "lava",
                    damagePerTick: 4,
                    filters: EntityFilters.inLava(true, "self", "==")
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/guardian.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.12
        }),
        new BPEntityComponents.SetMovementSway({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationGeneric({
            canBreach: true,
            canWalk: false,
            canPathOverWater: false,
            canSwim: true,
            isAmphibious: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetTargetNearbySensor({
            insideRange: 3,
            onInsideRange: {
                event: "minecraft:target_too_close",
                target: "self"
            },
            outsideRange: 4
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "guardian", "monster", "mob"]
        }),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.12
        }),
        new BPEntityComponents.SetUsesLegacyFriction()
    ],
    events: {
        "minecraft:target_far_enough": {
            add: {
                componentGroups: ["minecraft:guardian_aggressive"]
            },
            remove: {
                componentGroups: ["minecraft:guardian_passive"]
            }
        },
        "minecraft:target_too_close": {
            add: {
                componentGroups: ["minecraft:guardian_passive"]
            },
            remove: {
                componentGroups: ["minecraft:guardian_aggressive"]
            }
        }
    }
});
