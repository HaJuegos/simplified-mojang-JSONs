import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const MuleTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Mule,
    formatVersion: FormatVersionEntities.V1_26_30,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:mule_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: [
                    {
                        item: "wheat",
                        growth: 0.016667
                    },
                    {
                        item: "sugar",
                        growth: 0.025
                    },
                    {
                        item: "hay_block",
                        growth: 0.15
                    },
                    {
                        item: "apple",
                        growth: 0.05
                    },
                    {
                        item: "carrot",
                        growth: 0.05
                    },
                    {
                        item: "golden_carrot",
                        growth: 0.05
                    },
                    {
                        item: "golden_apple",
                        growth: 0.2
                    },
                    {
                        item: "appleEnchanted",
                        growth: 0.2
                    }
                ],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 4,
                speedMultiplier: 1
            })
        ],
        "minecraft:mule_adult": [
            new BPEntityComponents.SetExperienceReward({
                onDeath: "query.last_hit_by_player ? Math.Random(1,3) : 0"
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/horse.json"
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBehaviorRunAroundLikeCrazy({
                priority: 1,
                speedMultiplier: 1.2
            })
        ],
        "minecraft:mule_wild": [
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["player", "baby_undead"],
                interactText: "action.interact.mount",
                seats: [
                    {
                        position: [0, 0.975, -0.2]
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
                        item: "wheat",
                        temperMod: 3
                    },
                    {
                        item: "sugar",
                        temperMod: 3
                    },
                    {
                        item: "apple",
                        temperMod: 3
                    },
                    {
                        item: "carrot",
                        temperMod: 3
                    },
                    {
                        item: "golden_carrot",
                        temperMod: 5
                    },
                    {
                        item: "golden_apple",
                        temperMod: 10
                    },
                    {
                        item: "appleEnchanted",
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
        "minecraft:mule_tamed": [
            new BPEntityComponents.SetIsTamed(),
            new BPEntityComponents.SetEquippable({
                slots: [
                    {
                        slot: 0,
                        item: "saddle",
                        acceptedItems: ["saddle"],
                        onEquip: {
                            event: "minecraft:mule_saddled"
                        },
                        onUnequip: {
                            event: "minecraft:mule_unsaddled"
                        }
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                crouchingSkipInteract: true,
                familyTypes: ["player"],
                interactText: "action.interact.ride.horse",
                seats: [
                    {
                        position: [0, 0.975, -0.2]
                    }
                ]
            }),
            new BPEntityComponents.SetInventory({
                inventorySize: 16,
                containerType: "horse"
            })
        ],
        "minecraft:mule_unchested": [
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        playSounds: "armor.equip_generic",
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("chest", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            event: "minecraft:on_chest",
                            target: "self"
                        },
                        useItem: true,
                        interactText: "action.interact.attachchest"
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
            })
        ],
        "minecraft:mule_chested": [
            new BPEntityComponents.SetIsChested(),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("saddle", "inventory", "self", "not"),
                                EntityFilters.hasEquipment("saddle", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
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
            })
        ],
        "minecraft:mule_saddled": [
            new BPEntityComponents.SetIsSaddled(),
            new BPEntityComponents.SetInputGroundControlled(),
            new BPEntityComponents.SetCanPowerJump(),
            new BPEntityComponents.SetBehaviorPlayerRideTamed({})
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetAmbientSoundInterval({}),
        new BPEntityComponents.SetTypeFamily({
            family: ["mule", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 1.4,
            height: 1.6
        }),
        new BPEntityComponents.SetHealth({
            value: {
                rangeMin: 15,
                rangeMax: 30
            }
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
        new BPEntityComponents.SetMovement({
            value: 0.175
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            inheritTamed: false,
            offspringPairs: {
                "minecraft:mule": "minecraft:mule"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetHorseJumpStrength({
            value: 0.5
        }),
        new BPEntityComponents.SetLeashable({
            presets: [
                {
                    filter: EntityFilters.isFamily("happy_ghast", "other"),
                    springType: "quad_dampened"
                }
            ]
        }),
        new BPEntityComponents.SetBalloonable({}),
        new BPEntityComponents.SetHealable({
            items: [
                {
                    item: "wheat",
                    healAmount: 2
                },
                {
                    item: "sugar",
                    healAmount: 1
                },
                {
                    item: "hay_block",
                    healAmount: 20
                },
                {
                    item: "apple",
                    healAmount: 3
                },
                {
                    item: "carrot",
                    healAmount: 3
                },
                {
                    item: "golden_carrot",
                    healAmount: 4
                },
                {
                    item: "golden_apple",
                    healAmount: 10
                },
                {
                    item: "appleEnchanted",
                    healAmount: 10
                }
            ]
        }),
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
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 1.2
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 5,
            speedMultiplier: 1.2,
            items: ["golden_apple", "appleEnchanted", "golden_carrot"]
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 0.7
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 7,
            lookDistance: 6,
            probability: 0.02
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
        new BPEntityComponents.SetConditionalBandwidthOptimization()
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 80,
                    add: {
                        componentGroups: ["minecraft:mule_adult", "minecraft:mule_wild"]
                    }
                },
                {
                    weight: 20,
                    add: {
                        componentGroups: ["minecraft:mule_baby"]
                    }
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:mule_baby"]
            }
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: ["minecraft:mule_adult", "minecraft:mule_wild"]
            }
        },
        "minecraft:spawn_tame_adult": {
            add: {
                componentGroups: ["minecraft:mule_adult", "minecraft:mule_tamed", "minecraft:mule_unchested"]
            }
        },
        "minecraft:on_tame": {
            remove: {
                componentGroups: ["minecraft:mule_wild"]
            },
            add: {
                componentGroups: ["minecraft:mule_tamed", "minecraft:mule_unchested"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:mule_baby"]
            },
            add: {
                componentGroups: ["minecraft:mule_adult", "minecraft:mule_wild"]
            }
        },
        "minecraft:on_chest": {
            remove: {
                componentGroups: ["minecraft:mule_unchested"]
            },
            add: {
                componentGroups: ["minecraft:mule_chested"]
            }
        },
        "minecraft:mule_saddled": {
            add: {
                componentGroups: ["minecraft:mule_saddled"]
            },
            playSound: {
                sound: "saddle"
            }
        },
        "minecraft:mule_unsaddled": {
            remove: {
                componentGroups: ["minecraft:mule_saddled"]
            }
        }
    }
});
