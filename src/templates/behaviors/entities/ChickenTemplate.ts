import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de la Gallina para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 04-10-2026
 */
export const ChickenTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Chicken,
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
            values: ["default", "picky"]
        }
    },
    componentsGroups: {
        "minecraft:chicken_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: [
                    "wheat_seeds",
                    "beetroot_seeds",
                    "melon_seeds",
                    "pumpkin_seeds",
                    "pitcher_pod",
                    "torchflower_seeds"
                ],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 5,
                speedMultiplier: 1.1
            })
        ],
        "minecraft:chicken_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/chicken.json"
            }),
            new BPEntityComponents.SetLeashableTo({
                unleashOnRemoval: false
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                breedsWith: {
                    "minecraft:chicken": {}
                },
                breedItems: [
                    "wheat_seeds",
                    "beetroot_seeds",
                    "melon_seeds",
                    "pumpkin_seeds",
                    "pitcher_pod",
                    "torchflower_seeds"
                ]
            }),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 3,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 0.48, 0]
                    }
                ]
            }),
            new BPEntityComponents.SetSpawnEntity({
                entities: [
                    {
                        minWaitTime: 300,
                        maxWaitTime: 600,
                        spawnSound: "plop",
                        spawnItem: "egg",
                        filters: EntityFilters.allOf(
                            EntityFilters.riderCount(0, "self", "=="),
                            EntityFilters.enumProperty("minecraft:climate_variant", "temperate")
                        )
                    },
                    {
                        minWaitTime: 300,
                        maxWaitTime: 600,
                        spawnSound: "plop",
                        spawnItem: "brown_egg",
                        filters: EntityFilters.allOf(
                            EntityFilters.riderCount(0, "self", "=="),
                            EntityFilters.enumProperty("minecraft:climate_variant", "warm")
                        )
                    },
                    {
                        minWaitTime: 300,
                        maxWaitTime: 600,
                        spawnSound: "plop",
                        spawnItem: "blue_egg",
                        filters: EntityFilters.allOf(
                            EntityFilters.riderCount(0, "self", "=="),
                            EntityFilters.enumProperty("minecraft:climate_variant", "cold")
                        )
                    }
                ]
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
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:chicken": "minecraft:chicken"
            },
            propertyInheritance: {
                "minecraft:climate_variant": {}
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetTypeFamily({
            family: ["chicken", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.6,
            height: 0.8
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetHealth({
            value: 4,
            max: 4
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    filters: EntityFilters.inLava(true, "self", "=="),
                    cause: "lava",
                    damagePerTick: 4
                }
            ]
        }),
        new BPEntityComponents.SetMovement({
            value: 0.25
        }),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetLeashable({
            unleashOnRemoval: false
        }),
        new BPEntityComponents.SetBalloonable({
            mass: 0.5
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidDamageBlocks: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 1.5
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 2,
            speedMultiplier: 1.5,
            targetDist: 0,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 4,
            speedMultiplier: 1,
            items: [
                "wheat_seeds",
                "beetroot_seeds",
                "melon_seeds",
                "pumpkin_seeds",
                "pitcher_pod",
                "torchflower_seeds"
            ]
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 1
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
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetGameEventMovementTracking({
            emitFlap: true
        }),
        new BPEntityComponents.SetUsesLegacyFriction()
    ],
    events: {
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
                                componentGroups: ["minecraft:chicken_baby"]
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
                componentGroups: ["minecraft:chicken_baby"]
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:chicken_baby"]
            },
            add: {
                componentGroups: ["minecraft:chicken_adult"]
            }
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: ["minecraft:chicken_adult"]
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:hatch_warm": {
            setProperty: {
                "minecraft:climate_variant": "warm"
            }
        },
        "minecraft:hatch_cold": {
            setProperty: {
                "minecraft:climate_variant": "cold"
            }
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
                        "minecraft:sound_variant": "picky"
                    }
                }
            ]
        }
    }
});
