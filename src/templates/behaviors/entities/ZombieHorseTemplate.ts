import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Zoglin para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const ZombieHorseTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.ZombieHorse,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSpawneable: true,
        isSummonable: true
    },
    properties: {
        "minecraft:was_upgraded_to_1_21_130": {
            clientSync: false,
            type: "bool",
            default: false
        }
    },
    componentsGroups: {
        "minecraft:horse_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 1.96,
                height: 2.24
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 4,
                speedMultiplier: 1
            })
        ],
        "minecraft:horse_adult": [
            new BPEntityComponents.SetCollisionBox({
                width: 1.4,
                height: 1.6
            }),
            new BPEntityComponents.SetExperienceReward({
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/zombie_horse.json"
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetEquippable({
                slots: [
                    {
                        slot: 0,
                        item: "saddle",
                        acceptedItems: ["saddle"],
                        onEquip: {
                            event: "minecraft:horse_saddled"
                        },
                        onUnequip: {
                            event: "minecraft:horse_unsaddled"
                        }
                    },
                    {
                        slot: 1,
                        item: "horsearmoriron",
                        acceptedItems: [
                            "horsearmorleather",
                            "horsearmoriron",
                            "horsearmorgold",
                            "horsearmordiamond",
                            "minecraft:copper_horse_armor",
                            "minecraft:netherite_horse_armor"
                        ]
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorRunAroundLikeCrazy({
                priority: 1,
                speedMultiplier: 1.2
            }),
            new BPEntityComponents.SetBehaviorMountPathing({
                priority: 2,
                speedMultiplier: 1.5,
                targetDist: 0,
                trackTarget: true
            })
        ],
        "minecraft:horse_wild": [
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["player", "zombie_rider", "baby_undead"],
                interactText: "action.interact.mount",
                seats: [
                    {
                        position: [0, 1.1, -0.2]
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorMountPathing({
                priority: 2,
                speedMultiplier: 1.5,
                targetDist: 0,
                trackTarget: true
            }),
            new BPEntityComponents.SetTamemount({
                minTemper: 0,
                maxTemper: 100,
                feedText: "action.interact.feed",
                rideText: "action.interact.mount",
                feedItems: [
                    {
                        item: "red_mushroom",
                        temperMod: 10
                    }
                ],
                autoRejectItems: [
                    {
                        item: "horsearmorleather"
                    },
                    {
                        item: "horsearmoriron"
                    },
                    {
                        item: "horsearmorgold"
                    },
                    {
                        item: "horsearmordiamond"
                    },
                    {
                        item: "minecraft:copper_horse_armor"
                    },
                    {
                        item: "minecraft:netherite_horse_armor"
                    },
                    {
                        item: "saddle"
                    }
                ],
                tameEvent: {
                    event: "minecraft:on_tame",
                    target: "self"
                }
            })
        ],
        "minecraft:horse_tamed": [
            new BPEntityComponents.SetIsTamed(),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                crouchingSkipInteract: true,
                familyTypes: ["player"],
                interactText: "action.interact.ride.horse",
                seats: [
                    {
                        position: [0, 1.1, -0.2]
                    }
                ]
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipmentTag("minecraft:horse_armor", "inventory", "self", "not"),
                                EntityFilters.hasEquipmentTag("minecraft:horse_armor", "hand", "player"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            target: "self"
                        },
                        equipItemSlot: "1",
                        interactText: "action.interact.equiphorsearmor",
                        playSounds: "armor.equip_generic"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.riderCount(0),
                                EntityFilters.hasEquipmentTag("minecraft:horse_armor", "inventory"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            )
                        },
                        hurtItem: 1,
                        dropItemSlot: "1",
                        dropItemYOffset: 1.1,
                        interactText: "action.interact.removehorsearmor",
                        playSounds: "armor.unequip_generic",
                        vibration: "shear"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("saddle", "inventory", "self", "not"),
                                EntityFilters.hasEquipment("saddle", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            target: "self"
                        },
                        equipItemSlot: "0",
                        interactText: "action.interact.saddle"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.riderCount(0),
                                EntityFilters.hasEquipment("saddle", "inventory"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            )
                        },
                        hurtItem: 1,
                        dropItemSlot: "0",
                        dropItemYOffset: 1.1,
                        interactText: "action.interact.removesaddle",
                        playSounds: "unsaddle",
                        vibration: "shear"
                    }
                ]
            }),
            new BPEntityComponents.SetInventory({
                inventorySize: 2,
                containerType: "horse"
            })
        ],
        "minecraft:horse_saddled": [
            new BPEntityComponents.SetIsSaddled(),
            new BPEntityComponents.SetInputGroundControlled(),
            new BPEntityComponents.SetCanPowerJump(),
            new BPEntityComponents.SetBehaviorPlayerRideTamed()
        ],
        "minecraft:horse_wild_with_rider": [
            new BPEntityComponents.SetAddRider({
                riders: [
                    {
                        entityType: "minecraft:zombie",
                        spawnEvent: "minecraft:spawn_as_rider"
                    }
                ]
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.riderCount(0),
                        event: "minecraft:hostile_dismounted"
                    }
                ]
            })
        ],
        "minecraft:horse_can_be_leashed": [
            new BPEntityComponents.SetLeashable({
                onUnleash: {
                    event: "minecraft:on_unleashed",
                    target: "self"
                },
                presets: [
                    {
                        filter: EntityFilters.isFamily("happy_ghast", "other"),
                        springType: "quad_dampened"
                    },
                    {
                        hardDistance: 10,
                        maxDistance: 14
                    }
                ]
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.isControllingPassengerFamily("zombie"),
                        event: "minecraft:hostile_mounted"
                    }
                ]
            })
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetAmbientSoundInterval({}),
        new BPEntityComponents.SetTypeFamily({
            family: ["zombiehorse", "undead", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0,
            breathesWater: true
        }),
        new BPEntityComponents.SetHealable({
            items: [
                {
                    item: "red_mushroom",
                    healAmount: 3
                }
            ]
        }),
        new BPEntityComponents.SetBurnsInDaylight({
            protectionSlot: "slot.armor.body"
        }),
        new BPEntityComponents.SetHealth({
            value: 25,
            max: 25
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
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovement({
            value: {
                rangeMin: 0.205,
                rangeMax: 0.275
            }
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:zombie_horse": "minecraft:zombie_horse"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetHorseJumpStrength({
            value: {
                rangeMin: 0.5,
                rangeMax: 0.7
            }
        }),
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0,
            chancePerTickToFloat: 0,
            timeUnderWaterToDismountPassengers: 2
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
        new BPEntityComponents.SetBehaviorTempt({
            priority: 3,
            speedMultiplier: 1.2,
            items: ["red_mushroom"]
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 0.7
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 7,
            lookDistance: 6,
            probability: 0.02,
            lookTime: {
                min: 2,
                max: 4
            }
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 8
        }),
        new BPEntityComponents.SetPhysics({}),
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
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetEnvironmentSensor({
            triggers: [
                {
                    filters: EntityFilters.boolProperty("minecraft:was_upgraded_to_1_21_130", true, "self", "!="),
                    event: "minecraft:upgrade_to_1_21_130"
                }
            ]
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 36,
                    trigger: "minecraft:spawn_adult"
                },
                {
                    weight: 9,
                    trigger: "minecraft:entity_born"
                }
            ]
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: [
                    "minecraft:horse_adult",
                    "minecraft:horse_wild",
                    "minecraft:horse_can_be_leashed"
                ]
            }
        },
        "minecraft:spawn_tame_adult": {
            add: {
                componentGroups: [
                    "minecraft:horse_adult",
                    "minecraft:horse_tamed",
                    "minecraft:horse_can_be_leashed"
                ]
            }
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:horse_baby"]
            }
        },
        "minecraft:spawn_adult_with_rider": {
            add: {
                componentGroups: [
                    "minecraft:horse_adult",
                    "minecraft:horse_wild",
                    "minecraft:horse_wild_with_rider"
                ]
            },
            remove: {
                componentGroups: ["minecraft:horse_baby", "minecraft:horse_can_be_leashed"]
            }
        },
        "minecraft:on_tame": {
            remove: {
                componentGroups: ["minecraft:horse_wild"]
            },
            add: {
                componentGroups: ["minecraft:horse_tamed"]
            }
        },
        "minecraft:horse_saddled": {
            add: {
                componentGroups: ["minecraft:horse_saddled"]
            },
            playSound: {
                sound: "saddle"
            }
        },
        "minecraft:horse_unsaddled": {
            remove: {
                componentGroups: ["minecraft:horse_saddled"]
            }
        },
        "minecraft:hostile_dismounted": {
            add: {
                componentGroups: ["minecraft:horse_can_be_leashed"]
            },
            remove: {
                componentGroups: ["minecraft:horse_wild_with_rider"]
            }
        },
        "minecraft:hostile_mounted": {
            add: {
                componentGroups: ["minecraft:horse_wild_with_rider"]
            },
            remove: {
                componentGroups: ["minecraft:horse_can_be_leashed"]
            }
        },
        "minecraft:upgrade_to_1_21_130": {
            sequence: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.hasComponent("minecraft:rideable", "self", "!="),
                        EntityFilters.isBaby(false)
                    ),
                    add: {
                        componentGroups: ["minecraft:horse_tamed"]
                    }
                },
                {
                    filters: EntityFilters.allOf(EntityFilters.hasComponent("minecraft:leashable", "self", "!=")),
                    add: {
                        componentGroups: ["minecraft:horse_can_be_leashed"]
                    }
                },
                {
                    setProperty: {
                        "minecraft:was_upgraded_to_1_21_130": true
                    }
                }
            ]
        }
    }
});
