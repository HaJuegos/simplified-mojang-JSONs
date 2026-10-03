import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const ZombieVillagerTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.ZombieVillager,
    formatVersion: FormatVersionEntities.V1_26_0,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    componentsGroups: {
        "adult": [
            new BPEntityComponents.SetBehaviorMountPathing({
                priority: 5,
                targetDist: 0,
                speedMultiplier: 1.25,
                trackTarget: true
            }),
            new BPEntityComponents.SetExperienceReward({
                onDeath: "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
            }),
            new BPEntityComponents.SetMovement({
                value: 0.23
            }),
            new BPEntityComponents.SetRideable({
                familyTypes: ["zombie"],
                seatCount: 1,
                seats: [
                    {
                        position: [0, 1.1, -0.35]
                    }
                ]
            })
        ],
        "become_zombie_villager_v2": [
            new BPEntityComponents.SetTransformation({
                into: "minecraft:zombie_villager_v2",
                keepLevel: false
            })
        ],
        "armorer": [
            new BPEntityComponents.SetTypeFamily({
                family: ["armorer", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "can_break_doors": [
            new BPEntityComponents.SetAnnotationBreakDoor({})
        ],
        "cartographer": [
            new BPEntityComponents.SetTypeFamily({
                family: ["cartographer", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "baby": [
            new BPEntityComponents.SetExperienceReward({
                onDeath: "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
            }),
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetMovement({
                value: 0.35
            }),
            new BPEntityComponents.SetScale({
                value: 0.5
            })
        ],
        "weaponsmith": [
            new BPEntityComponents.SetTypeFamily({
                family: ["weaponsmith", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "butcher": [
            new BPEntityComponents.SetTypeFamily({
                family: ["butcher", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "cleric": [
            new BPEntityComponents.SetTypeFamily({
                family: ["cleric", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "farmer": [
            new BPEntityComponents.SetTypeFamily({
                family: ["farmer", "zombie", "zombie_villager", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "fisherman": [
            new BPEntityComponents.SetTypeFamily({
                family: ["fisherman", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "fletcher": [
            new BPEntityComponents.SetTypeFamily({
                family: ["fletcher", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "from_abandoned_village": [
            new BPEntityComponents.SetBehaviorFleeSun({
                priority: 4,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetNavigationWalk({
                avoidSun: true,
                isAmphibious: true,
                avoidWater: true,
                canOpenDoors: true,
                canPassDoors: true
            })
        ],
        "jockey": [
            new BPEntityComponents.SetBehaviorFindMount({
                priority: 1,
                withinRadius: 16
            })
        ],
        "leatherworker": [
            new BPEntityComponents.SetTypeFamily({
                family: ["leatherworker", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "librarian": [
            new BPEntityComponents.SetTypeFamily({
                family: ["librarian", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "to_villager": [
            new BPEntityComponents.SetIsShaking(),
            new BPEntityComponents.SetSpellEffects({
                addEffects: [
                    {
                        duration: 100,
                        effect: "strength"
                    },
                    {
                        duration: 100,
                        effect: "heal"
                    }
                ],
                removeEffects: "weakness"
            }),
            new BPEntityComponents.SetTransformation({
                beginTransformSound: "remedy",
                delay: {
                    blockAssistChance: 0.01,
                    blockRadius: 4,
                    blockChance: 0.3,
                    blockTypes: ["minecraft:bed", "minecraft:iron_bars"],
                    value: 100
                },
                into: "minecraft:villager",
                transformationSound: "unfect"
            })
        ],
        "shepherd": [
            new BPEntityComponents.SetTypeFamily({
                family: ["shepherd", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "toolsmith": [
            new BPEntityComponents.SetTypeFamily({
                family: ["toolsmith", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 3
        }),
        new BPEntityComponents.SetBehaviorEquipItem({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 6,
            priority: 10
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            canSpreadOnFire: true,
            priority: 6
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            reselectTargets: true,
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
                                value: "snowgolem"
                            },
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "irongolem"
                            }
                        )
                    ),
                    maxDist: 35
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "villager"
                            },
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "wandering_trader"
                            }
                        )
                    ),
                    maxDist: 35,
                    mustSee: false
                },
                {
                    filters: EntityFilters.allOf(
                        {
                            test: "is_family",
                            subject: 1,
                            operator: 0,
                            value: "baby_turtle"
                        },
                        {
                            test: "in_water",
                            subject: 1,
                            operator: 1,
                            value: true
                        }
                    ),
                    maxDist: 35
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            canPickupAnyItem: true,
            excludedItems: ["minecraft:glow_ink_sac"],
            pickupBasedOnChance: false,
            goalRadius: 2,
            priority: 8,
            maxDist: 3,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 11
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 9,
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
        new BPEntityComponents.SetInteract({
            interactions: [
                {
                    interactText: "action.interact.cure",
                    onInteract: {
                        event: "villager_converted",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("golden_apple", "hand", "other"),
                            EntityFilters.hasComponent("minecraft:effect.weakness")
                        ),
                        target: "self"
                    },
                    swing: false,
                    useItem: true
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/zombie.json"
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidSun: false,
            canBreakDoors: true,
            isAmphibious: true,
            canPassDoors: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({}),
        // TODO(migrate): componente sin clase "minecraft:pushable": {"is_pushable": true, "is_pushable_by_piston": true}
        new BPEntityComponents.SetShareables({
            items: [
                {
                    item: "minecraft:netherite_sword",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_sword",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_sword",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:stone_sword",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_sword",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:wooden_sword",
                    priority: 5,
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
                    item: "minecraft:leather_helmet",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:turtle_helmet",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:skull:0",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:skull:1",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:carved_pumpkin",
                    priority: 7,
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
                    item: "minecraft:leather_chestplate",
                    priority: 5,
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
                    item: "minecraft:leather_leggings",
                    priority: 5,
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
                    item: "minecraft:leather_boots",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                }
            ],
            singularPickup: true
        })
    ],
    events: {
        "villager_converted": {
            add: {
                componentGroups: ["to_villager"]
            },
            remove: {}
        },
        "from_village": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                    randomize: [
                        {
                            weight: 9500,
                            add: {
                                componentGroups: ["adult"]
                            },
                            remove: {}
                        },
                        {
                            weight: 425,
                            add: {
                                componentGroups: ["baby"]
                            },
                            remove: {}
                        },
                        {
                            weight: 75,
                            add: {
                                componentGroups: ["baby", "jockey"]
                            },
                            remove: {}
                        }
                    ]
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                    randomize: [
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["farmer"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["fisherman"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["shepherd"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["fletcher"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["librarian"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["cartographer"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["cleric"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["armorer"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["weaponsmith"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["toolsmith"]
                            }
                        },
                        {
                            weight: 10,
                            add: {
                                componentGroups: ["butcher"]
                            }
                        },
                        {
                            weight: 10,
                            add: {
                                componentGroups: ["leatherworker"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    add: {
                        componentGroups: ["from_abandoned_village"]
                    }
                }
            ]
        },
        "minecraft:entity_spawned": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                    randomize: [
                        {
                            weight: 9500,
                            add: {
                                componentGroups: ["adult"]
                            },
                            remove: {}
                        },
                        {
                            weight: 425,
                            add: {
                                componentGroups: ["baby"]
                            },
                            remove: {}
                        },
                        {
                            weight: 75,
                            add: {
                                componentGroups: ["baby", "jockey"]
                            },
                            remove: {}
                        }
                    ]
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                    randomize: [
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["farmer"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["fisherman"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["shepherd"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["fletcher"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["librarian"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["cartographer"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["cleric"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["armorer"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["weaponsmith"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["toolsmith"]
                            }
                        },
                        {
                            weight: 10,
                            add: {
                                componentGroups: ["butcher"]
                            }
                        },
                        {
                            weight: 10,
                            add: {
                                componentGroups: ["leatherworker"]
                            }
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
                                componentGroups: ["can_break_doors"]
                            }
                        },
                        {
                            weight: 90
                        }
                    ]
                }
            ]
        },
        "minecraft:become_cleric": {
            add: {
                componentGroups: ["cleric"]
            }
        },
        "minecraft:entity_transformed": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "other"),
                    add: {
                        componentGroups: ["baby"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "other", "!="),
                    add: {
                        componentGroups: ["adult"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("farmer", "other"),
                    add: {
                        componentGroups: ["farmer"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("fisherman", "other"),
                    add: {
                        componentGroups: ["fisherman"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("shepherd", "other"),
                    add: {
                        componentGroups: ["shepherd"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("fletcher", "other"),
                    add: {
                        componentGroups: ["fletcher"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("librarian", "other"),
                    add: {
                        componentGroups: ["librarian"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("cartographer", "other"),
                    add: {
                        componentGroups: ["cartographer"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("cleric", "other"),
                    add: {
                        componentGroups: ["cleric"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("armorer", "other"),
                    add: {
                        componentGroups: ["armorer"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("weaponsmith", "other"),
                    add: {
                        componentGroups: ["weaponsmith"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("toolsmith", "other"),
                    add: {
                        componentGroups: ["toolsmith"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("butcher", "other"),
                    add: {
                        componentGroups: ["butcher"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("leatherworker", "other"),
                    add: {
                        componentGroups: ["leatherworker"]
                    }
                }
            ]
            // TODO(migrate): accion no soportada "filters": {"test": "has_component", "operator": "!=", "value": "minecraft:variant"}
        }
    }
});
