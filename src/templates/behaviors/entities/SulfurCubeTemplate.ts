import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Cubo de Azufre para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const SulfurCubeTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.SulfurCube,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSpawneable: true,
        isSummonable: true
    },
    properties: {
        "minecraft:sulfur_cube_archetype": {
            clientSync: true,
            type: "enum",
            default: "none",
            values: [
                "none",
                "bouncy",
                "regular",
                "slow_bouncy",
                "slow_flat",
                "fast_flat",
                "light",
                "fast_sliding",
                "slow_sliding",
                "sticky",
                "high_resistance",
                "explosive",
                "hot"
            ]
        }
    },
    componentsGroups: {
        "minecraft:sulfur_cube_ai": [
            new BPEntityComponents.SetNavigationWalk({
                canPathOverWater: true,
                avoidWater: true
            }),
            new BPEntityComponents.SetJumpStatic(),
            new BPEntityComponents.SetCanClimb(),
            new BPEntityComponents.SetVariableMaxAutoStep({
                baseValue: 0.5625,
                controlledValue: 0.5625,
                jumpPreventedValue: 0.5625
            }),
            new BPEntityComponents.SetBreathable({
                breathesLava: false,
                suffocateTime: 0,
                totalSupply: 15
            }),
            new BPEntityComponents.SetBehaviorSlimeFloat({
                priority: 1,
                jumpChancePercentage: 0.8,
                speedMultiplier: 1.2
            }),
            new BPEntityComponents.SetBehaviorSlimeRandomDirection({
                priority: 4,
                addRandomTimeRange: 3,
                turnRange: 360,
                minChangeDirectionTime: 2
            }),
            new BPEntityComponents.SetBehaviorSlimeKeepOnJumping({
                priority: 5,
                speedMultiplier: 1
            })
        ],
        "minecraft:sulfur_cube_small": [
            new BPEntityComponents.SetVariant({
                value: 1
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 0.49,
                height: 0.49
            }),
            new BPEntityComponents.SetHealth({
                value: 4,
                max: 4
            }),
            new BPEntityComponents.SetMovement({
                value: 0.3
            }),
            new BPEntityComponents.SetPushableByEntity(),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: ["slime_ball"],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorTempt({
                priority: 2,
                items: ["slime_ball"],
                withinRadius: 8,
                onTemptStart: {
                    event: "minecraft:on_gain_target"
                },
                onTemptEnd: {
                    event: "minecraft:on_lose_target"
                }
            })
        ],
        "minecraft:sulfur_cube_medium": [
            new BPEntityComponents.SetVariant({
                value: 2
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 0.98,
                height: 0.98
            }),
            new BPEntityComponents.SetHealth({
                value: 8,
                max: 8
            }),
            new BPEntityComponents.SetMovement({
                value: 0.4
            }),
            new BPEntityComponents.SetExperienceReward({
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,2) : 0`
            }),
            new BPEntityComponents.SetEquipItem({
                canWearArmor: false
            })
        ],
        "minecraft:sulfur_cube_medium_without_block": [
            new BPEntityComponents.SetPushableByEntity(),
            new BPEntityComponents.SetKnockbackResistance({
                value: 0
            }),
            new BPEntityComponents.SetBounciness({
                value: 0
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 1
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 1
            }),
            new BPEntityComponents.SetBehaviorTempt({
                priority: 2,
                items: [
                    {
                        tags: "q.any_tag('minecraft:sulfur_cube_archetype_bouncy', 'minecraft:sulfur_cube_archetype_regular', 'minecraft:sulfur_cube_archetype_slow_bouncy', 'minecraft:sulfur_cube_archetype_slow_flat', 'minecraft:sulfur_cube_archetype_fast_flat', 'minecraft:sulfur_cube_archetype_light', 'minecraft:sulfur_cube_archetype_fast_sliding', 'minecraft:sulfur_cube_archetype_slow_sliding', 'minecraft:sulfur_cube_archetype_sticky', 'minecraft:sulfur_cube_archetype_high_resistance', 'minecraft:sulfur_cube_archetype_explosive', 'minecraft:sulfur_cube_archetype_hot')"
                    }
                ],
                withinRadius: 8,
                onTemptStart: {
                    event: "minecraft:on_gain_target"
                },
                onTemptEnd: {
                    event: "minecraft:on_lose_target"
                }
            }),
            new BPEntityComponents.SetBehaviorEquipItem({
                priority: 2
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        equipItemSlot: "slot.weapon.mainhand",
                        interactText: "action.interact.give_sulfur_cube",
                        onInteract: {
                            filters: EntityFilters.anyOf(
                                EntityFilters.hasEquipmentTag(
                                    "minecraft:sulfur_cube_archetype_bouncy",
                                    "main_hand",
                                    "other"
                                ),
                                EntityFilters.hasEquipmentTag(
                                    "minecraft:sulfur_cube_archetype_regular",
                                    "main_hand",
                                    "other"
                                ),
                                EntityFilters.hasEquipmentTag(
                                    "minecraft:sulfur_cube_archetype_slow_bouncy",
                                    "main_hand",
                                    "other"
                                ),
                                EntityFilters.hasEquipmentTag(
                                    "minecraft:sulfur_cube_archetype_slow_flat",
                                    "main_hand",
                                    "other"
                                ),
                                EntityFilters.hasEquipmentTag(
                                    "minecraft:sulfur_cube_archetype_fast_flat",
                                    "main_hand",
                                    "other"
                                ),
                                EntityFilters.hasEquipmentTag(
                                    "minecraft:sulfur_cube_archetype_light",
                                    "main_hand",
                                    "other"
                                ),
                                EntityFilters.hasEquipmentTag(
                                    "minecraft:sulfur_cube_archetype_fast_sliding",
                                    "main_hand",
                                    "other"
                                ),
                                EntityFilters.hasEquipmentTag(
                                    "minecraft:sulfur_cube_archetype_slow_sliding",
                                    "main_hand",
                                    "other"
                                ),
                                EntityFilters.hasEquipmentTag(
                                    "minecraft:sulfur_cube_archetype_sticky",
                                    "main_hand",
                                    "other"
                                ),
                                EntityFilters.hasEquipmentTag(
                                    "minecraft:sulfur_cube_archetype_high_resistance",
                                    "main_hand",
                                    "other"
                                ),
                                EntityFilters.hasEquipmentTag(
                                    "minecraft:sulfur_cube_archetype_explosive",
                                    "main_hand",
                                    "other"
                                ),
                                EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_hot", "main_hand", "other")
                            ),
                            target: "self"
                        }
                    }
                ]
            }),
            new BPEntityComponents.SetShareables({
                singularPickup: true,
                items: [
                    {
                        item: "minecraft:sulfur_cube_archetype_bouncy",
                        maxAmount: 1
                    },
                    {
                        item: "minecraft:sulfur_cube_archetype_regular",
                        maxAmount: 1
                    },
                    {
                        item: "minecraft:sulfur_cube_archetype_slow_bouncy",
                        maxAmount: 1
                    },
                    {
                        item: "minecraft:sulfur_cube_archetype_slow_flat",
                        maxAmount: 1
                    },
                    {
                        item: "minecraft:sulfur_cube_archetype_fast_flat",
                        maxAmount: 1
                    },
                    {
                        item: "minecraft:sulfur_cube_archetype_light",
                        maxAmount: 1
                    },
                    {
                        item: "minecraft:sulfur_cube_archetype_fast_sliding",
                        maxAmount: 1
                    },
                    {
                        item: "minecraft:sulfur_cube_archetype_slow_sliding",
                        maxAmount: 1
                    },
                    {
                        item: "minecraft:sulfur_cube_archetype_sticky",
                        maxAmount: 1
                    },
                    {
                        item: "minecraft:sulfur_cube_archetype_high_resistance",
                        maxAmount: 1
                    },
                    {
                        item: "minecraft:sulfur_cube_archetype_explosive",
                        maxAmount: 1
                    },
                    {
                        item: "minecraft:sulfur_cube_archetype_hot",
                        maxAmount: 1
                    }
                ]
            })
        ],
        "minecraft:sulfur_cube_medium_with_block": [
            new BPEntityComponents.SetUsesUniformAirDrag(),
            new BPEntityComponents.SetLeashable(),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetRotationAxisAligned(),
            new BPEntityComponents.SetNotPickableFromInside(),
            new BPEntityComponents.SetVariableMaxAutoStep({
                baseValue: 0,
                controlledValue: 0,
                jumpPreventedValue: 0
            }),
            new BPEntityComponents.SetBreathable({
                breathesLava: true,
                breathesWater: true,
                suffocateTime: 0,
                totalSupply: 15
            }),
            new BPEntityComponents.SetFreezingImmune(),
            new BPEntityComponents.SetMobEffectImmunity({
                mobEffects: ["poison"]
            }),
            new BPEntityComponents.SetDamageSensor({
                triggers: [
                    {
                        onDamage: {
                            filters: EntityFilters.hasComponent("minecraft:explode")
                        },
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "anvil",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        onDamage: {
                            event: "minecraft:try_priming_on_explosion"
                        },
                        cause: "block_explosion",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "charging",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "contact",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "entity_attack",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        onDamage: {
                            event: "minecraft:try_priming_on_explosion"
                        },
                        cause: "entity_explosion",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "fall",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "falling_block",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "freezing",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "piston",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        onDamage: {
                            filters: EntityFilters.onFire(true, "damager"),
                            event: "minecraft:try_priming"
                        },
                        cause: "projectile",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "projectile",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "ram_attack",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "stalactite",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "stalagmite",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "temperature",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "mace_smash",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        onDamage: {
                            event: "minecraft:try_priming"
                        },
                        cause: "fire",
                        dealsDamage: "yes"
                    },
                    {
                        onDamage: {
                            event: "minecraft:try_priming"
                        },
                        cause: "fire_tick",
                        dealsDamage: "yes"
                    },
                    {
                        onDamage: {
                            event: "minecraft:try_priming"
                        },
                        cause: "magma",
                        dealsDamage: "no_but_entity_effects_apply"
                    },
                    {
                        cause: "all",
                        dealsDamage: "yes"
                    }
                ]
            })
        ],
        "minecraft:sulfur_cube_medium_with_block_interactable": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "minecraft:try_priming",
                        filters: EntityFilters.allOf(
                            EntityFilters.isGameRule("tntexplodes"),
                            EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "explosive"),
                            EntityFilters.redstoneStrengthAtPosition(0, "self", ">")
                        )
                    }
                ]
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            target: "self"
                        },
                        hurtItem: 1,
                        dropItemSlot: "slot.weapon.mainhand",
                        interactText: "action.interact.take_sulfur_cube",
                        vibration: "shear"
                    },
                    {
                        equipItemSlot: "slot.weapon.mainhand",
                        interactText: "action.interact.give_sulfur_cube",
                        dropItemSlot: "slot.weapon.mainhand",
                        onInteract: {
                            target: "self",
                            filters: EntityFilters.allOf(
                                EntityFilters.anyOf(
                                    EntityFilters.hasEquipmentTag(
                                        "minecraft:sulfur_cube_archetype_bouncy",
                                        "main_hand",
                                        "other"
                                    ),
                                    EntityFilters.hasEquipmentTag(
                                        "minecraft:sulfur_cube_archetype_regular",
                                        "main_hand",
                                        "other"
                                    ),
                                    EntityFilters.hasEquipmentTag(
                                        "minecraft:sulfur_cube_archetype_slow_bouncy",
                                        "main_hand",
                                        "other"
                                    ),
                                    EntityFilters.hasEquipmentTag(
                                        "minecraft:sulfur_cube_archetype_slow_flat",
                                        "main_hand",
                                        "other"
                                    ),
                                    EntityFilters.hasEquipmentTag(
                                        "minecraft:sulfur_cube_archetype_fast_flat",
                                        "main_hand",
                                        "other"
                                    ),
                                    EntityFilters.hasEquipmentTag(
                                        "minecraft:sulfur_cube_archetype_light",
                                        "main_hand",
                                        "other"
                                    ),
                                    EntityFilters.hasEquipmentTag(
                                        "minecraft:sulfur_cube_archetype_fast_sliding",
                                        "main_hand",
                                        "other"
                                    ),
                                    EntityFilters.hasEquipmentTag(
                                        "minecraft:sulfur_cube_archetype_slow_sliding",
                                        "main_hand",
                                        "other"
                                    ),
                                    EntityFilters.hasEquipmentTag(
                                        "minecraft:sulfur_cube_archetype_sticky",
                                        "main_hand",
                                        "other"
                                    ),
                                    EntityFilters.hasEquipmentTag(
                                        "minecraft:sulfur_cube_archetype_high_resistance",
                                        "main_hand",
                                        "other"
                                    ),
                                    EntityFilters.hasEquipmentTag(
                                        "minecraft:sulfur_cube_archetype_explosive",
                                        "main_hand",
                                        "other"
                                    ),
                                    EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_hot", "main_hand", "other")
                                ),
                                EntityFilters.hasSameEquipmentInSlotAs(false, "main_hand", "other")
                            )
                        }
                    },
                    {
                        onInteract: {
                            event: "minecraft:try_priming",
                            filters: EntityFilters.allOf(
                                EntityFilters.isGameRule("tntexplodes"),
                                EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "explosive"),
                                EntityFilters.hasEquipment("flint_and_steel", "hand", "other")
                            )
                        },
                        hurtItem: 1,
                        interactText: "action.interact.creeper",
                        playSounds: ["fuse"],
                        swing: true
                    },
                    {
                        onInteract: {
                            event: "minecraft:try_priming",
                            filters: EntityFilters.allOf(
                                EntityFilters.isGameRule("tntexplodes"),
                                EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "explosive"),
                                EntityFilters.hasEquipment("fireball:0", "hand", "other")
                            )
                        },
                        useItem: true,
                        interactText: "action.interact.creeper",
                        playSounds: ["fuse"],
                        swing: true
                    }
                ]
            })
        ],
        "minecraft:sulfur_cube_medium_primed": [
            new BPEntityComponents.SetExplode({
                causesFire: false,
                destroyAffectedByGriefing: true,
                fuseLit: true,
                power: 3,
                fuseLength: 6
            })
        ],
        "minecraft:sulfur_cube_medium_primed_by_explosion": [
            new BPEntityComponents.SetExplode({
                causesFire: false,
                destroyAffectedByGriefing: true,
                fuseLit: true,
                power: 3,
                fuseLength: {
                    rangeMax: 3,
                    rangeMin: 0.75
                }
            })
        ],
        "minecraft:sulfur_cube_medium_without_block_can_pickup": [
            new BPEntityComponents.SetBehaviorPickupItems({
                priority: 3,
                maxDist: 8,
                goalRadius: 2,
                onPickupItemStart: {
                    event: "minecraft:on_gain_target"
                },
                onPickupItemEnd: {
                    event: "minecraft:on_lose_target"
                },
                stopIfHoldingItem: true
            })
        ],
        "minecraft:sulfur_cube_medium_without_block_pickup_timeout": [
            new BPEntityComponents.SetTimer({
                looping: false,
                time: 5,
                timeDownEvent: {
                    event: "minecraft:on_pickup_timeout",
                    target: "self"
                }
            })
        ],
        "minecraft:sulfur_cube_without_target": [
            new BPEntityComponents.SetMovementJump({
                jump_delay: [0.5, 1.5]
            })
        ],
        "minecraft:sulfur_cube_with_target": [
            new BPEntityComponents.SetMovementJump({
                jump_delay: [0.16, 0.5]
            })
        ],
        "minecraft:sulfur_cube_bouncy": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 3,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0.2,
                        playSoundCooldownInSeconds: 0.7
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: -2
            }),
            new BPEntityComponents.SetBounciness({
                value: 0.9
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 0.3
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 0.01
            }),
            new BPEntityComponents.SetBuoyant({
                baseBuoyancy: 1,
                applyGravity: false,
                canAutoStepFromLiquid: true,
                movementType: "bobbing",
                liquidBlocks: [
                    "minecraft:water",
                    "minecraft:flowing_water",
                    "minecraft:lava",
                    "minecraft:flowing_lava"
                ]
            })
        ],
        "minecraft:sulfur_cube_regular": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 2,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0.1,
                        playSoundCooldownInSeconds: 0.7
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: -1
            }),
            new BPEntityComponents.SetBounciness({
                value: 0.5
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 0.3
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 0.1
            }),
            new BPEntityComponents.SetBuoyant({
                baseBuoyancy: 1,
                applyGravity: false,
                canAutoStepFromLiquid: true,
                movementType: "bobbing",
                liquidBlocks: [
                    "minecraft:water",
                    "minecraft:flowing_water",
                    "minecraft:lava",
                    "minecraft:flowing_lava"
                ]
            })
        ],
        "minecraft:sulfur_cube_slow_bouncy": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 0.3,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0,
                        playSoundCooldownInSeconds: 0.7
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: 0.4
            }),
            new BPEntityComponents.SetBounciness({
                value: 0.6
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 0.3
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 0.05
            })
        ],
        "minecraft:sulfur_cube_slow_flat": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 0.3,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0,
                        playSoundCooldownInSeconds: 0.7
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: 0.5
            }),
            new BPEntityComponents.SetBounciness({
                value: 0.4
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 0.4
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 0.1
            })
        ],
        "minecraft:sulfur_cube_fast_flat": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 3,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0.2,
                        playSoundCooldownInSeconds: 0.7
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: -1
            }),
            new BPEntityComponents.SetBounciness({
                value: 0.5
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 0.2
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 0.01
            })
        ],
        "minecraft:sulfur_cube_light": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 2,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0.1,
                        playSoundCooldownInSeconds: 0.7
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: -1
            }),
            new BPEntityComponents.SetBounciness({
                value: 1
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 0.3
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 1.8
            }),
            new BPEntityComponents.SetBuoyant({
                baseBuoyancy: 1,
                applyGravity: false,
                canAutoStepFromLiquid: true,
                movementType: "bobbing",
                liquidBlocks: [
                    "minecraft:water",
                    "minecraft:flowing_water",
                    "minecraft:lava",
                    "minecraft:flowing_lava"
                ]
            })
        ],
        "minecraft:sulfur_cube_fast_sliding": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 0.5,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0,
                        playSoundCooldownInSeconds: 0.4
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: 0.5
            }),
            new BPEntityComponents.SetBounciness({
                value: 0.1
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 0.05
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 0.01
            })
        ],
        "minecraft:sulfur_cube_slow_sliding": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 0.2,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0,
                        playSoundCooldownInSeconds: 1
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: 0.8
            }),
            new BPEntityComponents.SetBounciness({
                value: 0.1
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 0.05
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 0.01
            })
        ],
        "minecraft:sulfur_cube_sticky": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 3,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0.1,
                        playSoundCooldownInSeconds: 1
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: -2
            }),
            new BPEntityComponents.SetBounciness({
                value: 0
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 2
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 0.01
            })
        ],
        "minecraft:sulfur_cube_high_resistance": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 0.3,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0,
                        playSoundCooldownInSeconds: 2
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: 0.7
            }),
            new BPEntityComponents.SetBounciness({
                value: 0.2
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 1
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 0.01
            })
        ],
        "minecraft:sulfur_cube_explosive": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 2,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0,
                        playSoundCooldownInSeconds: 0.7
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: -1
            }),
            new BPEntityComponents.SetBounciness({
                value: 0.5
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 0.3
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 0.3
            }),
            new BPEntityComponents.SetBuoyant({
                baseBuoyancy: 1,
                applyGravity: false,
                canAutoStepFromLiquid: true,
                movementType: "bobbing",
                liquidBlocks: [
                    "minecraft:water",
                    "minecraft:flowing_water",
                    "minecraft:lava",
                    "minecraft:flowing_lava"
                ]
            })
        ],
        "minecraft:sulfur_cube_hot": [
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isControllingPassengerFamily("player", "other")
                        ),
                        pushMode: "ball",
                        minDistance: 0,
                        maxDistance: 1,
                        requireCollisionOverlap: false,
                        pushScaleSelf: 2,
                        pushScaleOther: 1,
                        kickSpeedScale: 0.3,
                        minKickSpeed: 0,
                        maxKickSpeed: 0.5,
                        verticalKickMultiplier: 0.3,
                        playSound: true,
                        playSoundImpulseThreshold: 0.1,
                        playSoundCooldownInSeconds: 0.7
                    }
                ]
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: -1
            }),
            new BPEntityComponents.SetBounciness({
                value: 0.5
            }),
            new BPEntityComponents.SetFrictionModifier({
                value: 0.3
            }),
            new BPEntityComponents.SetAirDragModifier({
                value: 0.1
            }),
            new BPEntityComponents.SetBuoyant({
                baseBuoyancy: 1,
                applyGravity: false,
                canAutoStepFromLiquid: true,
                movementType: "bobbing",
                liquidBlocks: [
                    "minecraft:water",
                    "minecraft:flowing_water",
                    "minecraft:lava",
                    "minecraft:flowing_lava"
                ]
            }),
            new BPEntityComponents.SetAreaAttack({
                cause: "magma",
                damageCooldown: 0,
                damagePerTick: 1,
                damageRange: 0.4,
                useSelfAsDamageSource: false,
                deathMessageOverride: "death.attack.sulfurCube.hot",
                entityFilter: EntityFilters.allOf(
                    EntityFilters.anyOf(
                        EntityFilters.isFamily('sulfur_cube', 'other', 'not'),
                        EntityFilters.anyOf(
                            EntityFilters.enumProperty('minecraft:sulfur_cube_archetype', 'explosive', 'other'),
                            EntityFilters.enumProperty('minecraft:sulfur_cube_archetype', 'none', 'other'),
                        )
                    ),
                    EntityFilters.allOf(
                        EntityFilters.anyOf(
                            EntityFilters.isFamily('mob', 'other'),
                            EntityFilters.isFamily('player', 'other')
                        ),
                        EntityFilters.actorHasItemWithEnchantmentInSlot('frost_walker', 7, 'other', 'not')
                    )
                )
            })
        ]
    },
    components: [
        new BPEntityComponents.SetCollisionBox({
            width: 0.98,
            height: 0.98
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetRendersWhenInvisible(),
        new BPEntityComponents.SetOffspring({
            blendAttributes: false,
            offspringPairs: {
                "minecraft:sulfur_cube": "minecraft:sulfur_cube"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetTypeFamily({
            family: ["sulfur_cube", "animal", "mob"]
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
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetEquipment({
            slotDropChance: [
                {
                    slot: "slot.weapon.mainhand",
                    dropChance: 1
                }
            ]
        }),
        new BPEntityComponents.SetOnEquipmentChanged({
            slots: [
                {
                    slot: "slot.weapon.mainhand",
                    onEquip: "minecraft:on_block_absorbed",
                    onUnequip: "minecraft:on_block_ejected"
                }
            ]
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 5,
                    trigger: "minecraft:spawn_small"
                },
                {
                    weight: 95,
                    trigger: "minecraft:spawn_medium"
                }
            ]
        },
        "minecraft:entity_born": {
            trigger: "minecraft:spawn_small"
        },
        "minecraft:spawn_small": {
            add: {
                componentGroups: [
                    "minecraft:sulfur_cube_ai",
                    "minecraft:sulfur_cube_small",
                    "minecraft:sulfur_cube_without_target"
                ]
            }
        },
        "minecraft:spawn_medium": {
            add: {
                componentGroups: [
                    "minecraft:sulfur_cube_ai",
                    "minecraft:sulfur_cube_medium",
                    "minecraft:sulfur_cube_medium_without_block",
                    "minecraft:sulfur_cube_medium_without_block_can_pickup",
                    "minecraft:sulfur_cube_without_target"
                ]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "none"
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:sulfur_cube_small"]
            },
            add: {
                componentGroups: [
                    "minecraft:sulfur_cube_medium",
                    "minecraft:sulfur_cube_medium_without_block",
                    "minecraft:sulfur_cube_medium_without_block_can_pickup"
                ]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "none"
            }
        },
        "minecraft:on_lose_target": {
            add: {
                componentGroups: ["minecraft:sulfur_cube_without_target"]
            },
            remove: {
                componentGroups: ["minecraft:sulfur_cube_with_target"]
            }
        },
        "minecraft:on_gain_target": {
            add: {
                componentGroups: ["minecraft:sulfur_cube_with_target"]
            },
            remove: {
                componentGroups: ["minecraft:sulfur_cube_without_target"]
            }
        },
        "minecraft:on_sheared": {
            dropItem: {
                slot: "slot.weapon.mainhand"
            }
        },
        "minecraft:on_pickup_timeout": {
            add: {
                componentGroups: ["minecraft:sulfur_cube_medium_without_block_can_pickup"]
            },
            remove: {
                componentGroups: ["minecraft:sulfur_cube_medium_without_block_pickup_timeout"]
            }
        },
        "minecraft:on_block_absorbed": {
            sequence: [
                {
                    remove: {
                        componentGroups: [
                            "minecraft:sulfur_cube_ai",
                            "minecraft:sulfur_cube_medium_without_block",
                            "minecraft:sulfur_cube_medium_without_block_can_pickup",
                            "minecraft:sulfur_cube_medium_without_block_pickup_timeout",
                            "minecraft:sulfur_cube_without_target",
                            "minecraft:sulfur_cube_with_target"
                        ]
                    },
                    add: {
                        componentGroups: [
                            "minecraft:sulfur_cube_medium_with_block",
                            "minecraft:sulfur_cube_medium_with_block_interactable"
                        ]
                    },
                    playSound: {
                        sound: "absorb_block"
                    }
                },
                {
                    filters: EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_bouncy", "main_hand"),
                    trigger: "minecraft:become_bouncy"
                },
                {
                    filters: EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_regular", "main_hand"),
                    trigger: "minecraft:become_regular"
                },
                {
                    filters: EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_slow_bouncy", "main_hand"),
                    trigger: "minecraft:become_slow_bouncy"
                },
                {
                    filters: EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_slow_flat", "main_hand"),
                    trigger: "minecraft:become_slow_flat"
                },
                {
                    filters: EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_fast_flat", "main_hand"),
                    trigger: "minecraft:become_fast_flat"
                },
                {
                    filters: EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_light", "main_hand"),
                    trigger: "minecraft:become_light"
                },
                {
                    filters: EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_fast_sliding", "main_hand"),
                    trigger: "minecraft:become_fast_sliding"
                },
                {
                    filters: EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_slow_sliding", "main_hand"),
                    trigger: "minecraft:become_slow_sliding"
                },
                {
                    filters: EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_sticky", "main_hand"),
                    trigger: "minecraft:become_sticky"
                },
                {
                    filters: EntityFilters.hasEquipmentTag(
                        "minecraft:sulfur_cube_archetype_high_resistance",
                        "main_hand"
                    ),
                    trigger: "minecraft:become_high_resistance"
                },
                {
                    filters: EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_explosive", "main_hand"),
                    trigger: "minecraft:become_explosive"
                },
                {
                    filters: EntityFilters.hasEquipmentTag("minecraft:sulfur_cube_archetype_hot", "main_hand"),
                    trigger: "minecraft:become_hot"
                }
            ]
        },
        "minecraft:on_block_ejected": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_medium_with_block",
                    "minecraft:sulfur_cube_medium_with_block_interactable",
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_explosive",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: [
                    "minecraft:sulfur_cube_ai",
                    "minecraft:sulfur_cube_medium_without_block",
                    "minecraft:sulfur_cube_medium_without_block_pickup_timeout",
                    "minecraft:sulfur_cube_without_target"
                ]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "none"
            },
            playSound: {
                sound: "eject_block"
            }
        },
        "minecraft:try_priming": {
            sequence: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isGameRule("tntexplodes"),
                        EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "explosive"),
                        EntityFilters.hasComponent("minecraft:explode", "self", "not")
                    ),
                    remove: {
                        componentGroups: ["minecraft:sulfur_cube_medium_with_block_interactable"]
                    },
                    add: {
                        componentGroups: ["minecraft:sulfur_cube_medium_primed"]
                    },
                    playSound: {
                        sound: "fuse"
                    }
                }
            ]
        },
        "minecraft:try_priming_on_explosion": {
            sequence: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isGameRule("tntexplodes"),
                        EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "explosive"),
                        EntityFilters.hasComponent("minecraft:explode", "self", "not")
                    ),
                    remove: {
                        componentGroups: ["minecraft:sulfur_cube_medium_with_block_interactable"]
                    },
                    add: {
                        componentGroups: ["minecraft:sulfur_cube_medium_primed_by_explosion"]
                    },
                    playSound: {
                        sound: "fuse"
                    }
                }
            ]
        },
        "minecraft:become_bouncy": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_explosive",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_bouncy"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "bouncy"
            }
        },
        "minecraft:become_regular": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_explosive",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_regular"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "regular"
            }
        },
        "minecraft:become_slow_bouncy": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_explosive",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_slow_bouncy"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "slow_bouncy"
            }
        },
        "minecraft:become_slow_flat": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_explosive",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_slow_flat"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "slow_flat"
            }
        },
        "minecraft:become_fast_flat": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_explosive",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_fast_flat"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "fast_flat"
            }
        },
        "minecraft:become_light": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_explosive",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_light"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "light"
            }
        },
        "minecraft:become_fast_sliding": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_explosive",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_fast_sliding"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "fast_sliding"
            }
        },
        "minecraft:become_slow_sliding": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_explosive",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_slow_sliding"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "slow_sliding"
            }
        },
        "minecraft:become_sticky": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_explosive",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_sticky"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "sticky"
            }
        },
        "minecraft:become_high_resistance": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_explosive",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_high_resistance"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "high_resistance"
            }
        },
        "minecraft:become_explosive": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_hot"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_explosive"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "explosive"
            }
        },
        "minecraft:become_hot": {
            remove: {
                componentGroups: [
                    "minecraft:sulfur_cube_bouncy",
                    "minecraft:sulfur_cube_regular",
                    "minecraft:sulfur_cube_slow_bouncy",
                    "minecraft:sulfur_cube_slow_flat",
                    "minecraft:sulfur_cube_fast_flat",
                    "minecraft:sulfur_cube_light",
                    "minecraft:sulfur_cube_fast_sliding",
                    "minecraft:sulfur_cube_slow_sliding",
                    "minecraft:sulfur_cube_sticky",
                    "minecraft:sulfur_cube_high_resistance",
                    "minecraft:sulfur_cube_explosive"
                ]
            },
            add: {
                componentGroups: ["minecraft:sulfur_cube_hot"]
            },
            setProperty: {
                "minecraft:sulfur_cube_archetype": "hot"
            }
        }
    }
});
