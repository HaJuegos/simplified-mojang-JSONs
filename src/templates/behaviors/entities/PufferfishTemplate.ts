import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del PufferFish para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const PufferfishTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Pufferfish,
    description: {
        spawnCategory: SpawnCategoryEntities.WaterAmbient,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:deflate_sensor": [
            new BPEntityComponents.SetEntitySensor({
                relativeRange: false,
                subsensors: [
                    {
                        event: "minecraft:from_full_puff",
                        minimumCount: 0,
                        eventFilters: EntityFilters.anyOf(
                            EntityFilters.allOf(
                                EntityFilters.isFamily("mob", "other"),
                                EntityFilters.anyOf(
                                    EntityFilters.isFamily("axolotl", "other"),
                                    EntityFilters.isFamily("aquatic", "other", "not")
                                )
                            ),
                            EntityFilters.isFamily("player", "other")
                        ),
                        maximumCount: 0,
                        range: [2.9, 2.9]
                    }
                ]
            })
        ],
        "minecraft:deflate_sensor_buffer": [
            new BPEntityComponents.SetTimer({
                looping: false,
                randomInterval: false,
                time: 0.01,
                timeDownEvent: {
                    event: "minecraft:on_full_puff"
                }
            })
        ],
        "minecraft:full_puff": [
            new BPEntityComponents.SetAreaAttack({
                cause: "contact",
                damageCooldown: 0.5,
                damagePerTick: 2,
                damageRange: 0.2,
                entityFilter: EntityFilters.anyOf(
                    EntityFilters.allOf(
                        EntityFilters.isFamily('mob', 'other'),
                        EntityFilters.anyOf(
                            EntityFilters.isFamily('aquatic', 'other', 'not'),
                            EntityFilters.isFamily('axolotl', 'other')
                        )
                    ),
                    EntityFilters.allOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.hasAbility('instabuild', 'other', 'not')
                    )
                )
            }),
            new BPEntityComponents.SetMobEffect({
                effectRange: 0.2,
                effectTime: 10,
                entityFilter: EntityFilters.anyOf(
                    EntityFilters.allOf(
                        EntityFilters.isFamily("mob", "other"),
                        EntityFilters.anyOf(
                            EntityFilters.isFamily("axolotl", "other"),
                            EntityFilters.allOf(
                                EntityFilters.isFamily("aquatic", "other", "not"),
                                EntityFilters.isFamily("undead", "other", "not")
                            )
                        )
                    ),
                    EntityFilters.allOf(
                        EntityFilters.isFamily("player", "other"),
                        EntityFilters.hasAbility("instabuild", "other", "not")
                    )
                ),
                mobEffect: "poison"
            }),
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "minecraft:half_puff_primary": [
            new BPEntityComponents.SetTimer({
                looping: false,
                randomInterval: false,
                time: 2,
                timeDownEvent: {
                    event: "minecraft:on_half_puff"
                }
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:half_puff_secondary": [
            new BPEntityComponents.SetEntitySensor({
                relativeRange: false,
                subsensors: [
                    {
                        event: "minecraft:start_full_puff",
                        minimumCount: 1,
                        eventFilters: EntityFilters.anyOf(
                            EntityFilters.allOf(
                                EntityFilters.isFamily("mob", "other"),
                                EntityFilters.anyOf(
                                    EntityFilters.isFamily("axolotl", "other"),
                                    EntityFilters.isFamily("aquatic", "other", "not")
                                )
                            ),
                            EntityFilters.isFamily("player", "other")
                        ),
                        range: [2.5, 2.5]
                    }
                ]
            }),
            new BPEntityComponents.SetTimer({
                looping: false,
                randomInterval: false,
                time: 2,
                timeDownEvent: {
                    event: "minecraft:on_normal_puff"
                }
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:start_deflate": [
            new BPEntityComponents.SetTimer({
                looping: false,
                randomInterval: false,
                time: 3,
                timeDownEvent: {
                    event: "minecraft:on_deflate"
                }
            })
        ],
        "minecraft:normal_puff": [
            new BPEntityComponents.SetEntitySensor({
                relativeRange: false,
                subsensors: [
                    {
                        event: "minecraft:start_half_puff",
                        minimumCount: 1,
                        eventFilters: EntityFilters.anyOf(
                            EntityFilters.allOf(
                                EntityFilters.isFamily("mob", "other"),
                                EntityFilters.anyOf(
                                    EntityFilters.isFamily("axolotl", "other"),
                                    EntityFilters.isFamily("aquatic", "other", "not")
                                )
                            ),
                            EntityFilters.isFamily("player", "other")
                        ),
                        range: [2.5, 2.5]
                    }
                ]
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.isFamily('axolotl', 'other')
                    ),
                    maxDist: 6,
                    walkSpeedMultiplier: 1.5,
                    sprintSpeedMultiplier: 2
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorRandomSwim({
            interval: 0,
            xzDist: 16,
            priority: 3,
            speedMultiplier: 1,
            yDist: 4
        }),
        new BPEntityComponents.SetBehaviorSwimWander({
            interval: 1,
            lookAhead: 2,
            priority: 5
        }),
        new BPEntityComponents.SetBreathable({
            breathesAir: false,
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.8,
            width: 0.8
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {
                maxDistance: 40,
                minDistance: 32
            }
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
        }),
        new BPEntityComponents.SetFlocking({
            breachInfluence: 7,
            blockDistance: 2,
            highFlockLimit: 8,
            blockWeight: 0.85,
            minHeight: 1.5,
            cohesionThreshold: 1.95,
            inWater: true,
            cohesionWeight: 2,
            goalWeight: 2,
            influenceRadius: 3,
            innnerCohesionThreshold: 1.25,
            lonerChance: 0.1,
            lowFlockLimit: 4,
            matchVariants: false,
            maxHeight: 6,
            separationThreshold: 0.95,
            separationWeight: 1.75,
            useCenterOfMass: true
        }),
        new BPEntityComponents.SetHealth({
            max: 3,
            value: 3
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
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/pufferfish.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.13
        }),
        new BPEntityComponents.SetMovementSway({
            swayAmplitude: 0
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationGeneric({
            canBreach: false,
            canWalk: false,
            canPathOverWater: false,
            canSink: false,
            canSwim: true,
            isAmphibious: false,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({
            hasGravity: false
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetScale({
            value: 1.2
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "pufferfish", "fish"]
        }),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.13
        })
    ],
    events: {
        "minecraft:from_full_puff": {
            add: {
                componentGroups: ["minecraft:start_deflate"]
            },
            remove: {
                componentGroups: ["minecraft:deflate_sensor"]
            }
        },
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:normal_puff"]
            }
        },
        "minecraft:on_normal_puff": {
            add: {
                componentGroups: ["minecraft:normal_puff"]
            },
            remove: {
                componentGroups: ["minecraft:half_puff_secondary"]
            }
        },
        "minecraft:on_deflate": {
            add: {
                componentGroups: ["minecraft:half_puff_secondary"]
            },
            remove: {
                componentGroups: ["minecraft:full_puff", "minecraft:start_deflate"]
            }
        },
        "minecraft:on_full_puff": {
            add: {
                componentGroups: ["minecraft:deflate_sensor"]
            },
            remove: {
                componentGroups: ["minecraft:deflate_sensor_buffer"]
            }
        },
        "minecraft:on_half_puff": {
            add: {
                componentGroups: ["minecraft:half_puff_secondary"]
            },
            remove: {
                componentGroups: ["minecraft:half_puff_primary"]
            }
        },
        "minecraft:start_half_puff": {
            add: {
                componentGroups: ["minecraft:half_puff_primary"]
            },
            remove: {
                componentGroups: ["minecraft:normal_puff"]
            }
        },
        "minecraft:start_full_puff": {
            add: {
                componentGroups: ["minecraft:full_puff", "minecraft:deflate_sensor_buffer"]
            },
            remove: {
                componentGroups: ["minecraft:half_puff_secondary"]
            }
        },
        "minecraft:to_full_puff": {
            add: {
                componentGroups: ["minecraft:full_puff", "minecraft:deflate_sensor_buffer"]
            },
            remove: {
                componentGroups: ["minecraft:normal_puff"]
            }
        }
    }
});
