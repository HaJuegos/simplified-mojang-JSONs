import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const PiglinBruteTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.PiglinBrute,
    formatVersion: FormatVersionEntities.V1_26_0,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    componentsGroups: {
        "alert_for_attack_targets": [
            new BPEntityComponents.SetBehaviorNearestPrioritizedAttackableTarget({
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("player", "other"),
                        maxDist: 12,
                        priority: 0
                    },
                    {
                        filters: EntityFilters.isFamily("wither", "other"),
                        maxDist: 12,
                        priority: 1
                    }
                ],
                mustSee: true,
                persistTime: 2,
                withinRadius: 12,
                priority: 3
            })
        ],
        "become_zombie": [
            new BPEntityComponents.SetTransformation({
                into: "minecraft:zombie_pigman",
                keepLevel: true,
                preserveEquipment: true,
                transformationSound: "converted_to_zombified"
            })
        ],
        "take_target_as_response_to_block_break": [
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                entityTypes: [
                    {
                        filters: EntityFilters.allOf({
                            test: "is_family",
                            subject: 1,
                            operator: 0,
                            value: "player"
                        })
                    }
                ],
                priority: 3
            })
        ],
        "angry": [
            new BPEntityComponents.SetAngry({
                angrySoundId: "angry",
                broadcastAnger: false,
                calmEvent: {
                    event: "become_calm_event",
                    target: "self"
                },
                broadcastAngerOnAttack: false,
                broadcastAngerOnBeingAttacked: true,
                broadcastRange: 16,
                duration: 30,
                broadcastTargets: ["piglin"],
                filters: EntityFilters.allOf(EntityFilters.isFamily("piglin", "other", "!=")),
                soundInterval: {
                    range_max: 5,
                    range_min: 2
                }
            })
        ],
        "zombification_sensor": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    event: "start_zombification_event",
                    filters: EntityFilters.inNether(false, "self", "==")
                }
            })
        ],
        "go_back_to_spawn": [
            new BPEntityComponents.SetBehaviorGoHome({
                goalRadius: 4,
                priority: 6,
                interval: 200,
                onFailed: [
                    {
                        event: "go_back_to_spawn_failed",
                        target: "self"
                    }
                ],
                speedMultiplier: 0.6
            })
        ],
        "melee_unit": [
            new BPEntityComponents.SetAttack({
                damage: 7
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                trackTarget: true,
                priority: 4
            }),
            new BPEntityComponents.SetEquipment({
                table: "loot_tables/entities/piglin_brute_gear.json"
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "start_zombification": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    event: "stop_zombification_event",
                    filters: EntityFilters.inNether(true, "self", "==")
                }
            }),
            new BPEntityComponents.SetIsShaking(),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: 15,
                timeDownEvent: {
                    event: "become_zombie_event"
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAnnotationOpenDoor(),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 7,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            filters: EntityFilters.anyOf(
                EntityFilters.allOf(
                    EntityFilters.isPersistent(false),
                    EntityFilters.distanceToNearestPlayer(54, "self", ">")
                ),
                EntityFilters.allOf(
                    EntityFilters.isPersistent(false),
                    EntityFilters.inactivityTimer(30),
                    EntityFilters.randomChance(800),
                    EntityFilters.distanceToNearestPlayer(32, "self", ">")
                )
            )
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: "query.last_hit_by_player ? 20 : 0"
        }),
        new BPEntityComponents.SetFollowRange({
            value: 64
        }),
        new BPEntityComponents.SetHealth({
            max: 50,
            value: 50
        }),
        // TODO(migrate): componente sin clase "minecraft:home": {}
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
            table: "loot_tables/entities/piglin.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.35
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            canOpenDoors: true,
            usingDoorAnnotation: true,
            canPathOverWater: true
        }),
        new BPEntityComponents.SetOnTargetAcquired({
            event: "become_angry_event",
            target: "self"
        }),
        new BPEntityComponents.SetPhysics({}),
        // TODO(migrate): componente sin clase "minecraft:pushable": {"is_pushable": true, "is_pushable_by_piston": true}
        new BPEntityComponents.SetTypeFamily({
            family: ["piglin", "adult_piglin", "piglin_brute", "monster"]
        })
    ],
    events: {
        "stop_zombification_event": {
            add: {
                componentGroups: ["zombification_sensor"]
            },
            remove: {
                componentGroups: ["start_zombification"]
            }
        },
        "become_calm_event": {
            add: {
                componentGroups: ["alert_for_attack_targets"]
            },
            remove: {
                componentGroups: ["angry"]
            }
        },
        "become_angry_event": {
            add: {
                componentGroups: ["angry"]
            }
        },
        "important_block_destroyed_event": {
            add: {
                componentGroups: ["take_target_as_response_to_block_break"]
            },
            remove: {
                componentGroups: ["alert_for_attack_targets"]
            }
        },
        "become_zombie_event": {
            add: {
                componentGroups: ["become_zombie"]
            }
        },
        "go_back_to_spawn_failed": {
            remove: {
                componentGroups: ["go_back_to_spawn"]
            }
        },
        "minecraft:entity_spawned": {
            add: {
                componentGroups: [
                    "zombification_sensor",
                    "alert_for_attack_targets",
                    "melee_unit",
                    "go_back_to_spawn"
                ]
            }
        },
        "start_zombification_event": {
            add: {
                componentGroups: ["start_zombification"]
            },
            remove: {
                componentGroups: ["zombification_sensor"]
            }
        }
    }
});
