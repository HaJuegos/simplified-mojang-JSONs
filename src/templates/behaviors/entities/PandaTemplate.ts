import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Panda para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const PandaTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Panda,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:panda_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.4
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: "bamboo",
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorRoll({
                priority: 12,
                probability: 0.0016
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 13,
                speedMultiplier: 1.1
            }),
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:on_scared",
                target: "self"
            }),
            new BPEntityComponents.SetBehaviorSneeze({
                priority: 7,
                probability: 0.0001666,
                cooldownTime: 1,
                withinRadius: 10,
                entityTypes: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.hasComponent("minecraft:is_baby", "other", "!="),
                            EntityFilters.isFamily("panda", "other"),
                            EntityFilters.inWater(true, "other", "!="),
                            EntityFilters.onGround(true, "self", "==")
                        ),
                        maxDist: 10
                    }
                ],
                dropItemChance: 0.001,
                lootTable: "loot_tables/entities/panda_sneeze.json",
                prepareSound: "presneeze",
                prepareTime: 1,
                sound: "sneeze"
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 0.75, -0.2]
                    }
                ]
            })
        ],
        "minecraft:panda_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/panda.json"
            }),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 3,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                environmentRequirements: {
                    blocks: "bamboo",
                    count: 8,
                    radius: 5
                },
                breedItems: ["bamboo"],
                breedsWith: {
                    "minecraft:panda": {}
                }
            }),
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:become_angry",
                target: "self"
            }),
            new BPEntityComponents.SetOnTargetEscape({
                event: "minecraft:on_calm",
                target: "self"
            }),
            new BPEntityComponents.SetAttack({
                damage: 2
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                priority: 2,
                attackOnce: true,
                trackTarget: true
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 1.025, 0]
                    }
                ]
            })
        ],
        "minecraft:panda_lazy": [
            new BPEntityComponents.SetVariant({
                value: 1
            }),
            new BPEntityComponents.SetBehaviorLayDown({
                priority: 5,
                interval: 400,
                randomStopInterval: 2000
            }),
            new BPEntityComponents.SetBehaviorRandomSitting({
                priority: 6,
                startChance: 0.02,
                stopChance: 0.2,
                cooldown: 25,
                minSitTime: 15
            }),
            new BPEntityComponents.SetBehaviorSnacking({
                priority: 3,
                snackingCooldown: 17.5,
                snackingCooldownMin: 10,
                snackingStopChance: 0.0011,
                items: [
                    {
                        item: "minecraft:bamboo"
                    },
                    {
                        item: "minecraft:cake"
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorPanic({
                priority: 1,
                speedMultiplier: 2.5
            }),
            new BPEntityComponents.SetMovement({
                value: 0.07
            })
        ],
        "minecraft:panda_worried": [
            new BPEntityComponents.SetVariant({
                value: 2
            }),
            new BPEntityComponents.SetBehaviorScared({
                priority: 1
            }),
            new BPEntityComponents.SetBehaviorAvoidMobType({
                priority: 5,
                maxDist: 16,
                maxFlee: 20,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("panda", "other", "!="),
                        maxDist: 16,
                        sprintSpeedMultiplier: 1.5
                    }
                ]
            })
        ],
        "minecraft:panda_playful": [
            new BPEntityComponents.SetVariant({
                value: 3
            }),
            new BPEntityComponents.SetBehaviorRoll({
                priority: 12,
                probability: 0.013
            })
        ],
        "minecraft:panda_brown": [
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "minecraft:panda_weak": [
            new BPEntityComponents.SetVariant({
                value: 5
            }),
            new BPEntityComponents.SetHealth({
                value: 10,
                max: 10
            })
        ],
        "minecraft:panda_sneezing": [
            new BPEntityComponents.SetBehaviorSneeze({
                priority: 7,
                probability: 0.002,
                cooldownTime: 1,
                withinRadius: 10,
                entityTypes: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.hasComponent("minecraft:is_baby", "other", "!="),
                            EntityFilters.isFamily("panda", "other"),
                            EntityFilters.inWater(true, "other", "!="),
                            EntityFilters.onGround(true, "self", "==")
                        ),
                        maxDist: 10
                    }
                ],
                dropItemChance: 0.001,
                lootTable: "loot_tables/entities/panda_sneeze.json",
                prepareSound: "presneeze",
                prepareTime: 1,
                sound: "sneeze"
            })
        ],
        "minecraft:panda_aggressive": [
            new BPEntityComponents.SetTypeFamily({
                family: ["panda", "panda_aggressive", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 6
            }),
            new BPEntityComponents.SetAttack({
                damage: 6
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                priority: 2,
                trackTarget: true
            }),
            new BPEntityComponents.SetOnFriendlyAnger({
                event: "minecraft:on_anger",
                target: "self"
            }),
            new BPEntityComponents.SetBehaviorPanic({
                priority: 1,
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
            })
        ],
        "minecraft:panda_angry": [
            new BPEntityComponents.SetAngry({
                duration: 500,
                broadcastAnger: true,
                broadcastRange: 41,
                broadcastFilters: EntityFilters.isFamily("panda_aggressive", "self", "=="),
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetOnTargetAcquired()
        ],
        "minecraft:baby_scared": [
            new BPEntityComponents.SetAngry({
                duration: 1,
                broadcastAnger: true,
                broadcastRange: 41,
                broadcastFilters: EntityFilters.isFamily("panda_aggressive", "self", "=="),
                calmEvent: {
                    event: "minecraft:baby_on_calm",
                    target: "self"
                }
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
        new BPEntityComponents.SetOffspring({
            blendAttributes: false,
            offspringPairs: {
                "minecraft:panda": "minecraft:panda"
            },
            mutationFactor: {
                variant: 1
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetTypeFamily({
            family: ["panda"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetNavigationWalk({
            canFloat: true,
            avoidWater: true,
            avoidDamageBlocks: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetScale({
            value: 1
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetGiveable({
            triggers: {
                cooldown: 3,
                items: ["bamboo", "cake"],
                onGive: {
                    event: "minecraft:on_calm",
                    target: "self"
                }
            }
        }),
        new BPEntityComponents.SetInventory({
            inventorySize: 1,
            private: true
        }),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            width: 1.3,
            height: 1.25
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetHealth({
            value: 20,
            max: 20
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
            value: 0.15
        }),
        new BPEntityComponents.SetWaterMovement({
            dragFactor: 0.98
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorRandomSitting({
            priority: 5,
            startChance: 0.01,
            stopChance: 0.3,
            cooldown: 30,
            minSitTime: 10
        }),
        new BPEntityComponents.SetBehaviorSnacking({
            priority: 2,
            snackingCooldown: 22.5,
            snackingCooldownMin: 20,
            snackingStopChance: 0.001334,
            items: [
                {
                    item: "minecraft:bamboo"
                },
                {
                    item: "minecraft:cake"
                }
            ]
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 5,
            speedMultiplier: 1.5,
            targetDist: 0,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorBreed({
            priority: 3,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 4,
            speedMultiplier: 1.25,
            items: ["bamboo"]
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 14,
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
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 1.25
        }),
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetVariant({
            value: 0
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetGenetics({
            mutationRate: 0.03125,
            genes: [
                {
                    name: "panda_variant",
                    alleleRange: {
                        rangeMin: 0,
                        rangeMax: 15
                    },
                    geneticVariants: [
                        {
                            mainAllele: 0,
                            birthEvent: {
                                event: "minecraft:panda_lazy",
                                target: "self"
                            }
                        },
                        {
                            mainAllele: 1,
                            birthEvent: {
                                event: "minecraft:panda_worried",
                                target: "self"
                            }
                        },
                        {
                            mainAllele: 2,
                            birthEvent: {
                                event: "minecraft:panda_playful",
                                target: "self"
                            }
                        },
                        {
                            mainAllele: 3,
                            birthEvent: {
                                event: "minecraft:panda_aggressive",
                                target: "self"
                            }
                        },
                        {
                            bothAllele: {
                                rangeMin: 4,
                                rangeMax: 7
                            },
                            birthEvent: {
                                event: "minecraft:panda_weak",
                                target: "self"
                            }
                        },
                        {
                            bothAllele: {
                                rangeMin: 8,
                                rangeMax: 9
                            },
                            birthEvent: {
                                event: "minecraft:panda_brown",
                                target: "self"
                            }
                        }
                    ]
                }
            ]
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 95,
                    add: {
                        componentGroups: ["minecraft:panda_adult"]
                    }
                },
                {
                    weight: 5,
                    add: {
                        componentGroups: ["minecraft:panda_baby"]
                    }
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:panda_baby"]
            }
        },
        "minecraft:ageable_grow_up": {
            sequence: [
                {
                    remove: {
                        componentGroups: ["minecraft:panda_baby"]
                    }
                },
                {
                    add: {
                        componentGroups: ["minecraft:panda_adult"]
                    }
                },
                {
                    filters: EntityFilters.isVariant(3, "self", "=="),
                    add: {
                        componentGroups: ["minecraft:panda_playful"]
                    }
                },
                {
                    filters: EntityFilters.isVariant(6, "self", "=="),
                    add: {
                        componentGroups: ["minecraft:panda_aggressive"]
                    }
                }
            ]
        },
        "minecraft:panda_lazy": {
            add: {
                componentGroups: ["minecraft:panda_lazy"]
            }
        },
        "minecraft:panda_worried": {
            add: {
                componentGroups: ["minecraft:panda_worried"]
            }
        },
        "minecraft:panda_playful": {
            add: {
                componentGroups: ["minecraft:panda_playful"]
            }
        },
        "minecraft:panda_brown": {
            add: {
                componentGroups: ["minecraft:panda_brown"]
            }
        },
        "minecraft:panda_weak": {
            sequence: [
                {
                    add: {
                        componentGroups: ["minecraft:panda_weak"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "self", "=="),
                    add: {
                        componentGroups: ["minecraft:panda_sneezing"]
                    }
                }
            ]
        },
        "minecraft:panda_aggressive": {
            add: {
                componentGroups: ["minecraft:panda_aggressive"]
            }
        },
        "minecraft:on_scared": {
            add: {
                componentGroups: ["minecraft:baby_scared"]
            }
        },
        "minecraft:baby_on_calm": {
            remove: {
                componentGroups: ["minecraft:baby_scared"]
            }
        },
        "minecraft:become_angry": {
            add: {
                componentGroups: ["minecraft:panda_angry"]
            }
        },
        "minecraft:on_calm": {
            remove: {
                componentGroups: ["minecraft:panda_angry"]
            }
        }
    }
});
