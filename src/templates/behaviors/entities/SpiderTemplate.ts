import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de la Araña para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const SpiderTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Spider,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:spider_angry": [
            new BPEntityComponents.SetAngry({
                calmEvent: {
                    event: "minecraft:become_calm",
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
            })
        ],
        "minecraft:spider_hostile": [
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
            }),
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:become_angry"
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
                        position: [0, 0.54, 0]
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
                        position: [0, 0.54, 0]
                    }
                ]
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
                        position: [0, 0.54, 0]
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
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 2
        }),
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
            height: 0.9,
            width: 1.4
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 : 0`
        }),
        new BPEntityComponents.SetHealth({
            max: 16,
            value: 16
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
                    position: [0, 0.54, -0.1]
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["spider", "monster", "mob", "arthropod"]
        })
    ],
    events: {
        "minecraft:become_angry": {
            add: {
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
        },
        "minecraft:become_calm": {
            remove: {
                componentGroups: ["minecraft:spider_angry"]
            }
        },
        "minecraft:become_hostile": {
            add: {
                componentGroups: ["minecraft:spider_hostile"]
            },
            remove: {
                componentGroups: ["minecraft:spider_neutral"]
            }
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
        }
    }
});
