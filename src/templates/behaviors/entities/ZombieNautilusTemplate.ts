import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Zombie Nautilo para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const ZombieNautilusTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.ZombieNautilus,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    properties: {
        "minecraft:variant": {
            clientSync: true,
            type: "enum",
            default: "default",
            values: ["default", "coral"]
        }
    },
    componentsGroups: {
        "minecraft:zombie_nautilus_ai_controlled": [
            new BPEntityComponents.SetMovement({
                value: 0.15
            }),
            new BPEntityComponents.SetUnderwaterMovement({
                value: 0.1
            })
        ],
        "minecraft:zombie_nautilus_tame_saddled": [
            new BPEntityComponents.SetBehaviorPlayerRideTamed({
                priority: 0
            }),
            new BPEntityComponents.SetHome({
                restrictionRadius: 16,
                restrictionType: 'random_movement'
            }),
            new BPEntityComponents.SetIsSaddled()
        ],
        "minecraft:zombie_nautilus_leashable": [
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
            })
        ],
        "minecraft:zombie_nautilus_player_controlled": [
            new BPEntityComponents.SetMovement({
                value: 0.015
            }),
            new BPEntityComponents.SetUnderwaterMovement({
                value: 0.055
            })
        ],
        "minecraft:zombie_nautilus_tame_saddled_in_water": [
            new BPEntityComponents.SetDashAction({
                canDashUnderwater: true,
                verticalMomentum: 0.1,
                cooldownTime: 2,
                horizontalMomentum: 154,
                direction: "passenger"
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "minecraft:on_saddled_out_of_water",
                        filters: EntityFilters.inWater(false)
                    }
                ]
            }),
            new BPEntityComponents.SetFreeCameraControlled({
                backwardsMovementModifier: 0.5,
                strafeSpeedModifier: 0.7
            }),
            new BPEntityComponents.SetMobEffect({
                ambient: true,
                mobEffect: "breath_of_the_nautilus",
                effectRange: 1.6,
                effectTime: 2,
                entityFilter: EntityFilters.allOf(
                    EntityFilters.isFamily("player", "other"),
                    EntityFilters.isRidingSelf(true, "other")
                )
            }),
            new BPEntityComponents.SetUnderwaterMountBreathing()
        ],
        "minecraft:zombie_nautilus_tame": [
            new BPEntityComponents.SetBehaviorTempt({
                items: [
                    "pufferfish_bucket",
                    "cod_bucket",
                    "salmon_bucket",
                    "tropical_fish_bucket",
                    "pufferfish",
                    "fish",
                    "salmon",
                    "clownfish",
                    "cooked_fish",
                    "cooked_salmon"
                ],
                onTemptEnd: {
                    event: "minecraft:on_stop_tempting"
                },
                priority: 2,
                speedMultiplier: 1.3
            }),
            new BPEntityComponents.SetEquippable({
                slots: [
                    {
                        acceptedItems: ["saddle"],
                        item: "saddle",
                        onEquip: {
                            event: "minecraft:on_saddled"
                        },
                        onUnequip: {
                            event: "minecraft:on_unsaddled"
                        },
                        slot: 0
                    },
                    {
                        acceptedItems: [
                            "minecraft:copper_nautilus_armor",
                            "minecraft:iron_nautilus_armor",
                            "minecraft:golden_nautilus_armor",
                            "minecraft:diamond_nautilus_armor",
                            "minecraft:netherite_nautilus_armor"
                        ],
                        item: "nautilusarmor",
                        onEquip: {
                            event: "minecraft:on_armor_equip"
                        },
                        slot: 1
                    }
                ]
            }),
            new BPEntityComponents.SetHealable({
                items: [
                    {
                        healAmount: 2,
                        item: "pufferfish_bucket",
                        resultItem: "water_bucket:0"
                    },
                    {
                        healAmount: 4,
                        item: "cod_bucket",
                        resultItem: "water_bucket:0"
                    },
                    {
                        healAmount: 4,
                        item: "salmon_bucket",
                        resultItem: "water_bucket:0"
                    },
                    {
                        healAmount: 2,
                        item: "tropical_fish_bucket",
                        resultItem: "water_bucket:0"
                    },
                    {
                        healAmount: 4,
                        item: "fish"
                    },
                    {
                        healAmount: 4,
                        item: "salmon"
                    },
                    {
                        healAmount: 2,
                        item: "clownfish"
                    },
                    {
                        healAmount: 2,
                        item: "pufferfish"
                    },
                    {
                        healAmount: 10,
                        item: "cooked_fish"
                    },
                    {
                        healAmount: 12,
                        item: "cooked_salmon"
                    }
                ]
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        equipItemSlot: "0",
                        interactText: "action.interact.saddle",
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("saddle", "inventory", "self", "not"),
                                EntityFilters.hasEquipment("saddle", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            target: "self"
                        }
                    },
                    {
                        dropItemSlot: "0",
                        hurtItem: 1,
                        interactText: "action.interact.removesaddle",
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.riderCount(0),
                                EntityFilters.hasEquipment("saddle", "inventory"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            target: "self"
                        },
                        playSounds: ["unsaddle"],
                        vibration: "shear"
                    },
                    {
                        equipItemSlot: "1",
                        interactText: "action.interact.equipnautilusarmor",
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipmentTag("minecraft:nautilus_armor", "inventory", "self", "not"),
                                EntityFilters.hasEquipmentTag("minecraft:nautilus_armor", "hand", "player"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            target: "self"
                        }
                    },
                    {
                        dropItemSlot: "1",
                        dropItemYOffset: 1.1,
                        hurtItem: 1,
                        interactText: "action.interact.removenautilusarmor",
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.riderCount(0),
                                EntityFilters.hasEquipmentTag("minecraft:nautilus_armor", "inventory"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            )
                        },
                        playSounds: ["armor.unequip_generic"],
                        vibration: "shear"
                    }
                ]
            }),
            new BPEntityComponents.SetInventory({
                containerType: "horse"
            }),
            new BPEntityComponents.SetIsTamed(),
            new BPEntityComponents.SetRideable({
                crouchingSkipInteract: true,
                familyTypes: ["player"],
                interactText: "action.interact.ride.horse",
                onRiderExitEvent: "minecraft:on_player_dismount",
                onRiderEnterEvent: "minecraft:on_player_mount",
                seats: [
                    {
                        position: [0, 0.925, 0],
                        thirdPersonCameraRadius: 7
                    }
                ],
                seatCount: 1
            })
        ],
        "minecraft:zombie_nautilus_tame_saddled_on_ground": [
            new BPEntityComponents.SetDashAction({
                canDashUnderwater: false,
                verticalMomentum: 0.1,
                cooldownTime: 2,
                horizontalMomentum: 42,
                direction: "passenger"
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "minecraft:on_saddled_in_water",
                        filters: EntityFilters.inWater()
                    }
                ]
            }),
            new BPEntityComponents.SetInputGroundControlled()
        ],
        "minecraft:zombie_nautilus_tame_unsaddled": [
            new BPEntityComponents.SetHome({
                restrictionRadius: 32,
                restrictionType: 'random_movement'
            })
        ],
        "minecraft:zombie_nautilus_tameable": [
            new BPEntityComponents.SetBehaviorTempt({
                items: ["pufferfish", "pufferfish_bucket"],
                onTemptEnd: {
                    event: "minecraft:on_stop_tempting"
                },
                priority: 2,
                speedMultiplier: 1.3
            }),
            new BPEntityComponents.SetTameable({
                probability: 0.33,
                tameEvent: {
                    event: "minecraft:on_tame",
                    target: "self"
                },
                tameItems: [
                    {
                        item: "pufferfish_bucket",
                        resultItem: "water_bucket:0"
                    },
                    "pufferfish"
                ]
            })
        ],
        "minecraft:zombie_nautilus_wild": [
            new BPEntityComponents.SetRideable({
                familyTypes: ["drowned"],
                onRiderEnterEvent: "minecraft:on_drowned_mount",
                seats: [
                    {
                        position: [0, 0.925, -0.2]
                    }
                ],
                onRiderExitEvent: "minecraft:on_drowned_dismount",
                pullInEntities: true,
                seatCount: 1
            })
        ],
        "minecraft:zombie_nautilus_wild_angry": [
            new BPEntityComponents.SetAngry({
                broadcastAnger: false,
                broadcastAngerWhenDying: false,
                broadcastRange: 16,
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                },
                duration: 20
            }),
            new BPEntityComponents.SetBehaviorAquaticChargeAttack({
                chargeSpeed: 0.96,
                chargeCooldownTime: {
                    min: 4,
                    max: 4
                },
                priority: 2
            })
        ],
        "minecraft:zombie_nautilus_wild_calm": [
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:become_angry",
                target: "self"
            })
        ],
        "minecraft:zombie_nautilus_wild_mounted": [
            new BPEntityComponents.SetBehaviorMountPathing({
                priority: 3,
                targetDist: 2,
                speedMultiplier: 1,
                trackTarget: true
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    event: "minecraft:on_drowned_dismount",
                    filters: EntityFilters.riderCount(0)
                }
            }),
            new BPEntityComponents.SetMovement({
                value: 0.15
            }),
            new BPEntityComponents.SetUnderwaterMovement({
                value: 0.15
            })
        ],
        "minecraft:zombie_nautilus_wild_unmounted": [
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                reselectTargets: true,
                attackInterval: {
                    min: 120,
                    max: 180
                },
                targetAcquisitionProbability: 0.5,
                mustSee: true,
                withinRadius: 25,
                mustSeeForgetDuration: 17,
                entityTypes: [
                    {
                        filters: EntityFilters.anyOf(EntityFilters.isFamily("pufferfish", "other")),
                        maxDist: 35
                    }
                ],
                priority: 5
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAmbientSoundInterval({
            soundEvents: [
                {
                    soundID: "ambient.in.water",
                    condition: `${MoLang.headIsInWater()}`
                }
            ],
            minRandomCooldownSound: 8,
            maxRandomCooldownSound: 16
        }),
        new BPEntityComponents.SetAttack({
            damage: 3
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorRandomSwim({
            interval: 0,
            xzDist: 16,
            priority: 4,
            speedMultiplier: 1.5,
            yDist: 4
        }),
        new BPEntityComponents.SetBehaviorSwimIdle({
            priority: 6
        }),
        new BPEntityComponents.SetBehaviorSwimWander({
            interval: 10,
            lookAhead: 2,
            speedMultiplier: 1.5,
            priority: 5
        }),
        new BPEntityComponents.SetBreathable({
            breathesAir: true,
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetBurnsInDaylight({
            protectionSlot: "slot.armor.body"
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.95,
            width: 0.875
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {
                maxDistance: 40,
                minDistance: 32
            }
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
        }),
        new BPEntityComponents.SetHealth({
            max: 15,
            value: 15
        }),
        new BPEntityComponents.SetHome(),
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
        new BPEntityComponents.SetKnockbackResistance({
            value: 0.3
        }),
        new BPEntityComponents.SetLeashableTo(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/zombie_nautilus.json"
        }),
        new BPEntityComponents.SetMobEffectImmunity({
            mobEffects: ["poison"]
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
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity({
            presets: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("sulfur_cube", "other"),
                        EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "none", "other", "not"),
                        EntityFilters.isControllingPassengerFamily("player")
                    ),
                    pushMode: "none",
                    requireCollisionOverlap: false
                }
            ]
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "zombie_nautilus", "undead", "monster", "mob"]
        })
    ],
    events: {
        "minecraft:on_saddled_in_water": {
            add: {
                componentGroups: ["minecraft:zombie_nautilus_tame_saddled_in_water"]
            },
            remove: {
                componentGroups: ["minecraft:zombie_nautilus_tame_saddled_on_ground"]
            }
        },
        "minecraft:on_drowned_dismount": {
            add: {
                componentGroups: [
                    "minecraft:zombie_nautilus_wild_unmounted",
                    "minecraft:zombie_nautilus_leashable",
                    "minecraft:zombie_nautilus_tameable",
                    "minecraft:zombie_nautilus_ai_controlled"
                ]
            },
            remove: {
                componentGroups: ["minecraft:zombie_nautilus_wild_mounted"]
            }
        },
        "minecraft:on_saddled": {
            sequence: [
                {
                    filters: EntityFilters.riderCount(0, "self", ">"),
                    trigger: "minecraft:switch_to_player_controlled"
                },
                {
                    add: {
                        componentGroups: ["minecraft:zombie_nautilus_tame_saddled"]
                    },
                    remove: {
                        componentGroups: ["minecraft:zombie_nautilus_tame_unsaddled"]
                    },
                    setHomePosition: {}
                },
                {
                    filters: EntityFilters.inWater(),
                    trigger: "minecraft:on_saddled_in_water"
                },
                {
                    filters: EntityFilters.inWater(false),
                    trigger: "minecraft:on_saddled_out_of_water"
                },
                {
                    playSound: {
                        sound: "saddle"
                    }
                }
            ]
        },
        "minecraft:become_angry": {
            add: {
                componentGroups: ["minecraft:zombie_nautilus_wild_angry"]
            },
            remove: {
                componentGroups: [
                    "minecraft:zombie_nautilus_wild_calm",
                    "minecraft:zombie_nautilus_leashable",
                    "minecraft:zombie_nautilus_tameable"
                ]
            }
        },
        "minecraft:on_armor_equip": {
            playSound: {
                sound: "armor.equip_generic"
            }
        },
        "minecraft:entity_spawned": {
            sequence: [
                {
                    trigger: "minecraft:spawn_wild"
                },
                {
                    firstValid: [
                        {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasBiomeTag("ocean"),
                                EntityFilters.hasBiomeTag("warm"),
                                EntityFilters.hasBiomeTag("deep", "self", "not")
                            ),
                            setProperty: {
                                "minecraft:variant": "coral"
                            }
                        }
                    ]
                }
            ]
        },
        "minecraft:on_player_dismount": {
            setHomePosition: {},
            trigger: "minecraft:switch_to_ai_controlled"
        },
        "minecraft:on_calm": {
            add: {
                componentGroups: [
                    "minecraft:zombie_nautilus_wild_calm",
                    "minecraft:zombie_nautilus_leashable",
                    "minecraft:zombie_nautilus_tameable"
                ]
            },
            remove: {
                componentGroups: ["minecraft:zombie_nautilus_wild_angry"]
            }
        },
        "minecraft:on_unleashed": {
            setHomePosition: {}
        },
        "minecraft:on_drowned_mount": {
            add: {
                componentGroups: ["minecraft:zombie_nautilus_wild_mounted"]
            },
            remove: {
                componentGroups: [
                    "minecraft:zombie_nautilus_wild_unmounted",
                    "minecraft:zombie_nautilus_leashable",
                    "minecraft:zombie_nautilus_tameable",
                    "minecraft:zombie_nautilus_ai_controlled"
                ]
            }
        },
        "minecraft:on_player_mount": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:is_saddled"),
                    trigger: "minecraft:switch_to_player_controlled"
                }
            ]
        },
        "minecraft:on_saddled_out_of_water": {
            add: {
                componentGroups: ["minecraft:zombie_nautilus_tame_saddled_on_ground"]
            },
            remove: {
                componentGroups: ["minecraft:zombie_nautilus_tame_saddled_in_water"]
            }
        },
        "minecraft:on_stop_tempting": {
            setHomePosition: {}
        },
        "minecraft:on_tame": {
            add: {
                componentGroups: ["minecraft:zombie_nautilus_tame", "minecraft:zombie_nautilus_tame_unsaddled"]
            },
            remove: {
                componentGroups: [
                    "minecraft:zombie_nautilus_wild",
                    "minecraft:zombie_nautilus_wild_unmounted",
                    "minecraft:zombie_nautilus_wild_calm",
                    "minecraft:zombie_nautilus_tameable",
                    "minecraft:zombie_nautilus_ai_controlled"
                ]
            },
            setHomePosition: {}
        },
        "minecraft:on_unsaddled": {
            sequence: [
                {
                    filters: EntityFilters.riderCount(0, "self", ">"),
                    trigger: "minecraft:on_player_dismount"
                },
                {
                    add: {
                        componentGroups: ["minecraft:zombie_nautilus_tame_unsaddled"]
                    },
                    remove: {
                        componentGroups: [
                            "minecraft:zombie_nautilus_tame_saddled",
                            "minecraft:zombie_nautilus_tame_saddled_in_water",
                            "minecraft:zombie_nautilus_tame_saddled_on_ground"
                        ]
                    },
                    setHomePosition: {}
                }
            ]
        },
        "minecraft:spawn_tame": {
            add: {
                componentGroups: [
                    "minecraft:zombie_nautilus_tame",
                    "minecraft:zombie_nautilus_tame_unsaddled",
                    "minecraft:zombie_nautilus_leashable",
                    "minecraft:zombie_nautilus_ai_controlled"
                ]
            }
        },
        "minecraft:spawn_wild": {
            add: {
                componentGroups: [
                    "minecraft:zombie_nautilus_wild",
                    "minecraft:zombie_nautilus_wild_unmounted",
                    "minecraft:zombie_nautilus_wild_calm",
                    "minecraft:zombie_nautilus_leashable",
                    "minecraft:zombie_nautilus_tameable",
                    "minecraft:zombie_nautilus_ai_controlled"
                ]
            }
        },
        "minecraft:switch_to_ai_controlled": {
            add: {
                componentGroups: ["minecraft:zombie_nautilus_ai_controlled"]
            },
            remove: {
                componentGroups: ["minecraft:zombie_nautilus_player_controlled"]
            }
        },
        "minecraft:switch_to_player_controlled": {
            add: {
                componentGroups: ["minecraft:zombie_nautilus_player_controlled"]
            },
            remove: {
                componentGroups: ["minecraft:zombie_nautilus_ai_controlled"]
            }
        }
    }
});
