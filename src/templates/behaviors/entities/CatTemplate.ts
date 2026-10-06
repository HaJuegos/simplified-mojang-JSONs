import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Gato para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 04-10-2026
 */
export const CatTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Cat,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    properties: {
        "minecraft:sound_variant": {
            clientSync: true,
            type: "enum",
            default: "default",
            values: ["default", "royal"]
        }
    },
    componentsGroups: {
        "minecraft:cat_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.4
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: ["fish", "salmon"],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            })
        ],
        "minecraft:cat_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/cat.json"
            }),
            new BPEntityComponents.SetScale({
                value: 0.8
            }),
            new BPEntityComponents.SetLeashableTo({
                unleashOnRemoval: false
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: true,
                requireFullHealth: true,
                allowSitting: true,
                breedsWith: {
                    "minecraft:cat": {}
                },
                breedItems: ["fish", "salmon"]
            }),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 3,
                speedMultiplier: 1
            })
        ],
        "minecraft:cat_wild": [
            new BPEntityComponents.SetHealth({
                value: 10,
                max: 10
            }),
            new BPEntityComponents.SetTameable({
                probability: 0.33,
                tameItems: ["fish", "salmon"],
                tameEvent: {
                    event: "minecraft:on_tame",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 0.35, 0]
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                priority: 1,
                reselectTargets: true,
                withinRadius: 16,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("rabbit", "other"),
                        maxDist: 8
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("baby_turtle", "other"),
                            EntityFilters.inWater(true, "other", "!=")
                        ),
                        maxDist: 8
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorTempt({
                priority: 5,
                speedMultiplier: 0.5,
                withinRadius: 16,
                canGetScared: true,
                temptSound: "tempt",
                soundInterval: [0, 100],
                items: ["fish", "salmon"]
            }),
            new BPEntityComponents.SetBehaviorAvoidMobType({
                priority: 6,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("player", "other"),
                        maxDist: 10,
                        walkSpeedMultiplier: 0.8,
                        sprintSpeedMultiplier: 1.33
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorMoveTowardsDwellingRestriction({
                priority: 7
            })
        ],
        "minecraft:cat_tame": [
            new BPEntityComponents.SetIsTamed(),
            new BPEntityComponents.SetHealth({
                value: 20,
                max: 20
            }),
            new BPEntityComponents.SetColor({
                value: 14
            }),
            new BPEntityComponents.SetSittable(),
            new BPEntityComponents.SetIsDyeable({
                interactText: "action.interact.dye"
            }),
            new BPEntityComponents.SetOnWakeWithOwner({
                event: "minecraft:pet_slept_with_owner",
                target: "self"
            }),
            new BPEntityComponents.SetBehaviorTeleportToOwner({
                priority: 0,
                filters: EntityFilters.allOf(
                    EntityFilters.ownerDistance(12, "self", ">"),
                    EntityFilters.isPanicking()
                )
            }),
            new BPEntityComponents.SetBehaviorPetSleepWithOwner({
                priority: 2,
                speedMultiplier: 1.2,
                searchHeight: 10,
                goalRadius: 1
            }),
            new BPEntityComponents.SetBehaviorStayWhileSitting({
                priority: 3
            }),
            new BPEntityComponents.SetBehaviorFollowOwner({
                priority: 4,
                speedMultiplier: 1,
                startDistance: 10,
                stopDistance: 2,
                postTeleportDistance: -1,
                ignoreVibration: true
            }),
            new BPEntityComponents.SetBehaviorTempt({
                priority: 5,
                speedMultiplier: 0.5,
                withinRadius: 16,
                items: ["fish", "salmon"]
            }),
            new BPEntityComponents.SetBehaviorOcelotSitOnBlock({
                priority: 7,
                speedMultiplier: 1
            })
        ],
        "minecraft:cat_gift_for_owner": [
            new BPEntityComponents.SetBehaviorDropItemFor({
                priority: 1,
                secondsBeforePickup: 0,
                cooldown: 0.25,
                dropItemChance: 0.7,
                offeringDistance: 5,
                minimumTeleportDistance: 2,
                maxHeadLookAtHeight: 10,
                targetRange: [5, 5, 5],
                teleportOffset: [0, 1, 0],
                timeOfDayRange: {
                    min: 0.74999,
                    max: 0.8
                },
                searchRange: 5,
                searchHeight: 2,
                goalRadius: 1,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("player", "other"),
                        maxDist: 6
                    }
                ],
                lootTable: "loot_tables/entities/cat_gift.json",
                onDropAttempt: {
                    event: "minecraft:cat_gifted_owner",
                    target: "self"
                }
            })
        ],
        "minecraft:cat_white": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:cat_tuxedo": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:cat_red": [
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "minecraft:cat_siamese": [
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "minecraft:cat_british": [
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "minecraft:cat_calico": [
            new BPEntityComponents.SetVariant({
                value: 5
            })
        ],
        "minecraft:cat_persian": [
            new BPEntityComponents.SetVariant({
                value: 6
            })
        ],
        "minecraft:cat_ragdoll": [
            new BPEntityComponents.SetVariant({
                value: 7
            })
        ],
        "minecraft:cat_tabby": [
            new BPEntityComponents.SetVariant({
                value: 8
            })
        ],
        "minecraft:cat_black": [
            new BPEntityComponents.SetVariant({
                value: 9
            })
        ],
        "minecraft:cat_jellie": [
            new BPEntityComponents.SetVariant({
                value: 10
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAmbientSoundInterval({
            soundEvents: [
                {
                    soundID: "ambient.baby",
                    condition: `${MoLang.isBaby()}`
                }
            ],
            minRandomCooldownSound: 6,
            maxRandomCooldownSound: 16
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:cat": "minecraft:cat"
            },
            combineParentColors: true
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetLeashable({
            unleashOnRemoval: false
        }),
        new BPEntityComponents.SetBalloonable({
            mass: 0.6
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetAttackDamage({
            value: 4
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetTypeFamily({
            family: ["cat", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.6,
            height: 0.7
        }),
        new BPEntityComponents.SetHealable({
            items: [
                {
                    item: "fish",
                    healAmount: 2
                },
                {
                    item: "salmon",
                    healAmount: 2
                }
            ]
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
        new BPEntityComponents.SetMovement({
            value: 0.3
        }),
        new BPEntityComponents.SetNavigationWalk({
            canFloat: true,
            avoidWater: true,
            avoidDamageBlocks: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetDweller({
            dwellingType: "village",
            dwellerRole: "passive",
            updateIntervalBase: 60,
            updateIntervalVariant: 40,
            canFindPoi: false,
            canMigrate: true,
            firstFoundingReward: 0
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 1.25
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 1,
            speedMultiplier: 1.25,
            targetDist: 0,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorLeapAtTarget({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorOcelotattack({
            priority: 4,
            cooldownTime: 1,
            xMaxRotation: 30,
            yMaxHeadRotation: 30,
            maxDistance: 15,
            maxSneakRange: 15,
            maxSprintRange: 4,
            reachMultiplier: 2,
            sneakSpeedMultiplier: 0.6,
            sprintSpeedMultiplier: 1.33,
            walkSpeedMultiplier: 0.8
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 8,
            speedMultiplier: 0.8
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 9
        }),
        new BPEntityComponents.SetUsesLegacyFriction()
    ],
    events: {
        "minecraft:entity_spawned": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 3,
                            add: {
                                componentGroups: ["minecraft:cat_adult", "minecraft:cat_wild"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:cat_baby", "minecraft:cat_wild"]
                            }
                        }
                    ]
                },
                {
                    randomize: [
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_white"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_tuxedo"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_red"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_siamese"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_british"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_calico"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_persian"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_ragdoll"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_tabby"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_black"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_jellie"]
                            }
                        }
                    ]
                },
                {
                    trigger: "minecraft:randomize_sound_variant"
                }
            ]
        },
        "minecraft:spawn_from_village": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 3,
                            trigger: "minecraft:spawn_wild_adult"
                        },
                        {
                            weight: 1,
                            trigger: "minecraft:spawn_wild_baby"
                        }
                    ]
                },
                {
                    randomize: [
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_tuxedo"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_red"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_siamese"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_white"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_british"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_calico"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_persian"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_ragdoll"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_tabby"]
                            }
                        },
                        {
                            weight: 15,
                            add: {
                                componentGroups: ["minecraft:cat_jellie"]
                            }
                        }
                    ]
                }
            ]
        },
        "minecraft:spawn_midnight_cat": {
            sequence: [
                {
                    trigger: "minecraft:spawn_wild_adult",
                    add: {
                        componentGroups: ["minecraft:cat_black"]
                    }
                }
            ]
        },
        "minecraft:entity_born": {
            sequence: [
                {
                    filters: EntityFilters.isTamed(),
                    trigger: "minecraft:spawn_tame_baby"
                },
                {
                    filters: EntityFilters.isTamed(false),
                    trigger: "minecraft:spawn_wild_baby"
                }
            ]
        },
        "minecraft:spawn_wild_baby": {
            add: {
                componentGroups: ["minecraft:cat_baby", "minecraft:cat_wild"]
            }
        },
        "minecraft:spawn_wild_adult": {
            add: {
                componentGroups: ["minecraft:cat_adult", "minecraft:cat_wild"]
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:spawn_tame_baby": {
            add: {
                componentGroups: ["minecraft:cat_baby", "minecraft:cat_tame"]
            }
        },
        "minecraft:spawn_tame_adult": {
            add: {
                componentGroups: ["minecraft:cat_adult", "minecraft:cat_tame"]
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:cat_baby"]
            },
            add: {
                componentGroups: ["minecraft:cat_adult"]
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:on_tame": {
            sequence: [
                {
                    remove: {
                        componentGroups: ["minecraft:cat_wild"]
                    }
                },
                {
                    add: {
                        componentGroups: ["minecraft:cat_tame"]
                    }
                }
            ]
        },
        "minecraft:pet_slept_with_owner": {
            add: {
                componentGroups: ["minecraft:cat_gift_for_owner"]
            }
        },
        "minecraft:cat_gifted_owner": {
            remove: {
                componentGroups: ["minecraft:cat_gift_for_owner"]
            }
        },
        "minecraft:randomize_sound_variant": {
            randomize: [
                {
                    weight: 1,
                    setProperty: {
                        "minecraft:sound_variant": "default"
                    }
                },
                {
                    weight: 1,
                    setProperty: {
                        "minecraft:sound_variant": "royal"
                    }
                }
            ]
        }
    }
});
