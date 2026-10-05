import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de la Abeja para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 03-10-2026
 */
export const BeeTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Bee,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    properties: {
        "minecraft:has_nectar": {
            clientSync: true,
            type: "bool",
            default: `${MoLang.hadComponentGroup('has_nectar')}`
        }
    },
    componentsGroups: {
        "bee_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: [
                    "minecraft:poppy",
                    "minecraft:blue_orchid",
                    "minecraft:allium",
                    "minecraft:azure_bluet",
                    "minecraft:red_tulip",
                    "minecraft:orange_tulip",
                    "minecraft:white_tulip",
                    "minecraft:pink_tulip",
                    "minecraft:oxeye_daisy",
                    "minecraft:cornflower",
                    "minecraft:lily_of_the_valley",
                    "minecraft:dandelion",
                    "minecraft:wither_rose",
                    "minecraft:sunflower",
                    "minecraft:lilac",
                    "minecraft:rose_bush",
                    "minecraft:peony",
                    "minecraft:flowering_azalea",
                    "minecraft:azalea_leaves_flowered",
                    "minecraft:mangrove_propagule",
                    "minecraft:pitcher_plant",
                    "minecraft:torchflower",
                    "minecraft:cherry_leaves",
                    "minecraft:pink_petals",
                    "minecraft:wildflowers",
                    "minecraft:cactus_flower",
                    "minecraft:chorus_flower",
                    "minecraft:spore_blossom"
                ],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 11,
                speedMultiplier: 1.1
            })
        ],
        "bee_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 4,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                breedsWith: {
                    "minecraft:bee": {}
                },
                breedItems: [
                    "minecraft:poppy",
                    "minecraft:blue_orchid",
                    "minecraft:allium",
                    "minecraft:azure_bluet",
                    "minecraft:red_tulip",
                    "minecraft:orange_tulip",
                    "minecraft:white_tulip",
                    "minecraft:pink_tulip",
                    "minecraft:oxeye_daisy",
                    "minecraft:cornflower",
                    "minecraft:lily_of_the_valley",
                    "minecraft:dandelion",
                    "minecraft:wither_rose",
                    "minecraft:sunflower",
                    "minecraft:lilac",
                    "minecraft:rose_bush",
                    "minecraft:peony",
                    "minecraft:flowering_azalea",
                    "minecraft:azalea_leaves_flowered",
                    "minecraft:mangrove_propagule",
                    "minecraft:pitcher_plant",
                    "minecraft:torchflower",
                    "minecraft:cherry_leaves",
                    "minecraft:pink_petals",
                    "minecraft:wildflowers",
                    "minecraft:cactus_flower",
                    "minecraft:chorus_flower",
                    "minecraft:spore_blossom"
                ]
            })
        ],
        "track_attacker": [
            new BPEntityComponents.SetBehaviorHurtByTarget({
                priority: 1
            })
        ],
        "angry_bee": [
            new BPEntityComponents.SetAngry({
                duration: 25,
                broadcastAnger: true,
                broadcastRange: 20,
                broadcastAngerWhenDying: false,
                broadcastFilters: EntityFilters.isFamily("pacified", "self", "!="),
                calmEvent: {
                    event: "calmed_down",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                priority: 2,
                attackOnce: true,
                speedMultiplier: 1.4,
                onAttack: {
                    event: "countdown_to_perish_event",
                    target: "self"
                }
            })
        ],
        "escape_fire": [
            new BPEntityComponents.SetBehaviorPanic({
                priority: 1,
                speedMultiplier: 1.25,
                force: true
            }),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: [20, 50],
                randomInterval: true,
                timeDownEvent: {
                    event: "stop_panicking_after_fire",
                    target: "self"
                }
            })
        ],
        "countdown_to_perish": [
            new BPEntityComponents.SetMarkVariant({
                value: 1
            }),
            new BPEntityComponents.SetBehaviorPanic({
                priority: 1,
                speedMultiplier: 1.25,
                force: true
            }),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: [10, 60],
                randomInterval: true,
                timeDownEvent: {
                    event: "perish_event",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["bee", "mob", "arthropod", "pacified"]
            })
        ],
        "perish": [
            new BPEntityComponents.SetHurtOnCondition({
                damageConditions: [
                    {
                        cause: "none",
                        damagePerTick: 999
                    }
                ]
            })
        ],
        "take_nearest_target": [
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                priority: 2,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("player", "other"),
                        maxDist: 10
                    }
                ]
            }),
            new BPEntityComponents.SetTimer({
                looping: true,
                time: 5,
                timeDownEvent: {
                    event: "calmed_down",
                    target: "self"
                }
            })
        ],
        "look_for_food": [
            new BPEntityComponents.SetBehaviorMoveToBlock({
                priority: 10,
                tickInterval: 1,
                startChance: 0.5,
                searchRange: 6,
                searchHeight: 4,
                goalRadius: 1,
                stayDuration: 20,
                targetSelectionMethod: "random",
                targetOffset: [0, 0.25, 0],
                targetBlockFilters: EntityFilters.allOf(EntityFilters.isWaterlogged(false, "block", "==")),
                targetBlocks: [
                    "minecraft:poppy",
                    "minecraft:blue_orchid",
                    "minecraft:allium",
                    "minecraft:azure_bluet",
                    "minecraft:red_tulip",
                    "minecraft:orange_tulip",
                    "minecraft:white_tulip",
                    "minecraft:pink_tulip",
                    "minecraft:oxeye_daisy",
                    "minecraft:cornflower",
                    "minecraft:lily_of_the_valley",
                    "minecraft:dandelion",
                    "minecraft:wither_rose",
                    "minecraft:sunflower",
                    "minecraft:lilac",
                    "minecraft:rose_bush",
                    "minecraft:peony",
                    "minecraft:flowering_azalea",
                    "minecraft:azalea_leaves_flowered",
                    "minecraft:mangrove_propagule",
                    "minecraft:pitcher_plant",
                    "minecraft:torchflower",
                    "minecraft:cherry_leaves",
                    "minecraft:pink_petals",
                    "minecraft:open_eyeblossom",
                    "minecraft:wildflowers",
                    "minecraft:cactus_flower",
                    "minecraft:chorus_flower",
                    "minecraft:spore_blossom"
                ],
                onStayCompleted: [
                    {
                        event: "collected_nectar",
                        target: "self"
                    }
                ]
            }),
            new BPEntityComponents.SetTimer({
                looping: true,
                time: 180,
                timeDownEvent: {
                    event: "find_flower_timeout"
                }
            }),
            new BPEntityComponents.SetAmbientSoundInterval({
                soundEvents: "ambient.pollinate",
                minRandomCooldownSound: 2,
                maxRandomCooldownSound: 3
            })
        ],
        "has_nectar": [
            new BPEntityComponents.SetGrowsCrop({
                charges: 10,
                chance: 0.03
            })
        ],
        "return_to_home": [
            new BPEntityComponents.SetBehaviorGoHome({
                priority: 4,
                speedMultiplier: 1,
                interval: 1,
                goalRadius: 1.2,
                onHome: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isBlock("minecraft:bee_nest", "block"),
                            EntityFilters.isBlock("minecraft:beehive", "block")
                        ),
                        event: "minecraft:bee_returned_to_hive",
                        target: "block"
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isBlock("minecraft:bee_nest", "block", "!="),
                            EntityFilters.isBlock("minecraft:beehive", "block", "!=")
                        ),
                        event: "find_hive_event",
                        target: "self"
                    }
                ],
                onFailed: [
                    {
                        event: "find_hive_event",
                        target: "self"
                    }
                ]
            })
        ],
        "find_hive": [
            new BPEntityComponents.SetBehaviorMoveToBlock({
                priority: 10,
                searchRange: 16,
                searchHeight: 10,
                tickInterval: 1,
                goalRadius: 0.633,
                targetBlocks: ["bee_nest", "beehive"],
                onReach: [
                    {
                        event: "minecraft:bee_returned_to_hive",
                        target: "block"
                    }
                ]
            }),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: 180,
                timeDownEvent: {
                    event: "find_hive_timeout",
                    target: "self"
                }
            })
        ],
        "hive_full": [
            new BPEntityComponents.SetTimer({
                looping: false,
                time: [5, 20],
                randomInterval: true,
                timeDownEvent: {
                    event: "find_hive_event",
                    target: "self"
                }
            })
        ],
        "shelter_detection": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "seek_shelter",
                        filters: EntityFilters.allOf(
                            EntityFilters.anyOf(
                                EntityFilters.isDaytime(false),
                                EntityFilters.weather("precipitation", "self", "==")
                            ),
                            EntityFilters.boolProperty("minecraft:has_nectar", true, "self", "!="),
                            EntityFilters.hasBiomeTag("overworld")
                        )
                    }
                ]
            })
        ],
        "abort_shelter_detection": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "abort_sheltering",
                        filters: EntityFilters.allOf(
                            EntityFilters.weather("clear", "self", "=="),
                            EntityFilters.isDaytime()
                        )
                    }
                ]
            })
        ],
        "easy_attack": [
            new BPEntityComponents.SetAttack({
                damage: 2
            })
        ],
        "normal_attack": [
            new BPEntityComponents.SetAttack({
                damage: 2,
                effectName: "poison",
                effectDuration: 10
            })
        ],
        "hard_attack": [
            new BPEntityComponents.SetAttack({
                damage: 2,
                effectName: "poison",
                effectDuration: 18
            })
        ],
        "default_sound": [
            new BPEntityComponents.SetAmbientSoundInterval({
                soundEvents: "ambient",
                minRandomCooldownSound: 0,
                maxRandomCooldownSound: 0
            })
        ],
        "add_poison_effect": [
            new BPEntityComponents.SetSpellEffects({
                addEffects: [
                    {
                        effect: "poison",
                        duration: 25,
                        displayOnScreenAnimation: true
                    }
                ],
                removeEffects: "poison"
            }),
            new BPEntityComponents.SetBehaviorTimerFlagOne({
                priority: 0,
                cooldownRange: {
                    min: 0,
                    max: 0
                },
                durationRange: {
                    min: 0.05,
                    max: 0.05
                },
                onEnd: {
                    event: "minecraft:on_poison_effect_added",
                    target: "self"
                }
            })
        ],
        "add_wither_effect": [
            new BPEntityComponents.SetSpellEffects({
                addEffects: [
                    {
                        effect: "wither",
                        duration: 40,
                        displayOnScreenAnimation: true
                    }
                ],
                removeEffects: "wither"
            }),
            new BPEntityComponents.SetBehaviorTimerFlagOne({
                priority: 0,
                cooldownRange: {
                    min: 0,
                    max: 0
                },
                durationRange: {
                    min: 0.05,
                    max: 0.05
                },
                onEnd: {
                    event: "minecraft:on_wither_effect_added",
                    target: "self"
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:bee": "minecraft:bee"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 5,
            speedMultiplier: 1.25,
            withinRadius: 8,
            canTemptVertically: true,
            items: [
                "minecraft:poppy",
                "minecraft:blue_orchid",
                "minecraft:allium",
                "minecraft:azure_bluet",
                "minecraft:red_tulip",
                "minecraft:orange_tulip",
                "minecraft:white_tulip",
                "minecraft:pink_tulip",
                "minecraft:oxeye_daisy",
                "minecraft:cornflower",
                "minecraft:lily_of_the_valley",
                "minecraft:dandelion",
                "minecraft:wither_rose",
                "minecraft:sunflower",
                "minecraft:lilac",
                "minecraft:rose_bush",
                "minecraft:peony",
                "minecraft:flowering_azalea",
                "minecraft:azalea_leaves_flowered",
                "minecraft:mangrove_propagule",
                "minecraft:pitcher_plant",
                "minecraft:torchflower",
                "minecraft:cherry_leaves",
                "minecraft:pink_petals",
                "minecraft:open_eyeblossom",
                "minecraft:wildflowers",
                "minecraft:cactus_flower",
                "minecraft:chorus_flower",
                "minecraft:spore_blossom"
            ]
        }),
        new BPEntityComponents.SetBehaviorMoveTowardsHomeRestriction({
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorRandomHover({
            priority: 12,
            xzDist: 8,
            yDist: 8,
            yOffset: -1,
            interval: 1,
            hoverHeight: [1, 4]
        }),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetBalloonable({
            mass: 0.5
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 19
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["bee", "mob", "arthropod"]
        }),
        new BPEntityComponents.SetOnTargetAcquired({
            event: "attacked",
            target: "self"
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 0,
            suffocateTime: -1
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.55,
            height: 0.5
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetGameEventMovementTracking({
            emitFlap: true
        }),
        new BPEntityComponents.SetHome({
            restrictionType: "random_movement",
            restrictionRadius: 22,
            homeBlockList: ["minecraft:bee_nest", "minecraft:beehive"]
        }),
        new BPEntityComponents.SetFollowRange({
            value: 1024
        }),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                },
                {
                    onDamage: {
                        filters: EntityFilters.isBlock("minecraft:sweet_berry_bush", "block")
                    },
                    dealsDamage: "no"
                }
            ]
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
        new BPEntityComponents.SetFlyingSpeed({
            value: 0.15
        }),
        new BPEntityComponents.SetNavigationHover({
            canPathOverWater: true,
            canSink: false,
            canPassDoors: false,
            canPathFromAir: true,
            avoidWater: true,
            avoidDamageBlocks: true,
            avoidSun: false
        }),
        new BPEntityComponents.SetMovementHover(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanFly(),
        new BPEntityComponents.SetHealth({
            value: 10,
            max: 10
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetBlockSensor({
            sensorRadius: 16,
            sources: [
                EntityFilters.hasSilkTouch(false, "other")
            ],
            onBreak: [
                {
                    blockList: ["minecraft:beehive", "minecraft:bee_nest"],
                    onBlockBroken: "hive_destroyed"
                }
            ]
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetInteract({
            interactions: [
                {
                    onInteract: {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasEquipment("minecraft:open_eyeblossom", "hand", "other")
                        ),
                        event: "fed_open_eyeblossom"
                    },
                    useItem: true,
                    particleOnStart: {
                        particleType: "food"
                    },
                    interactText: "action.interact.feed"
                },
                {
                    onInteract: {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasEquipment("minecraft:wither_rose", "hand", "other")
                        ),
                        event: "fed_wither_rose"
                    },
                    useItem: true,
                    particleOnStart: {
                        particleType: "food"
                    },
                    interactText: "action.interact.feed"
                }
            ]
        })
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
                                componentGroups: ["bee_adult"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["bee_baby"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    add: {
                        componentGroups: ["track_attacker", "shelter_detection", "look_for_food"]
                    }
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["bee_baby", "shelter_detection", "track_attacker", "look_for_food"]
            }
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: ["bee_adult", "shelter_detection", "track_attacker", "look_for_food"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["bee_baby"]
            },
            add: {
                componentGroups: ["bee_adult"]
            }
        },
        "minecraft:exited_disturbed_hive": {
            add: {
                componentGroups: ["take_nearest_target"]
            },
            remove: {
                componentGroups: [
                    "find_hive",
                    "return_to_home",
                    "has_nectar",
                    "abort_shelter_detection",
                    "shelter_detection",
                    "escape_fire"
                ]
            },
            setProperty: {
                "minecraft:has_nectar": false
            }
        },
        "hive_destroyed": {
            sequence: [
                {
                    filters: EntityFilters.isFamily("pacified", "self", "!="),
                    add: {
                        componentGroups: ["take_nearest_target"]
                    },
                    remove: {
                        componentGroups: ["escape_fire"]
                    }
                }
            ]
        },
        "stop_panicking_after_fire": {
            remove: {
                componentGroups: ["escape_fire"]
            }
        },
        "minecraft:exited_hive_on_fire": {
            add: {
                componentGroups: ["escape_fire"]
            }
        },
        "minecraft:exited_hive": {
            add: {
                componentGroups: ["look_for_food", "shelter_detection"]
            },
            remove: {
                componentGroups: ["find_hive", "return_to_home", "has_nectar", "abort_shelter_detection"]
            },
            setProperty: {
                "minecraft:has_nectar": false
            }
        },
        "minecraft:hive_full": {
            add: {
                componentGroups: ["hive_full"]
            },
            remove: {
                componentGroups: ["find_hive", "return_to_home"]
            }
        },
        "attacked": {
            sequence: [
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    add: {
                        componentGroups: ["angry_bee"]
                    },
                    remove: {
                        componentGroups: ["take_nearest_target"]
                    }
                },
                {
                    filters: EntityFilters.isDifficulty("easy"),
                    remove: {
                        componentGroups: ["normal_attack", "hard_attack"]
                    },
                    add: {
                        componentGroups: ["easy_attack"]
                    }
                },
                {
                    filters: EntityFilters.isDifficulty("normal"),
                    remove: {
                        componentGroups: ["easy_attack", "hard_attack"]
                    },
                    add: {
                        componentGroups: ["normal_attack"]
                    }
                },
                {
                    filters: EntityFilters.isDifficulty("hard"),
                    remove: {
                        componentGroups: ["easy_attack", "normal_attack"]
                    },
                    add: {
                        componentGroups: ["hard_attack"]
                    }
                }
            ]
        },
        "calmed_down": {
            add: {
                componentGroups: ["shelter_detection", "return_to_home"]
            },
            remove: {
                componentGroups: ["angry_bee", "take_nearest_target"]
            }
        },
        "collected_nectar": {
            remove: {
                componentGroups: ["look_for_food"]
            },
            add: {
                componentGroups: ["return_to_home", "has_nectar", "default_sound"]
            },
            setProperty: {
                "minecraft:has_nectar": true
            }
        },
        "find_hive_event": {
            remove: {
                componentGroups: ["return_to_home", "hive_full"]
            },
            add: {
                componentGroups: ["find_hive"]
            }
        },
        "find_hive_timeout": {
            sequence: [
                {
                    filters: EntityFilters.boolProperty("minecraft:has_nectar", true, "self", "!="),
                    remove: {
                        componentGroups: ["find_hive", "escape_fire"]
                    },
                    add: {
                        componentGroups: ["look_for_food"]
                    }
                },
                {
                    filters: EntityFilters.boolProperty("minecraft:has_nectar"),
                    remove: {
                        componentGroups: ["find_hive"]
                    },
                    add: {
                        componentGroups: ["return_to_home"]
                    }
                }
            ]
        },
        "find_flower_timeout": {
            remove: {
                componentGroups: ["look_for_food"]
            },
            add: {
                componentGroups: ["return_to_home"]
            }
        },
        "seek_shelter": {
            remove: {
                componentGroups: ["look_for_food", "shelter_detection"]
            },
            add: {
                componentGroups: ["default_sound", "return_to_home", "abort_shelter_detection"]
            }
        },
        "abort_sheltering": {
            remove: {
                componentGroups: ["abort_shelter_detection", "return_to_home", "escape_fire"]
            },
            add: {
                componentGroups: ["shelter_detection", "look_for_food"]
            }
        },
        "countdown_to_perish_event": {
            remove: {
                componentGroups: [
                    "track_attacker",
                    "take_nearest_target",
                    "look_for_food",
                    "angry_bee",
                    "hive_full",
                    "find_hive",
                    "escape_fire"
                ]
            },
            add: {
                componentGroups: ["countdown_to_perish"]
            }
        },
        "perish_event": {
            add: {
                componentGroups: ["perish"]
            }
        },
        "fed_open_eyeblossom": {
            add: {
                componentGroups: ["add_poison_effect"]
            }
        },
        "on_poison_effect_added": {
            remove: {
                componentGroups: ["add_poison_effect"]
            }
        },
        "fed_wither_rose": {
            add: {
                componentGroups: ["add_wither_effect"]
            }
        },
        "on_wither_effect_added": {
            remove: {
                componentGroups: ["add_wither_effect"]
            }
        }
    }
});
