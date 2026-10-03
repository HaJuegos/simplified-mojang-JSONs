import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const SnifferTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Sniffer,
    formatVersion: FormatVersionEntities.V1_26_10,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "sniffer_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.45
            }),
            new BPEntityComponents.SetAgeable({
                duration: 2400,
                feedItemsToGrow: ["torchflower_seeds"],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            })
        ],
        "sniffer_adult": [
            new BPEntityComponents.SetBehaviorBreed({
                priority: 3,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: "query.last_hit_by_player ? Math.Random(1,3) : 0"
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                causesPregnancy: true,
                breedsWith: {
                    "minecraft:sniffer": {
                        event: "on_pregnant",
                        target: "self"
                    }
                },
                breedItems: ["torchflower_seeds"]
            })
        ],
        "feeling_happy": [
            new BPEntityComponents.SetBehaviorTimerFlagThree({
                priority: 5,
                cooldownRange: {
                    min: 0,
                    max: 0
                },
                durationRange: {
                    min: 2,
                    max: 5
                },
                onEnd: {
                    event: "on_feeling_happy_end",
                    target: "self"
                }
            })
        ],
        "stand_up": [
            new BPEntityComponents.SetBehaviorTimerFlagTwo({
                priority: 2,
                // TODO(migrate): clave no soportada "control_flags": ["move"]
                cooldownRange: {
                    min: 0,
                    max: 0
                },
                durationRange: {
                    min: 2,
                    max: 5
                },
                onEnd: {
                    event: "on_rising_end",
                    target: "self"
                }
            })
        ],
        "pushable": [
            new BPEntityComponents.SetPushableByEntity(),
            new BPEntityComponents.SetPushableByBlock()
        ],
        "sniffer_pregnant": [
            new BPEntityComponents.SetSpawnEntity({
                entities: {
                    minWaitTime: 0,
                    maxWaitTime: 0,
                    spawnSound: "plop",
                    spawnItem: "sniffer_egg",
                    spawnItemEvent: {
                        event: "on_egg_spawned",
                        target: "self"
                    },
                    singleUse: true
                }
            }),
            new BPEntityComponents.SetIsPregnant()
        ],
        "sniffer_search_and_dig": [
            new BPEntityComponents.SetBehaviorRandomSearchAndDig({
                priority: 5,
                speedMultiplier: 1.25,
                findValidPositionRetries: 5,
                targetBlocks: [
                    "minecraft:dirt",
                    "minecraft:coarse_dirt",
                    "minecraft:grass",
                    "minecraft:podzol",
                    "minecraft:dirt_with_roots",
                    "minecraft:moss_block",
                    "minecraft:pale_moss_block",
                    "minecraft:mud",
                    "minecraft:muddy_mangrove_roots"
                ],
                goalRadius: 2,
                searchRangeXz: 20,
                searchRangeY: 3,
                cooldownRange: {
                    min: 0,
                    max: 0
                },
                diggingDurationRange: {
                    min: 8,
                    max: 10
                },
                itemTable: "loot_tables/gameplay/entities/sniffer_seeds.json",
                spawnItemAfterSeconds: 6,
                spawnItemPosOffset: 2.25,
                onSearchingStart: {
                    event: "on_searching_start",
                    target: "self"
                },
                onFailDuringSearching: {
                    event: "on_fail_during_searching",
                    target: "self"
                },
                onDiggingStart: {
                    event: "on_digging_start",
                    target: "self"
                },
                onItemFound: {
                    event: "on_item_found",
                    target: "self"
                },
                onFailDuringDigging: {
                    event: "on_fail_during_digging",
                    target: "self"
                },
                onSuccess: {
                    event: "on_search_and_digging_success",
                    target: "self"
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:sniffer": "minecraft:sniffer"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 2
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 4,
            speedMultiplier: 1.25,
            items: ["torchflower_seeds"]
        }),
        new BPEntityComponents.SetBehaviorTimerFlagOne({
            priority: 6,
            // TODO(migrate): clave no soportada "control_flags": ["move", "look"]
            cooldownRange: {
                min: 400,
                max: 500
            },
            durationRange: {
                min: 2,
                max: 2
            },
            onEnd: {
                event: "on_scenting_success",
                target: "self"
            }
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 7,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 8,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 1.9,
            height: 1.75
        }),
        new BPEntityComponents.SetHealable({
            items: [
                {
                    item: "torchflower_seeds",
                    healAmount: 2
                }
            ]
        }),
        new BPEntityComponents.SetLeashable({
            presets: [
                {
                    filter: EntityFilters.isFamily("happy_ghast", "other"),
                    springType: "quad_dampened"
                }
            ]
        }),
        new BPEntityComponents.SetBalloonable({}),
        new BPEntityComponents.SetTypeFamily({
            family: ["sniffer", "mob"]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetHealth({
            value: 14
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
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetFollowRange({
            value: 64
        }),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetMovement({
            value: 0.09
        }),
        new BPEntityComponents.SetPersistent(),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetConditionalBandwidthOptimization()
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 95,
                    trigger: "minecraft:spawn_adult"
                },
                {
                    weight: 5,
                    trigger: "minecraft:entity_born"
                }
            ]
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: ["sniffer_adult", "pushable"]
            }
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["sniffer_baby", "pushable"]
            }
        },
        "on_pregnant": {
            add: {
                componentGroups: ["sniffer_pregnant"]
            }
        },
        "on_egg_spawned": {
            remove: {
                componentGroups: ["sniffer_pregnant"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["sniffer_baby"]
            },
            add: {
                componentGroups: ["sniffer_adult"]
            }
        },
        "on_scenting_success": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "self", "!="),
                    add: {
                        componentGroups: ["sniffer_search_and_dig"]
                    }
                }
            ]
        },
        "on_digging_start": {
            remove: {
                componentGroups: ["pushable"]
            }
        },
        "on_item_found": {
            add: {
                componentGroups: ["feeling_happy"]
            }
        },
        "on_feeling_happy_end": {
            remove: {
                componentGroups: ["feeling_happy"]
            }
        },
        "on_fail_during_searching": {
            remove: {
                componentGroups: ["sniffer_search_and_dig"]
            }
        },
        "on_fail_during_digging": {
            remove: {
                componentGroups: ["sniffer_search_and_dig"]
            },
            add: {
                componentGroups: ["pushable", "stand_up"]
            }
        },
        "on_search_and_digging_success": {
            remove: {
                componentGroups: ["sniffer_search_and_dig"]
            },
            add: {
                componentGroups: ["pushable", "stand_up"]
            }
        },
        "on_rising_end": {
            remove: {
                componentGroups: ["stand_up"]
            }
        }
    }
});
