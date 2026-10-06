import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Happy Ghast para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const HappyGhastTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.HappyGhast,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    properties: {
        "minecraft:can_move": {
            clientSync: true,
            type: "bool",
            default: true
        }
    },
    componentsGroups: {
        "minecraft:baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.2375
            }),
            new BPEntityComponents.SetHealth({
                value: 20,
                max: 20
            }),
            new BPEntityComponents.SetBreathable({
                totalSupply: 5,
                suffocateTime: 0,
                breathesAir: true,
                breathesWater: true
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: ["minecraft:snowball"],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetPushableByEntity(),
            new BPEntityComponents.SetPushableByBlock(),
            new BPEntityComponents.SetMovement({
                value: 0.3
            }),
            new BPEntityComponents.SetFlyingSpeed({
                value: 0.0833333
            }),
            new BPEntityComponents.SetMovementHover(),
            new BPEntityComponents.SetNavigationHover({
                canPathOverWater: true,
                avoidDamageBlocks: true,
                canPathFromAir: true,
                avoidWater: true
            }),
            new BPEntityComponents.SetBehaviorFollowMob({
                priority: 6,
                searchRange: 16,
                stopDistance: 5,
                speedMultiplier: 1.1,
                useHomePositionRestriction: true,
                preferredActorType: "player",
                filters: EntityFilters.allOf(
                    EntityFilters.isUnderwater(false, "other"),
                    EntityFilters.isBaby(false, "other"),
                    EntityFilters.anyOf(
                        EntityFilters.isFamily("player", "other"),
                        EntityFilters.isFamily("armadillo", "other"),
                        EntityFilters.isFamily("bee", "other"),
                        EntityFilters.isFamily("camel", "other"),
                        EntityFilters.isFamily("cat", "other"),
                        EntityFilters.isFamily("chicken", "other"),
                        EntityFilters.isFamily("cow", "other"),
                        EntityFilters.isFamily("donkey", "other"),
                        EntityFilters.isFamily("fox", "other"),
                        EntityFilters.isFamily("goat", "other"),
                        EntityFilters.isFamily("happy_ghast", "other"),
                        EntityFilters.isFamily("horse", "other"),
                        EntityFilters.isFamily("skeleton_horse", "other"),
                        EntityFilters.isFamily("llama", "other"),
                        EntityFilters.isFamily("mule", "other"),
                        EntityFilters.isFamily("ocelot", "other"),
                        EntityFilters.isFamily("panda", "other"),
                        EntityFilters.isFamily("parrot", "other"),
                        EntityFilters.isFamily("pig", "other"),
                        EntityFilters.isFamily("polar_bear", "other"),
                        EntityFilters.isFamily("rabbit", "other"),
                        EntityFilters.isFamily("sheep", "other"),
                        EntityFilters.isFamily("sniffer", "other"),
                        EntityFilters.isFamily("strider", "other"),
                        EntityFilters.isFamily("villager", "other"),
                        EntityFilters.isFamily("villager_v2", "other"),
                        EntityFilters.isFamily("wolf", "other")
                    )
                )
            }),
            new BPEntityComponents.SetBehaviorPanic({
                priority: 2,
                speedMultiplier: 2
            }),
            new BPEntityComponents.SetBehaviorTempt({
                priority: 3,
                canTemptVertically: true,
                items: ["minecraft:snowball"],
                speedMultiplier: 1.25,
                withinRadius: 16,
                onTemptEnd: {
                    event: "minecraft:on_stop_tempting"
                }
            }),
            new BPEntityComponents.SetBehaviorRandomHover({
                priority: 8,
                xzDist: 8,
                yDist: 8,
                yOffset: -1,
                interval: 1,
                hoverHeight: {
                    min: 1,
                    max: 4
                }
            }),
            new BPEntityComponents.SetHome({
                restrictionRadius: 32,
                restrictionType: 'random_movement'
            })
        ],
        "minecraft:adult": [
            new BPEntityComponents.SetHealth({
                value: 20,
                max: 20
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBreathable({
                totalSupply: 5,
                suffocateTime: 0,
                breathesAir: true,
                breathesWater: false
            }),
            new BPEntityComponents.SetNavigationFloat({
                canPathOverWater: true,
                avoidDamageBlocks: true,
                avoidWater: true
            }),
            new BPEntityComponents.SetEntitySensor({
                findPlayersOnly: true,
                relativeRange: false,
                subsensors: [
                    {
                        event: "minecraft:become_mobile",
                        cooldown: 0,
                        yOffset: 4.5,
                        range: [3.5, 2],
                        minimumCount: 0,
                        maximumCount: 0,
                        eventFilters: EntityFilters.allOf(
                            EntityFilters.isVehicleFamily("happy_ghast", "other", "not"),
                            EntityFilters.actorHealth(0, "self", ">")
                        )
                    },
                    {
                        event: "minecraft:become_immobile",
                        cooldown: 0,
                        yOffset: 4.5,
                        range: [3, 1.5],
                        minimumCount: 1,
                        eventFilters: EntityFilters.allOf(
                            EntityFilters.isVehicleFamily("happy_ghast", "other", "not"),
                            EntityFilters.actorHealth(0, "self", ">")
                        )
                    }
                ]
            }),
            new BPEntityComponents.SetExperienceReward({
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            })
        ],
        "minecraft:adult_mobile": [
            new BPEntityComponents.SetMovement({
                value: 0.016
            }),
            new BPEntityComponents.SetFlyingSpeed({
                value: 0.016
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: 0
            }),
            new BPEntityComponents.SetPushableByEntity({
                presets: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("sulfur_cube", "other"),
                            EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "none", "other", "not"),
                            EntityFilters.isControllingPassengerFamily("player")
                        ),
                        pushMode: "none"
                    }
                ]
            }),
            new BPEntityComponents.SetPushableByBlock(),
            new BPEntityComponents.SetBehaviorFloatWander({
                priority: 7,
                mustReach: true,
                randomReselect: true,
                navigateAroundSurface: true,
                additionalCollisionBuffer: true,
                allowNavigatingThroughLiquids: false,
                useHomePositionRestriction: true,
                surfaceXzDist: 16,
                surfaceYDist: 16,
                floatDuration: {
                    min: 2,
                    max: 7
                }
            })
        ],
        "minecraft:adult_immobile": [
            new BPEntityComponents.SetMovement({
                value: 0
            }),
            new BPEntityComponents.SetFlyingSpeed({
                value: 0
            }),
            new BPEntityComponents.SetKnockbackResistance({
                value: 1
            }),
            new BPEntityComponents.SetPushableByBlock(),
            new BPEntityComponents.SetBodyRotationBlocked(),
            new BPEntityComponents.SetRotationAxisAligned(),
            new BPEntityComponents.SetIsCollidable()
        ],
        "minecraft:adult_unharnessed": [
            new BPEntityComponents.SetBehaviorFloatTempt({
                priority: 4,
                canTemptVertically: true,
                items: [
                    "minecraft:snowball",
                    "minecraft:black_harness",
                    "minecraft:blue_harness",
                    "minecraft:brown_harness",
                    "minecraft:cyan_harness",
                    "minecraft:gray_harness",
                    "minecraft:green_harness",
                    "minecraft:light_blue_harness",
                    "minecraft:light_gray_harness",
                    "minecraft:lime_harness",
                    "minecraft:magenta_harness",
                    "minecraft:orange_harness",
                    "minecraft:pink_harness",
                    "minecraft:purple_harness",
                    "minecraft:red_harness",
                    "minecraft:white_harness",
                    "minecraft:yellow_harness"
                ],
                withinRadius: 16,
                stopDistance: 7,
                onTemptEnd: {
                    event: "minecraft:on_stop_tempting"
                }
            }),
            new BPEntityComponents.SetHome({
                restrictionRadius: 64,
                restrictionType: 'random_movement'
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.anyOf(
                                EntityFilters.hasEquipment("black_harness", "hand", "other"),
                                EntityFilters.hasEquipment("blue_harness", "hand", "other"),
                                EntityFilters.hasEquipment("brown_harness", "hand", "other"),
                                EntityFilters.hasEquipment("cyan_harness", "hand", "other"),
                                EntityFilters.hasEquipment("gray_harness", "hand", "other"),
                                EntityFilters.hasEquipment("green_harness", "hand", "other"),
                                EntityFilters.hasEquipment("light_blue_harness", "hand", "other"),
                                EntityFilters.hasEquipment("light_gray_harness", "hand", "other"),
                                EntityFilters.hasEquipment("lime_harness", "hand", "other"),
                                EntityFilters.hasEquipment("magenta_harness", "hand", "other"),
                                EntityFilters.hasEquipment("orange_harness", "hand", "other"),
                                EntityFilters.hasEquipment("pink_harness", "hand", "other"),
                                EntityFilters.hasEquipment("purple_harness", "hand", "other"),
                                EntityFilters.hasEquipment("red_harness", "hand", "other"),
                                EntityFilters.hasEquipment("white_harness", "hand", "other"),
                                EntityFilters.hasEquipment("yellow_harness", "hand", "other")
                            ),
                            event: "minecraft:on_harnessed",
                            target: "self"
                        },
                        useItem: true,
                        equipItemSlot: "slot.armor.body",
                        playSounds: ["armor.equip_generic"],
                        interactText: "action.interact.equipharness"
                    }
                ]
            })
        ],
        "minecraft:adult_harnessed": [
            new BPEntityComponents.SetHome({
                restrictionRadius: 32,
                restrictionType: 'random_movement'
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 4,
                familyTypes: ["player"],
                dismountMode: "on_top_center",
                onRiderEnterEvent: "minecraft:on_passenger_mount",
                onRiderExitEvent: "minecraft:on_passenger_dismount",
                interactText: "action.interact.ride.horse",
                seats: [
                    {
                        minRiderCount: 0,
                        maxRiderCount: 4,
                        position: [0, 3.8, 1.7],
                        thirdPersonCameraRadius: 8,
                        cameraRelaxDistanceSmoothing: 6
                    },
                    {
                        minRiderCount: 1,
                        maxRiderCount: 4,
                        position: [-1.7, 3.8, 0],
                        thirdPersonCameraRadius: 8,
                        cameraRelaxDistanceSmoothing: 6
                    },
                    {
                        minRiderCount: 2,
                        maxRiderCount: 4,
                        position: [0, 3.8, -1.7],
                        thirdPersonCameraRadius: 8,
                        cameraRelaxDistanceSmoothing: 6
                    },
                    {
                        minRiderCount: 3,
                        maxRiderCount: 4,
                        position: [1.7, 3.8, 0],
                        thirdPersonCameraRadius: 8,
                        cameraRelaxDistanceSmoothing: 6
                    }
                ]
            }),
            new BPEntityComponents.SetFreeCameraControlled({
                strafeSpeedModifier: 1,
                backwardsMovementModifier: 0.5
            }),
            new BPEntityComponents.SetVerticalMovementAction({
                verticalVelocity: 0.5
            }),
            new BPEntityComponents.SetBehaviorPlayerRideTamed({
                priority: 1
            }),
            new BPEntityComponents.SetBehaviorFloatTempt({
                priority: 5,
                canTemptVertically: true,
                items: ["minecraft:snowball"],
                withinRadius: 16,
                stopDistance: 7,
                onTemptEnd: {
                    event: "minecraft:on_stop_tempting"
                }
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.isSneakHeld(false, "other"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.riderCount(0)
                            ),
                            event: "minecraft:on_unharnessed",
                            target: "self"
                        },
                        hurtItem: 1,
                        dropItemSlot: "slot.armor.body",
                        dropItemYOffset: 5,
                        playSounds: ["armor.unequip_generic"],
                        interactText: "action.interact.removeharness",
                        vibration: "shear"
                    }
                ]
            })
        ],
        "minecraft:adult_with_passengers": [
            new BPEntityComponents.SetAmbientSoundInterval({
                minRandomCooldownSound: 30
            })
        ],
        "minecraft:adult_without_passengers": [
            new BPEntityComponents.SetAmbientSoundInterval({
                minRandomCooldownSound: 5
            })
        ]
    },
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["happy_ghast", "mob"]
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 4,
            height: 4
        }),
        new BPEntityComponents.SetPhysics({
            hasGravity: false
        }),
        new BPEntityComponents.SetCanFly(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetFollowRange({
            value: 16,
            max: 16
        }),
        new BPEntityComponents.SetIsTamed(),
        new BPEntityComponents.SetLeashable({
            onUnleash: {
                event: "minecraft:on_unleashed",
                target: "self"
            },
            presets: [
                {
                    hardDistance: 10,
                    maxDistance: 14
                }
            ]
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:happy_ghast": "minecraft:happy_ghast"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    filters: EntityFilters.inLava(),
                    cause: "lava",
                    damagePerTick: 4
                }
            ]
        }),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetRendersWhenInvisible(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBodyRotationAlwaysFollowsHead()
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
                    trigger: "minecraft:spawn_baby"
                }
            ]
        },
        "minecraft:entity_born": {
            trigger: "minecraft:spawn_baby"
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: [
                    "minecraft:adult",
                    "minecraft:adult_mobile",
                    "minecraft:adult_unharnessed",
                    "minecraft:adult_without_passengers"
                ]
            },
            setProperty: {
                "minecraft:can_move": true
            }
        },
        "minecraft:spawn_baby": {
            add: {
                componentGroups: ["minecraft:baby"]
            }
        },
        "minecraft:ageable_grow_up": {
            add: {
                componentGroups: [
                    "minecraft:adult",
                    "minecraft:adult_mobile",
                    "minecraft:adult_unharnessed",
                    "minecraft:adult_without_passengers"
                ]
            },
            remove: {
                componentGroups: ["minecraft:baby"]
            },
            setProperty: {
                "minecraft:can_move": true
            }
        },
        "minecraft:become_immobile": {
            sequence: [
                {
                    filters: EntityFilters.boolProperty("minecraft:can_move"),
                    add: {
                        componentGroups: ["minecraft:adult_immobile"]
                    },
                    remove: {
                        componentGroups: ["minecraft:adult_mobile"]
                    },
                    setProperty: {
                        "minecraft:can_move": false
                    },
                    stopMovement: {}
                }
            ]
        },
        "minecraft:become_mobile": {
            sequence: [
                {
                    filters: EntityFilters.boolProperty("minecraft:can_move", false),
                    add: {
                        componentGroups: ["minecraft:adult_mobile"]
                    },
                    remove: {
                        componentGroups: ["minecraft:adult_immobile"]
                    },
                    setProperty: {
                        "minecraft:can_move": true
                    }
                }
            ]
        },
        "minecraft:on_harnessed": {
            remove: {
                componentGroups: ["minecraft:adult_unharnessed"]
            },
            add: {
                componentGroups: ["minecraft:adult_harnessed"]
            },
            setHomePosition: {}
        },
        "minecraft:on_unharnessed": {
            remove: {
                componentGroups: ["minecraft:adult_harnessed"]
            },
            add: {
                componentGroups: ["minecraft:adult_unharnessed"]
            },
            setHomePosition: {}
        },
        "minecraft:on_unleashed": {
            setHomePosition: {}
        },
        "minecraft:on_passenger_mount": {
            sequence: [
                {
                    filters: EntityFilters.riderCount(1),
                    add: {
                        componentGroups: ["minecraft:adult_with_passengers"]
                    },
                    remove: {
                        componentGroups: ["minecraft:adult_without_passengers"]
                    },
                    playSound: {
                        sound: "attach"
                    }
                }
            ]
        },
        "minecraft:on_passenger_dismount": {
            sequence: [
                {
                    filters: EntityFilters.riderCount(0),
                    add: {
                        componentGroups: ["minecraft:adult_without_passengers"]
                    },
                    remove: {
                        componentGroups: ["minecraft:adult_with_passengers"]
                    },
                    playSound: {
                        sound: "detach"
                    }
                },
                {
                    setHomePosition: {},
                    trigger: "minecraft:on_player_detected_above"
                }
            ]
        },
        "minecraft:on_stop_tempting": {
            setHomePosition: {}
        }
    }
});
