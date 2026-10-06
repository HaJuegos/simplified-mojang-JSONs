import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de la Llama de un Wandering Trader para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const TraderLlamaTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.TraderLlama,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:llama_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: [
                    {
                        item: "wheat",
                        growth: 0.1
                    },
                    {
                        item: "hay_block",
                        growth: 0.9
                    }
                ],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 5,
                speedMultiplier: 1
            })
        ],
        "minecraft:llama_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/llama.json"
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 4,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: true,
                breedsWith: {
                    "minecraft:llama": {},
                    "minecraft:trader_llama": {}
                },
                breedItems: ["hay_block"]
            })
        ],
        "minecraft:llama_wild": [
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["player"],
                interactText: "action.interact.mount",
                seats: [
                    {
                        position: [0, 1.17, -0.3]
                    }
                ]
            }),
            new BPEntityComponents.SetTamemount({
                minTemper: 0,
                maxTemper: 30,
                feedText: "action.interact.feed",
                rideText: "action.interact.mount",
                feedItems: [
                    {
                        item: "wheat",
                        temperMod: 3
                    },
                    {
                        item: "hay_block",
                        temperMod: 6
                    }
                ],
                autoRejectItems: [
                    {
                        item: "horsearmorleather"
                    },
                    {
                        item: "horsearmoriron"
                    },
                    {
                        item: "horsearmorgold"
                    },
                    {
                        item: "horsearmordiamond"
                    },
                    {
                        item: "minecraft:copper_horse_armor"
                    },
                    {
                        item: "minecraft:netherite_horse_armor"
                    },
                    {
                        item: "saddle"
                    }
                ],
                tameEvent: {
                    event: "minecraft:on_tame",
                    target: "self"
                }
            })
        ],
        "minecraft:llama_wandering_trader": [
            new BPEntityComponents.SetOnFriendlyAnger({
                event: "minecraft:defend_wandering_trader",
                target: "self"
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isLeashed(false),
                            EntityFilters.hasComponent("minecraft:is_tamed", "self", "!=")
                        ),
                        event: "minecraft:on_tame"
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isLeashed(false),
                            EntityFilters.hasComponent("minecraft:persistent", "self", "==")
                        ),
                        event: "minecraft:remove_persistence"
                    }
                ]
            })
        ],
        "minecraft:llama_persistence": [
            new BPEntityComponents.SetPersistent()
        ],
        "minecraft:strength_1": [
            new BPEntityComponents.SetStrength({
                value: 1,
                max: 5
            })
        ],
        "minecraft:strength_2": [
            new BPEntityComponents.SetStrength({
                value: 2,
                max: 5
            })
        ],
        "minecraft:strength_3": [
            new BPEntityComponents.SetStrength({
                value: 3,
                max: 5
            })
        ],
        "minecraft:strength_4": [
            new BPEntityComponents.SetStrength({
                value: 4,
                max: 5
            })
        ],
        "minecraft:strength_5": [
            new BPEntityComponents.SetStrength({
                value: 5,
                max: 5
            })
        ],
        "minecraft:llama_creamy": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:llama_white": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:llama_brown": [
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "minecraft:llama_gray": [
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "minecraft:llama_tamed": [
            new BPEntityComponents.SetIsTamed(),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                crouchingSkipInteract: true,
                familyTypes: ["player"],
                interactText: "action.interact.ride.horse",
                seats: [
                    {
                        position: [0, 1.17, -0.3]
                    }
                ]
            }),
            new BPEntityComponents.SetInventory({
                inventorySize: 16,
                containerType: "horse",
                additionalSlotsPerStrength: 3
            }),
            new BPEntityComponents.SetEquippable({
                slots: [
                    {
                        slot: 1,
                        item: "carpet",
                        acceptedItems: ["carpet"]
                    }
                ]
            })
        ],
        "minecraft:llama_unchested": [
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        playSounds: "armor.equip_generic",
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.hasEquipment("chest", "hand", "other")
                            ),
                            event: "minecraft:on_chest",
                            target: "self"
                        },
                        useItem: true,
                        interactText: "action.interact.attachchest"
                    }
                ]
            })
        ],
        "minecraft:llama_chested": [
            new BPEntityComponents.SetIsChested()
        ],
        "minecraft:llama_angry": [
            new BPEntityComponents.SetAngry({
                duration: 4,
                broadcastAnger: false,
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorRangedAttack({
                priority: 2,
                attackRange: {
                    min: 64,
                    max: 64
                },
                chargeShootTrigger: 2,
                chargeChargedTrigger: 1
            })
        ],
        "minecraft:llama_angry_wolf": [
            new BPEntityComponents.SetAngry({
                duration: -1,
                broadcastAnger: false,
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorRangedAttack({
                priority: 2,
                attackRange: {
                    min: 64,
                    max: 64
                },
                chargeShootTrigger: 2,
                chargeChargedTrigger: 1
            })
        ],
        "minecraft:llama_defend_trader": [
            new BPEntityComponents.SetAngry({
                duration: 10,
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorRangedAttack({
                priority: 2,
                attackRange: {
                    min: 64,
                    max: 64
                },
                chargeShootTrigger: 2,
                chargeChargedTrigger: 1
            })
        ],
        "minecraft:in_caravan": [
            new BPEntityComponents.SetDamageSensor({
                triggers: [
                    {
                        cause: "all",
                        dealsDamage: "yes"
                    }
                ]
            })
        ],
        "minecraft:llama_unleashed": [
            new BPEntityComponents.SetBehaviorFollowCaravan({
                priority: 3,
                speedMultiplier: 2.1,
                entityCount: 10,
                entityTypes: {
                    filters: EntityFilters.isFamily("llama", "other")
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetOffspring({
            inheritTamed: false,
            offspringPairs: {
                "minecraft:llama": "minecraft:llama",
                "minecraft:trader_llama": "minecraft:trader_llama"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorRunAroundLikeCrazy({
            priority: 1,
            speedMultiplier: 1.2
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 1,
            speedMultiplier: 1.25,
            targetDist: 0,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1,
            hurtOwner: true,
            entityTypes: {
                filters: EntityFilters.isFamily("trader_llama", "other", "!=")
            }
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            priority: 2,
            attackInterval: {
                min: 0,
                max: 16
            },
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("wolf", "other"),
                        EntityFilters.hasComponent("minecraft:is_tamed", "other", "not")
                    ),
                    maxDist: 10
                }
            ],
            mustSee: false,
            mustReach: true
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 4,
            speedMultiplier: 1.2
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 5,
            speedMultiplier: 1.2,
            items: ["hay_block"]
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 0.7
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 7,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 8
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetTypeFamily({
            family: ["trader_llama", "llama", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetMarkVariant({
            value: 1
        }),
        new BPEntityComponents.SetHealth({
            value: {
                rangeMin: 15,
                rangeMax: 30
            }
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
            value: 0.25
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetFollowRange({
            value: 40,
            max: 40
        }),
        new BPEntityComponents.SetLeashable({
            onLeash: {
                event: "minecraft:on_leash",
                target: "self"
            },
            onUnleash: {
                event: "minecraft:on_unleash",
                target: "self"
            }
        }),
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetHealable({
            items: [
                {
                    item: "wheat",
                    healAmount: 2
                },
                {
                    item: "hay_block",
                    healAmount: 10
                }
            ]
        }),
        new BPEntityComponents.SetShooter({
            projectiles: [
                {
                    def: "minecraft:llama_spit"
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "all",
                    dealsDamage: "yes",
                    onDamage: {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("trader_llama", "other", "!="),
                            EntityFilters.inCaravan(false)
                        ),
                        event: "minecraft:become_angry"
                    }
                }
            ]
        }),
        new BPEntityComponents.SetOnTargetAcquired({
            filters: EntityFilters.allOf(
                EntityFilters.isFamily("wolf", "target"),
                EntityFilters.hasComponent("minecraft:is_tamed", "target", "!=")
            ),
            event: "minecraft:mad_at_wolf",
            target: "self"
        }),
        new BPEntityComponents.SetOnTargetEscape({
            filters: EntityFilters.allOf(
                EntityFilters.isFamily("wolf", "target"),
                EntityFilters.hasComponent("minecraft:is_tamed", "target", "!=")
            ),
            event: "minecraft:on_calm",
            target: "self"
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity({
            presets: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("sulfur_cube", "other"),
                        EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "none", "other", "not"),
                        EntityFilters.isControllingPassengerFamily("player")
                    ),
                    pushMode: "none"
                }
            ]
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetCollisionBox({
            width: 0.9,
            height: 1.87
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 90,
                            trigger: "minecraft:spawn_adult"
                        },
                        {
                            weight: 10,
                            trigger: "minecraft:spawn_baby"
                        }
                    ]
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:llama_baby", "minecraft:llama_unleashed"]
            }
        },
        "minecraft:from_wandering_trader": {
            sequence: [
                {
                    add: {
                        componentGroups: [
                            "minecraft:llama_adult",
                            "minecraft:llama_wandering_trader",
                            "minecraft:llama_persistence"
                        ]
                    }
                },
                {
                    trigger: "minecraft:add_attributes"
                }
            ]
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:llama_baby"]
            },
            add: {
                componentGroups: ["minecraft:llama_adult", "minecraft:llama_wild"]
            }
        },
        "minecraft:on_tame": {
            remove: {
                componentGroups: ["minecraft:llama_wild"]
            },
            add: {
                componentGroups: ["minecraft:llama_tamed", "minecraft:llama_unchested"]
            }
        },
        "minecraft:remove_persistence": {
            remove: {
                componentGroups: ["minecraft:llama_persistence"]
            }
        },
        "minecraft:join_caravan": {
            add: {
                componentGroups: ["minecraft:in_caravan"]
            }
        },
        "minecraft:leave_caravan": {
            remove: {
                componentGroups: ["minecraft:in_caravan"]
            }
        },
        "minecraft:mad_at_wolf": {
            add: {
                componentGroups: ["minecraft:llama_angry_wolf"]
            }
        },
        "minecraft:defend_wandering_trader": {
            add: {
                componentGroups: ["minecraft:llama_defend_trader"]
            }
        },
        "minecraft:become_angry": {
            add: {
                componentGroups: ["minecraft:llama_angry"]
            }
        },
        "minecraft:on_calm": {
            remove: {
                componentGroups: [
                    "minecraft:llama_angry",
                    "minecraft:llama_angry_wolf",
                    "minecraft:llama_defend_trader"
                ]
            }
        },
        "minecraft:on_leash": {
            remove: {
                componentGroups: ["minecraft:llama_unleashed"]
            }
        },
        "minecraft:on_unleash": {
            add: {
                componentGroups: ["minecraft:llama_unleashed"]
            }
        },
        "minecraft:on_chest": {
            remove: {
                componentGroups: ["minecraft:llama_unchested"]
            },
            add: {
                componentGroups: ["minecraft:llama_chested"]
            }
        },
        "minecraft:add_attributes": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 32,
                            add: {
                                componentGroups: ["minecraft:strength_1"]
                            }
                        },
                        {
                            weight: 32,
                            add: {
                                componentGroups: ["minecraft:strength_2"]
                            }
                        },
                        {
                            weight: 32,
                            add: {
                                componentGroups: ["minecraft:strength_3"]
                            }
                        },
                        {
                            weight: 2,
                            add: {
                                componentGroups: ["minecraft:strength_4"]
                            }
                        },
                        {
                            weight: 2,
                            add: {
                                componentGroups: ["minecraft:strength_5"]
                            }
                        }
                    ]
                },
                {
                    randomize: [
                        {
                            weight: 25,
                            add: {
                                componentGroups: ["minecraft:llama_creamy"]
                            }
                        },
                        {
                            weight: 25,
                            add: {
                                componentGroups: ["minecraft:llama_white"]
                            }
                        },
                        {
                            weight: 25,
                            add: {
                                componentGroups: ["minecraft:llama_brown"]
                            }
                        },
                        {
                            weight: 25,
                            add: {
                                componentGroups: ["minecraft:llama_gray"]
                            }
                        }
                    ]
                }
            ]
        },
        "minecraft:spawn_baby": {
            add: {
                componentGroups: ["minecraft:llama_baby", "minecraft:llama_unleashed"]
            },
            trigger: "minecraft:add_attributes"
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: ["minecraft:llama_adult", "minecraft:llama_wild", "minecraft:llama_unleashed"]
            },
            trigger: "minecraft:add_attributes"
        }
    }
});
