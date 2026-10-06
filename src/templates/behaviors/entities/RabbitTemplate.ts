import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Conejo para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const RabbitTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Rabbit,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.4
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 0.6,
                height: 1
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: ["golden_carrot", "carrot", "dandelion"],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 6,
                speedMultiplier: 1.1
            })
        ],
        "adult": [
            new BPEntityComponents.SetScale({
                value: 0.6
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 0.81666666,
                height: 1
            }),
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/rabbit.json"
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 2,
                speedMultiplier: 0.75
            }),
            new BPEntityComponents.SetBreedable({
                breedItems: ["golden_carrot", "carrot", "dandelion"],
                breedsWith: {
                    "minecraft:rabbit": {}
                },
                requireTame: false
            })
        ],
        "coat_brown": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "coat_white": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "coat_black": [
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "coat_splotched": [
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "coat_desert": [
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "coat_salt": [
            new BPEntityComponents.SetVariant({
                value: 5
            })
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetCanStandOnPowderSnow(),
        new BPEntityComponents.SetTypeFamily({
            family: ["rabbit", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:rabbit": "minecraft:rabbit"
            },
            mutationFactor: {
                variant: 0.2
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetHealth({
            value: 3,
            max: 3
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
            avoidWater: true
        }),
        new BPEntityComponents.SetMovementSkip(),
        new BPEntityComponents.SetJumpDynamic({
            regularSkipData: {
                distanceScale: 0.8,
                height: 0.25,
                jumpDelay: 15,
                animationDuration: 18
            },
            fastSkipData: {
                distanceScale: 1.75,
                height: 0.15,
                jumpDelay: 1,
                animationDuration: 15
            }
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetBalloonable({
            mass: 0.4
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 2.2
        }),
        new BPEntityComponents.SetBehaviorAvoidMobType({
            priority: 4,
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("player", "other"),
                    maxDist: 8,
                    walkSpeedMultiplier: 1.5,
                    sprintSpeedMultiplier: 1.8
                },
                {
                    filters: EntityFilters.isFamily("wolf", "other"),
                    maxDist: 4,
                    walkSpeedMultiplier: 1.5,
                    sprintSpeedMultiplier: 1.8
                },
                {
                    filters: EntityFilters.isFamily("monster", "other"),
                    maxDist: 4,
                    walkSpeedMultiplier: 1.5,
                    sprintSpeedMultiplier: 1.5
                }
            ]
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 3,
            speedMultiplier: 1,
            items: ["golden_carrot", "carrot", "dandelion"]
        }),
        new BPEntityComponents.SetBehaviorRaidGarden({
            priority: 5,
            blocks: ["minecraft:carrots"],
            searchRange: 16,
            goalRadius: 1,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 0.6,
            xzDist: 2,
            yDist: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 11
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetBlockClimber()
    ],
    events: {
        "in_desert": {
            add: {
                componentGroups: ["coat_desert"]
            }
        },
        "in_snow": {
            randomize: [
                {
                    weight: 80,
                    add: {
                        componentGroups: ["coat_white"]
                    }
                },
                {
                    weight: 20,
                    add: {
                        componentGroups: ["coat_splotched"]
                    }
                }
            ]
        },
        "minecraft:entity_spawned": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 3,
                            add: {
                                componentGroups: ["adult"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["baby"]
                            }
                        }
                    ]
                },
                {
                    randomize: [
                        {
                            weight: 50,
                            add: {
                                componentGroups: ["coat_brown"]
                            }
                        },
                        {
                            weight: 40,
                            add: {
                                componentGroups: ["coat_black"]
                            }
                        },
                        {
                            weight: 10,
                            add: {
                                componentGroups: ["coat_salt"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.isBiome("desert"),
                    add: {
                        componentGroups: ["coat_desert"]
                    }
                },
                {
                    randomize: [
                        {
                            weight: 80,
                            add: {
                                componentGroups: ["coat_white"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["coat_splotched"]
                            }
                        }
                    ]
                }
            ]
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
                            weight: 50,
                            add: {
                                componentGroups: ["coat_brown"]
                            }
                        },
                        {
                            weight: 40,
                            add: {
                                componentGroups: ["coat_black"]
                            }
                        },
                        {
                            weight: 10,
                            add: {
                                componentGroups: ["coat_salt"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.isBiome("desert"),
                    add: {
                        componentGroups: ["coat_desert"]
                    }
                },
                {
                    randomize: [
                        {
                            weight: 80,
                            add: {
                                componentGroups: ["coat_white"]
                            }
                        },
                        {
                            weight: 20,
                            add: {
                                componentGroups: ["coat_splotched"]
                            }
                        }
                    ]
                }
            ]
        },
        "grow_up": {
            remove: {
                componentGroups: ["baby"]
            },
            add: {
                componentGroups: ["adult"]
            }
        }
    }
});
