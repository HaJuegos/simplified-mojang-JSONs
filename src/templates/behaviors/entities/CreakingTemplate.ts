import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";


/**
 * Plantilla vanilla del Creaking para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 04-10-2026
 */
export const CreakingTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Creaking,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    properties: {
        "minecraft:creaking_swaying_ticks": {
            clientSync: true,
            type: "int",
            default: 0,
            range: [0, 6]
        },
        "minecraft:creaking_state": {
            clientSync: true,
            type: "enum",
            default: "neutral",
            values: ["neutral", "hostile_observed", "hostile_unobserved", "twitching", "crumbling"]
        }
    },
    componentsGroups: {
        "minecraft:crumbling": [
            new BPEntityComponents.SetInstantDespawn()
        ],
        "minecraft:neutral": [
            new BPEntityComponents.SetAmbientSoundInterval(),
            new BPEntityComponents.SetBehaviorRandomStroll({
                priority: 7,
                speedMultiplier: 0.3
            }),
            new BPEntityComponents.SetLookedAt({
                scaleFovByDistance: false,
                lineOfSightObstructionType: "collision_for_camera",
                fieldOfView: 120,
                filters: EntityFilters.actorHealth(0, "other", ">"),
                lookedAtEvent: {
                    event: "minecraft:become_hostile",
                    target: "self"
                },
                findPlayersOnly: true,
                lookAtLocations: [
                    {
                        location: "head"
                    },
                    {
                        location: "body"
                    },
                    {
                        location: "feet",
                        verticalOffset: 0.5
                    }
                ],
                lookedAtCooldown: 0.1,
                searchRadius: 12,
                setTarget: "once_and_keep_scanning"
            })
        ],
        "minecraft:hostile": [
            new BPEntityComponents.SetAmbientSoundInterval({
                soundEvents: "undefined"
            }),
            new BPEntityComponents.SetLookedAt({
                lineOfSightObstructionType: "collision_for_camera",
                fieldOfView: 120,
                notLookedAtEvent: {
                    event: "minecraft:on_target_stop_looking",
                    target: "self"
                },
                filters: EntityFilters.noneOf(
                    EntityFilters.actorHealth(0, "target"),
                    EntityFilters.hasEquipment("carved_pumpkin", "head", "other")
                ),
                lookedAtEvent: {
                    event: "minecraft:on_target_start_looking",
                    target: "self"
                },
                findPlayersOnly: true,
                lookAtLocations: [
                    {
                        location: "head"
                    },
                    {
                        location: "body"
                    },
                    {
                        location: "feet",
                        verticalOffset: 0.5
                    }
                ],
                lookedAtCooldown: 0.1,
                scaleFovByDistance: false,
                searchRadius: 24,
                setTarget: "never"
            })
        ],
        "minecraft:mobile": [
            new BPEntityComponents.SetBehaviorFloat({
                priority: 0
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: 0
            }),
            new BPEntityComponents.SetMovement({
                value: 0.4
            }),
            new BPEntityComponents.SetPushableByEntity(),
            new BPEntityComponents.SetPushableByBlock()
        ],
        "minecraft:spawned_by_player": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "minecraft:become_neutral",
                        filters: EntityFilters.allOf(
                            EntityFilters.anyOf(
                                EntityFilters.enumProperty("minecraft:creaking_state", "hostile_observed"),
                                EntityFilters.enumProperty("minecraft:creaking_state", "hostile_unobserved")
                            ),
                            EntityFilters.anyOf(
                                EntityFilters.hasTarget(false),
                                EntityFilters.actorHealth(0, "target"),
                                EntityFilters.targetDistance(24, "self", ">")
                            )
                        )
                    }
                ]
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
            new BPEntityComponents.SetNavigationWalk({
                avoidDamageBlocks: true,
                canPathOverLava: false,
                canPathOverWater: true
            })
        ],
        "minecraft:hostile_unobserved": [
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                cooldownTime: 2,
                priority: 2
            })
        ],
        "minecraft:immobile": [
            new BPEntityComponents.SetBodyRotationBlocked(),
            new BPEntityComponents.SetKnockbackResistance({
                value: 1
            }),
            new BPEntityComponents.SetMovement({
                value: 0
            })
        ],
        "minecraft:spawned_by_creaking_heart": [
            new BPEntityComponents.SetDamageSensor({
                triggers: [
                    {
                        cause: "void",
                        dealsDamage: "yes"
                    },
                    {
                        cause: "all",
                        onDamage: {
                            event: "minecraft:damaged_by_player",
                            filters: EntityFilters.isFamily("player", "other")
                        },
                        dealsDamage: "no_but_side_effects_apply"
                    },
                    {
                        cause: "all",
                        onDamage: {
                            event: "minecraft:damaged_by_entity",
                            filters: EntityFilters.isFamily("mob", "other")
                        },
                        dealsDamage: "no_but_side_effects_apply"
                    },
                    {
                        cause: "projectile",
                        onDamage: {
                            event: "minecraft:damaged_by_entity"
                        },
                        dealsDamage: "no_but_side_effects_apply"
                    },
                    {
                        cause: "all",
                        dealsDamage: "no_but_side_effects_apply"
                    }
                ]
            }),
            new BPEntityComponents.SetDimensionBound(),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "minecraft:become_neutral",
                        filters: EntityFilters.allOf(
                            EntityFilters.anyOf(
                                EntityFilters.enumProperty("minecraft:creaking_state", "hostile_observed"),
                                EntityFilters.enumProperty("minecraft:creaking_state", "hostile_unobserved")
                            ),
                            EntityFilters.anyOf(
                                EntityFilters.hasTarget(false),
                                EntityFilters.actorHealth(0, "target"),
                                EntityFilters.targetDistance(24, "self", ">")
                            )
                        )
                    },
                    {
                        event: "minecraft:crumble_and_notify_creaking_heart",
                        filters: EntityFilters.allOf(
                            EntityFilters.noneOf(
                                EntityFilters.enumProperty("minecraft:creaking_state", "twitching"),
                                EntityFilters.hasNametag()
                            ),
                            EntityFilters.anyOf(
                                EntityFilters.homeDistance(34, "self", ">"),
                                EntityFilters.hourlyClockTime(23400, "self", ">"),
                                EntityFilters.hourlyClockTime(12600, "self", "<=")
                            )
                        )
                    },
                    {
                        event: "minecraft:crumble",
                        filters: EntityFilters.allOf(
                            EntityFilters.enumProperty("minecraft:creaking_state", "twitching", "self", "not"),
                            EntityFilters.enumProperty("minecraft:creaking_state", "crumbling", "self", "not"),
                            EntityFilters.isBoundToCreakingHeart(false)
                        )
                    },
                    {
                        event: "minecraft:increment_swaying_ticks",
                        filters: EntityFilters.allOf(
                            EntityFilters.intProperty("minecraft:creaking_swaying_ticks", 0, "self", ">"),
                            EntityFilters.intProperty("minecraft:creaking_swaying_ticks", 5, "self", "<=")
                        )
                    },
                    {
                        event: "minecraft:reset_swaying_ticks",
                        filters: EntityFilters.intProperty("minecraft:creaking_swaying_ticks", 5, "self", ">")
                    }
                ]
            }),
            new BPEntityComponents.SetFireImmune(),
            new BPEntityComponents.SetHome({
                restrictionRadius: 32,
                restrictionType: 'all_movement'
            }),
            new BPEntityComponents.SetNavigationWalk({
                avoidDamageBlocks: false,
                canPathOverLava: true,
                canPathOverWater: true
            }),
            new BPEntityComponents.SetNotPickableFromInsideComp()
        ],
        "minecraft:twitching": [
            new BPEntityComponents.SetBehaviorTimerFlagOne({
                durationRange: {
                    min: 2.25,
                    max: 2.25
                },
                onEnd: {
                    event: "minecraft:crumble"
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 3
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 2.7,
            width: 0.9
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetFollowRange({
            max: 32,
            value: 32
        }),
        new BPEntityComponents.SetFreezingImmune(),
        new BPEntityComponents.SetHealth({
            max: 1,
            value: 1
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetRendersWhenInvisible(),
        new BPEntityComponents.SetTypeFamily({
            family: ["creaking", "monster", "mob"]
        }),
        new BPEntityComponents.SetVariableMaxAutoStep({
            baseValue: 1.0625,
            jumpPreventedValue: 0.5625
        })
    ],
    events: {
        "minecraft:crumble": {
            sequence: [
                {
                    filters: EntityFilters.enumProperty("minecraft:creaking_state", "crumbling", "self", "not"),
                    add: {
                        componentGroups: ["minecraft:immobile", "minecraft:crumbling"]
                    },
                    emitParticle: {
                        particle: "creakingcrumble"
                    },
                    playSound: {
                        sound: "death"
                    },
                    emitVibration: {
                        vibration: "entity_die"
                    },
                    setProperty: {
                        "minecraft:creaking_state": "crumbling"
                    },
                    remove: {
                        componentGroups: [
                            "minecraft:neutral",
                            "minecraft:hostile",
                            "minecraft:hostile_unobserved",
                            "minecraft:twitching",
                            "minecraft:mobile"
                        ]
                    }
                }
            ]
        },
        "minecraft:become_hostile": {
            sequence: [
                {
                    filters: EntityFilters.enumProperty("minecraft:creaking_state", "neutral"),
                    add: {
                        componentGroups: ["minecraft:hostile", "minecraft:immobile"]
                    },
                    playSound: {
                        sound: "activate"
                    },
                    emitVibration: {
                        vibration: "entity_act"
                    },
                    setProperty: {
                        "minecraft:creaking_state": "hostile_observed"
                    },
                    remove: {
                        componentGroups: ["minecraft:neutral", "minecraft:hostile_unobserved", "minecraft:mobile"]
                    }
                }
            ]
        },
        "minecraft:become_neutral": {
            sequence: [
                {
                    filters: EntityFilters.enumProperty("minecraft:creaking_state", "neutral", "self", "not"),
                    add: {
                        componentGroups: ["minecraft:neutral", "minecraft:mobile"]
                    },
                    playSound: {
                        sound: "deactivate"
                    },
                    emitVibration: {
                        vibration: "entity_act"
                    },
                    setProperty: {
                        "minecraft:creaking_state": "neutral"
                    },
                    remove: {
                        componentGroups: ["minecraft:hostile", "minecraft:hostile_unobserved", "minecraft:immobile"]
                    },
                    resetTarget: {}
                }
            ]
        },
        "minecraft:entity_spawned_by_creaking_heart": {
            add: {
                componentGroups: ["minecraft:spawned_by_creaking_heart", "minecraft:neutral", "minecraft:mobile"]
            }
        },
        "minecraft:crumble_and_notify_creaking_heart": {
            trigger: "minecraft:crumble",
            executeEventOnHomeBlock: {
                event: "minecraft:on_spawned_creaking_crumbling"
            }
        },
        "minecraft:damaged_by_entity": {
            trigger: "minecraft:increment_swaying_ticks",
            emitVibration: {
                vibration: "entity_act"
            }
        },
        "minecraft:damaged_by_player": {
            trigger: "minecraft:increment_swaying_ticks",
            executeEventOnHomeBlock: {
                event: "minecraft:on_spawned_creaking_damaged_by_player"
            },
            emitVibration: {
                vibration: "entity_act"
            }
        },
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:spawned_by_player", "minecraft:neutral", "minecraft:mobile"]
            }
        },
        "minecraft:increment_swaying_ticks": {
            setProperty: {
                "minecraft:creaking_swaying_ticks": `math.clamp(${MoLang.property('minecraft:creaking_swaying_ticks')} + 1, 0, 6)`
            }
        },
        "minecraft:on_target_start_looking": {
            sequence: [
                {
                    filters: EntityFilters.enumProperty("minecraft:creaking_state", "hostile_unobserved"),
                    add: {
                        componentGroups: ["minecraft:hostile", "minecraft:immobile"]
                    },
                    playSound: {
                        sound: "freeze"
                    },
                    emitVibration: {
                        vibration: "entity_act"
                    },
                    setProperty: {
                        "minecraft:creaking_state": "hostile_observed"
                    },
                    remove: {
                        componentGroups: ["minecraft:neutral", "minecraft:hostile_unobserved", "minecraft:mobile"]
                    }
                }
            ]
        },
        "minecraft:on_target_stop_looking": {
            sequence: [
                {
                    filters: EntityFilters.enumProperty("minecraft:creaking_state", "hostile_observed"),
                    add: {
                        componentGroups: ["minecraft:hostile", "minecraft:hostile_unobserved", "minecraft:mobile"]
                    },
                    playSound: {
                        sound: "unfreeze"
                    },
                    emitVibration: {
                        vibration: "entity_act"
                    },
                    setProperty: {
                        "minecraft:creaking_state": "hostile_unobserved"
                    },
                    remove: {
                        componentGroups: ["minecraft:neutral", "minecraft:immobile"]
                    }
                }
            ]
        },
        "minecraft:reset_swaying_ticks": {
            setProperty: {
                "minecraft:creaking_swaying_ticks": "0"
            }
        },
        "minecraft:start_twitching": {
            sequence: [
                {
                    filters: EntityFilters.enumProperty("minecraft:creaking_state", "twitching", "self", "not"),
                    add: {
                        componentGroups: ["minecraft:immobile", "minecraft:twitching"]
                    },
                    setProperty: {
                        "minecraft:creaking_state": "twitching"
                    },
                    remove: {
                        componentGroups: [
                            "minecraft:neutral",
                            "minecraft:hostile",
                            "minecraft:hostile_unobserved",
                            "minecraft:mobile"
                        ]
                    }
                }
            ]
        }
    }
});
