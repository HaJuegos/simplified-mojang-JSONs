import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Caballo para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const HorseTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Horse,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:horse_baby": [
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
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 1.96,
                height: 2.24
            })
        ],
        "minecraft:horse_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/horse.json"
            }),
            new BPEntityComponents.SetLeashableTo({
                unleashOnRemoval: false
            }),
            new BPEntityComponents.SetBehaviorRunAroundLikeCrazy({
                priority: 1,
                speedMultiplier: 1.2
            }),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 2,
                speedMultiplier: 1
            })
        ],
        "minecraft:horse_wild": [
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["player", "baby_undead"],
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
                        item: "appleenchanted",
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
                        playSounds: ["armor.equip_generic"]
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
                        playSounds: ["armor.unequip_generic"],
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
                        playSounds: ["unsaddle"],
                        vibration: "shear"
                    }
                ]
            }),
            new BPEntityComponents.SetInventory({
                inventorySize: 2,
                containerType: "horse"
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: true,
                breedsWith: {
                    "minecraft:horse": {},
                    "minecraft:donkey": {}
                },
                breedItems: ["golden_carrot", "golden_apple", "appleEnchanted"]
            })
        ],
        "minecraft:horse_saddled": [
            new BPEntityComponents.SetIsSaddled(),
            new BPEntityComponents.SetInputGroundControlled(),
            new BPEntityComponents.SetCanPowerJump(),
            new BPEntityComponents.SetBehaviorPlayerRideTamed()
        ],
        "minecraft:base_white": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:base_creamy": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:base_chestnut": [
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "minecraft:base_brown": [
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "minecraft:base_black": [
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "minecraft:base_gray": [
            new BPEntityComponents.SetVariant({
                value: 5
            })
        ],
        "minecraft:base_darkbrown": [
            new BPEntityComponents.SetVariant({
                value: 6
            })
        ],
        "minecraft:markings_none": [
            new BPEntityComponents.SetMarkVariant({
                value: 0
            })
        ],
        "minecraft:markings_white_details": [
            new BPEntityComponents.SetMarkVariant({
                value: 1
            })
        ],
        "minecraft:markings_white_fields": [
            new BPEntityComponents.SetMarkVariant({
                value: 2
            })
        ],
        "minecraft:markings_white_dots": [
            new BPEntityComponents.SetMarkVariant({
                value: 3
            })
        ],
        "minecraft:markings_black_dots": [
            new BPEntityComponents.SetMarkVariant({
                value: 4
            })
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetAmbientSoundInterval({
            soundEvents: [
                {
                    soundID: "ambient.baby",
                    condition: `${MoLang.isBaby()}`
                }
            ],
            minRandomCooldownSound: 12,
            maxRandomCooldownSound: 16
        }),
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
        new BPEntityComponents.SetTypeFamily({
            family: ["horse", "mob"]
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 1.4,
            height: 1.6
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
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
            value: {
                rangeMin: 0.1125,
                rangeMax: 0.3375
            }
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true,
            avoidDamageBlocks: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            inheritTamed: false,
            parentCentricAttributeBlending: ["minecraft:health", "minecraft:movement", "minecraft:horse.jump_strength"],
            offspringPairs: {
                "minecraft:horse": "minecraft:horse",
                "minecraft:donkey": "minecraft:mule"
            },
            mutationFactor: {
                extraVariant: 0.2,
                variant: 0.111
            },
            mutationStrategy: "random",
            randomVariantMutationInterval: [0, 7],
            randomExtraVariantMutationInterval: [0, 5]
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetHorseJumpStrength({
            value: {
                rangeMin: 0.4,
                rangeMax: 1
            }
        }),
        new BPEntityComponents.SetLeashable({
            presets: [
                {
                    filter: EntityFilters.isFamily("happy_ghast", "other"),
                    springType: "quad_dampened"
                }
            ],
            unleashOnRemoval: false
        }),
        new BPEntityComponents.SetBalloonable(),
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
            priority: 3,
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
        new BPEntityComponents.SetPhysics(),
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
            sequence: [
                {
                    randomize: [
                        {
                            weight: 36,
                            add: {
                                componentGroups: ["minecraft:horse_adult", "minecraft:horse_wild"]
                            }
                        },
                        {
                            weight: 9,
                            add: {
                                componentGroups: ["minecraft:horse_baby"]
                            }
                        }
                    ]
                },
                {
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:base_white"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:base_creamy"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:base_chestnut"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:base_brown"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:base_black"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:base_gray"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:base_darkbrown"]
                            }
                        }
                    ]
                },
                {
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:markings_none"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:markings_white_details"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:markings_white_fields"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:markings_white_dots"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:markings_black_dots"]
                            }
                        }
                    ]
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:horse_baby"]
            }
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: ["minecraft:horse_adult", "minecraft:horse_wild"]
            }
        },
        "minecraft:spawn_tame_adult": {
            add: {
                componentGroups: ["minecraft:horse_adult", "minecraft:horse_tamed"]
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
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:horse_baby"]
            },
            add: {
                componentGroups: ["minecraft:horse_adult", "minecraft:horse_wild"]
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
        "minecraft:make_white": {
            add: {
                componentGroups: ["minecraft:base_white"]
            }
        },
        "minecraft:make_creamy": {
            add: {
                componentGroups: ["minecraft:base_creamy"]
            }
        },
        "minecraft:make_chestnut": {
            add: {
                componentGroups: ["minecraft:base_chestnut"]
            }
        },
        "minecraft:make_brown": {
            add: {
                componentGroups: ["minecraft:base_brown"]
            }
        },
        "minecraft:make_black": {
            add: {
                componentGroups: ["minecraft:base_black"]
            }
        },
        "minecraft:make_gray": {
            add: {
                componentGroups: ["minecraft:base_gray"]
            }
        },
        "minecraft:make_darkbrown": {
            add: {
                componentGroups: ["minecraft:base_darkbrown"]
            }
        }
    }
});
