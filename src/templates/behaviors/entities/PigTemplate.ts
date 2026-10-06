import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Cerdo para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const PigTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Pig,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    properties: {
        "minecraft:climate_variant": {
            clientSync: true,
            type: "enum",
            default: "temperate",
            values: ["temperate", "warm", "cold"]
        },
        "minecraft:sound_variant": {
            clientSync: true,
            type: "enum",
            default: "default",
            values: ["default", "big", "mini"]
        }
    },
    componentsGroups: {
        "minecraft:pig_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: ["carrot", "beetroot", "potato"],
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
        "minecraft:pig_transform": [
            new BPEntityComponents.SetTransformation({
                into: "minecraft:pig_zombie",
                transformationSound: "mob.pig.death",
                delay: 0.5
            })
        ],
        "minecraft:pig_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/pig.json"
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 4,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                breedsWith: {
                    "minecraft:pig": {}
                },
                breedItems: ["carrot", "beetroot", "potato"]
            })
        ],
        "minecraft:pig_unsaddled": [
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.hasEquipment("saddle", "hand", "other"),
                            event: "minecraft:on_saddled"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["saddle"],
                        interactText: "action.interact.saddle"
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 0.7, 0]
                    }
                ]
            })
        ],
        "minecraft:pig_saddled": [
            new BPEntityComponents.SetIsSaddled(),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/pig_saddled.json"
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
                            table: "loot_tables/entities/saddle.json"
                        },
                        interactText: "action.interact.removesaddle",
                        playSounds: ["unsaddle"],
                        vibration: "shear"
                    }
                ]
            }),
            new BPEntityComponents.SetBoostable({
                speedMultiplier: 1.35,
                duration: 3,
                boostItems: [
                    {
                        item: "carrotOnAStick",
                        damage: 2,
                        replaceItem: "fishing_rod"
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                interactText: "action.interact.ride.horse",
                familyTypes: ["player"],
                seats: [
                    {
                        position: [0, 0.63, 0]
                    }
                ]
            }),
            new BPEntityComponents.SetItemControllable({
                controlItems: ["carrotOnAStick"]
            }),
            new BPEntityComponents.SetBehaviorControlledByPlayer({
                priority: 0
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAmbientSoundInterval({
            soundEvents: [
                {
                    soundID: "ambient.baby",
                    condition: `${MoLang.isBaby()}`
                }
            ],
            minRandomCooldownSound: 6,
            maxRandomCooldownSound: 16
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    onDamage: {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("lightning", "other"),
                            EntityFilters.isDifficulty("peaceful", "self", "!=")
                        ),
                        event: "become_zombie"
                    },
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["pig", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:pig": "minecraft:pig"
            },
            propertyInheritance: {
                "minecraft:climate_variant": {}
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetHealth({
            value: 10,
            max: 10
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
            value: 0.25
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true,
            avoidDamageBlocks: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            width: 0.9,
            height: 0.9
        }),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetBalloonable({
            mass: 0.9
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 1,
            speedMultiplier: 1.25,
            targetDist: 0,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 3,
            speedMultiplier: 1.25
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 5,
            speedMultiplier: 1.2,
            items: ["potato", "carrot", "beetroot", "carrotOnAStick"]
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 7,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 8,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
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
        new BPEntityComponents.SetConditionalBandwidthOptimization()
    ],
    events: {
        "become_zombie": {
            add: {
                componentGroups: ["minecraft:pig_transform"]
            }
        },
        "minecraft:entity_spawned": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 95,
                            trigger: "minecraft:spawn_adult"
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["minecraft:pig_baby"]
                            }
                        }
                    ]
                },
                {
                    firstValid: [
                        {
                            filters: EntityFilters.hasBiomeTag("spawns_warm_variant_farm_animals"),
                            setProperty: {
                                "minecraft:climate_variant": "warm"
                            }
                        },
                        {
                            filters: EntityFilters.hasBiomeTag("spawns_cold_variant_farm_animals"),
                            setProperty: {
                                "minecraft:climate_variant": "cold"
                            }
                        }
                    ]
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:pig_baby"]
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:pig_baby"]
            },
            add: {
                componentGroups: ["minecraft:pig_adult", "minecraft:pig_unsaddled"]
            }
        },
        "minecraft:on_saddled": {
            remove: {
                componentGroups: ["minecraft:pig_unsaddled"]
            },
            add: {
                componentGroups: ["minecraft:pig_saddled"]
            }
        },
        "minecraft:on_unsaddled": {
            remove: {
                componentGroups: ["minecraft:pig_saddled"]
            },
            add: {
                componentGroups: ["minecraft:pig_unsaddled"]
            }
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: ["minecraft:pig_adult", "minecraft:pig_unsaddled"]
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:randomize_sound_variant": {
            randomize: [
                {
                    weight: 1,
                    setProperty: {
                        "minecraft:sound_variant": "default"
                    }
                },
                {
                    weight: 1,
                    setProperty: {
                        "minecraft:sound_variant": "big"
                    }
                },
                {
                    weight: 1,
                    setProperty: {
                        "minecraft:sound_variant": "mini"
                    }
                }
            ]
        }
    }
});
