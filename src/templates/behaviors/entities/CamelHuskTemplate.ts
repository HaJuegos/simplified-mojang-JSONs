import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Camello Zombie para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 04-10-2026
 */
export const CamelHuskTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.CamelHusk,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    properties: {
        "minecraft:has_rider_mounted": {
            clientSync: false,
            type: "bool",
            default: false
        }
    },
    componentsGroups: {
        "minecraft:camel_husk_saddled": [
            new BPEntityComponents.SetBehaviorPlayerRideTamed({
                priority: 1
            }),
            new BPEntityComponents.SetDashAction({
                cooldownTime: 2.75,
                horizontalMomentum: 20,
                verticalMomentum: 0.6
            }),
            new BPEntityComponents.SetInputGroundControlled(),
            new BPEntityComponents.SetIsSaddled()
        ],
        "minecraft:camel_husk_sitting": [
            new BPEntityComponents.SetCollisionBox({
                height: 0.945,
                width: 1.7
            }),
            new BPEntityComponents.SetPushableByBlock()
        ],
        "minecraft:camel_husk_standing": [
            new BPEntityComponents.SetCollisionBox({
                height: 2.375,
                width: 1.7
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
            new BPEntityComponents.SetPushableByBlock()
        ],
        "minecraft:camel_husk_with_no_hostile_rider": [
            new BPEntityComponents.SetBehaviorTempt({
                canTemptVertically: true,
                items: ["rabbit_foot"],
                priority: 4,
                speedMultiplier: 2.5
            }),
            new BPEntityComponents.SetEquippable({
                slots: [
                    {
                        acceptedItems: ["saddle"],
                        item: "saddle",
                        onEquip: {
                            event: "minecraft:camel_husk_saddled"
                        },
                        onUnequip: {
                            event: "minecraft:camel_husk_unsaddled"
                        },
                        slot: 0
                    }
                ]
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        equipItemSlot: "0",
                        playSounds: ["saddle"],
                        interactText: "action.interact.saddle",
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("saddle", "inventory", "self", "not"),
                                EntityFilters.hasEquipment("saddle", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            )
                        }
                    },
                    {
                        dropItemSlot: "0",
                        dropItemYOffset: 2,
                        hurtItem: 1,
                        interactText: "action.interact.removesaddle",
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.isSitting(false),
                                EntityFilters.riderCount(0),
                                EntityFilters.hasEquipment("saddle", "inventory"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            )
                        },
                        playSounds: ["unsaddle"],
                        vibration: "shear"
                    },
                    {
                        dropItemSlot: "0",
                        dropItemYOffset: 1,
                        hurtItem: 1,
                        interactText: "action.interact.removesaddle",
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.isSitting(),
                                EntityFilters.riderCount(0),
                                EntityFilters.hasEquipment("saddle", "inventory"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            )
                        },
                        playSounds: ["unsaddle"],
                        vibration: "shear"
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
            new BPEntityComponents.SetLeashableTo()
        ],
        "minecraft:camel_husk_with_hostile_rider": [
            new BPEntityComponents.SetAddRider({
                riders: [
                    {
                        entityType: "minecraft:husk",
                        spawnEvent: "minecraft:spawn_as_rider"
                    },
                    {
                        entityType: "minecraft:parched",
                        spawnEvent: "minecraft:ranged_mode"
                    }
                ]
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetBehaviorFloat({
            chancePerTickToFloat: 1,
            priority: 0,
            timeUnderWaterToDismountPassengers: 2
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookDistance: 6,
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 3,
            targetDist: 0,
            speedMultiplier: 4,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorRandomLookAroundAndSit({
            minLookTime: 80,
            continueIfLeashed: true,
            minLookCount: 2,
            maxLookTime: 100,
            continueSittingOnReload: true,
            maxAngleOfViewHorizontal: 30,
            maxLookCount: 5,
            minAngleOfViewHorizontal: -30,
            priority: 5,
            probability: 0.001,
            randomLookAroundCooldown: 5
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 7,
            speedMultiplier: 2
        }),
        new BPEntityComponents.SetBreathable({
            breathesAir: true,
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 2.375,
            width: 1.7
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    damageModifier: -4,
                    dealsDamage: "yes"
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetEnvironmentSensor({
            triggers: [
                {
                    event: "minecraft:all_riders_dismounted",
                    filters: EntityFilters.allOf(
                        EntityFilters.boolProperty("minecraft:has_rider_mounted"),
                        EntityFilters.riderCount(0)
                    )
                },
                {
                    event: "minecraft:rider_mounted",
                    filters: EntityFilters.allOf(
                        EntityFilters.boolProperty("minecraft:has_rider_mounted", false),
                        EntityFilters.riderCount(0, "self", ">")
                    )
                }
            ]
        }),
        new BPEntityComponents.SetExperienceReward({
            onBred: "Math.Random(1,7)",
            onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
        }),
        new BPEntityComponents.SetHealable({
            items: [
                {
                    healAmount: 2,
                    item: "rabbit_foot"
                }
            ]
        }),
        new BPEntityComponents.SetHealth({
            value: 32
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
        new BPEntityComponents.SetInventory({
            containerType: "horse"
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetIsTamed(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/camel_husk.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.09
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidDamageBlocks: true,
            canPathOverWater: true
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetRideable({
            crouchingSkipInteract: true,
            familyTypes: ["player", "parched", "husk_rider"],
            interactText: "action.interact.ride.horse",
            seatCount: 2,
            seats: [
                {
                    maxRiderCount: 2,
                    position: [0, 1.905, 0.5],
                    minRiderCount: 0
                },
                {
                    maxRiderCount: 2,
                    position: [0, 1.905, -0.5],
                    minRiderCount: 1
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["camel_husk", "mob", "undead"]
        }),
        new BPEntityComponents.SetVariableMaxAutoStep({
            baseValue: 1.5625,
            controlledValue: 1.5625,
            jumpPreventedValue: 0.5625
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:camel_husk_standing", "minecraft:camel_husk_with_no_hostile_rider"]
            }
        },
        "minecraft:all_riders_dismounted": {
            add: {
                componentGroups: ["minecraft:camel_husk_with_no_hostile_rider"]
            },
            setProperty: {
                "minecraft:has_rider_mounted": false
            },
            remove: {
                componentGroups: ["minecraft:camel_husk_with_hostile_rider"]
            }
        },
        "minecraft:camel_husk_saddled": {
            add: {
                componentGroups: ["minecraft:camel_husk_saddled"]
            }
        },
        "minecraft:camel_husk_unsaddled": {
            remove: {
                componentGroups: ["minecraft:camel_husk_saddled"]
            }
        },
        "minecraft:rider_mounted": {
            setProperty: {
                "minecraft:has_rider_mounted": true
            }
        },
        "minecraft:stop_sitting": {
            add: {
                componentGroups: ["minecraft:camel_husk_standing"]
            },
            remove: {
                componentGroups: ["minecraft:camel_husk_sitting"]
            }
        },
        "minecraft:start_sitting": {
            add: {
                componentGroups: ["minecraft:camel_husk_sitting"]
            },
            remove: {
                componentGroups: ["minecraft:camel_husk_standing"]
            }
        },
        "minecraft:spawn_with_rider": {
            add: {
                componentGroups: ["minecraft:camel_husk_standing", "minecraft:camel_husk_with_hostile_rider"]
            },
            setProperty: {
                "minecraft:has_rider_mounted": true
            },
            remove: {
                componentGroups: ["minecraft:camel_husk_with_no_hostile_rider"]
            }
        }
    }
});
