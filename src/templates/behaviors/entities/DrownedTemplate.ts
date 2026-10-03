import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const DrownedTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Drowned,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    componentsGroups: {
        "minecraft:drowned_rider": [
            new BPEntityComponents.SetEquipment({
                table: "loot_tables/entities/drowned_rider_equipment.json"
            }),
            new BPEntityComponents.SetNavigationGeneric({
                avoidSun: false,
                canBreakDoors: false,
                isAmphibious: true,
                canPathOverWater: false,
                canSwim: false,
                canWalk: false
            }),
            new BPEntityComponents.SetSpawnEntity({
                entities: {
                    maxWaitTime: 0,
                    minWaitTime: 0,
                    numToSpawn: 1,
                    singleUse: true,
                    spawnEntity: "minecraft:zombie_nautilus",
                    spawnEvent: "minecraft:entity_spawned"
                }
            })
        ],
        "minecraft:can_break_doors": [
            new BPEntityComponents.SetAnnotationBreakDoor({})
        ],
        "minecraft:baby_drowned": [
            new BPEntityComponents.SetExperienceReward({
                onDeath: "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
            }),
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetMovement({
                value: 0.35
            }),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.96,
                width: 0.98
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["drowned", "baby_undead", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetUnderwaterMovement({
                value: 0.08
            })
        ],
        "minecraft:adult_drowned": [
            new BPEntityComponents.SetExperienceReward({
                onDeath: "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["drowned", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.9,
                width: 0.6
            })
        ],
        "minecraft:melee_equipment": [
            new BPEntityComponents.SetEquipment({
                slotDropChance: [
                    {
                        dropChance: 1,
                        slot: "slot.weapon.offhand"
                    }
                ],
                table: "loot_tables/entities/drowned_equipment.json"
            })
        ],
        "minecraft:drowned_jockey": [
            new BPEntityComponents.SetBehaviorFindMount({
                maxFailedAttempts: 20,
                priority: 1,
                startDelay: 15,
                withinRadius: 16
            })
        ],
        "minecraft:hunter_mode": [
            new BPEntityComponents.SetNavigationGeneric({
                avoidSun: true,
                canBreakDoors: true,
                isAmphibious: true,
                canPathOverWater: false,
                canSwim: true,
                canWalk: true
            })
        ],
        "minecraft:melee_mode": [
            new BPEntityComponents.SetAttack({
                damage: 3
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                canSpreadOnFire: true,
                requireCompletePath: true,
                priority: 3
            })
        ],
        "minecraft:mode_switcher": [
            new BPEntityComponents.SetTargetNearbySensor({
                insideRange: 3,
                onInsideRange: {
                    event: "minecraft:switch_to_melee",
                    target: "self"
                },
                onOutsideRange: {
                    event: "minecraft:switch_to_ranged",
                    target: "self"
                },
                outsideRange: 5
            })
        ],
        "minecraft:ranged_equipment": [
            new BPEntityComponents.SetEquipment({
                slotDropChance: [
                    {
                        dropChance: 1,
                        slot: "slot.weapon.offhand"
                    }
                ],
                table: "loot_tables/entities/drowned_ranged_equipment.json"
            })
        ],
        "minecraft:ranged_mode": [
            new BPEntityComponents.SetBehaviorRangedAttack({
                attackInterval: {
                    min: 1,
                    max: 3
                },
                // TODO(migrate): clave no soportada "attack_range": {"min": 0.0, "max": 10.0}
                priority: 3,
                swing: true
            }),
            new BPEntityComponents.SetShooter({
                // TODO(migrate): clave no soportada "def": "minecraft:thrown_trident"
                sound: "item.trident.throw"
            })
        ],
        "minecraft:wander_mode": [
            new BPEntityComponents.SetNavigationGeneric({
                avoidSun: true,
                canBreakDoors: true,
                isAmphibious: true,
                canPathOverWater: false,
                canSwim: false,
                canWalk: true
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
        new BPEntityComponents.SetBehaviorEquipItem({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorFleeSun({
            priority: 2,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookDistance: 6,
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            reselectTargets: true,
            mustSee: true,
            withinRadius: 12,
            mustSeeForgetDuration: 17,
            persistTime: 0.5,
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isFamily("snowgolem", "other"),
                            EntityFilters.isFamily("irongolem", "other"),
                            EntityFilters.isFamily("axolotl", "other")
                        ),
                        EntityFilters.anyOf(EntityFilters.inWater(true, "other"), EntityFilters.isDaytime(false))
                    ),
                    maxDist: 20
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            EntityFilters.isFamily("villager", "other"),
                            EntityFilters.isFamily("wandering_trader", "other")
                        ),
                        EntityFilters.anyOf(EntityFilters.inWater(true, "other"), EntityFilters.isDaytime(false))
                    ),
                    maxDist: 20,
                    mustSee: false
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("baby_turtle", "other"),
                        EntityFilters.inWater(true, "other", "!=")
                    ),
                    maxDist: 20
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            canPickupAnyItem: true,
            excludedItems: [
                {
                    name: "minecraft:glow_ink_sac"
                },
                {
                    tags: "q.all_tags('minecraft:is_spear')"
                }
            ],
            pickupBasedOnChance: true,
            goalRadius: 2,
            priority: 6,
            maxDist: 3,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 7,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorStompTurtleEgg({
            goalRadius: 1.14,
            priority: 4,
            searchHeight: 2,
            interval: 20,
            searchRange: 10,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBreathable({
            breathesAir: true,
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetBurnsInDaylight({}),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetEquipItem({
            excludedItems: [
                {
                    item: "minecraft:banner:15"
                }
            ]
        }),
        new BPEntityComponents.SetHealth({
            max: 20,
            value: 20
        }),
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
            table: "loot_tables/entities/drowned.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.23
        }),
        new BPEntityComponents.SetMovementGeneric({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationGeneric({
            avoidSun: true,
            canBreakDoors: true,
            isAmphibious: true,
            canPathOverWater: false,
            canSwim: false,
            canWalk: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:drowned": "minecraft:drowned"
            }
        }),
        new BPEntityComponents.SetOnTargetAcquired({
            event: "minecraft:has_target",
            target: "self"
        }),
        new BPEntityComponents.SetOnTargetEscape({
            event: "minecraft:lost_target",
            target: "self"
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetRotationLockedToVehicle(),
        new BPEntityComponents.SetShareables({
            items: [
                {
                    item: "minecraft:trident",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:nautilus_shell",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_sword",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_sword",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_sword",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_sword",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_sword",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:stone_sword",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:wooden_sword",
                    priority: 8,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_helmet",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_helmet",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_helmet",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:chainmail_helmet",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_helmet",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_helmet",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:leather_helmet",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:turtle_helmet",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:skull:0",
                    priority: 8,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:skull:1",
                    priority: 8,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:carved_pumpkin",
                    priority: 8,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_chestplate",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_chestplate",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_chestplate",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:chainmail_chestplate",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_chestplate",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_chestplate",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:leather_chestplate",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_leggings",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_leggings",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_leggings",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:chainmail_leggings",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_leggings",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_leggings",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:leather_leggings",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_boots",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_boots",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_boots",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:chainmail_boots",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_boots",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_boots",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:leather_boots",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                }
            ],
            singularPickup: true
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.06
        }),
        new BPEntityComponents.SetApplyKnockbackRules({
            presets: [
                {
                    horizontalPower: 0.6,
                    verticalPower: -0.6,
                    verticalVelocityCap: -0.4,
                    checkIfTargetIsImmersedInWater: true
                }
            ]
        })
    ],
    events: {
        "minecraft:entity_born": {
            trigger: "minecraft:as_baby"
        },
        "minecraft:as_rider": {
            add: {
                componentGroups: ["minecraft:adult_drowned", "minecraft:ranged_mode", "minecraft:drowned_rider"]
            },
            remove: {
                componentGroups: [
                    "minecraft:melee_equipment",
                    "minecraft:ranged_equipment",
                    "minecraft:melee_mode",
                    "minecraft:baby_drowned",
                    "minecraft:wander_mode",
                    "minecraft:mode_switcher"
                ]
            }
        },
        "minecraft:as_adult": {
            add: {
                componentGroups: [
                    "minecraft:melee_equipment",
                    "minecraft:melee_mode",
                    "minecraft:adult_drowned",
                    "minecraft:wander_mode"
                ]
            }
        },
        "minecraft:as_baby_jockey": {
            add: {
                componentGroups: [
                    "minecraft:melee_equipment",
                    "minecraft:melee_mode",
                    "minecraft:baby_drowned",
                    "minecraft:drowned_jockey",
                    "minecraft:wander_mode"
                ]
            }
        },
        "minecraft:as_baby": {
            add: {
                componentGroups: [
                    "minecraft:melee_equipment",
                    "minecraft:melee_mode",
                    "minecraft:baby_drowned",
                    "minecraft:wander_mode"
                ]
            }
        },
        "minecraft:as_ranged_adult": {
            add: {
                componentGroups: [
                    "minecraft:mode_switcher",
                    "minecraft:ranged_equipment",
                    "minecraft:ranged_mode",
                    "minecraft:adult_drowned",
                    "minecraft:wander_mode"
                ]
            }
        },
        "minecraft:as_ranged_baby_jockey": {
            add: {
                componentGroups: [
                    "minecraft:mode_switcher",
                    "minecraft:ranged_equipment",
                    "minecraft:ranged_mode",
                    "minecraft:baby_drowned",
                    "minecraft:drowned_jockey",
                    "minecraft:wander_mode"
                ]
            }
        },
        "minecraft:as_ranged_baby": {
            add: {
                componentGroups: [
                    "minecraft:mode_switcher",
                    "minecraft:ranged_equipment",
                    "minecraft:ranged_mode",
                    "minecraft:baby_drowned",
                    "minecraft:wander_mode"
                ]
            }
        },
        "minecraft:entity_spawned": {
            sequence: [
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    randomize: [
                        {
                            weight: 9500,
                            randomize: [
                                {
                                    weight: 25,
                                    trigger: "minecraft:as_ranged_adult"
                                },
                                {
                                    weight: 375,
                                    trigger: "minecraft:as_adult"
                                }
                            ]
                        },
                        {
                            weight: 425,
                            randomize: [
                                {
                                    weight: 25,
                                    trigger: "minecraft:as_ranged_baby"
                                },
                                {
                                    weight: 375,
                                    trigger: "minecraft:as_baby"
                                }
                            ]
                        },
                        {
                            weight: 75,
                            randomize: [
                                {
                                    weight: 25,
                                    trigger: "minecraft:as_ranged_baby_jockey"
                                },
                                {
                                    weight: 375,
                                    trigger: "minecraft:as_baby_jockey"
                                }
                            ]
                        }
                    ]
                },
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    randomize: [
                        {
                            weight: 10,
                            add: {
                                componentGroups: ["minecraft:can_break_doors"]
                            }
                        },
                        {
                            weight: 90
                        }
                    ]
                }
            ]
        },
        "minecraft:has_target": {
            sequence: [
                {
                    filters: EntityFilters.isRiding(false),
                    add: {
                        componentGroups: ["minecraft:hunter_mode"]
                    },
                    remove: {
                        componentGroups: ["minecraft:wander_mode"]
                    }
                }
            ]
        },
        "minecraft:lost_target": {
            sequence: [
                {
                    filters: EntityFilters.isRiding(false),
                    add: {
                        componentGroups: ["minecraft:wander_mode"]
                    },
                    remove: {
                        componentGroups: ["minecraft:hunter_mode"]
                    }
                }
            ]
        },
        "minecraft:switch_to_melee": {
            add: {
                componentGroups: ["minecraft:melee_mode"]
            },
            remove: {
                componentGroups: ["minecraft:ranged_mode"]
            }
        },
        "minecraft:switch_to_ranged": {
            add: {
                componentGroups: ["minecraft:ranged_mode"]
            },
            remove: {
                componentGroups: ["minecraft:melee_mode"]
            }
        }
    }
});
