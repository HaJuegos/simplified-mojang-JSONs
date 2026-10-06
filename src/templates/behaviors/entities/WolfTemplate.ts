import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Lobo para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const WolfTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Wolf,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    properties: {
        "minecraft:is_armorable": {
            clientSync: false,
            type: "bool",
            default: false
        },
        "minecraft:has_increased_max_health": {
            clientSync: false,
            type: "bool",
            default: false
        },
        "minecraft:sound_variant": {
            clientSync: true,
            type: "enum",
            default: "default",
            values: ["default", "big", "cute", "grumpy", "mad", "puglin", "sad"]
        },
        "minecraft:was_upgraded_to_1_21_100": {
            clientSync: false,
            type: "bool",
            default: false
        }
    },
    componentsGroups: {
        "minecraft:wolf_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: [
                    "chicken",
                    "cooked_chicken",
                    "beef",
                    "cooked_beef",
                    "muttonRaw",
                    "muttonCooked",
                    "porkchop",
                    "cooked_porkchop",
                    "rabbit",
                    "cooked_rabbit",
                    "rotten_flesh"
                ],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorPanic({
                priority: 1,
                speedMultiplier: 1.25
            })
        ],
        "minecraft:wolf_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/wolf.json"
            }),
            new BPEntityComponents.SetLeashableTo({
                unleashOnRemoval: false
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: true,
                requireFullHealth: true,
                breedsWith: {
                    "minecraft:wolf": {}
                },
                breedItems: [
                    "chicken",
                    "cooked_chicken",
                    "beef",
                    "cooked_beef",
                    "muttonRaw",
                    "muttonCooked",
                    "porkchop",
                    "cooked_porkchop",
                    "rabbit",
                    "cooked_rabbit",
                    "rotten_flesh"
                ]
            })
        ],
        "minecraft:wolf_angry": [
            new BPEntityComponents.SetAngry({
                duration: 25,
                broadcastAnger: true,
                broadcastRange: 20,
                broadcastAngerWhenDying: false,
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetOnTargetAcquired(),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 0.625, -0.1]
                    }
                ]
            })
        ],
        "minecraft:wolf_wild": [
            new BPEntityComponents.SetBehaviorAvoidMobType({
                priority: 3,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("llama", "other"),
                        maxDist: 24,
                        walkSpeedMultiplier: 1.5,
                        sprintSpeedMultiplier: 1.5
                    }
                ],
                probabilityPerStrength: 0.14
            }),
            new BPEntityComponents.SetTameable({
                probability: 0.33,
                tameItems: ["bone"],
                tameEvent: {
                    event: "minecraft:on_tame",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                priority: 4,
                reselectTargets: true,
                mustSee: true,
                entityTypes: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("skeleton", "other"),
                            EntityFilters.isFamily("sheep", "other"),
                            EntityFilters.isFamily("rabbit", "other"),
                            EntityFilters.isFamily("fox", "other")
                        ),
                        maxDist: 16
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("baby_turtle", "other"),
                            EntityFilters.inWater(true, "other", "!=")
                        ),
                        maxDist: 16
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("skeleton", "other"),
                            EntityFilters.isUnderwater(true, "other", "!=")
                        ),
                        maxDist: 16
                    }
                ]
            }),
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:become_angry",
                target: "self"
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 0.625, -0.1]
                    }
                ]
            })
        ],
        "minecraft:wolf_increased_max_health": [
            new BPEntityComponents.SetHealth({
                value: 40,
                max: 40
            })
        ],
        "minecraft:on_tame_collar_color": [
            new BPEntityComponents.SetColor({
                value: 14
            })
        ],
        "minecraft:wolf_tame": [
            new BPEntityComponents.SetIsTamed(),
            new BPEntityComponents.SetAttack({
                damage: 4
            }),
            new BPEntityComponents.SetBehaviorTeleportToOwner({
                priority: 1,
                filters: EntityFilters.anyOf(
                    EntityFilters.allOf(
                        EntityFilters.ownerDistance(12, "self", ">"),
                        EntityFilters.isPanicking()
                    ),
                    EntityFilters.allOf(
                        EntityFilters.ownerDistance(24, "self", ">"),
                        EntityFilters.hasTarget()
                    )
                )
            }),
            new BPEntityComponents.SetBehaviorOwnerHurtByTarget({
                priority: 1
            }),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 2,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBehaviorOwnerHurtTarget({
                priority: 2
            }),
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                priority: 5,
                mustSee: true,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("skeleton", "other"),
                        maxDist: 16
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorFollowOwner({
                priority: 6,
                speedMultiplier: 1,
                startDistance: 10,
                stopDistance: 2,
                postTeleportDistance: -1,
                ignoreVibration: true
            }),
            new BPEntityComponents.SetSittable(),
            new BPEntityComponents.SetIsDyeable({
                interactText: "action.interact.dye"
            })
        ],
        "minecraft:wolf_armorable": [
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("wolf_armor", "armor", "self", "not"),
                                EntityFilters.hasEquipment("wolf_armor", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isOwner(true, "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            target: "self"
                        },
                        equipItemSlot: "slot.armor.body",
                        playSounds: ["armor.equip_wolf"],
                        interactText: "action.interact.equipwolfarmor"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("wolf_armor", "armor"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isOwner(true, "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            target: "self"
                        },
                        hurtItem: 1,
                        dropItemSlot: "slot.armor.body",
                        playSounds: ["armor.unequip_wolf"],
                        interactText: "action.interact.removewolfarmor",
                        vibration: "shear"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.isSitting(),
                                EntityFilters.hasDamagedEquipment("wolf_armor", "armor"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isOwner(true, "other"),
                                EntityFilters.isSneakHeld(false, "other"),
                                EntityFilters.hasEquipment("armadillo_scute", "hand", "other")
                            ),
                            target: "self"
                        },
                        repairEntityItem: {
                            slot: "slot.armor.body",
                            amount: 8
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["armor.repair_wolf"],
                        interactText: "action.interact.repairwolfarmor"
                    }
                ]
            })
        ],
        "minecraft:wolf_leashable": [
            new BPEntityComponents.SetLeashable({
                onLeash: {
                    event: "minecraft:on_leash",
                    target: "self"
                },
                onUnleash: {
                    event: "minecraft:on_unleash",
                    target: "self"
                },
                unleashOnRemoval: false
            })
        ],
        "minecraft:wolf_pale": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:wolf_ashen": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:wolf_black": [
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "minecraft:wolf_chestnut": [
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "minecraft:wolf_rusty": [
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "minecraft:wolf_snowy": [
            new BPEntityComponents.SetVariant({
                value: 5
            })
        ],
        "minecraft:wolf_spotted": [
            new BPEntityComponents.SetVariant({
                value: 6
            })
        ],
        "minecraft:wolf_striped": [
            new BPEntityComponents.SetVariant({
                value: 7
            })
        ],
        "minecraft:wolf_woods": [
            new BPEntityComponents.SetVariant({
                value: 8
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
        new BPEntityComponents.SetBalloonable({
            mass: 0.8
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            combineParentColors: true,
            offspringPairs: {
                "minecraft:wolf": "minecraft:wolf"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetTypeFamily({
            family: ["wolf", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.6,
            height: 0.8
        }),
        new BPEntityComponents.SetHealth({
            value: 8,
            max: 8
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
            canPathOverWater: true,
            avoidDamageBlocks: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetAttack({
            damage: 3
        }),
        new BPEntityComponents.SetHealable({
            items: [
                {
                    item: "porkchop",
                    healAmount: 6
                },
                {
                    item: "cooked_porkchop",
                    healAmount: 16
                },
                {
                    item: "fish",
                    healAmount: 4
                },
                {
                    item: "salmon",
                    healAmount: 4
                },
                {
                    item: "clownfish",
                    healAmount: 2
                },
                {
                    item: "pufferfish",
                    healAmount: 2
                },
                {
                    item: "cooked_fish",
                    healAmount: 10
                },
                {
                    item: "cooked_salmon",
                    healAmount: 12
                },
                {
                    item: "beef",
                    healAmount: 6
                },
                {
                    item: "cooked_beef",
                    healAmount: 16
                },
                {
                    item: "chicken",
                    healAmount: 4
                },
                {
                    item: "cooked_chicken",
                    healAmount: 12
                },
                {
                    item: "muttonRaw",
                    healAmount: 4
                },
                {
                    item: "muttonCooked",
                    healAmount: 12
                },
                {
                    item: "rotten_flesh",
                    healAmount: 8
                },
                {
                    item: "rabbit",
                    healAmount: 6
                },
                {
                    item: "cooked_rabbit",
                    healAmount: 10
                },
                {
                    item: "rabbit_stew",
                    healAmount: 20
                }
            ]
        }),
        new BPEntityComponents.SetEnvironmentSensor({
            triggers: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.boolProperty("minecraft:has_increased_max_health", true, "self", "!="),
                        EntityFilters.hasComponent("minecraft:is_tamed")
                    ),
                    event: "minecraft:increase_max_health"
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.boolProperty("minecraft:is_armorable", true, "self", "!="),
                        EntityFilters.hasComponent("minecraft:is_baby", "self", "!="),
                        EntityFilters.hasComponent("minecraft:is_tamed")
                    ),
                    event: "minecraft:become_armorable"
                },
                {
                    filters: EntityFilters.boolProperty("minecraft:was_upgraded_to_1_21_100", true, "self", "!="),
                    event: "minecraft:upgrade_to_1_21_100"
                }
            ]
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
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 1,
            speedMultiplier: 1.25,
            targetDist: 0,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 2,
            speedMultiplier: 1.25,
            damageSources: [
                "campfire",
                "fire",
                "fire_tick",
                "freezing",
                "lightning",
                "lava",
                "magma",
                "temperature",
                "soul_campfire"
            ],
            ignoreMobDamage: true
        }),
        new BPEntityComponents.SetBehaviorStayWhileSitting({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorLeapAtTarget({
            priority: 4,
            yd: 0.4
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 6,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 8,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorBeg({
            priority: 9,
            lookDistance: 8,
            lookTime: {
                min: 20,
                max: 40
            },
            items: [
                {
                    item: "minecraft:bone"
                },
                {
                    item: "minecraft:porkchop"
                },
                {
                    item: "minecraft:cooked_porkchop"
                },
                {
                    item: "minecraft:chicken"
                },
                {
                    item: "minecraft:cooked_chicken"
                },
                {
                    item: "minecraft:beef"
                },
                {
                    item: "minecraft:cooked_beef"
                },
                {
                    item: "minecraft:rotten_flesh"
                },
                {
                    item: "minecraft:muttonraw"
                },
                {
                    item: "minecraft:muttoncooked"
                },
                {
                    item: "minecraft:rabbit"
                },
                {
                    item: "minecraft:cooked_rabbit"
                }
            ]
        }),
        new BPEntityComponents.SetUsesLegacyFriction()
    ],
    events: {
        "minecraft:entity_spawned": {
            sequence: [
                {
                    trigger: "minecraft:spawn_wild_baby_or_adult"
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.hasBiomeTag("taiga"),
                        EntityFilters.hasBiomeTag("cold", "self", "not"),
                        EntityFilters.hasBiomeTag("mega", "self", "not"),
                        EntityFilters.hasBiomeTag("mutated", "self", "not")
                    ),
                    add: {
                        componentGroups: ["minecraft:wolf_pale"]
                    }
                },
                {
                    filters: EntityFilters.allOf(EntityFilters.hasBiomeTag("taiga"), EntityFilters.hasBiomeTag("cold")),
                    add: {
                        componentGroups: ["minecraft:wolf_ashen"]
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.hasBiomeTag("mega"),
                        EntityFilters.hasBiomeTag("taiga"),
                        EntityFilters.hasBiomeTag("forest"),
                        EntityFilters.hasBiomeTag("mutated", "self", "not")
                    ),
                    add: {
                        componentGroups: ["minecraft:wolf_black"]
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.hasBiomeTag("mega"),
                        EntityFilters.hasBiomeTag("taiga"),
                        EntityFilters.hasBiomeTag("forest"),
                        EntityFilters.hasBiomeTag("mutated")
                    ),
                    add: {
                        componentGroups: ["minecraft:wolf_chestnut"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("jungle"),
                    add: {
                        componentGroups: ["minecraft:wolf_rusty"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("grove"),
                    add: {
                        componentGroups: ["minecraft:wolf_snowy"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("savanna"),
                    add: {
                        componentGroups: ["minecraft:wolf_spotted"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("mesa"),
                    add: {
                        componentGroups: ["minecraft:wolf_striped"]
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.hasBiomeTag("forest"),
                        EntityFilters.hasBiomeTag("birch", "self", "not"),
                        EntityFilters.hasBiomeTag("taiga", "self", "not"),
                        EntityFilters.hasBiomeTag("roofed", "self", "not"),
                        EntityFilters.hasBiomeTag("mutated", "self", "not"),
                        EntityFilters.hasBiomeTag("mountain", "self", "not"),
                        EntityFilters.hasBiomeTag("dappled_forest", "self", "not")
                    ),
                    add: {
                        componentGroups: ["minecraft:wolf_woods"]
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
        "minecraft:spawn_wild_pale": {
            add: {
                componentGroups: ["minecraft:wolf_pale"]
            },
            trigger: "minecraft:spawn_wild_baby_or_adult"
        },
        "minecraft:spawn_wild_ashen": {
            add: {
                componentGroups: ["minecraft:wolf_ashen"]
            },
            trigger: "minecraft:spawn_wild_baby_or_adult"
        },
        "minecraft:spawn_wild_black": {
            add: {
                componentGroups: ["minecraft:wolf_black"]
            },
            trigger: "minecraft:spawn_wild_baby_or_adult"
        },
        "minecraft:spawn_wild_chestnut": {
            add: {
                componentGroups: ["minecraft:wolf_chestnut"]
            },
            trigger: "minecraft:spawn_wild_baby_or_adult"
        },
        "minecraft:spawn_wild_rusty": {
            add: {
                componentGroups: ["minecraft:wolf_rusty"]
            },
            trigger: "minecraft:spawn_wild_baby_or_adult"
        },
        "minecraft:spawn_wild_snowy": {
            add: {
                componentGroups: ["minecraft:wolf_snowy"]
            },
            trigger: "minecraft:spawn_wild_baby_or_adult"
        },
        "minecraft:spawn_wild_spotted": {
            add: {
                componentGroups: ["minecraft:wolf_spotted"]
            },
            trigger: "minecraft:spawn_wild_baby_or_adult"
        },
        "minecraft:spawn_wild_striped": {
            add: {
                componentGroups: ["minecraft:wolf_striped"]
            },
            trigger: "minecraft:spawn_wild_baby_or_adult"
        },
        "minecraft:spawn_wild_woods": {
            add: {
                componentGroups: ["minecraft:wolf_woods"]
            },
            trigger: "minecraft:spawn_wild_baby_or_adult"
        },
        "minecraft:spawn_wild_baby_or_adult": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 9,
                            trigger: "minecraft:spawn_wild_adult"
                        },
                        {
                            weight: 1,
                            trigger: "minecraft:spawn_wild_baby"
                        }
                    ]
                }
            ]
        },
        "minecraft:spawn_wild_baby": {
            add: {
                componentGroups: ["minecraft:wolf_baby", "minecraft:wolf_wild", "minecraft:wolf_leashable"]
            },
            setProperty: {
                "minecraft:was_upgraded_to_1_21_100": true
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:spawn_wild_adult": {
            add: {
                componentGroups: ["minecraft:wolf_adult", "minecraft:wolf_wild", "minecraft:wolf_leashable"]
            },
            setProperty: {
                "minecraft:was_upgraded_to_1_21_100": true
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:spawn_tame_baby": {
            add: {
                componentGroups: ["minecraft:wolf_baby", "minecraft:wolf_tame", "minecraft:wolf_leashable"]
            },
            setProperty: {
                "minecraft:was_upgraded_to_1_21_100": true
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:spawn_tame_adult": {
            add: {
                componentGroups: ["minecraft:wolf_adult", "minecraft:wolf_tame", "minecraft:wolf_leashable"]
            },
            setProperty: {
                "minecraft:was_upgraded_to_1_21_100": true
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:wolf_baby"]
            },
            add: {
                componentGroups: ["minecraft:wolf_adult"]
            }
        },
        "minecraft:ageable_set_baby": {
            remove: {
                componentGroups: ["minecraft:wolf_adult"]
            },
            add: {
                componentGroups: ["minecraft:wolf_baby"]
            }
        },
        "minecraft:on_tame": {
            remove: {
                componentGroups: ["minecraft:wolf_wild"]
            },
            add: {
                componentGroups: ["minecraft:wolf_tame", "minecraft:on_tame_collar_color"]
            }
        },
        "minecraft:increase_max_health": {
            add: {
                componentGroups: ["minecraft:wolf_increased_max_health"]
            },
            setProperty: {
                "minecraft:has_increased_max_health": true
            }
        },
        "minecraft:become_angry": {
            remove: {
                componentGroups: ["minecraft:wolf_wild", "minecraft:wolf_leashable"]
            },
            add: {
                componentGroups: ["minecraft:wolf_angry"]
            }
        },
        "minecraft:on_calm": {
            remove: {
                componentGroups: ["minecraft:wolf_angry"]
            },
            add: {
                componentGroups: ["minecraft:wolf_wild", "minecraft:wolf_leashable"]
            }
        },
        "minecraft:become_armorable": {
            add: {
                componentGroups: ["minecraft:wolf_armorable"]
            },
            setProperty: {
                "minecraft:is_armorable": true
            }
        },
        "minecraft:upgrade_to_1_21_100": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:angry", "self", "!="),
                    add: {
                        componentGroups: ["minecraft:wolf_leashable"]
                    }
                },
                {
                    setProperty: {
                        "minecraft:was_upgraded_to_1_21_100": true
                    }
                }
            ]
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
                        "minecraft:sound_variant": "big"
                    }
                },
                {
                    weight: 1,
                    setProperty: {
                        "minecraft:sound_variant": "cute"
                    }
                },
                {
                    weight: 1,
                    setProperty: {
                        "minecraft:sound_variant": "grumpy"
                    }
                },
                {
                    weight: 1,
                    setProperty: {
                        "minecraft:sound_variant": "mad"
                    }
                },
                {
                    weight: 1,
                    setProperty: {
                        "minecraft:sound_variant": "puglin"
                    }
                },
                {
                    weight: 1,
                    setProperty: {
                        "minecraft:sound_variant": "sad"
                    }
                }
            ]
        }
    }
});
