import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const SheepTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Sheep,
    formatVersion: FormatVersionEntities.V1_26_20,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:loot_sheared": [
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/sheep_sheared.json"
            })
        ],
        "minecraft:loot_wooly": [
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/sheep.json"
            })
        ],
        "minecraft:rideable_sheared": [
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 0.9, 0]
                    }
                ]
            })
        ],
        "minecraft:rideable_wooly": [
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 0.975, 0]
                    }
                ]
            })
        ],
        "minecraft:sheep_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: "wheat",
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 6,
                speedMultiplier: 1.1
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 0.7, -0.3]
                    }
                ]
            })
        ],
        "minecraft:sheep_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: "query.last_hit_by_player ? Math.Random(1,3) : 0"
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 3,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                breedsWith: {
                    "minecraft:sheep": {}
                },
                breedItems: ["wheat"]
            })
        ],
        "minecraft:sheep_dyeable": [
            new BPEntityComponents.SetIsDyeable({
                interactText: "action.interact.dye"
            })
        ],
        "minecraft:sheep_sheared": [
            new BPEntityComponents.SetIsSheared()
        ],
        "minecraft:sheep_white": [
            new BPEntityComponents.SetColor({
                value: 0
            })
        ],
        "minecraft:sheep_brown": [
            new BPEntityComponents.SetColor({
                value: 12
            })
        ],
        "minecraft:sheep_black": [
            new BPEntityComponents.SetColor({
                value: 15
            })
        ],
        "minecraft:sheep_gray": [
            new BPEntityComponents.SetColor({
                value: 7
            })
        ],
        "minecraft:sheep_light_gray": [
            new BPEntityComponents.SetColor({
                value: 8
            })
        ],
        "minecraft:sheep_pink": [
            new BPEntityComponents.SetColor({
                value: 6
            })
        ],
        "minecraft:sheep_red": [
            new BPEntityComponents.SetColor({
                value: 14
            })
        ],
        "minecraft:sheep_blue": [
            new BPEntityComponents.SetColor({
                value: 11
            })
        ],
        "minecraft:sheep_light_blue": [
            new BPEntityComponents.SetColor({
                value: 3
            })
        ],
        "minecraft:sheep_cyan": [
            new BPEntityComponents.SetColor({
                value: 9
            })
        ],
        "minecraft:sheep_orange": [
            new BPEntityComponents.SetColor({
                value: 1
            })
        ],
        "minecraft:sheep_yellow": [
            new BPEntityComponents.SetColor({
                value: 4
            })
        ]
    },
    components: [
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:sheep": "minecraft:sheep"
            },
            combineParentColors: true
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetTypeFamily({
            family: ["sheep", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.9,
            height: 1.3
        }),
        new BPEntityComponents.SetNameable(),
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
            value: 0.25
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetInteract({
            interactions: [
                {
                    cooldown: 2.5,
                    useItem: false,
                    swing: true,
                    hurtItem: 1,
                    spawnItems: {
                        table: "loot_tables/entities/sheep_shear.json"
                    },
                    playSounds: "shear",
                    interactText: "action.interact.shear",
                    vibration: "shear",
                    onInteract: {
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("shears", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasComponent("minecraft:is_baby", "self", "!="),
                            EntityFilters.hasComponent("minecraft:is_dyeable")
                        ),
                        event: "minecraft:on_sheared",
                        target: "self"
                    }
                }
            ]
        }),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetBalloonable({
            mass: 0.75
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 1.25
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 2,
            speedMultiplier: 1.5,
            targetDist: 0,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 4,
            speedMultiplier: 1.25,
            items: ["wheat"]
        }),
        new BPEntityComponents.SetBehaviorFollowParent({
            priority: 5,
            speedMultiplier: 1.1
        }),
        new BPEntityComponents.SetBehaviorEatBlock({
            priority: 6,
            successChance: "query.is_baby ? 0.02 : 0.001",
            timeUntilEat: 1.8,
            eatAndReplaceBlockPairs: [
                {
                    eatBlock: "grass",
                    replaceBlock: "dirt"
                },
                {
                    eatBlock: "tallgrass",
                    replaceBlock: "air"
                },
                {
                    eatBlock: "short_dry_grass",
                    replaceBlock: "air"
                },
                {
                    eatBlock: "tall_dry_grass",
                    replaceBlock: "air"
                }
            ],
            onEat: {
                event: "minecraft:on_eat_block",
                target: "self"
            }
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 7,
            speedMultiplier: 0.8
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 8,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization()
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
                            remove: {},
                            trigger: "spawn_adult"
                        },
                        {
                            weight: 5,
                            remove: {},
                            trigger: "spawn_baby"
                        }
                    ]
                },
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    firstValid: [
                        {
                            filters: EntityFilters.hasBiomeTag("spawns_cold_variant_farm_animals"),
                            trigger: "minecraft:cold_color"
                        },
                        {
                            filters: EntityFilters.hasBiomeTag("spawns_warm_variant_farm_animals"),
                            trigger: "minecraft:warm_color"
                        },
                        {
                            trigger: "minecraft:temperate_color"
                        }
                    ]
                }
            ]
        },
        "spawn_adult": {
            add: {
                componentGroups: [
                    "minecraft:sheep_adult",
                    "minecraft:sheep_dyeable",
                    "minecraft:rideable_wooly",
                    "minecraft:loot_wooly"
                ]
            }
        },
        "spawn_baby": {
            add: {
                componentGroups: ["minecraft:sheep_baby", "minecraft:sheep_dyeable"]
            }
        },
        "minecraft:entity_born": {
            remove: {},
            add: {
                componentGroups: ["minecraft:sheep_baby", "minecraft:sheep_dyeable"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:sheep_baby"]
            },
            add: {
                componentGroups: ["minecraft:sheep_adult", "minecraft:rideable_wooly", "minecraft:loot_wooly"]
            }
        },
        "minecraft:on_sheared": {
            remove: {
                componentGroups: ["minecraft:sheep_dyeable", "minecraft:loot_wooly"]
            },
            add: {
                componentGroups: [
                    "minecraft:sheep_sheared",
                    "minecraft:rideable_sheared",
                    "minecraft:loot_sheared"
                ]
            }
        },
        "minecraft:on_eat_block": {
            sequence: [
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    remove: {
                        componentGroups: ["minecraft:sheep_sheared"]
                    },
                    add: {
                        componentGroups: ["minecraft:sheep_dyeable"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "self", "!="),
                    add: {
                        componentGroups: ["minecraft:rideable_wooly", "minecraft:loot_wooly"]
                    },
                    remove: {
                        componentGroups: ["minecraft:loot_sheared"]
                    }
                }
            ]
        },
        "wololo": {
            add: {
                componentGroups: ["minecraft:sheep_red"]
            }
        },
        "minecraft:temperate_color": {
            randomize: [
                {
                    weight: 81836,
                    add: {
                        componentGroups: ["minecraft:sheep_white"]
                    }
                },
                {
                    weight: 5000,
                    add: {
                        componentGroups: ["minecraft:sheep_black"]
                    }
                },
                {
                    weight: 5000,
                    add: {
                        componentGroups: ["minecraft:sheep_light_gray"]
                    }
                },
                {
                    weight: 5000,
                    add: {
                        componentGroups: ["minecraft:sheep_gray"]
                    }
                },
                {
                    weight: 3000,
                    add: {
                        componentGroups: ["minecraft:sheep_brown"]
                    }
                },
                {
                    weight: 164,
                    add: {
                        componentGroups: ["minecraft:sheep_pink"]
                    }
                }
            ]
        },
        "minecraft:cold_color": {
            randomize: [
                {
                    weight: 81836,
                    add: {
                        componentGroups: ["minecraft:sheep_black"]
                    }
                },
                {
                    weight: 5000,
                    add: {
                        componentGroups: ["minecraft:sheep_light_gray"]
                    }
                },
                {
                    weight: 5000,
                    add: {
                        componentGroups: ["minecraft:sheep_gray"]
                    }
                },
                {
                    weight: 5000,
                    add: {
                        componentGroups: ["minecraft:sheep_white"]
                    }
                },
                {
                    weight: 3000,
                    add: {
                        componentGroups: ["minecraft:sheep_brown"]
                    }
                },
                {
                    weight: 164,
                    add: {
                        componentGroups: ["minecraft:sheep_pink"]
                    }
                }
            ]
        },
        "minecraft:warm_color": {
            randomize: [
                {
                    weight: 81836,
                    add: {
                        componentGroups: ["minecraft:sheep_brown"]
                    }
                },
                {
                    weight: 5000,
                    add: {
                        componentGroups: ["minecraft:sheep_gray"]
                    }
                },
                {
                    weight: 5000,
                    add: {
                        componentGroups: ["minecraft:sheep_light_gray"]
                    }
                },
                {
                    weight: 5000,
                    add: {
                        componentGroups: ["minecraft:sheep_white"]
                    }
                },
                {
                    weight: 3000,
                    add: {
                        componentGroups: ["minecraft:sheep_black"]
                    }
                },
                {
                    weight: 164,
                    add: {
                        componentGroups: ["minecraft:sheep_pink"]
                    }
                }
            ]
        }
    }
});
