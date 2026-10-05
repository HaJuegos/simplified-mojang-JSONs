import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Camello para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 04-10-2026
 */
export const CamelTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Camel,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:camel_saddled": [
            new BPEntityComponents.SetIsSaddled(),
            new BPEntityComponents.SetInputGroundControlled(),
            new BPEntityComponents.SetDashAction({
                cooldownTime: 2.75,
                horizontalMomentum: 20,
                verticalMomentum: 0.6
            }),
            new BPEntityComponents.SetBehaviorPlayerRideTamed()
        ],
        "minecraft:camel_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.45
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: "cactus",
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 5,
                speedMultiplier: 2.5
            })
        ],
        "minecraft:camel_adult": [
            new BPEntityComponents.SetInventory({
                containerType: "horse"
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetEquippable({
                slots: [
                    {
                        slot: 0,
                        item: "saddle",
                        acceptedItems: ["saddle"],
                        onEquip: {
                            event: "minecraft:camel_saddled"
                        },
                        onUnequip: {
                            event: "minecraft:camel_unsaddled"
                        }
                    }
                ]
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("saddle", "inventory", "self", "not"),
                                EntityFilters.hasEquipment("saddle", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            )
                        },
                        equipItemSlot: "0",
                        interactText: "action.interact.saddle"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.isSitting(false),
                                EntityFilters.riderCount(0),
                                EntityFilters.hasEquipment("saddle", "inventory"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            )
                        },
                        hurtItem: 1,
                        dropItemSlot: "0",
                        dropItemYOffset: 2,
                        interactText: "action.interact.removesaddle",
                        playSounds: "unsaddle",
                        vibration: "shear"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.isSitting(),
                                EntityFilters.riderCount(0),
                                EntityFilters.hasEquipment("saddle", "inventory"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            )
                        },
                        hurtItem: 1,
                        dropItemSlot: "0",
                        dropItemYOffset: 1,
                        interactText: "action.interact.removesaddle",
                        playSounds: "unsaddle",
                        vibration: "shear"
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 2,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                breedsWith: {
                    "minecraft:camel": {}
                },
                breedItems: ["cactus"]
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 2,
                crouchingSkipInteract: true,
                pullInEntities: true,
                familyTypes: ["player"],
                interactText: "action.interact.ride.horse",
                seats: [
                    {
                        minRiderCount: 0,
                        maxRiderCount: 2,
                        position: [0, 1.905, 0.5]
                    },
                    {
                        minRiderCount: 1,
                        maxRiderCount: 2,
                        position: [0, 1.905, -0.5]
                    }
                ]
            })
        ],
        "minecraft:camel_standing": [
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
            new BPEntityComponents.SetCollisionBox({
                width: 1.7,
                height: 2.375
            })
        ],
        "minecraft:camel_baby_standing": [
            new BPEntityComponents.SetPushableByEntity(),
            new BPEntityComponents.SetPushableByBlock(),
            new BPEntityComponents.SetCollisionBox({
                width: 2.11,
                height: 3.11
            })
        ],
        "minecraft:camel_sitting": [
            new BPEntityComponents.SetPushableByBlock(),
            new BPEntityComponents.SetCollisionBox({
                width: 1.7,
                height: 0.945
            })
        ],
        "minecraft:camel_baby_sitting": [
            new BPEntityComponents.SetPushableByBlock(),
            new BPEntityComponents.SetCollisionBox({
                width: 2.11,
                height: 0.944
            })
        ]
    },
    components: [
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:camel": "minecraft:camel"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetCollisionBox({
            width: 1.7,
            height: 2.375
        }),
        new BPEntityComponents.SetIsTamed(),
        new BPEntityComponents.SetHealable({
            items: [
                {
                    item: "cactus",
                    healAmount: 2
                }
            ]
        }),
        new BPEntityComponents.SetLeashable({
            presets: [
                {
                    filter: EntityFilters.isFamily("happy_ghast", "other"),
                    springType: "quad_dampened"
                }
            ]
        }),
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetTypeFamily({
            family: ["camel", "mob"]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetHealth({
            value: 32
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
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "yes",
                    damageModifier: -4
                }
            ]
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetMovement({
            value: 0.09
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0,
            chancePerTickToFloat: 1,
            timeUnderWaterToDismountPassengers: 2
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 4
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 3,
            speedMultiplier: 2.5,
            canTemptVertically: true,
            items: ["cactus"]
        }),
        new BPEntityComponents.SetBehaviorRandomLookAroundAndSit({
            priority: 4,
            continueIfLeashed: true,
            continueSittingOnReload: true,
            minLookCount: 2,
            maxLookCount: 5,
            minLookTime: 80,
            maxLookTime: 100,
            minAngleOfViewHorizontal: -30,
            maxAngleOfViewHorizontal: 30,
            randomLookAroundCooldown: 5,
            probability: 0.001
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 2
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 7,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 8
        }),
        new BPEntityComponents.SetVariableMaxAutoStep({
            baseValue: 1.5625,
            controlledValue: 1.5625,
            jumpPreventedValue: 0.5625
        })
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
                    trigger: "minecraft:entity_born"
                }
            ]
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: ["minecraft:camel_adult", "minecraft:camel_standing"]
            }
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:camel_baby", "minecraft:camel_baby_standing"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:camel_baby"]
            },
            add: {
                componentGroups: ["minecraft:camel_adult"]
            }
        },
        "minecraft:camel_saddled": {
            add: {
                componentGroups: ["minecraft:camel_saddled"]
            },
            playSound: {
                sound: "saddle"
            }
        },
        "minecraft:camel_unsaddled": {
            remove: {
                componentGroups: ["minecraft:camel_saddled"]
            }
        },
        "minecraft:start_sitting": {
            sequence: [
                {
                    filters: EntityFilters.isBaby(),
                    trigger: "minecraft:start_sitting_baby"
                },
                {
                    filters: EntityFilters.isBaby(false),
                    trigger: "minecraft:start_sitting_adult"
                }
            ]
        },
        "minecraft:start_sitting_adult": {
            add: {
                componentGroups: ["minecraft:camel_sitting"]
            },
            remove: {
                componentGroups: ["minecraft:camel_standing"]
            }
        },
        "minecraft:start_sitting_baby": {
            add: {
                componentGroups: ["minecraft:camel_baby_sitting"]
            },
            remove: {
                componentGroups: ["minecraft:camel_baby_standing"]
            }
        },
        "minecraft:stop_sitting": {
            sequence: [
                {
                    filters: EntityFilters.isBaby(),
                    trigger: "minecraft:stop_sitting_baby"
                },
                {
                    filters: EntityFilters.isBaby(false),
                    trigger: "minecraft:stop_sitting_adult"
                }
            ]
        },
        "minecraft:stop_sitting_adult": {
            add: {
                componentGroups: ["minecraft:camel_standing"]
            },
            remove: {
                componentGroups: ["minecraft:camel_sitting"]
            }
        },
        "minecraft:stop_sitting_baby": {
            add: {
                componentGroups: ["minecraft:camel_baby_standing"]
            },
            remove: {
                componentGroups: ["minecraft:camel_baby_sitting"]
            }
        }
    }
});
