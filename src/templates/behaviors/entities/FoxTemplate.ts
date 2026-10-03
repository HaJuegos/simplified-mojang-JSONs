import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const FoxTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Fox,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:fox_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 0.72,
                height: 0.84
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: ["sweet_berries", "glow_berries"],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 9,
                speedMultiplier: 1.1
            })
        ],
        "minecraft:fox_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: "query.last_hit_by_player ? Math.Random(1,3) : 0"
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/fox.json"
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 3,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                breedItems: ["sweet_berries", "glow_berries"],
                breedsWith: {
                    "minecraft:fox": {}
                }
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 0.6,
                height: 0.7
            })
        ],
        "minecraft:fox_with_item": [
            new BPEntityComponents.SetEquipment({
                table: "loot_tables/entities/fox_equipment.json",
                slotDropChance: [
                    {
                        slot: "slot.weapon.mainhand",
                        dropChance: 1
                    }
                ]
            })
        ],
        "minecraft:trusting_fox": [
            new BPEntityComponents.SetTrust(),
            new BPEntityComponents.SetBehaviorDefendTrustedTarget({
                priority: 0,
                withinRadius: 25,
                mustSee: false,
                aggroSound: "mad",
                onDefendStart: {
                    event: "minecraft:fox_configure_defending",
                    target: "self"
                }
            })
        ],
        "minecraft:docile_fox": [
            new BPEntityComponents.SetBehaviorPanic({
                priority: 1,
                speedMultiplier: 1.25
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                priority: 10,
                trackTarget: true,
                requireCompletePath: true
            })
        ],
        "minecraft:defending_fox": [
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                priority: 1,
                trackTarget: true,
                requireCompletePath: true
            }),
            new BPEntityComponents.SetBehaviorPanic({
                priority: 2,
                speedMultiplier: 1.25
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isDaytime(),
                            EntityFilters.hasTarget(false, "self", "==")
                        ),
                        event: "minecraft:fox_configure_docile_day"
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isDaytime(false),
                            EntityFilters.hasTarget(false, "self", "==")
                        ),
                        event: "minecraft:fox_configure_docile_night"
                    }
                ]
            })
        ],
        "minecraft:fox_red": [
            new BPEntityComponents.SetVariant({
                value: 0
            }),
            new BPEntityComponents.SetBehaviorNearestPrioritizedAttackableTarget({
                priority: 6,
                attackInterval: 2,
                reselectTargets: true,
                targetSearchHeight: 5,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("rabbit", "other"),
                        maxDist: 12,
                        priority: 0
                    },
                    {
                        filters: EntityFilters.isFamily("chicken", "other"),
                        maxDist: 12,
                        priority: 0
                    },
                    {
                        filters: EntityFilters.isFamily("cod", "other"),
                        maxDist: 12,
                        priority: 1
                    },
                    {
                        filters: EntityFilters.isFamily("salmon", "other"),
                        maxDist: 12,
                        priority: 1
                    },
                    {
                        filters: EntityFilters.isFamily("tropicalfish", "other"),
                        maxDist: 12,
                        priority: 1
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("baby_turtle", "other"),
                            EntityFilters.inWater(true, "other", "!=")
                        ),
                        maxDist: 12,
                        priority: 0
                    }
                ]
            })
        ],
        "minecraft:fox_arctic": [
            new BPEntityComponents.SetVariant({
                value: 1
            }),
            new BPEntityComponents.SetBehaviorNearestPrioritizedAttackableTarget({
                priority: 6,
                attackInterval: 2,
                reselectTargets: true,
                targetSearchHeight: 5,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("rabbit", "other"),
                        maxDist: 12,
                        priority: 1
                    },
                    {
                        filters: EntityFilters.isFamily("chicken", "other"),
                        maxDist: 12,
                        priority: 1
                    },
                    {
                        filters: EntityFilters.isFamily("cod", "other"),
                        maxDist: 12,
                        priority: 0
                    },
                    {
                        filters: EntityFilters.isFamily("salmon", "other"),
                        maxDist: 12,
                        priority: 0
                    },
                    {
                        filters: EntityFilters.isFamily("tropicalfish", "other"),
                        maxDist: 12,
                        priority: 0
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("baby_turtle", "other"),
                            EntityFilters.inWater(true, "other", "!=")
                        ),
                        maxDist: 12,
                        priority: 1
                    }
                ]
            })
        ],
        "minecraft:fox_thunderstorm": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.weatherAtPosition("thunderstorm", "self", "!="),
                            EntityFilters.isDaytime()
                        ),
                        event: "minecraft:fox_configure_day"
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.weatherAtPosition("thunderstorm", "self", "!="),
                            EntityFilters.isDaytime(false)
                        ),
                        event: "minecraft:fox_configure_night"
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorFindCover({
                priority: 0,
                speedMultiplier: 1,
                cooldownTime: 0
            })
        ],
        "minecraft:fox_day": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.weatherAtPosition("thunderstorm"),
                        event: "minecraft:fox_configure_thunderstorm"
                    },
                    {
                        filters: EntityFilters.isDaytime(false),
                        event: "minecraft:fox_configure_night"
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorNap({
                priority: 8,
                cooldownMin: 2,
                cooldownMax: 7,
                mobDetectDist: 12,
                mobDetectHeight: 6,
                canNapFilters: EntityFilters.allOf(
                    EntityFilters.inWater(false, "self", "=="),
                    EntityFilters.onGround(true, "self", "=="),
                    EntityFilters.isUnderground(true, "self", "=="),
                    EntityFilters.weatherAtPosition("thunderstorm", "self", "!=")
                ),
                wakeMobExceptions: EntityFilters.anyOf(
                    EntityFilters.trusts(true, "other", "=="),
                    EntityFilters.isFamily("fox", "other", "=="),
                    EntityFilters.isSneaking(true, "other", "==")
                )
            }),
            new BPEntityComponents.SetBehaviorFindCover({
                priority: 9,
                speedMultiplier: 1,
                cooldownTime: 5
            })
        ],
        "minecraft:fox_night": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.weatherAtPosition("thunderstorm"),
                        event: "minecraft:fox_configure_thunderstorm"
                    },
                    {
                        filters: EntityFilters.isDaytime(),
                        event: "minecraft:fox_configure_day"
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorStrollTowardsVillage({
                priority: 11,
                speedMultiplier: 1,
                goalRadius: 3,
                cooldownTime: 10,
                searchRange: 32,
                startChance: 0.005
            })
        ],
        "minecraft:fox_ambient_normal": [
            new BPEntityComponents.SetAmbientSoundInterval({
                soundEvents: "ambient"
            })
        ],
        "minecraft:fox_ambient_sleep": [
            new BPEntityComponents.SetAmbientSoundInterval({
                soundEvents: "sleep"
            })
        ],
        "minecraft:fox_ambient_night": [
            new BPEntityComponents.SetAmbientSoundInterval({
                soundEvents: "screech",
                minRandomCooldownSound: 80,
                maxRandomCooldownSound: 160
            })
        ],
        "minecraft:fox_ambient_defending_target": [
            new BPEntityComponents.SetAmbientSoundInterval({
                soundEvents: "mad"
            })
        ]
    },
    components: [
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:fox": "minecraft:fox"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        // TODO(migrate): componente sin clase "minecraft:can_stand_on_powder_snow": {}
        new BPEntityComponents.SetTypeFamily({
            family: ["fox", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetEquipItem({
            canWearArmor: false
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            width: 0.6,
            height: 0.7
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetHealth({
            value: 10,
            max: 10
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
        new BPEntityComponents.SetMovement({
            value: 0.3
        }),
        new BPEntityComponents.SetAttack({
            damage: 2
        }),
        new BPEntityComponents.SetShareables({
            singularPickup: true,
            allItems: true,
            allItemsMaxAmount: 1,
            items: [
                {
                    item: "minecraft:is_food",
                    priority: 0,
                    maxAmount: 1
                },
                {
                    item: "minecraft:glow_berries",
                    priority: 0,
                    maxAmount: 1
                },
                {
                    item: "minecraft:bundle",
                    priority: 1,
                    maxAmount: 1
                }
            ]
        }),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    onDamage: {
                        filters: EntityFilters.isBlock("minecraft:sweet_berry_bush", "block")
                    },
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorEquipItem({
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorAvoidMobType({
            priority: 5,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.allOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.trusts(true, "other", "!="),
                            EntityFilters.isSneaking(true, "other", "!=")
                        ),
                        EntityFilters.isFamily("polarbear", "other"),
                        EntityFilters.isFamily("wolf", "other")
                    ),
                    maxDist: 10,
                    walkSpeedMultiplier: 1,
                    sprintSpeedMultiplier: 1.5
                }
            ]
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 3,
            speedMultiplier: 0.5,
            withinRadius: 16,
            canGetScared: true,
            items: ["sweet_berries", "glow_berries"]
        }),
        new BPEntityComponents.SetBehaviorStalkAndPounceOnTarget({
            priority: 7,
            stalkSpeed: 1.2,
            maxStalkDist: 12,
            leapHeight: 0.9,
            leapDist: 0.8,
            pounceMaxDist: 5,
            interestTime: 2,
            stuckTime: 2,
            strikeDist: 2,
            stuckBlocks: EntityFilters.isBlock("snow_layer", "block", "==")
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            priority: 11,
            maxDist: 3,
            goalRadius: 2,
            speedMultiplier: 0.5
        }),
        new BPEntityComponents.SetBehaviorEatCarriedItem({
            priority: 12,
            delayBeforeEating: 28
        }),
        new BPEntityComponents.SetBehaviorRandomLookAroundAndSit({
            priority: 12,
            minLookCount: 2,
            maxLookCount: 5,
            minLookTime: 80,
            maxLookTime: 100,
            probability: 0.001
        }),
        new BPEntityComponents.SetBehaviorRaidGarden({
            priority: 12,
            blocks: [
                "minecraft:sweet_berry_bush",
                "minecraft:cave_vines_head_with_berries",
                "minecraft:cave_vines_body_with_berries"
            ],
            speedMultiplier: 1.2,
            searchRange: 12,
            searchHeight: 2,
            goalRadius: 0.8,
            maxToEat: 0,
            initialEatDelay: 2
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 13,
            speedMultiplier: 0.8
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 14,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 15
        }),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetBalloonable({
            mass: 0.6
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetScheduler({
            minDelaySecs: 0,
            maxDelaySecs: 0,
            scheduledEvents: [
                {
                    filters: EntityFilters.allOf(EntityFilters.isSleeping()),
                    event: "minecraft:ambient_sleep"
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isDaytime(false),
                        EntityFilters.distanceToNearestPlayer(16, "self", ">")
                    ),
                    event: "minecraft:ambient_night"
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isSleeping(false),
                        EntityFilters.anyOf(
                            EntityFilters.isDaytime(),
                            EntityFilters.distanceToNearestPlayer(16, "self", "<=")
                        )
                    ),
                    event: "minecraft:ambient_normal"
                }
            ]
        }),
        new BPEntityComponents.SetEnvironmentSensor({
            triggers: [
                {
                    filters: EntityFilters.isDaytime(false),
                    event: "minecraft:fox_configure_night"
                },
                {
                    filters: EntityFilters.isDaytime(),
                    event: "minecraft:fox_configure_day"
                }
            ]
        }),
        new BPEntityComponents.SetBlockClimber()
    ],
    events: {
        "minecraft:entity_spawned": {
            sequence: [
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    randomize: [
                        {
                            weight: 95,
                            add: {
                                componentGroups: ["minecraft:fox_adult", "minecraft:fox_with_item", "minecraft:docile_fox"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["minecraft:fox_baby", "minecraft:docile_fox"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.isSnowCovered(),
                    add: {
                        componentGroups: ["minecraft:fox_arctic"]
                    }
                },
                {
                    filters: EntityFilters.isSnowCovered(false),
                    add: {
                        componentGroups: ["minecraft:fox_red"]
                    }
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:fox_baby", "minecraft:trusting_fox", "minecraft:docile_fox"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:fox_baby"]
            },
            add: {
                componentGroups: ["minecraft:fox_adult"]
            }
        },
        "minecraft:fox_configure_thunderstorm": {
            remove: {
                componentGroups: ["minecraft:fox_night", "minecraft:fox_day"]
            },
            add: {
                componentGroups: ["minecraft:fox_thunderstorm"]
            }
        },
        "minecraft:fox_configure_day": {
            remove: {
                componentGroups: ["minecraft:fox_night", "minecraft:fox_thunderstorm"]
            },
            add: {
                componentGroups: ["minecraft:fox_day"]
            }
        },
        "minecraft:fox_configure_night": {
            remove: {
                componentGroups: ["minecraft:fox_day", "minecraft:fox_thunderstorm"]
            },
            add: {
                componentGroups: ["minecraft:fox_night"]
            }
        },
        "minecraft:ambient_normal": {
            add: {
                componentGroups: ["minecraft:fox_ambient_normal"]
            }
        },
        "minecraft:ambient_sleep": {
            add: {
                componentGroups: ["minecraft:fox_ambient_sleep"]
            }
        },
        "minecraft:ambient_night": {
            add: {
                componentGroups: ["minecraft:fox_ambient_night"]
            }
        },
        "minecraft:fox_configure_defending": {
            remove: {
                componentGroups: ["minecraft:docile_fox", "minecraft:fox_day", "minecraft:fox_night"]
            },
            add: {
                componentGroups: ["minecraft:defending_fox", "minecraft:fox_ambient_defending_target"]
            }
        },
        "minecraft:fox_configure_docile_day": {
            remove: {
                componentGroups: ["minecraft:defending_fox", "minecraft:fox_night"]
            },
            add: {
                componentGroups: ["minecraft:docile_fox", "minecraft:fox_day"]
            }
        },
        "minecraft:fox_configure_docile_night": {
            remove: {
                componentGroups: ["minecraft:defending_fox", "minecraft:fox_day"]
            },
            add: {
                componentGroups: ["minecraft:docile_fox", "minecraft:fox_night"]
            }
        }
    }
});
