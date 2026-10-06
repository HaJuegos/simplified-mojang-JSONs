import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de la Cabra para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const GoatTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Goat,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "goat_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 6,
                speedMultiplier: 1
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
            new BPEntityComponents.SetAttack({
                damage: 1
            })
        ],
        "goat_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/goat.json"
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 3,
                speedMultiplier: 0.6
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                breedItems: ["wheat"],
                breedsWith: {
                    "minecraft:goat": {}
                }
            }),
            new BPEntityComponents.SetAttack({
                damage: 2
            })
        ],
        "goat_default": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "goat_screamer": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "interact_default": [
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasComponent("minecraft:is_baby", "self", "!="),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.hasEquipment("bucket:0", "hand", "other")
                            )
                        },
                        useItem: true,
                        swing: true,
                        transformToItem: "bucket:1",
                        playSounds: ["milk_suspiciously"],
                        interactText: "action.interact.milk"
                    }
                ]
            })
        ],
        "interact_screamer": [
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasComponent("minecraft:is_baby", "self", "!="),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.hasEquipment("bucket:0", "hand", "other")
                            )
                        },
                        useItem: true,
                        swing: true,
                        transformToItem: "bucket:1",
                        playSounds: ["milk.screamer"],
                        interactText: "action.interact.milk"
                    }
                ]
            })
        ],
        "ram_default": [
            new BPEntityComponents.SetBehaviorRamAttack({
                priority: 5,
                runSpeed: 0.7,
                ramSpeed: 1.8,
                minRamDistance: 4,
                ramDistance: 7,
                knockbackForce: 2.5,
                knockbackHeight: 0.04,
                preRamSound: "pre_ram",
                ramImpactSound: "ram_impact",
                cooldownRange: {
                    min: 30,
                    max: 300
                },
                onStart: [
                    {
                        event: "start_event",
                        target: "self"
                    }
                ]
            })
        ],
        "ram_screamer": [
            new BPEntityComponents.SetBehaviorRamAttack({
                priority: 5,
                runSpeed: 0.7,
                ramSpeed: 1.8,
                minRamDistance: 4,
                ramDistance: 7,
                knockbackForce: 2.5,
                knockbackHeight: 0.04,
                preRamSound: "pre_ram.screamer",
                ramImpactSound: "ram_impact.screamer",
                cooldownRange: {
                    min: 5,
                    max: 15
                },
                onStart: [
                    {
                        event: "start_event",
                        target: "self"
                    }
                ]
            })
        ],
        "attack_cooldown": [
            new BPEntityComponents.SetAttackCooldown({
                attackCooldownTime: [30, 40],
                attackCooldownCompleteEvent: {
                    event: "attack_cooldown_complete_event",
                    target: "self"
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetBehaviorJumpToBlock({
            priority: 8,
            searchWidth: 10,
            searchHeight: 10,
            minimumPathLength: 8,
            minimumDistance: 1,
            scaleFactor: 0.6,
            cooldownRange: {
                min: 30,
                max: 60
            }
        }),
        new BPEntityComponents.SetGenetics({
            mutationRate: 0.02,
            genes: [
                {
                    name: "goat_variant",
                    useSimplifiedBreeding: true,
                    alleleRange: {
                        rangeMin: 1,
                        rangeMax: 100
                    },
                    geneticVariants: [
                        {
                            mainAllele: {
                                rangeMin: 1,
                                rangeMax: 2
                            },
                            birthEvent: {
                                event: "minecraft:born_screamer",
                                target: "self"
                            }
                        },
                        {
                            mainAllele: {
                                rangeMin: 3,
                                rangeMax: 100
                            },
                            birthEvent: {
                                event: "minecraft:born_default",
                                target: "self"
                            }
                        }
                    ]
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["goat", "animal"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true,
            avoidDamageBlocks: true,
            blocksToAvoid: [
                {
                    name: "minecraft:powder_snow"
                }
            ]
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            width: 0.9,
            height: 1.3
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:goat": "minecraft:goat"
            },
            mutationFactor: {
                variant: 0
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
            value: 0.4
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 4,
            speedMultiplier: 0.75,
            items: ["wheat"]
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            priority: 6,
            withinRadius: 16,
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("goat", "other", "!="),
                        EntityFilters.hasComponent("minecraft:attack_cooldown", "self", "!=")
                    ),
                    maxDist: 16
                }
            ],
            mustSee: true
        }),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "yes",
                    damageModifier: -10
                }
            ]
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 9,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 10,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 11
        }),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 95,
                    add: {
                        componentGroups: ["goat_adult"]
                    }
                },
                {
                    weight: 5,
                    add: {
                        componentGroups: ["goat_baby"]
                    }
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["goat_baby"]
            }
        },
        "minecraft:born_default": {
            add: {
                componentGroups: ["goat_default", "ram_default", "interact_default"]
            }
        },
        "minecraft:born_screamer": {
            add: {
                componentGroups: ["goat_screamer", "ram_screamer", "interact_screamer"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["goat_baby"]
            },
            add: {
                componentGroups: ["goat_adult"]
            }
        },
        "start_event": {
            add: {
                componentGroups: ["attack_cooldown"]
            }
        },
        "attack_cooldown_complete_event": {
            remove: {
                componentGroups: ["attack_cooldown"]
            }
        }
    }
});
