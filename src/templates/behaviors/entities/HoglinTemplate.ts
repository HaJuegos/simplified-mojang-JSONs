import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Hoglin para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const HoglinTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Hoglin,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "zombification_sensor": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    filters: EntityFilters.inNether(false, "self", "=="),
                    event: "start_zombification_event"
                }
            })
        ],
        "start_zombification": [
            new BPEntityComponents.SetIsShaking(),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    filters: EntityFilters.inNether(true, "self", "=="),
                    event: "stop_zombification_event"
                }
            }),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: 15,
                timeDownEvent: {
                    event: "become_zombie_event"
                }
            })
        ],
        "become_zombie": [
            new BPEntityComponents.SetTransformation({
                into: "minecraft:zoglin",
                transformationSound: "mob.hoglin.converted_to_zombified",
                keepLevel: true
            })
        ],
        "angry_hoglin": [
            new BPEntityComponents.SetAngry({
                duration: 10,
                broadcastAnger: true,
                broadcastRange: 16,
                calmEvent: {
                    event: "become_calm_event",
                    target: "self"
                },
                angrySoundId: "angry",
                soundInterval: {
                    range_min: 2,
                    range_max: 5
                }
            })
        ],
        "attack_cooldown": [
            new BPEntityComponents.SetAttackCooldown({
                attackCooldownTime: [10, 15],
                attackCooldownCompleteEvent: {
                    event: "attack_cooldown_complete_event",
                    target: "self"
                }
            })
        ],
        "minecraft:hoglin_baby": [
            new BPEntityComponents.SetTypeFamily({
                family: ["hoglin", "hoglin_baby", "mob"]
            }),
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetMovement({
                value: 0.36
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                priority: 4,
                speedMultiplier: 1,
                trackTarget: true,
                cooldownTime: 0.75
            }),
            new BPEntityComponents.SetAttack({
                damage: 1
            }),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.7,
                width: 1.5
            }),
            new BPEntityComponents.SetCustomHitTest({
                hitboxes: [
                    {
                        width: 1,
                        height: 0.85,
                        pivot: [0, 0.5, 0]
                    }
                ]
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: ["crimson_fungus"],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 6,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 3,
                familyTypes: ["piglin"],
                seats: [
                    {
                        position: [0, 1.125, -0.3],
                        lockRiderRotation: 0
                    },
                    {
                        position: [0, 2.625, -0.3],
                        lockRiderRotation: 0
                    },
                    {
                        position: [0, 4.125, -0.3],
                        lockRiderRotation: 0
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorPanic({
                priority: 1,
                speedMultiplier: 1
            })
        ],
        "minecraft:hoglin_adult": [
            new BPEntityComponents.SetCollisionBox({
                width: 1.4,
                height: 1.4
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetMovement({
                value: 0.3
            }),
            new BPEntityComponents.SetCustomHitTest({
                hitboxes: [
                    {
                        width: 2,
                        height: 1.75,
                        pivot: [0, 1, 0]
                    }
                ]
            }),
            new BPEntityComponents.SetGroupSize({
                radius: 32,
                filters: EntityFilters.allOf(
                    EntityFilters.hasComponent("minecraft:is_baby", "self", "!="),
                    EntityFilters.isFamily("hoglin")
                )
            }),
            new BPEntityComponents.SetBehaviorHurtByTarget({
                priority: 2
            }),
            new BPEntityComponents.SetOnTargetAcquired({
                event: "become_angry_event",
                target: "self"
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/hoglin.json"
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                priority: 4,
                speedMultiplier: 1,
                trackTarget: true,
                cooldownTime: 2
            }),
            new BPEntityComponents.SetAttack({
                damage: [3, 9]
            }),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 3,
                speedMultiplier: 0.6
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                loveFilters: EntityFilters.hasComponent("minecraft:attack_cooldown", "self", "not"),
                breedsWith: {
                    "minecraft:hoglin": {}
                },
                breedItems: ["crimson_fungus"]
            })
        ],
        "unhuntable_adult": [
            new BPEntityComponents.SetTypeFamily({
                family: ["hoglin", "hoglin_adult", "mob"]
            })
        ],
        "huntable_adult": [
            new BPEntityComponents.SetTypeFamily({
                family: ["hoglin", "hoglin_adult", "hoglin_huntable", "mob"]
            })
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:hoglin": "minecraft:hoglin"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetHealth({
            value: 40,
            max: 40
        }),
        new BPEntityComponents.SetExperienceReward({
            onBred: "Math.Random(1,7)",
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 : 0`
        }),
        new BPEntityComponents.SetKnockbackResistance({
            value: 0.6
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            priority: 4,
            withinRadius: 16,
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("player", "other"),
                        EntityFilters.hasComponent("minecraft:attack_cooldown", "self", "!=")
                    ),
                    maxDist: 16
                }
            ],
            mustSee: true
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    filters: EntityFilters.inLava(true, "self", "=="),
                    cause: "lava",
                    damagePerTick: 4
                }
            ]
        }),
        new BPEntityComponents.SetBehaviorAvoidMobType({
            priority: 0,
            removeTarget: true,
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.hasTarget(true, "other"),
                        EntityFilters.isFamily("piglin", "other")
                    ),
                    checkIfOutnumbered: true,
                    maxDist: 10,
                    sprintSpeedMultiplier: 1.2
                }
            ],
            avoidMobSound: "retreat",
            soundInterval: {
                min: 2,
                max: 5
            }
        }),
        new BPEntityComponents.SetBehaviorAvoidBlock({
            priority: 1,
            tickInterval: 5,
            searchRange: 8,
            searchHeight: 4,
            walkSpeedModifier: 1,
            sprintSpeedModifier: 1,
            avoidBlockSound: "retreat",
            soundInterval: {
                min: 2,
                max: 5
            },
            targetSelectionMethod: "nearest",
            targetBlocks: ["minecraft:warped_fungus", "minecraft:portal", "minecraft:respawn_anchor"],
            onEscape: [
                {
                    event: "escaped_event",
                    target: "self"
                }
            ]
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 7,
            speedMultiplier: 0.4
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 8,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization()
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 95,
                    trigger: "spawn_adult"
                },
                {
                    weight: 5,
                    trigger: "spawn_baby"
                }
            ]
        },
        "minecraft:entity_born": {
            trigger: "spawn_baby"
        },
        "spawn_adult": {
            add: {
                componentGroups: ["minecraft:hoglin_adult", "huntable_adult", "zombification_sensor"]
            }
        },
        "spawn_baby": {
            add: {
                componentGroups: ["minecraft:hoglin_baby", "zombification_sensor"]
            }
        },
        "stop_zombification_event": {
            add: {
                componentGroups: ["zombification_sensor"]
            },
            remove: {
                componentGroups: ["start_zombification"]
            }
        },
        "become_zombie_event": {
            add: {
                componentGroups: ["become_zombie"]
            }
        },
        "start_zombification_event": {
            add: {
                componentGroups: ["start_zombification"]
            },
            remove: {
                componentGroups: ["zombification_sensor"]
            }
        },
        "spawn_adult_unhuntable": {
            add: {
                componentGroups: ["minecraft:hoglin_adult", "unhuntable_adult", "zombification_sensor"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:hoglin_baby"]
            },
            add: {
                componentGroups: ["minecraft:hoglin_adult", "huntable_adult"]
            }
        },
        "become_angry_event": {
            add: {
                componentGroups: ["angry_hoglin"]
            }
        },
        "become_calm_event": {
            remove: {
                componentGroups: ["angry_hoglin"]
            }
        },
        "escaped_event": {
            add: {
                componentGroups: ["attack_cooldown"]
            },
            remove: {
                componentGroups: ["angry_hoglin"]
            }
        },
        "attack_cooldown_complete_event": {
            remove: {
                componentGroups: ["attack_cooldown"]
            }
        }
    }
});
