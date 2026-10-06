import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Strider para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const StriderTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Strider,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:strider_saddled": [
            new BPEntityComponents.SetIsSaddled(),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/strider_saddled.json"
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
                            event: "minecraft:on_unsaddled"
                        },
                        hurtItem: 1,
                        spawnItems: {
                            table: "loot_tables/entities/saddle.json",
                            yOffset: 1.7
                        },
                        interactText: "action.interact.removesaddle",
                        playSounds: ["unsaddle"],
                        vibration: "shear"
                    }
                ]
            }),
            new BPEntityComponents.SetBoostable({
                speedMultiplier: 1.35,
                duration: 16,
                boostItems: [
                    {
                        item: "warped_fungus_on_a_stick",
                        damage: 1,
                        replaceItem: "fishing_rod"
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                crouchingSkipInteract: true,
                familyTypes: ["player"],
                interactText: "action.interact.ride.strider",
                seats: [
                    {
                        position: [0, 1.7, -0.2]
                    }
                ]
            }),
            new BPEntityComponents.SetItemControllable({
                controlItems: ["warped_fungus_on_a_stick"]
            }),
            new BPEntityComponents.SetBehaviorControlledByPlayer({
                priority: 0,
                mountSpeedMultiplier: 1.45
            })
        ],
        "minecraft:strider_unsaddled": [
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.hasEquipment("saddle", "hand", "other"),
                            event: "minecraft:on_saddled"
                        },
                        useItem: true,
                        playSounds: ["saddle"],
                        interactText: "action.interact.saddle"
                    }
                ]
            })
        ],
        "minecraft:strider_piglin_jockey": [
            new BPEntityComponents.SetAddRider({
                riders: [
                    {
                        entityType: "minecraft:zombie_pigman",
                        spawnEvent: "minecraft:spawn_as_strider_jockey"
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                crouchingSkipInteract: true,
                familyTypes: ["player", "zombie_pigman"],
                interactText: "action.interact.ride.strider",
                seats: [
                    {
                        position: [0, 1.7, -0.2]
                    }
                ]
            })
        ],
        "minecraft:strider_parent_jockey": [
            new BPEntityComponents.SetAddRider({
                riders: [
                    {
                        entityType: "minecraft:strider",
                        spawnEvent: "minecraft:spawn_baby_strider_jockey"
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["strider"],
                seats: [
                    {
                        position: [0, 1.7, 0]
                    }
                ]
            })
        ],
        "minecraft:strider_baby": [
            new BPEntityComponents.SetTypeFamily({
                family: ["strider", "strider_baby", "mob"]
            }),
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: ["warped_fungus"],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 6,
                speedMultiplier: 1.1
            })
        ],
        "minecraft:strider_adult": [
            new BPEntityComponents.SetTypeFamily({
                family: ["strider", "strider_adult", "mob"]
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 4,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/strider.json"
            }),
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                breedsWith: {
                    "minecraft:strider": {}
                },
                breedItems: ["warped_fungus"]
            })
        ],
        "minecraft:start_suffocating": [
            new BPEntityComponents.SetIsShaking(),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.inLava(true, "self", "=="),
                            EntityFilters.inLava(true, "other", "==")
                        ),
                        event: "stop_suffocating"
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isRiding(false),
                            EntityFilters.hasComponent("minecraft:behavior.move_to_liquid", "self", "not")
                        ),
                        event: "on_not_riding_parent"
                    }
                ]
            })
        ],
        "minecraft:detect_suffocating": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.inLava(false, "self", "=="),
                            EntityFilters.anyOf(
                                EntityFilters.isRiding(false, "self", "=="),
                                EntityFilters.inLava(false, "other", "==")
                            )
                        ),
                        event: "start_suffocating"
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isRiding(false),
                            EntityFilters.hasComponent("minecraft:behavior.move_to_liquid", "self", "not")
                        ),
                        event: "on_not_riding_parent"
                    }
                ]
            })
        ],
        "minecraft:strider_pathing_behaviors": [
            new BPEntityComponents.SetBehaviorRiseToLiquidLevel({
                priority: 0,
                liquidYOffset: 0.25,
                riseDelta: 0.01,
                sinkDelta: 0.01
            }),
            new BPEntityComponents.SetBehaviorMoveToLiquid({
                priority: 7,
                searchRange: 16,
                searchHeight: 10,
                goalRadius: 0.9,
                materialType: "Lava",
                searchCount: 30
            }),
            new BPEntityComponents.SetBehaviorRandomStroll({
                priority: 8,
                speedMultiplier: 0.8
            })
        ]
    },
    components: [
        new BPEntityComponents.SetMovementSoundDistanceOffset({
            value: 0.6
        }),
        new BPEntityComponents.SetFreezingVulnerable(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetTypeFamily({
            family: ["strider", "mob"]
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.9,
            height: 1.7
        }),
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
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    filters: EntityFilters.inContactWithWater(),
                    cause: "drowning",
                    damagePerTick: 1
                }
            ]
        }),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetMovement({
            value: 0.16
        }),
        new BPEntityComponents.SetLavaMovement({
            value: 0.32
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverLava: true,
            avoidWater: true,
            canSink: false,
            canWalkInLava: true
        }),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetHealth({
            value: 20,
            max: 20
        }),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:strider": "minecraft:strider"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 9,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 10
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 3,
            speedMultiplier: 1.1,
            panicSound: "panic",
            soundInterval: {
                rangeMin: 1,
                rangeMax: 3
            }
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 5,
            speedMultiplier: 1.2,
            items: ["warped_fungus", "warped_fungus_on_a_stick"],
            canTemptWhileRidden: true,
            temptSound: "tempt",
            soundInterval: {
                rangeMin: 2,
                rangeMax: 5
            }
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization()
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 40,
                    trigger: "spawn_adult"
                },
                {
                    weight: 2,
                    trigger: "spawn_adult_piglin_jockey"
                },
                {
                    weight: 8,
                    trigger: "spawn_adult_parent_jockey"
                },
                {
                    weight: 50,
                    trigger: "spawn_baby"
                }
            ]
        },
        "minecraft:entity_born": {
            trigger: "spawn_baby"
        },
        "spawn_adult": {
            add: {
                componentGroups: [
                    "minecraft:strider_adult",
                    "minecraft:strider_unsaddled",
                    "minecraft:detect_suffocating",
                    "minecraft:strider_pathing_behaviors"
                ]
            }
        },
        "spawn_adult_parent_jockey": {
            add: {
                componentGroups: [
                    "minecraft:strider_adult",
                    "minecraft:strider_parent_jockey",
                    "minecraft:strider_unsaddled",
                    "minecraft:detect_suffocating",
                    "minecraft:strider_pathing_behaviors"
                ]
            }
        },
        "spawn_adult_piglin_jockey": {
            add: {
                componentGroups: [
                    "minecraft:strider_adult",
                    "minecraft:strider_saddled",
                    "minecraft:strider_piglin_jockey",
                    "minecraft:detect_suffocating",
                    "minecraft:strider_pathing_behaviors"
                ]
            }
        },
        "spawn_baby": {
            add: {
                componentGroups: [
                    "minecraft:strider_baby",
                    "minecraft:detect_suffocating",
                    "minecraft:strider_pathing_behaviors"
                ]
            }
        },
        "minecraft:spawn_baby_strider_jockey": {
            add: {
                componentGroups: ["minecraft:strider_baby", "minecraft:detect_suffocating"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:strider_baby"]
            },
            add: {
                componentGroups: ["minecraft:strider_adult", "minecraft:strider_unsaddled"]
            }
        },
        "minecraft:on_saddled": {
            remove: {
                componentGroups: ["minecraft:strider_unsaddled"]
            },
            add: {
                componentGroups: ["minecraft:strider_saddled"]
            }
        },
        "minecraft:on_unsaddled": {
            remove: {
                componentGroups: ["minecraft:strider_saddled"]
            },
            add: {
                componentGroups: ["minecraft:strider_unsaddled"]
            }
        },
        "start_suffocating": {
            add: {
                componentGroups: ["minecraft:start_suffocating"]
            }
        },
        "stop_suffocating": {
            add: {
                componentGroups: ["minecraft:detect_suffocating"]
            },
            remove: {
                componentGroups: ["minecraft:start_suffocating"]
            }
        },
        "on_not_riding_parent": {
            add: {
                componentGroups: ["minecraft:strider_pathing_behaviors"]
            }
        }
    }
});
