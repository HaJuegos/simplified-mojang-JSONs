import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Zombie para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const ZombieTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Zombie,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    properties: {
        "minecraft:is_riding_zombie_horse": {
            clientSync: false,
            type: "bool",
            default: false
        }
    },
    componentsGroups: {
        "minecraft:can_break_doors": [
            new BPEntityComponents.SetAnnotationBreakDoor()
        ],
        "minecraft:can_have_equipment": [
            new BPEntityComponents.SetEquipment({
                table: "loot_tables/entities/zombie_equipment.json"
            })
        ],
        "minecraft:zombie_adult": [
            new BPEntityComponents.SetBehaviorMountPathing({
                priority: 2,
                targetDist: 0,
                speedMultiplier: 1.25,
                trackTarget: true
            }),
            new BPEntityComponents.SetExperienceReward({
                onDeath: `${MoLang.lastHitByPlayer()} ? 5 + (${MoLang.equipmentCount()} * Math.Random(1,3)) : 0`
            }),
            new BPEntityComponents.SetMovement({
                value: 0.23
            }),
            new BPEntityComponents.SetRideable({
                familyTypes: ["baby_undead"],
                seatCount: 1,
                seats: [
                    {
                        lockRiderRotation: 0,
                        position: [0, 1.175, -0.35]
                    }
                ]
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.9,
                width: 0.6
            })
        ],
        "minecraft:zombie_baby": [
            new BPEntityComponents.SetExperienceReward({
                onDeath: `${MoLang.lastHitByPlayer()} ? 12 + (${MoLang.equipmentCount()} * Math.Random(1,3)) : 0`
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
                family: ["baby_undead", "zombie", "undead", "monster", "mob"]
            })
        ],
        "minecraft:zombie_default": [
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/zombie.json"
            })
        ],
        "minecraft:zombie_jockey": [
            new BPEntityComponents.SetBehaviorFindMount({
                maxFailedAttempts: 20,
                priority: 1,
                startDelay: 15,
                withinRadius: 16
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/zombie.json"
            })
        ],
        "minecraft:zombie_rider": [
            new BPEntityComponents.SetEquipment({
                table: "loot_tables/entities/zombie_rider_equipment.json"
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/zombie_rider.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["zombie_rider", "zombie", "undead", "monster", "mob"]
            })
        ],
        "minecraft:on_zombie_horse": [
            new BPEntityComponents.SetBehaviorUseKineticWeapon({
                approachDistance: 12,
                repositionDistance: {
                    min: 8,
                    max: 9
                },
                repositionSpeedMultiplier: 1.4,
                cooldownDistance: {
                    min: 11,
                    max: 13
                },
                cooldownSpeedMultiplier: 1.4,
                weaponReachMultiplier: 0.5,
                weaponMinSpeedMultiplier: 0.2,
                hijackMountNavigation: true,
                speedMultiplier: 1.4,
                trackTarget: true,
                priority: 3
            })
        ],
        "minecraft:not_on_zombie_horse": [
            new BPEntityComponents.SetBehaviorUseKineticWeapon({
                approachDistance: 10,
                repositionDistance: {
                    min: 6,
                    max: 7
                },
                cooldownDistance: {
                    min: 9,
                    max: 11
                },
                weaponReachMultiplier: 0.5,
                weaponMinSpeedMultiplier: 0.2,
                hijackMountNavigation: true,
                trackTarget: true,
                priority: 3
            })
        ],
        "minecraft:look_to_start_transformations": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "minecraft:start_transforming_into_drowned",
                        filters: EntityFilters.isUnderwater()
                    },
                    {
                        event: "minecraft:on_start_riding_zombie_horse",
                        filters: EntityFilters.allOf(
                            EntityFilters.isVehicleFamily("zombiehorse"),
                            EntityFilters.boolProperty("minecraft:is_riding_zombie_horse", false)
                        )
                    },
                    {
                        event: "minecraft:on_stop_riding_zombie_horse",
                        filters: EntityFilters.allOf(
                            EntityFilters.isVehicleFamily("zombiehorse", "self", "not"),
                            EntityFilters.boolProperty("minecraft:is_riding_zombie_horse")
                        )
                    }
                ]
            })
        ],
        "minecraft:start_drowned_transformation": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "minecraft:stop_transforming",
                        filters: EntityFilters.isUnderwater(false)
                    },
                    {
                        event: "minecraft:on_start_riding_zombie_horse",
                        filters: EntityFilters.allOf(
                            EntityFilters.isVehicleFamily("zombiehorse"),
                            EntityFilters.boolProperty("minecraft:is_riding_zombie_horse", false)
                        )
                    },
                    {
                        event: "minecraft:on_stop_riding_zombie_horse",
                        filters: EntityFilters.allOf(
                            EntityFilters.isVehicleFamily("zombiehorse", "self", "not"),
                            EntityFilters.boolProperty("minecraft:is_riding_zombie_horse")
                        )
                    }
                ]
            }),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: 30,
                timeDownEvent: {
                    event: "minecraft:convert_to_drowned"
                }
            })
        ],
        "minecraft:convert_to_drowned": [
            new BPEntityComponents.SetIsShaking(),
            new BPEntityComponents.SetTransformation({
                delay: {
                    value: 15
                },
                preserveEquipment: true,
                into: "minecraft:drowned<minecraft:as_adult>",
                transformationSound: "convert_to_drowned"
            })
        ],
        "minecraft:convert_to_baby_drowned": [
            new BPEntityComponents.SetIsShaking(),
            new BPEntityComponents.SetTransformation({
                delay: {
                    value: 15
                },
                preserveEquipment: true,
                into: "minecraft:drowned<minecraft:as_baby>",
                transformationSound: "convert_to_drowned"
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 3
        }),
        new BPEntityComponents.SetBehaviorEquipItem({
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("breeze", "other", "not")
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookDistance: 6,
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            canSpreadOnFire: true,
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            reselectTargets: true,
            mustSee: true,
            withinRadius: 25,
            mustSeeForgetDuration: 17,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily("player", "other"),
                        EntityFilters.isFamily("snowgolem", "other"),
                        EntityFilters.isFamily("irongolem", "other")
                    ),
                    maxDist: 35
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily("villager", "other"),
                        EntityFilters.isFamily("wandering_trader", "other")
                    ),
                    maxDist: 35,
                    mustSee: false
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("baby_turtle", "other"),
                        EntityFilters.inWater(false, "other")
                    ),
                    maxDist: 35
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            canPickupAnyItem: true,
            excludedItems: ["minecraft:glow_ink_sac"],
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
            priority: 5,
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
        new BPEntityComponents.SetBurnsInDaylight(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetEnvironmentSensor({
            triggers: [
                {
                    event: "minecraft:start_transforming_into_drowned",
                    filters: EntityFilters.isUnderwater()
                },
                {
                    event: "minecraft:on_start_riding_zombie_horse",
                    filters: EntityFilters.allOf(
                        EntityFilters.isVehicleFamily("zombiehorse"),
                        EntityFilters.boolProperty("minecraft:is_riding_zombie_horse", false)
                    )
                },
                {
                    event: "minecraft:on_stop_riding_zombie_horse",
                    filters: EntityFilters.allOf(
                        EntityFilters.isVehicleFamily("zombiehorse", "self", "not"),
                        EntityFilters.boolProperty("minecraft:is_riding_zombie_horse")
                    )
                }
            ]
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
                    filters: EntityFilters.inLava()
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            canBreakDoors: true,
            isAmphibious: true,
            canPassDoors: true,
            canWalk: true
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:zombie": "minecraft:zombie"
            }
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetRotationLockedToVehicle(),
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
                    item: "minecraft:golden_sword",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_sword",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:stone_sword",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:wooden_sword",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_spear",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_spear",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_spear",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_spear",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_spear",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:stone_spear",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:wooden_spear",
                    priority: 6,
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
        new BPEntityComponents.SetTypeFamily({
            family: ["zombie", "undead", "monster", "mob"]
        })
    ],
    events: {
        "minecraft:entity_born": {
            trigger: "minecraft:as_baby"
        },
        "minecraft:entity_spawned": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 9500,
                            trigger: "minecraft:as_adult"
                        },
                        {
                            weight: 425,
                            trigger: "minecraft:as_baby"
                        },
                        {
                            weight: 75,
                            trigger: "minecraft:as_baby_jockey"
                        }
                    ]
                },
                {
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
        "minecraft:as_adult": {
            add: {
                componentGroups: [
                    "minecraft:zombie_default",
                    "minecraft:zombie_adult",
                    "minecraft:not_on_zombie_horse",
                    "minecraft:can_have_equipment"
                ]
            }
        },
        "minecraft:as_baby_jockey": {
            add: {
                componentGroups: [
                    "minecraft:zombie_baby",
                    "minecraft:zombie_jockey",
                    "minecraft:not_on_zombie_horse",
                    "minecraft:can_have_equipment"
                ]
            }
        },
        "minecraft:as_baby": {
            add: {
                componentGroups: [
                    "minecraft:zombie_default",
                    "minecraft:zombie_baby",
                    "minecraft:not_on_zombie_horse",
                    "minecraft:can_have_equipment"
                ]
            }
        },
        "minecraft:spawn_as_rider": {
            add: {
                componentGroups: [
                    "minecraft:zombie_adult",
                    "minecraft:zombie_rider",
                    "minecraft:on_zombie_horse"
                ]
            },
            setProperty: {
                "minecraft:is_riding_zombie_horse": true
            }
        },
        "minecraft:on_start_riding_zombie_horse": {
            add: {
                componentGroups: ["minecraft:on_zombie_horse"]
            },
            setProperty: {
                "minecraft:is_riding_zombie_horse": true
            },
            remove: {
                componentGroups: ["minecraft:not_on_zombie_horse"]
            }
        },
        "minecraft:on_stop_riding_zombie_horse": {
            add: {
                componentGroups: ["minecraft:not_on_zombie_horse"]
            },
            setProperty: {
                "minecraft:is_riding_zombie_horse": false
            },
            remove: {
                componentGroups: ["minecraft:on_zombie_horse"]
            }
        },
        "minecraft:start_transforming_into_drowned": {
            add: {
                componentGroups: ["minecraft:start_drowned_transformation"]
            },
            remove: {
                componentGroups: ["minecraft:look_to_start_transformations"]
            }
        },
        "minecraft:stop_transforming": {
            add: {
                componentGroups: ["minecraft:look_to_start_transformations"]
            },
            remove: {
                componentGroups: ["minecraft:start_drowned_transformation"]
            }
        },
        "minecraft:convert_to_drowned": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "self", "!="),
                    add: {
                        componentGroups: ["minecraft:convert_to_drowned"]
                    },
                    remove: {
                        componentGroups: ["minecraft:start_drowned_transformation"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby"),
                    add: {
                        componentGroups: ["minecraft:convert_to_baby_drowned"]
                    },
                    remove: {
                        componentGroups: ["minecraft:start_drowned_transformation"]
                    }
                }
            ]
        }
    }
});
