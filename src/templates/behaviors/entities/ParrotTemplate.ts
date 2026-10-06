import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Loro para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const ParrotTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Parrot,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:parrot_adult": [
            new BPEntityComponents.SetExperienceReward({
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/parrot.json"
            })
        ],
        "minecraft:parrot_blue": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:parrot_cyan": [
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "minecraft:parrot_green": [
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "minecraft:parrot_red": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:parrot_silver": [
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "minecraft:parrot_not_riding_player": [
            new BPEntityComponents.SetBehaviorLookAtPlayer({
                lookTime: {
                    min: 1,
                    max: 2
                },
                priority: 2
            }),
            new BPEntityComponents.SetEntitySensor({
                relativeRange: false,
                subsensors: [
                    {
                        event: "minecraft:on_riding_player",
                        eventFilters: EntityFilters.allOf(
                            EntityFilters.isRiding(),
                            EntityFilters.hasComponent("minecraft:behavior.look_at_player")
                        ),
                        range: [2, 2]
                    }
                ]
            })
        ],
        "minecraft:parrot_riding_player": [
            new BPEntityComponents.SetEntitySensor({
                relativeRange: false,
                subsensors: [
                    {
                        event: "minecraft:on_not_riding_player",
                        eventFilters: EntityFilters.allOf(
                            EntityFilters.isRiding(false),
                            EntityFilters.hasComponent("minecraft:behavior.look_at_player", "self", "not")
                        ),
                        range: [2, 2]
                    }
                ]
            })
        ],
        "minecraft:parrot_tame": [
            new BPEntityComponents.SetBehaviorFindMount({
                avoidWater: true,
                mountDistance: 2,
                priority: 4,
                startDelay: 100,
                targetNeeded: false,
                withinRadius: 16
            }),
            new BPEntityComponents.SetBehaviorFollowOwner({
                priority: 3,
                speedMultiplier: 1,
                startDistance: 5,
                stopDistance: 1
            }),
            new BPEntityComponents.SetBehaviorStayWhileSitting({
                priority: 2
            }),
            new BPEntityComponents.SetBehaviorTeleportToOwner({
                filters: EntityFilters.allOf(
                    EntityFilters.ownerDistance(12, "self", ">"),
                    EntityFilters.isPanicking()
                ),
                priority: 0
            }),
            new BPEntityComponents.SetIsTamed(),
            new BPEntityComponents.SetSittable(),
            new BPEntityComponents.SetTypeFamily({
                family: ["parrot_tame", "mob"]
            })
        ],
        "minecraft:parrot_wild": [
            new BPEntityComponents.SetBehaviorFollowMob({
                priority: 4,
                searchRange: 20,
                speedMultiplier: 1,
                stopDistance: 3
            }),
            new BPEntityComponents.SetBehaviorRandomFly({
                priority: 3,
                canLandOnTrees: true,
                speedMultiplier: 1,
                xzDist: 15,
                yDist: 1
            }),
            new BPEntityComponents.SetTameable({
                probability: 0.33,
                tameItems: [
                    "wheat_seeds",
                    "pumpkin_seeds",
                    "melon_seeds",
                    "beetroot_seeds",
                    "pitcher_pod",
                    "torchflower_seeds"
                ],
                tameEvent: {
                    event: "minecraft:on_tame",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["parrot_wild", "mob"]
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 1.25
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanFly(),
        new BPEntityComponents.SetCollisionBox({
            height: 1,
            width: 0.5
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetGameEventMovementTracking({
            emitFlap: true
        }),
        new BPEntityComponents.SetHealable({
            filters: EntityFilters.isRiding(true, "self", "!="),
            forceUse: true,
            items: [
                {
                    effects: [
                        {
                            amplifier: 0,
                            chance: 1,
                            duration: 1000,
                            name: "fatal_poison"
                        }
                    ],
                    healAmount: 0,
                    item: "cookie"
                }
            ]
        }),
        new BPEntityComponents.SetHealth({
            max: 6,
            value: 6
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
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetMovement({
            value: 0.4
        }),
        new BPEntityComponents.SetMovementFly(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationFly({
            canPathFromAir: true,
            canPathOverWater: true
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity()
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 20,
                    add: {
                        componentGroups: [
                            "minecraft:parrot_red",
                            "minecraft:parrot_adult",
                            "minecraft:parrot_wild",
                            "minecraft:parrot_not_riding_player"
                        ]
                    }
                },
                {
                    weight: 20,
                    add: {
                        componentGroups: [
                            "minecraft:parrot_blue",
                            "minecraft:parrot_adult",
                            "minecraft:parrot_wild",
                            "minecraft:parrot_not_riding_player"
                        ]
                    }
                },
                {
                    weight: 20,
                    add: {
                        componentGroups: [
                            "minecraft:parrot_green",
                            "minecraft:parrot_adult",
                            "minecraft:parrot_wild",
                            "minecraft:parrot_not_riding_player"
                        ]
                    }
                },
                {
                    weight: 20,
                    add: {
                        componentGroups: [
                            "minecraft:parrot_cyan",
                            "minecraft:parrot_adult",
                            "minecraft:parrot_wild",
                            "minecraft:parrot_not_riding_player"
                        ]
                    }
                },
                {
                    weight: 20,
                    add: {
                        componentGroups: [
                            "minecraft:parrot_silver",
                            "minecraft:parrot_adult",
                            "minecraft:parrot_wild",
                            "minecraft:parrot_not_riding_player"
                        ]
                    }
                }
            ]
        },
        "minecraft:on_tame": {
            add: {
                componentGroups: ["minecraft:parrot_tame"]
            },
            remove: {
                componentGroups: ["minecraft:parrot_wild"]
            }
        },
        "minecraft:on_not_riding_player": {
            add: {
                componentGroups: ["minecraft:parrot_not_riding_player"]
            },
            remove: {
                componentGroups: ["minecraft:parrot_riding_player"]
            }
        },
        "minecraft:on_riding_player": {
            add: {
                componentGroups: ["minecraft:parrot_riding_player"]
            },
            remove: {
                componentGroups: ["minecraft:parrot_not_riding_player"]
            }
        }
    }
});
