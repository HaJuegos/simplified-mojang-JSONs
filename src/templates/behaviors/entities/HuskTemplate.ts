import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Husk para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const HuskTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Husk,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    properties: {
        "minecraft:is_riding_camel_husk": {
            clientSync: false,
            type: "bool",
            default: false
        }
    },
    componentsGroups: {
        "minecraft:can_break_doors": [
            new BPEntityComponents.SetAnnotationBreakDoor()
        ],
        "minecraft:zombie_husk_adult": [
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
        "minecraft:zombie_husk_baby": [
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
                family: ["baby_undead", "husk", "zombie", "undead", "monster", "mob"]
            })
        ],
        "minecraft:zombie_husk_jockey": [
            new BPEntityComponents.SetBehaviorFindMount({
                priority: 0,
                withinRadius: 16
            })
        ],
        "minecraft:zombie_husk_rider": [
            new BPEntityComponents.SetEquipment({
                table: "loot_tables/entities/zombie_rider_equipment.json"
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/husk_rider.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["husk_rider", "husk", "zombie", "undead", "monster", "mob"]
            })
        ],
        "minecraft:on_camel_husk": [
            new BPEntityComponents.SetBehaviorUseKineticWeapon({
                approachDistance: 12,
                repositionDistance: {
                    min: 8,
                    max: 9
                },
                repositionSpeedMultiplier: 4,
                cooldownDistance: {
                    min: 11,
                    max: 13
                },
                cooldownSpeedMultiplier: 4,
                weaponReachMultiplier: 0.5,
                weaponMinSpeedMultiplier: 0.2,
                hijackMountNavigation: true,
                speedMultiplier: 4,
                trackTarget: true,
                priority: 3
            })
        ],
        "minecraft:not_on_camel_husk": [
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
                        event: "minecraft:start_transforming_into_zombie",
                        filters: EntityFilters.isUnderwater()
                    },
                    {
                        event: "minecraft:on_start_riding_camel_husk",
                        filters: EntityFilters.allOf(
                            EntityFilters.isVehicleFamily("camel_husk"),
                            EntityFilters.boolProperty("minecraft:is_riding_camel_husk", false)
                        )
                    },
                    {
                        event: "minecraft:on_stop_riding_camel_husk",
                        filters: EntityFilters.allOf(
                            EntityFilters.isVehicleFamily("camel_husk", "self", "not"),
                            EntityFilters.boolProperty("minecraft:is_riding_camel_husk")
                        )
                    }
                ]
            })
        ],
        "minecraft:start_zombie_transformation": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "minecraft:stop_transforming",
                        filters: EntityFilters.isUnderwater(false)
                    },
                    {
                        event: "minecraft:on_start_riding_camel_husk",
                        filters: EntityFilters.allOf(
                            EntityFilters.isVehicleFamily("camel_husk"),
                            EntityFilters.boolProperty("minecraft:is_riding_camel_husk", false)
                        )
                    },
                    {
                        event: "minecraft:on_stop_riding_camel_husk",
                        filters: EntityFilters.allOf(
                            EntityFilters.isVehicleFamily("camel_husk", "self", "not"),
                            EntityFilters.boolProperty("minecraft:is_riding_camel_husk")
                        )
                    }
                ]
            }),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: 30,
                timeDownEvent: {
                    event: "minecraft:convert_to_zombie"
                }
            })
        ],
        "minecraft:convert_to_zombie": [
            new BPEntityComponents.SetIsShaking(),
            new BPEntityComponents.SetTransformation({
                delay: {
                    value: 15
                },
                preserveEquipment: true,
                into: "minecraft:zombie<minecraft:as_adult>",
                transformationSound: "mob.husk.convert_to_zombie"
            })
        ],
        "minecraft:convert_to_baby_zombie": [
            new BPEntityComponents.SetIsShaking(),
            new BPEntityComponents.SetTransformation({
                delay: {
                    value: 15
                },
                preserveEquipment: true,
                into: "minecraft:zombie<minecraft:as_baby>",
                transformationSound: "mob.husk.convert_to_zombie"
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 3,
            effectDuration: 30,
            effectName: "hunger"
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
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
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
                    event: "minecraft:start_transforming_into_zombie",
                    filters: EntityFilters.isUnderwater()
                },
                {
                    event: "minecraft:on_start_riding_camel_husk",
                    filters: EntityFilters.allOf(
                        EntityFilters.isVehicleFamily("camel_husk"),
                        EntityFilters.boolProperty("minecraft:is_riding_camel_husk", false)
                    )
                },
                {
                    event: "minecraft:on_stop_riding_camel_husk",
                    filters: EntityFilters.allOf(
                        EntityFilters.isVehicleFamily("camel_husk", "self", "not"),
                        EntityFilters.boolProperty("minecraft:is_riding_camel_husk")
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
        new BPEntityComponents.SetEquipment({
            table: "loot_tables/entities/zombie_equipment.json"
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
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/zombie.json"
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidPortals: false,
            canBreakDoors: true,
            isAmphibious: true,
            canPassDoors: true
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:husk": "minecraft:husk"
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
            family: ["husk", "zombie", "undead", "monster", "mob"]
        }),
        new BPEntityComponents.SetVariant({
            value: 2
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
                componentGroups: ["minecraft:zombie_husk_adult", "minecraft:not_on_camel_husk"]
            }
        },
        "minecraft:as_baby_jockey": {
            add: {
                componentGroups: [
                    "minecraft:zombie_husk_baby",
                    "minecraft:zombie_husk_jockey",
                    "minecraft:not_on_camel_husk"
                ]
            }
        },
        "minecraft:as_baby": {
            add: {
                componentGroups: ["minecraft:zombie_husk_baby", "minecraft:not_on_camel_husk"]
            }
        },
        "minecraft:spawn_as_rider": {
            add: {
                componentGroups: [
                    "minecraft:zombie_husk_adult",
                    "minecraft:zombie_husk_rider",
                    "minecraft:on_camel_husk"
                ]
            },
            setProperty: {
                "minecraft:is_riding_camel_husk": true
            }
        },
        "minecraft:on_start_riding_camel_husk": {
            add: {
                componentGroups: ["minecraft:on_camel_husk"]
            },
            setProperty: {
                "minecraft:is_riding_camel_husk": true
            },
            remove: {
                componentGroups: ["minecraft:not_on_camel_husk"]
            }
        },
        "minecraft:on_stop_riding_camel_husk": {
            add: {
                componentGroups: ["minecraft:not_on_camel_husk"]
            },
            setProperty: {
                "minecraft:is_riding_camel_husk": false
            },
            remove: {
                componentGroups: ["minecraft:on_camel_husk"]
            }
        },
        "minecraft:start_transforming_into_zombie": {
            add: {
                componentGroups: ["minecraft:start_zombie_transformation"]
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
                componentGroups: ["minecraft:start_zombie_transformation"]
            }
        },
        "minecraft:convert_to_zombie": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "self", "not"),
                    add: {
                        componentGroups: ["minecraft:convert_to_zombie"]
                    },
                    remove: {
                        componentGroups: ["minecraft:start_zombie_transformation"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby"),
                    add: {
                        componentGroups: ["minecraft:convert_to_baby_zombie"]
                    },
                    remove: {
                        componentGroups: ["minecraft:start_zombie_transformation"]
                    }
                }
            ]
        }
    }
});
