import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const CowTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Cow,
    formatVersion: FormatVersionEntities.V1_26_10,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    properties: {
        "minecraft:climate_variant": {
            idProperty: "minecraft:climate_variant",
            clientSync: true,
            type: "enum",
            default: "temperate",
            values: ["temperate", "warm", "cold"]
        },
        "minecraft:sound_variant": {
            idProperty: "minecraft:sound_variant",
            clientSync: true,
            type: "enum",
            default: "default",
            values: ["default", "moody"]
        }
    },
    componentsGroups: {
        "minecraft:cow_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: "wheat",
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 1, 0]
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 6,
                speedMultiplier: 1.1
            })
        ],
        "minecraft:cow_adult": [
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: "query.last_hit_by_player ? Math.Random(1,3) : 0"
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/cow.json"
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 1.15, 0]
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 3,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                breedItems: ["wheat"],
                breedsWith: {
                    "minecraft:cow": {}
                }
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.hasEquipment("bucket:0", "hand", "other")
                            )
                        },
                        useItem: true,
                        swing: true,
                        transformToItem: "bucket:1",
                        playSounds: "milk",
                        interactText: "action.interact.milk"
                    }
                ]
            })
        ]
    },
    components: [
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:cow": "minecraft:cow"
            },
            propertyInheritance: {
                "minecraft:climate_variant": {}
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetTypeFamily({
            family: ["cow", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            width: 0.9,
            height: 1.3
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetHealth({
            value: 10,
            max: 10
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
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 1.25
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 2,
            speedMultiplier: 1.5,
            targetDist: 0,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorBreed({
            priority: 3,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 4,
            speedMultiplier: 1.25,
            items: ["wheat"]
        }),
        new BPEntityComponents.SetBehaviorFollowParent({
            priority: 5,
            speedMultiplier: 1.1
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 0.8
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 7,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
        }),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetBalloonable({}),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization()
    ],
    events: {
        "minecraft:entity_spawned": {
            sequence: [
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    randomize: [
                        {
                            weight: 95,
                            trigger: "minecraft:spawn_adult"
                        },
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["minecraft:cow_baby"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
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
                componentGroups: ["minecraft:cow_baby"]
            },
            trigger: "minecraft:randomize_sound_variant"
        },
        "minecraft:entity_transformed": {
            remove: {},
            add: {
                componentGroups: ["minecraft:cow_adult"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:cow_baby"]
            },
            add: {
                componentGroups: ["minecraft:cow_adult"]
            }
        },
        "minecraft:spawn_adult": {
            add: {
                componentGroups: ["minecraft:cow_adult"]
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
                        "minecraft:sound_variant": "moody"
                    }
                }
            ]
        }
    }
});
