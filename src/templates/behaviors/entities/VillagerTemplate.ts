import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { VillagerV2Template } from "./VillagerV2Template";

/**
 * Plantilla vanilla del Aldeano Legacy para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @deprecated Esto ya no se usa en versiones actuales. Usa {@link VillagerV2Template} en su lugar.
 * @author HaJuegos - 05-10-2026
 */
export const VillagerTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Villager,
    description: {
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "adult": [
            new BPEntityComponents.SetBehaviorMakeLove({
                priority: 6
            }),
            new BPEntityComponents.SetBehaviorReceiveLove({
                priority: 7
            })
        ],
        "become_zombie": [
            new BPEntityComponents.SetTransformation({
                into: "minecraft:zombie_villager"
            })
        ],
        "armorer": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.armor",
                table: "trading/armorer_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "blacksmith", "armorer", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "baby": [
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorPlay({
                priority: 8,
                speedMultiplier: 0.32
            }),
            new BPEntityComponents.SetBehaviorTakeFlower({
                filters: EntityFilters.allOf(EntityFilters.isDaytime()),
                priority: 7
            }),
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            })
        ],
        "become_villager_v2": [
            new BPEntityComponents.SetTransformation({
                into: "minecraft:villager_v2",
                keepLevel: true
            })
        ],
        "weaponsmith": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.weapon",
                table: "trading/weapon_smith_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "blacksmith", "weaponsmith", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "butcher": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.butcher",
                table: "trading/butcher_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "artisan", "butcher", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "behavior_peasant": [
            new BPEntityComponents.SetBehaviorHarvestFarmBlock({
                priority: 9,
                speedMultiplier: 0.5
            }),
            new BPEntityComponents.SetShareables({
                items: [
                    {
                        item: "minecraft:bread",
                        storedInInventory: true,
                        surplusAmount: 6,
                        wantAmount: 3
                    },
                    {
                        item: "minecraft:carrot",
                        storedInInventory: true,
                        surplusAmount: 4,
                        wantAmount: 60
                    },
                    {
                        item: "minecraft:potato",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 60
                    },
                    {
                        item: "minecraft:beetroot",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 60
                    },
                    {
                        item: "minecraft:wheat_seeds",
                        pickupOnly: true,
                        storedInInventory: true,
                        surplusAmount: 64,
                        wantAmount: 64
                    },
                    {
                        item: "minecraft:beetroot_seeds",
                        pickupOnly: true,
                        storedInInventory: true,
                        surplusAmount: 64,
                        wantAmount: 64
                    },
                    {
                        craftInto: "minecraft:bread",
                        wantAmount: 45,
                        item: "minecraft:wheat",
                        storedInInventory: true,
                        surplusAmount: 18
                    }
                ]
            })
        ],
        "behavior_non_peasant": [
            new BPEntityComponents.SetShareables({
                items: [
                    {
                        item: "minecraft:bread",
                        storedInInventory: true,
                        surplusAmount: 6,
                        wantAmount: 3
                    },
                    {
                        item: "minecraft:carrot",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 12
                    },
                    {
                        item: "minecraft:potato",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 12
                    },
                    {
                        item: "minecraft:beetroot",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 12
                    }
                ]
            })
        ],
        "become_witch": [
            new BPEntityComponents.SetTransformation({
                delay: 0.5,
                into: "minecraft:witch"
            })
        ],
        "cartographer": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.cartographer",
                table: "trading/cartographer_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "cartographer", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "cleric": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.cleric",
                table: "trading/cleric_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "priest", "cleric", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "farmer": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.farmer",
                table: "trading/farmer_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "peasant", "farmer", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "fisherman": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.fisherman",
                table: "trading/fisherman_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "peasant", "fisherman", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "fletcher": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.fletcher",
                table: "trading/fletcher_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "peasant", "fletcher", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "leatherworker": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.leather",
                table: "trading/leather_worker_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "artisan", "leatherworker", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "librarian": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.librarian",
                table: "trading/librarian_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "librarian", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:celebrate": [
            new BPEntityComponents.SetBehaviorCelebrateSurvive({
                duration: 30,
                fireworksInterval: {
                    rangeMax: 7,
                    rangeMin: 2
                },
                onCelebrationEndEvent: {
                    event: "minecraft:stop_celebrating",
                    target: "self"
                },
                priority: 5
            }),
            new BPEntityComponents.SetBehaviorMoveOutdoors({
                priority: 2,
                speedMultiplier: 0.8,
                timeoutCooldown: 8
            })
        ],
        "shepherd": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.shepherd",
                table: "trading/shepherd_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "peasant", "shepherd", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "toolsmith": [
            new BPEntityComponents.SetTradeTable({
                convertTradesEconomy: true,
                displayName: "entity.villager.tool",
                table: "trading/tool_smith_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "blacksmith", "toolsmith", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAnnotationOpenDoor(),
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('zombie', 'other'),
                        EntityFilters.isFamily('zombie_villager', 'other'),
                        EntityFilters.isFamily('illager', 'other'),
                        EntityFilters.isFamily('vex', 'other')
                    ),
                    maxDist: 8,
                    walkSpeedMultiplier: 0.6,
                    sprintSpeedMultiplier: 0.6
                }
            ],
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            priority: 12
        }),
        new BPEntityComponents.SetBehaviorLookAtTradingPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorMoveIndoors({
            priority: 4,
            speedMultiplier: 0.8
        }),
        new BPEntityComponents.SetBehaviorOpenDoor({
            closeDoorAfter: true,
            priority: 6
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 3,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            canPickupToHandOrEquipment: false,
            goalRadius: 2,
            priority: 9,
            maxDist: 3,
            speedMultiplier: 0.5
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 11,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBehaviorRestrictOpenDoor({
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorShareItems({
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("villager", "other")
                }
            ],
            goalRadius: 2,
            priority: 8,
            maxDist: 3,
            speedMultiplier: 0.5
        }),
        new BPEntityComponents.SetBehaviorTradeWithPlayer({
            filters: EntityFilters.allOf(
                EntityFilters.allOf(EntityFilters.inWater(false)),
                EntityFilters.anyOf(EntityFilters.onGround(), EntityFilters.isSleeping())
            ),
            priority: 1
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    dealsDamage: "no",
                    onDamage: {
                        event: "become_witch",
                        filters: EntityFilters.isFamily("lightning", "other")
                    }
                },
                {
                    onDamage: {
                        event: "become_zombie",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasDamage('fatal'),
                            EntityFilters.anyOf(
                                EntityFilters.isFamily('zombie', 'other'),
                                EntityFilters.isFamily('husk', 'other')
                            )
                        )
                    }
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
        new BPEntityComponents.SetInventory({
            inventorySize: 8,
            private: true
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetMovement({
            value: 0.5
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidWater: true,
            canOpenDoors: true,
            usingDoorAnnotation: true,
            canPassDoors: true,
            canPathOverWater: true,
            canWalk: true,
            isAmphibious: true
        }),
        new BPEntityComponents.SetPersistent(),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetTypeFamily({
            family: ["villager", "mob"]
        })
    ],
    events: {
        "become_witch": {
            add: {
                componentGroups: ["become_witch"]
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
                        componentGroups: ["farmer", "behavior_peasant"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("fisherman", "other"),
                    add: {
                        componentGroups: ["fisherman", "behavior_peasant"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("shepherd", "other"),
                    add: {
                        componentGroups: ["shepherd", "behavior_peasant"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("fletcher", "other"),
                    add: {
                        componentGroups: ["fletcher", "behavior_peasant"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("librarian", "other"),
                    add: {
                        componentGroups: ["librarian", "behavior_non_peasant"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("cartographer", "other"),
                    add: {
                        componentGroups: ["cartographer", "behavior_non_peasant"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("cleric", "other"),
                    add: {
                        componentGroups: ["cleric", "behavior_non_peasant"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("armorer", "other"),
                    add: {
                        componentGroups: ["armorer", "behavior_non_peasant"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("weaponsmith", "other"),
                    add: {
                        componentGroups: ["weaponsmith", "behavior_non_peasant"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("toolsmith", "other"),
                    add: {
                        componentGroups: ["toolsmith", "behavior_non_peasant"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("butcher", "other"),
                    add: {
                        componentGroups: ["butcher", "behavior_non_peasant"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("leatherworker", "other"),
                    add: {
                        componentGroups: ["leatherworker", "behavior_non_peasant"]
                    }
                }
            ]
        },
        "become_zombie": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 50,
                            add: {
                                componentGroups: ["become_zombie"]
                            }
                        },
                        {
                            weight: 50
                        }
                    ]
                },
                {
                    filters: EntityFilters.isDifficulty("hard"),
                    add: {
                        componentGroups: ["become_zombie"]
                    }
                }
            ]
        },
        "minecraft:ageable_grow_up": {
            sequence: [
                {
                    add: {
                        componentGroups: ["adult"]
                    },
                    remove: {
                        componentGroups: ["baby"]
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
                            weight: 5,
                            add: {
                                componentGroups: ["baby"]
                            }
                        },
                        {
                            weight: 95,
                            add: {
                                componentGroups: ["adult"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                    randomize: [
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["farmer", "behavior_peasant"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["fisherman", "behavior_peasant"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["shepherd", "behavior_peasant"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["fletcher", "behavior_peasant"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["librarian", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["cartographer", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["cleric", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["armorer", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["weaponsmith", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["toolsmith", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 10,
                            add: {
                                componentGroups: ["butcher", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 10,
                            add: {
                                componentGroups: ["leatherworker", "behavior_non_peasant"]
                            }
                        }
                    ]
                }
            ]
        },
        "minecraft:become_cleric": {
            add: {
                componentGroups: ["cleric", "adult", "behavior_non_peasant"]
            },
            remove: {
                componentGroups: ["baby"]
            }
        },
        "minecraft:entity_born": {
            sequence: [
                {
                    add: {
                        componentGroups: ["baby"]
                    }
                },
                {
                    randomize: [
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["farmer", "behavior_peasant"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["fisherman", "behavior_peasant"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["shepherd", "behavior_peasant"]
                            }
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["fletcher", "behavior_peasant"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["librarian", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["cartographer", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["cleric", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["armorer", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["weaponsmith", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 6,
                            add: {
                                componentGroups: ["toolsmith", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 10,
                            add: {
                                componentGroups: ["butcher", "behavior_non_peasant"]
                            }
                        },
                        {
                            weight: 10,
                            add: {
                                componentGroups: ["leatherworker", "behavior_non_peasant"]
                            }
                        }
                    ]
                }
            ]
        },
        "minecraft:spawn_cleric": {
            add: {
                componentGroups: ["cleric", "adult", "behavior_non_peasant"]
            },
            remove: {
                componentGroups: ["baby"]
            }
        },
        "minecraft:spawn_armorer": {
            randomize: [
                {
                    weight: 6,
                    add: {
                        componentGroups: ["armorer", "adult", "behavior_non_peasant"]
                    },
                    remove: {
                        componentGroups: ["baby"]
                    }
                },
                {
                    weight: 6,
                    add: {
                        componentGroups: ["weaponsmith", "adult", "behavior_non_peasant"]
                    },
                    remove: {
                        componentGroups: ["baby"]
                    }
                },
                {
                    weight: 6,
                    add: {
                        componentGroups: ["toolsmith", "adult", "behavior_non_peasant"]
                    },
                    remove: {
                        componentGroups: ["baby"]
                    }
                }
            ]
        },
        "minecraft:spawn_butcher": {
            randomize: [
                {
                    weight: 10,
                    add: {
                        componentGroups: ["butcher", "adult", "behavior_non_peasant"]
                    },
                    remove: {
                        componentGroups: ["baby"]
                    }
                },
                {
                    weight: 10,
                    add: {
                        componentGroups: ["leatherworker", "adult", "behavior_non_peasant"]
                    },
                    remove: {
                        componentGroups: ["baby"]
                    }
                }
            ]
        },
        "minecraft:spawn_farmer": {
            randomize: [
                {
                    weight: 5,
                    add: {
                        componentGroups: ["farmer", "adult", "behavior_peasant"]
                    },
                    remove: {
                        componentGroups: ["baby"]
                    }
                },
                {
                    weight: 5,
                    add: {
                        componentGroups: ["fisherman", "adult", "behavior_peasant"]
                    },
                    remove: {
                        componentGroups: ["baby"]
                    }
                },
                {
                    weight: 5,
                    add: {
                        componentGroups: ["shepherd", "adult", "behavior_peasant"]
                    },
                    remove: {
                        componentGroups: ["baby"]
                    }
                },
                {
                    weight: 5,
                    add: {
                        componentGroups: ["fletcher", "adult", "behavior_peasant"]
                    },
                    remove: {
                        componentGroups: ["baby"]
                    }
                }
            ]
        },
        "minecraft:spawn_librarian": {
            randomize: [
                {
                    weight: 20,
                    add: {
                        componentGroups: ["librarian", "adult", "behavior_non_peasant"]
                    },
                    remove: {
                        componentGroups: ["baby"]
                    }
                },
                {
                    weight: 20,
                    add: {
                        componentGroups: ["cartographer", "behavior_non_peasant"]
                    },
                    remove: {
                        componentGroups: ["baby"]
                    }
                }
            ]
        },
        "minecraft:start_celebrating": {
            add: {
                componentGroups: ["minecraft:celebrate"]
            }
        },
        "minecraft:stop_celebrating": {
            remove: {
                componentGroups: ["minecraft:celebrate"]
            }
        }
    }
});
