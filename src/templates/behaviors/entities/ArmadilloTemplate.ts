import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Armadillo para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 02-10-2026
 */
export const ArmadilloTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Armadillo,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    properties: {
        "minecraft:armadillo_state": {
            type: "enum",
            default: "unrolled",
            clientSync: true,
            values: [
                "unrolled",
                "rolled_up",
                "rolled_up_peeking",
                "rolled_up_relaxing",
                "rolled_up_unrolling"
            ]
        }
    },
    componentsGroups: {
        "minecraft:baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.6
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                interactFilters: EntityFilters.enumProperty("minecraft:armadillo_state", "unrolled"),
                feedItemsToGrow: "spider_eye",
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            })
        ],
        "minecraft:baby_unrolled": [
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 5,
                speedMultiplier: 1.25
            })
        ],
        "minecraft:adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetSpawnEntity({
                entities: [
                    {
                        minWaitTime: 300,
                        maxWaitTime: 600,
                        spawnSound: "mob.armadillo.scute_drop",
                        spawnItem: "armadillo_scute"
                    }
                ]
            }),
            new BPEntityComponents.SetBreedable({
                loveFilters: EntityFilters.enumProperty("minecraft:armadillo_state", "unrolled"),
                requireTame: false,
                breedsWith: {
                    "minecraft:armadillo": {}
                },
                breedItems: ["spider_eye"]
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.hasEquipment("brush", "hand", "other")
                            )
                        },
                        playSounds: ["mob.armadillo.brush"],
                        interactText: "action.interact.brush",
                        hurtItem: 16,
                        swing: true,
                        spawnItems: {
                            table: "loot_tables/entities/armadillo_brush.json"
                        }
                    }
                ]
            })
        ],
        "minecraft:adult_unrolled": [
            new BPEntityComponents.SetBehaviorBreed({
                priority: 2,
                speedMultiplier: 1
            })
        ],
        "minecraft:unrolled": [
            new BPEntityComponents.SetMovement({
                value: 0.14
            }),
            new BPEntityComponents.SetAmbientSoundInterval(),
            new BPEntityComponents.SetDamageSensor({
                triggers: [
                    {
                        onDamage: {
                            filters: EntityFilters.anyOf(
                                EntityFilters.isFamily("mob", "other"),
                                EntityFilters.isFamily("player", "other")
                            ),
                            event: "minecraft:threat_detected"
                        }
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorTempt({
                priority: 3,
                speedMultiplier: 1.25,
                canTemptVertically: true,
                items: ["spider_eye"]
            }),
            new BPEntityComponents.SetBehaviorRandomStroll({
                priority: 6,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBehaviorLookAtPlayer({
                priority: 7,
                lookDistance: 6,
                probability: 0.02
            }),
            new BPEntityComponents.SetBehaviorRandomLookAround({
                priority: 8
            })
        ],
        "minecraft:rolled_up": [
            new BPEntityComponents.SetMovement({
                value: 0
            }),
            new BPEntityComponents.SetBodyRotationBlocked(),
            new BPEntityComponents.SetDamageSensor({
                triggers: [
                    {
                        onDamage: {
                            filters: EntityFilters.anyOf(
                                EntityFilters.isFamily("mob", "other"),
                                EntityFilters.isFamily("player", "other")
                            ),
                            event: "minecraft:threat_detected"
                        },
                        damageMultiplier: 0.5,
                        damageModifier: -1
                    },
                    {
                        damageMultiplier: 0.5,
                        damageModifier: -1
                    }
                ]
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.onFire(),
                            EntityFilters.inWater(),
                            EntityFilters.isPanicking(),
                            EntityFilters.isLeashed(),
                            EntityFilters.isRiding()
                        ),
                        event: "minecraft:unroll"
                    }
                ]
            })
        ],
        "minecraft:rolled_up_with_threats": [
            new BPEntityComponents.SetBehaviorTimerFlagOne({
                priority: 0,
                cooldownRange: {
                    min: 2.5,
                    max: 2.5
                },
                durationRange: {
                    min: 5,
                    max: 20
                },
                onStart: {
                    event: "minecraft:stop_peeking"
                },
                onEnd: {
                    event: "minecraft:start_peeking"
                }
            })
        ],
        "minecraft:rolled_up_without_threats": [
            new BPEntityComponents.SetTimer({
                looping: true,
                time: 4,
                timeDownEvent: {
                    event: "minecraft:unroll"
                }
            }),
            new BPEntityComponents.SetBehaviorTimerFlagOne({
                priority: 0,
                cooldownRange: {
                    min: 2.5,
                    max: 2.5
                },
                durationRange: {
                    min: 1.5,
                    max: 1.5
                },
                onStart: {
                    event: "minecraft:start_unrolling"
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:armadillo": "minecraft:armadillo"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetTypeFamily({
            family: ["armadillo", "mob"]
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidDamageBlocks: true,
            avoidWater: true
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.7,
            height: 0.65
        }),
        new BPEntityComponents.SetHealth({
            value: 12
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    filters: EntityFilters.inLava(),
                    cause: "lava",
                    damagePerTick: 4
                }
            ]
        }),
        new BPEntityComponents.SetEntitySensor({
            subsensors: [
                {
                    event: "minecraft:no_threat_detected",
                    cooldown: 0.2,
                    range: [7, 2],
                    minimumCount: 0,
                    maximumCount: 0,
                    eventFilters: EntityFilters.anyOf(
                        EntityFilters.isFamily("undead", "other"),
                        EntityFilters.allOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.anyOf(
                                EntityFilters.wasLastHurtBy(true, "other"),
                                EntityFilters.isSprinting(true, "other"),
                                EntityFilters.isRiding(true, "other")
                            )
                        )
                    )
                },
                {
                    event: "minecraft:threat_detected",
                    cooldown: 0.2,
                    range: [7, 2],
                    minimumCount: 1,
                    eventFilters: EntityFilters.anyOf(
                        EntityFilters.isFamily("undead", "other"),
                        EntityFilters.allOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.anyOf(
                                EntityFilters.wasLastHurtBy(true, "other"),
                                EntityFilters.isSprinting(true, "other"),
                                EntityFilters.isRiding(true, "other")
                            )
                        )
                    )
                }
            ]
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            ignoreMobDamage: true,
            speedMultiplier: 2
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 95,
                    trigger: "minecraft:spawn_adult"
                },
                {
                    weight: 5,
                    trigger: "minecraft:spawn_baby"
                }
            ]
        },
        "minecraft:entity_born": {
            trigger: "minecraft:spawn_baby"
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: ["minecraft:adult", "minecraft:adult_unrolled", "minecraft:unrolled"]
            }
        },
        "minecraft:spawn_baby": {
            add: {
                componentGroups: ["minecraft:baby", "minecraft:baby_unrolled", "minecraft:unrolled"]
            }
        },
        "minecraft:ageable_grow_up": {
            sequence: [
                {
                    remove: {
                        componentGroups: ["minecraft:baby", "minecraft:baby_unrolled"]
                    },
                    add: {
                        componentGroups: ["minecraft:adult"]
                    }
                },
                {
                    filters: EntityFilters.enumProperty("minecraft:armadillo_state", "unrolled"),
                    add: {
                        componentGroups: ["minecraft:adult_unrolled"]
                    }
                }
            ]
        },
        "minecraft:no_threat_detected": {
            sequence: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            EntityFilters.enumProperty("minecraft:armadillo_state", "rolled_up"),
                            EntityFilters.enumProperty("minecraft:armadillo_state", "rolled_up_peeking")
                        ),
                        EntityFilters.onFire(false),
                        EntityFilters.inWater(false),
                        EntityFilters.isPanicking(false),
                        EntityFilters.isLeashed(false),
                        EntityFilters.isRiding(false)
                    ),
                    remove: {
                        componentGroups: ["minecraft:rolled_up_with_threats"]
                    },
                    add: {
                        componentGroups: ["minecraft:rolled_up_without_threats"]
                    },
                    setProperty: {
                        "minecraft:armadillo_state": "rolled_up_relaxing"
                    }
                }
            ]
        },
        "minecraft:threat_detected": {
            sequence: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.enumProperty("minecraft:armadillo_state", "unrolled"),
                        EntityFilters.onGround(),
                        EntityFilters.onFire(false),
                        EntityFilters.inWater(false),
                        EntityFilters.isPanicking(false),
                        EntityFilters.isLeashed(false),
                        EntityFilters.isRiding(false)
                    ),
                    trigger: "minecraft:roll_up"
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.enumProperty("minecraft:armadillo_state", "rolled_up_relaxing"),
                        EntityFilters.enumProperty("minecraft:armadillo_state", "rolled_up_unrolling")
                    ),
                    remove: {
                        componentGroups: ["minecraft:rolled_up_without_threats"]
                    },
                    add: {
                        componentGroups: ["minecraft:rolled_up_with_threats"]
                    },
                    setProperty: {
                        "minecraft:armadillo_state": "rolled_up"
                    }
                }
            ]
        },
        "minecraft:unroll": {
            sequence: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.enumProperty("minecraft:armadillo_state", "unrolled", "self", "not"),
                        EntityFilters.actorHealth(0, "self", ">")
                    ),
                    remove: {
                        componentGroups: [
                            "minecraft:rolled_up",
                            "minecraft:rolled_up_with_threats",
                            "minecraft:rolled_up_without_threats"
                        ]
                    },
                    add: {
                        componentGroups: ["minecraft:unrolled"]
                    },
                    setProperty: {
                        "minecraft:armadillo_state": "unrolled"
                    },
                    emitVibration: {
                        vibration: "entity_act"
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.enumProperty("minecraft:armadillo_state", "unrolled", "self", "not"),
                        EntityFilters.actorHealth(0, "self", ">"),
                        EntityFilters.hasComponent("minecraft:is_baby")
                    ),
                    add: {
                        componentGroups: ["minecraft:baby_unrolled"]
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.enumProperty("minecraft:armadillo_state", "unrolled", "self", "not"),
                        EntityFilters.actorHealth(0, "self", ">"),
                        EntityFilters.hasComponent("minecraft:is_baby", "self", "not")
                    ),
                    add: {
                        componentGroups: ["minecraft:adult_unrolled"]
                    }
                }
            ]
        },
        "minecraft:roll_up": {
            sequence: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.enumProperty("minecraft:armadillo_state", "rolled_up", "self", "not"),
                        EntityFilters.enumProperty(
                            "minecraft:armadillo_state",
                            "rolled_up_peeking",
                            "self",
                            "not"
                        ),
                        EntityFilters.actorHealth(0, "self", ">")
                    ),
                    remove: {
                        componentGroups: [
                            "minecraft:unrolled",
                            "minecraft:baby_unrolled",
                            "minecraft:adult_unrolled",
                            "minecraft:rolled_up_without_threats"
                        ]
                    },
                    add: {
                        componentGroups: ["minecraft:rolled_up", "minecraft:rolled_up_with_threats"]
                    },
                    setProperty: {
                        "minecraft:armadillo_state": "rolled_up"
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.enumProperty("minecraft:armadillo_state", "unrolled"),
                        EntityFilters.actorHealth(0, "self", ">")
                    ),
                    emitVibration: {
                        vibration: "entity_act"
                    }
                }
            ]
        },
        "minecraft:start_peeking": {
            sequence: [
                {
                    filters: EntityFilters.enumProperty("minecraft:armadillo_state", "rolled_up"),
                    setProperty: {
                        "minecraft:armadillo_state": "rolled_up_peeking"
                    }
                }
            ]
        },
        "minecraft:stop_peeking": {
            sequence: [
                {
                    filters: EntityFilters.enumProperty("minecraft:armadillo_state", "rolled_up_peeking"),
                    setProperty: {
                        "minecraft:armadillo_state": "rolled_up"
                    }
                }
            ]
        },
        "minecraft:start_unrolling": {
            sequence: [
                {
                    filters: EntityFilters.enumProperty("minecraft:armadillo_state", "rolled_up_relaxing"),
                    setProperty: {
                        "minecraft:armadillo_state": "rolled_up_unrolling"
                    }
                }
            ]
        }
    }
});
