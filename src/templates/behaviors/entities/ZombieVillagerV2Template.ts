import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Zombie Villager Actual para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const ZombieVillagerV2Template = createBPEntityTemplate({
    id: MinecraftEntityTypes.ZombieVillagerV2,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: false,
        isSpawneable: true
    },
    componentsGroups: {
        "desert_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 1
            })
        ],
        "adult": [
            new BPEntityComponents.SetBehaviorMountPathing({
                priority: 5,
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
                        position: [0, 1.175, -0.35]
                    }
                ]
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.9,
                width: 0.6
            })
        ],
        "cartographer": [
            new BPEntityComponents.SetTypeFamily({
                family: ["cartographer", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 6
            })
        ],
        "can_break_doors": [
            new BPEntityComponents.SetAnnotationBreakDoor()
        ],
        "armorer": [
            new BPEntityComponents.SetTypeFamily({
                family: ["armorer", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 8
            })
        ],
        "snow_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 4
            })
        ],
        "baby": [
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
                family: ["baby_undead", "zombie", "zombie_villager", "undead", "monster", "mob"]
            })
        ],
        "weaponsmith": [
            new BPEntityComponents.SetTypeFamily({
                family: ["weaponsmith", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 9
            })
        ],
        "butcher": [
            new BPEntityComponents.SetTypeFamily({
                family: ["butcher", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 11
            })
        ],
        "cleric": [
            new BPEntityComponents.SetTypeFamily({
                family: ["cleric", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 7
            })
        ],
        "farmer": [
            new BPEntityComponents.SetTypeFamily({
                family: ["farmer", "zombie", "zombie_villager", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "villager_skin_2": [
            new BPEntityComponents.SetSkinId({
                value: 2
            })
        ],
        "fisherman": [
            new BPEntityComponents.SetTypeFamily({
                family: ["fisherman", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "fletcher": [
            new BPEntityComponents.SetTypeFamily({
                family: ["fletcher", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 4
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
        "swamp_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 5
            })
        ],
        "jockey": [
            new BPEntityComponents.SetBehaviorFindMount({
                priority: 1,
                withinRadius: 16
            })
        ],
        "to_villager": [
            new BPEntityComponents.SetIsShaking(),
            new BPEntityComponents.SetSpellEffects({
                addEffects: [
                    {
                        duration: 300,
                        effect: "strength"
                    },
                    {
                        duration: 300,
                        effect: "heal"
                    }
                ],
                removeEffects: "weakness"
            }),
            new BPEntityComponents.SetTransformation({
                beginTransformSound: "remedy",
                keepLevel: true,
                delay: {
                    blockAssistChance: 0.01,
                    blockRadius: 4,
                    blockChance: 0.3,
                    rangeMax: 200,
                    blockTypes: ["minecraft:bed", "minecraft:iron_bars"],
                    rangeMin: 80,
                    value: 100
                },
                dropEquipment: true,
                into: "minecraft:villager_v2",
                transformationSound: "unfect"
            })
        ],
        "librarian": [
            new BPEntityComponents.SetTypeFamily({
                family: ["librarian", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 5
            })
        ],
        "jungle_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 2
            })
        ],
        "leatherworker": [
            new BPEntityComponents.SetTypeFamily({
                family: ["leatherworker", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 12
            })
        ],
        "mason": [
            new BPEntityComponents.SetTypeFamily({
                family: ["stone_mason", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 13
            })
        ],
        "nitwit": [
            new BPEntityComponents.SetTypeFamily({
                family: ["nitwit", "zombie", "zombie_villager", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 14
            })
        ],
        "savanna_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 3
            })
        ],
        "unskilled": [
            new BPEntityComponents.SetTypeFamily({
                family: ["unskilled", "zombie", "zombie_villager", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "shepherd": [
            new BPEntityComponents.SetTypeFamily({
                family: ["shepherd", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "taiga_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 6
            })
        ],
        "toolsmith": [
            new BPEntityComponents.SetTypeFamily({
                family: ["toolsmith", "zombie_villager", "zombie", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 10
            })
        ],
        "villager_skin_0": [
            new BPEntityComponents.SetSkinId({
                value: 0
            })
        ],
        "villager_skin_1": [
            new BPEntityComponents.SetSkinId({
                value: 1
            })
        ],
        "villager_skin_3": [
            new BPEntityComponents.SetSkinId({
                value: 3
            })
        ],
        "villager_skin_4": [
            new BPEntityComponents.SetSkinId({
                value: 4
            })
        ],
        "villager_skin_5": [
            new BPEntityComponents.SetSkinId({
                value: 5
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
            lookDistance: 6,
            priority: 10
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            canSpreadOnFire: true,
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            reselectTargets: true,
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily("player", "other"),
                        EntityFilters.isFamily("snowgolem", "other"),
                        EntityFilters.isFamily("irongolem", "other"),
                        EntityFilters.isFamily("villager", "other"),
                        EntityFilters.isFamily("wandering_trader", "other")
                    ),
                    maxDist: 35
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("baby_turtle", "other"),
                        EntityFilters.inWater(true, "other", "!=")
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
            priority: 6
        }),
        new BPEntityComponents.SetBreathable({
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
            canPassDoors: true
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:zombie_villager_v2": "minecraft:zombie_villager_v2"
            }
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
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
        new BPEntityComponents.SetSpawnEggInteraction()
    ],
    events: {
        "from_village": {
            sequence: [
                {
                    trigger: "minecraft:entity_spawned"
                },
                {
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
                            }
                        },
                        {
                            weight: 425,
                            add: {
                                componentGroups: ["baby"]
                            }
                        },
                        {
                            weight: 75,
                            add: {
                                componentGroups: ["baby", "jockey"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                        EntityFilters.hasComponent("minecraft:is_baby", "self", "!=")
                    ),
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["unskilled"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["nitwit"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["farmer"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["fisherman"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["shepherd"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["fletcher"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["librarian"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["cartographer"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["cleric"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["armorer"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["weaponsmith"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["toolsmith"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["butcher"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["leatherworker"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["mason"]
                            }
                        }
                    ]
                },
                {
                    trigger: "minecraft:add_biome_and_skin"
                },
                {
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
        "minecraft:add_biome_and_skin": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_0"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_1"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_2"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_3"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_4"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_5"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("desert"),
                        EntityFilters.hasBiomeTag("mesa")
                    ),
                    add: {
                        componentGroups: ["desert_villager"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("jungle"),
                    add: {
                        componentGroups: ["jungle_villager"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("savanna"),
                    add: {
                        componentGroups: ["savanna_villager"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.allOf(
                            EntityFilters.hasBiomeTag("cold"),
                            EntityFilters.hasBiomeTag("ocean", "self", "!=")
                        ),
                        EntityFilters.hasBiomeTag("frozen")
                    ),
                    add: {
                        componentGroups: ["snow_villager"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("swamp"),
                        EntityFilters.hasBiomeTag("mangrove_swamp")
                    ),
                    add: {
                        componentGroups: ["swamp_villager"]
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            EntityFilters.hasBiomeTag("taiga"),
                            EntityFilters.hasBiomeTag("extreme_hills")
                        ),
                        EntityFilters.hasBiomeTag("cold", "self", "!=")
                    ),
                    add: {
                        componentGroups: ["taiga_villager"]
                    }
                }
            ]
        },
        "minecraft:as_baby": {
            sequence: [
                {
                    add: {
                        componentGroups: ["baby"]
                    }
                },
                {
                    trigger: "minecraft:randomize_job"
                },
                {
                    trigger: "minecraft:add_biome_and_skin"
                }
            ]
        },
        "minecraft:entity_born": {
            trigger: "minecraft:as_baby"
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
                    filters: EntityFilters.allOf(
                        EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                        EntityFilters.hasComponent("minecraft:is_baby", "other", "!=")
                    ),
                    sequence: [
                        {
                            filters: EntityFilters.hasComponent("minecraft:is_baby", "other", "!="),
                            add: {
                                componentGroups: ["adult"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("unskilled", "other"),
                            add: {
                                componentGroups: ["unskilled"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("nitwit", "other"),
                            add: {
                                componentGroups: ["nitwit"]
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
                        },
                        {
                            filters: EntityFilters.isFamily("stone_mason", "other"),
                            add: {
                                componentGroups: ["mason"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:mark_variant", "self", "!="),
                    sequence: [
                        {
                            filters: EntityFilters.isMarkVariant(1, "other"),
                            add: {
                                componentGroups: ["desert_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.isMarkVariant(2, "other"),
                            add: {
                                componentGroups: ["jungle_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.isMarkVariant(3, "other"),
                            add: {
                                componentGroups: ["savanna_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.isMarkVariant(4, "other"),
                            add: {
                                componentGroups: ["snow_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.isMarkVariant(5, "other"),
                            add: {
                                componentGroups: ["swamp_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.isMarkVariant(6, "other"),
                            add: {
                                componentGroups: ["taiga_villager"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:skin_id", "self", "!="),
                    sequence: [
                        {
                            filters: EntityFilters.isSkinId(0, "other"),
                            add: {
                                componentGroups: ["villager_skin_0"]
                            }
                        },
                        {
                            filters: EntityFilters.isSkinId(1, "other"),
                            add: {
                                componentGroups: ["villager_skin_1"]
                            }
                        },
                        {
                            filters: EntityFilters.isSkinId(2, "other"),
                            add: {
                                componentGroups: ["villager_skin_2"]
                            }
                        },
                        {
                            filters: EntityFilters.isSkinId(3, "other"),
                            add: {
                                componentGroups: ["villager_skin_3"]
                            }
                        },
                        {
                            filters: EntityFilters.isSkinId(4, "other"),
                            add: {
                                componentGroups: ["villager_skin_4"]
                            }
                        },
                        {
                            filters: EntityFilters.isSkinId(5, "other"),
                            add: {
                                componentGroups: ["villager_skin_5"]
                            }
                        }
                    ]
                }
            ]
        },
        "minecraft:spawn_skilled_adult": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                    add: {
                        componentGroups: ["adult"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["farmer"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["fisherman"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["shepherd"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["fletcher"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["librarian"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["cartographer"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["cleric"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["armorer"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["weaponsmith"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["toolsmith"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["butcher"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["leatherworker"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["mason"]
                            }
                        }
                    ]
                },
                {
                    trigger: "minecraft:add_biome_and_skin"
                }
            ]
        },
        "villager_converted": {
            add: {
                componentGroups: ["to_villager"]
            }
        }
    }
});
