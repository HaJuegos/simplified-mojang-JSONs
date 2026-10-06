import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de la Champivaca para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 03-10-2026
 */
export const MooshroomTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Mooshroom,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:mooshroom_become_cow": [
            new BPEntityComponents.SetTransformation({
                into: "minecraft:cow"
            })
        ],
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
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/mooshroom.json"
            }),
            new BPEntityComponents.SetLeashableTo(),
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
                    "minecraft:mooshroom": {}
                }
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("bowl", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.hasComponent("minecraft:transformation", "self", "!=")
                            ),
                            event: "minecraft:flowerless",
                            target: "self"
                        },
                        addItems: {
                            table: "loot_tables/gameplay/entities/mooshroom_milking.json"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["milk_suspiciously"],
                        interactText: "action.interact.moostew"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("allium", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(7, "self", "!=")
                            ),
                            event: "minecraft:ate_allium",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("azure_bluet", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(3, "self", "!=")
                            ),
                            event: "minecraft:ate_bluet",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("blue_orchid", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(6, "self", "!=")
                            ),
                            event: "minecraft:ate_orchid",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("cornflower", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(1, "self", "!=")
                            ),
                            event: "minecraft:ate_cornflower",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("dandelion", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(5, "self", "!=")
                            ),
                            event: "minecraft:ate_dandelion",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("lily_of_the_valley", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(4, "self", "!=")
                            ),
                            event: "minecraft:ate_lily",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("oxeye_daisy", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(8, "self", "!=")
                            ),
                            event: "minecraft:ate_daisy",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("poppy", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(0, "self", "!=")
                            ),
                            event: "minecraft:ate_poppy",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: {
                                any_of: [
                                    {
                                        test: "has_equipment",
                                        subject: "other",
                                        domain: "hand",
                                        value: "red_tulip"
                                    },
                                    {
                                        test: "has_equipment",
                                        subject: "other",
                                        domain: "hand",
                                        value: "orange_tulip"
                                    },
                                    {
                                        test: "has_equipment",
                                        subject: "other",
                                        domain: "hand",
                                        value: "white_tulip"
                                    },
                                    {
                                        test: "has_equipment",
                                        subject: "other",
                                        domain: "hand",
                                        value: "pink_tulip"
                                    }
                                ],
                                all_of: [
                                    {
                                        test: "is_family",
                                        subject: "other",
                                        value: "player"
                                    },
                                    {
                                        test: "is_variant",
                                        subject: "self",
                                        operator: "==",
                                        value: 1
                                    },
                                    {
                                        test: "is_mark_variant",
                                        subject: "self",
                                        operator: "!=",
                                        value: 2
                                    }
                                ]
                            },
                            event: "minecraft:ate_tulip",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("wither_rose", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(9, "self", "!=")
                            ),
                            event: "minecraft:ate_rose",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("torchflower", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(10, "self", "!=")
                            ),
                            event: "minecraft:ate_torchflower",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("open_eyeblossom", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(11, "self", "!=")
                            ),
                            event: "minecraft:ate_open_eyeblossom",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("closed_eyeblossom", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.isVariant(1, "self", "=="),
                                EntityFilters.isMarkVariant(12, "self", "!=")
                            ),
                            event: "minecraft:ate_closed_eyeblossom",
                            target: "self"
                        },
                        useItem: true,
                        swing: true,
                        playSounds: ["eat"],
                        particleOnStart: {
                            particleType: "smoke",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.feed"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.hasComponent("minecraft:transformation", "self", "!="),
                                EntityFilters.isVariant(0, "self", "==")
                            ),
                            event: "become_cow",
                            target: "self"
                        },
                        useItem: false,
                        swing: true,
                        hurtItem: 1,
                        playSounds: ["shear"],
                        spawnItems: {
                            table: "loot_tables/entities/mooshroom_shear.json"
                        },
                        particleOnStart: {
                            particleType: "largeexplode",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.mooshear",
                        vibration: "shear"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.hasComponent("minecraft:transformation", "self", "!="),
                                EntityFilters.isVariant(1, "self", "==")
                            ),
                            event: "become_cow",
                            target: "self"
                        },
                        useItem: false,
                        swing: true,
                        hurtItem: 1,
                        playSounds: ["shear"],
                        spawnItems: {
                            table: "loot_tables/entities/brown_mooshroom_shear.json"
                        },
                        particleOnStart: {
                            particleType: "largeexplode",
                            particleYOffset: 0.25,
                            particleOffsetTowardsInteractor: true
                        },
                        interactText: "action.interact.mooshear",
                        vibration: "shear"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("bucket:0", "hand", "other"),
                                EntityFilters.isFamily("player", "other")
                            )
                        },
                        useItem: true,
                        swing: true,
                        transformToItem: "bucket:1",
                        playSounds: ["milk"],
                        interactText: "action.interact.milk"
                    }
                ]
            })
        ],
        "minecraft:mooshroom_fed_nothing": [
            new BPEntityComponents.SetMarkVariant({
                value: -1
            })
        ],
        "minecraft:mooshroom_brown_fed_poppy": [
            new BPEntityComponents.SetMarkVariant({
                value: 0
            })
        ],
        "minecraft:mooshroom_brown_fed_cornflower": [
            new BPEntityComponents.SetMarkVariant({
                value: 1
            })
        ],
        "minecraft:mooshroom_brown_fed_tulips": [
            new BPEntityComponents.SetMarkVariant({
                value: 2
            })
        ],
        "minecraft:mooshroom_brown_fed_azure_bluet": [
            new BPEntityComponents.SetMarkVariant({
                value: 3
            })
        ],
        "minecraft:mooshroom_brown_fed_lily_of_the_valley": [
            new BPEntityComponents.SetMarkVariant({
                value: 4
            })
        ],
        "minecraft:mooshroom_brown_fed_dandelion": [
            new BPEntityComponents.SetMarkVariant({
                value: 5
            })
        ],
        "minecraft:mooshroom_brown_fed_blue_orchid": [
            new BPEntityComponents.SetMarkVariant({
                value: 6
            })
        ],
        "minecraft:mooshroom_brown_fed_allium": [
            new BPEntityComponents.SetMarkVariant({
                value: 7
            })
        ],
        "minecraft:mooshroom_brown_fed_oxeye_daisy": [
            new BPEntityComponents.SetMarkVariant({
                value: 8
            })
        ],
        "minecraft:mooshroom_brown_fed_wither_rose": [
            new BPEntityComponents.SetMarkVariant({
                value: 9
            })
        ],
        "minecraft:mooshroom_brown_fed_torchflower": [
            new BPEntityComponents.SetMarkVariant({
                value: 10
            })
        ],
        "minecraft:mooshroom_brown_fed_open_eyeblossom": [
            new BPEntityComponents.SetMarkVariant({
                value: 11
            })
        ],
        "minecraft:mooshroom_brown_fed_closed_eyeblossom": [
            new BPEntityComponents.SetMarkVariant({
                value: 12
            })
        ],
        "minecraft:mooshroom_red": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:mooshroom_brown": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ]
    },
    components: [
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:mooshroom": "minecraft:mooshroom"
            },
            denyParentsVariant: {
                chance: 0.00098,
                minVariant: 0,
                maxVariant: 1
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetTypeFamily({
            family: ["mushroomcow", "mob"]
        }),
        new BPEntityComponents.SetMarkVariant({
            value: -1
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
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
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetBalloonable(),
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
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    onDamage: {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("lightning", "other"),
                            EntityFilters.isVariant(0, "self", "==")
                        ),
                        event: "minecraft:become_brown"
                    },
                    dealsDamage: "no",
                    onDamageSoundEvent: "convert_mooshroom"
                },
                {
                    onDamage: {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("lightning", "other"),
                            EntityFilters.isVariant(1, "self", "==")
                        ),
                        event: "minecraft:become_red"
                    },
                    dealsDamage: "no",
                    onDamageSoundEvent: "convert_mooshroom"
                }
            ]
        })
    ],
    events: {
        "become_cow": {
            add: {
                componentGroups: ["minecraft:mooshroom_become_cow"]
            }
        },
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 95,
                    add: {
                        componentGroups: ["minecraft:cow_adult", "minecraft:mooshroom_red"]
                    }
                },
                {
                    weight: 5,
                    add: {
                        componentGroups: ["minecraft:cow_baby", "minecraft:mooshroom_red"]
                    }
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:cow_baby"]
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
        "minecraft:flowerless": {
            add: {
                componentGroups: ["minecraft:mooshroom_fed_nothing"]
            }
        },
        "minecraft:ate_allium": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_allium"]
            }
        },
        "minecraft:ate_cornflower": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_cornflower"]
            }
        },
        "minecraft:ate_lily": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_lily_of_the_valley"]
            }
        },
        "minecraft:ate_rose": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_wither_rose"]
            }
        },
        "minecraft:ate_torchflower": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_torchflower"]
            }
        },
        "minecraft:ate_open_eyeblossom": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_open_eyeblossom"]
            }
        },
        "minecraft:ate_closed_eyeblossom": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_closed_eyeblossom"]
            }
        },
        "minecraft:ate_orchid": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_blue_orchid"]
            }
        },
        "minecraft:ate_daisy": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_oxeye_daisy"]
            }
        },
        "minecraft:ate_tulip": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_tulips"]
            }
        },
        "minecraft:ate_bluet": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_azure_bluet"]
            }
        },
        "minecraft:ate_poppy": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_poppy"]
            }
        },
        "minecraft:ate_dandelion": {
            add: {
                componentGroups: ["minecraft:mooshroom_brown_fed_dandelion"]
            }
        },
        "minecraft:become_red": {
            remove: {
                componentGroups: ["minecraft:mooshroom_brown"]
            },
            add: {
                componentGroups: ["minecraft:mooshroom_red", "minecraft:mooshroom_fed_nothing"]
            }
        },
        "minecraft:become_brown": {
            remove: {
                componentGroups: ["minecraft:mooshroom_red"]
            },
            add: {
                componentGroups: ["minecraft:mooshroom_brown", "minecraft:mooshroom_fed_nothing"]
            }
        },
        "minecraft:become_brown_adult": {
            remove: {
                componentGroups: ["minecraft:mooshroom_red"]
            },
            add: {
                componentGroups: [
                    "minecraft:mooshroom_brown",
                    "minecraft:cow_adult",
                    "minecraft:mooshroom_fed_nothing"
                ]
            }
        },
        "minecraft:become_red_adult": {
            remove: {
                componentGroups: ["minecraft:mooshroom_brown", "minecraft:cow_baby"]
            },
            add: {
                componentGroups: ["minecraft:mooshroom_red", "minecraft:cow_adult"]
            }
        }
    }
});
