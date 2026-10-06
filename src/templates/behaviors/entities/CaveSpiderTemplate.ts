import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de la Araña de Cueva para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 04-10-2026
 */
export const CaveSpiderTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.CaveSpider,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:spider_angry": [
            new BPEntityComponents.SetAngry({
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                },
                duration: 10,
                durationDelta: 3
            }),
            new BPEntityComponents.SetBehaviorLeapAtTarget({
                mustBeOnGround: false,
                priority: 4,
                yd: 0.4
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                trackTarget: true,
                priority: 3
            }),
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                attackInterval: {
                    min: 10,
                    max: 10
                },
                mustSee: true,
                entityTypes: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isFamily("snowgolem", "other"),
                            EntityFilters.isFamily("irongolem", "other")
                        )
                    }
                ],
                priority: 2
            })
        ],
        "minecraft:spider_hostile": [
            new BPEntityComponents.SetBehaviorLeapAtTarget({
                mustBeOnGround: false,
                priority: 4,
                yd: 0.4
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                randomStopInterval: 100,
                trackTarget: true,
                priority: 3
            }),
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                attackInterval: {
                    min: 5,
                    max: 5
                },
                mustSee: true,
                entityTypes: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isFamily("snowgolem", "other"),
                            EntityFilters.isFamily("irongolem", "other")
                        )
                    }
                ],
                priority: 2
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    event: "minecraft:become_neutral",
                    filters: EntityFilters.isBrightness(0.49, "self", ">")
                }
            })
        ],
        "minecraft:spider_bogged_jockey": [
            new BPEntityComponents.SetAddRider({
                riders: [
                    {
                        entityType: "minecraft:bogged"
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                familyTypes: ["skeleton"],
                seatCount: 1,
                seats: [
                    {
                        position: [0, 0.325, -0.1]
                    }
                ]
            })
        ],
        "minecraft:spider_wither_jockey": [
            new BPEntityComponents.SetAddRider({
                riders: [
                    {
                        entityType: "minecraft:wither_skeleton"
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                familyTypes: ["skeleton"],
                seatCount: 1,
                seats: [
                    {
                        position: [0, 0.325, -0.1]
                    }
                ]
            })
        ],
        "minecraft:spider_neutral": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    event: "minecraft:become_hostile",
                    filters: EntityFilters.isBrightness(0.49, "self", "<")
                }
            }),
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:become_angry"
            })
        ],
        "minecraft:spider_jockey": [
            new BPEntityComponents.SetAddRider({
                riders: [
                    {
                        entityType: "minecraft:skeleton"
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                familyTypes: ["skeleton"],
                seatCount: 1,
                seats: [
                    {
                        position: [0, 0.325, -0.1]
                    }
                ]
            })
        ],
        "minecraft:spider_parched_jockey": [
            new BPEntityComponents.SetAddRider({
                riders: [
                    {
                        entityType: "minecraft:parched"
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                familyTypes: ["skeleton"],
                seatCount: 1,
                seats: [
                    {
                        position: [0, 0.325, -0.1]
                    }
                ]
            })
        ],
        "minecraft:spider_poison_easy": [
            new BPEntityComponents.SetAttack({
                damage: 2,
                effectDuration: 0,
                effectName: "poison"
            })
        ],
        "minecraft:spider_poison_hard": [
            new BPEntityComponents.SetAttack({
                damage: 2,
                effectDuration: 15,
                effectName: "poison"
            })
        ],
        "minecraft:spider_poison_normal": [
            new BPEntityComponents.SetAttack({
                damage: 2,
                effectDuration: 7,
                effectName: "poison"
            })
        ],
        "minecraft:spider_stray_jockey": [
            new BPEntityComponents.SetAddRider({
                riders: [
                    {
                        entityType: "minecraft:stray"
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                familyTypes: ["skeleton"],
                seatCount: 1,
                seats: [
                    {
                        position: [0, 0.325, -0.1]
                    }
                ]
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("armadillo", "other"),
                        EntityFilters.enumProperty("minecraft:armadillo_state", "unrolled", "other")
                    ),
                    maxDist: 6,
                    sprintSpeedMultiplier: 1.2
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("breeze", "other", "!=")
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookDistance: 6,
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 5,
            targetDist: 0,
            speedMultiplier: 1.25,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 0.8
        }),
        new BPEntityComponents.SetBlockMovementSlowdownImmunity({
            blocks: [
                MinecraftBlockTypes.Web
            ]
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 0.5,
            width: 0.7
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 : 0`
        }),
        new BPEntityComponents.SetHealth({
            max: 12,
            value: 12
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
            table: "loot_tables/entities/spider.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.3
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationClimb({
            canPathOverWater: true
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetRendersWhenInvisible(),
        new BPEntityComponents.SetRideable({
            familyTypes: ["baby_undead"],
            seatCount: 1,
            seats: [
                {
                    position: [0, 0.325, 0]
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["cavespider", "monster", "arthropod", "mob"]
        })
    ],
    events: {
        "minecraft:become_angry": {
            sequence: [
                {
                    add: {
                        componentGroups: ["minecraft:spider_angry"]
                    },
                    remove: {
                        componentGroups: ["minecraft:spider_neutral"]
                    }
                },
                {
                    filters: EntityFilters.isDifficulty("easy"),
                    add: {
                        componentGroups: ["minecraft:spider_poison_easy"]
                    },
                    remove: {
                        componentGroups: ["minecraft:spider_poison_hard", "minecraft:spider_poison_normal"]
                    }
                },
                {
                    filters: EntityFilters.isDifficulty("normal"),
                    add: {
                        componentGroups: ["minecraft:spider_poison_normal"]
                    },
                    remove: {
                        componentGroups: ["minecraft:spider_poison_easy", "minecraft:spider_poison_hard"]
                    }
                },
                {
                    filters: EntityFilters.isDifficulty("hard"),
                    add: {
                        componentGroups: ["minecraft:spider_poison_hard"]
                    },
                    remove: {
                        componentGroups: ["minecraft:spider_poison_easy", "minecraft:spider_poison_normal"]
                    }
                }
            ]
        },
        "minecraft:become_hostile": {
            sequence: [
                {
                    add: {
                        componentGroups: ["minecraft:spider_hostile"]
                    },
                    remove: {
                        componentGroups: ["minecraft:spider_neutral"]
                    }
                },
                {
                    filters: EntityFilters.isDifficulty("easy"),
                    add: {
                        componentGroups: ["minecraft:spider_poison_easy"]
                    },
                    remove: {
                        componentGroups: ["minecraft:spider_poison_hard", "minecraft:spider_poison_normal"]
                    }
                },
                {
                    filters: EntityFilters.isDifficulty("normal"),
                    add: {
                        componentGroups: ["minecraft:spider_poison_normal"]
                    },
                    remove: {
                        componentGroups: ["minecraft:spider_poison_easy", "minecraft:spider_poison_hard"]
                    }
                },
                {
                    filters: EntityFilters.isDifficulty("hard"),
                    add: {
                        componentGroups: ["minecraft:spider_poison_hard"]
                    },
                    remove: {
                        componentGroups: ["minecraft:spider_poison_easy", "minecraft:spider_poison_normal"]
                    }
                }
            ]
        },
        "minecraft:entity_spawned_with_biome_specific_jockey": {
            firstValid: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isDaytime(false),
                        EntityFilters.isSnowCovered(),
                        EntityFilters.isUnderground(false)
                    ),
                    add: {
                        componentGroups: ["minecraft:spider_stray_jockey", "minecraft:spider_neutral"]
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isDaytime(false),
                        EntityFilters.isUnderground(false),
                        EntityFilters.anyOf(
                            EntityFilters.hasBiomeTag("swamp"),
                            EntityFilters.hasBiomeTag("mangrove_swamp")
                        )
                    ),
                    add: {
                        componentGroups: ["minecraft:spider_bogged_jockey", "minecraft:spider_neutral"]
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isDaytime(false),
                        EntityFilters.isUnderground(false),
                        EntityFilters.hasBiomeTag("desert")
                    ),
                    add: {
                        componentGroups: ["minecraft:spider_parched_jockey", "minecraft:spider_neutral"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("nether"),
                    add: {
                        componentGroups: ["minecraft:spider_wither_jockey", "minecraft:spider_neutral"]
                    }
                },
                {
                    trigger: "minecraft:entity_spawned_with_default_jockey"
                }
            ]
        },
        "minecraft:become_neutral": {
            add: {
                componentGroups: ["minecraft:spider_neutral"]
            },
            remove: {
                componentGroups: ["minecraft:spider_hostile"]
            }
        },
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 1,
                    randomize: [
                        {
                            weight: 80,
                            trigger: "minecraft:entity_spawned_with_biome_specific_jockey"
                        },
                        {
                            weight: 20,
                            trigger: "minecraft:entity_spawned_with_default_jockey"
                        }
                    ]
                },
                {
                    weight: 99,
                    add: {
                        componentGroups: ["minecraft:spider_neutral"]
                    }
                }
            ]
        },
        "minecraft:on_calm": {
            add: {
                componentGroups: ["minecraft:spider_neutral"]
            },
            remove: {
                componentGroups: ["minecraft:spider_angry"]
            }
        },
        "minecraft:entity_spawned_with_default_jockey": {
            sequence: [
                {
                    filters: EntityFilters.anyOf(EntityFilters.isDaytime(false), EntityFilters.isUnderground()),
                    add: {
                        componentGroups: ["minecraft:spider_jockey", "minecraft:spider_neutral"]
                    }
                }
            ]
        }
    }
});
