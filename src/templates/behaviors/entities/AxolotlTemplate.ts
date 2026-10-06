import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Ajolote para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 03-10-2026
 */
export const AxolotlTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Axolotl,
    description: {
        spawnCategory: SpawnCategoryEntities.Axolotls,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "attack_cooldown": [
            new BPEntityComponents.SetAttackCooldown({
                attackCooldownTime: 120,
                attackCooldownCompleteEvent: {
                    event: "attack_cooldown_complete_event",
                    target: "self"
                }
            })
        ],
        "axolotl_lucy": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "axolotl_cyan": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "axolotl_gold": [
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "axolotl_wild": [
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "axolotl_blue": [
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "axolotl_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: [
                    {
                        item: "tropical_fish_bucket",
                        resultItem: "water_bucket:0"
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
                priority: 5,
                speedMultiplier: 1.1
            })
        ],
        "axolotl_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLeashableTo({
                unleashOnRemoval: false
            }),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 1,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                breedItems: [
                    {
                        item: "tropical_fish_bucket",
                        resultItem: "water_bucket:0"
                    }
                ],
                breedsWith: {
                    "minecraft:axolotl": {}
                }
            })
        ],
        "axolotl_in_water": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.inWater(true, "self", "!="),
                        event: "start_drying_out"
                    }
                ]
            })
        ],
        "axolotl_dried": [
            new BPEntityComponents.SetDamageOverTime({
                damagePerHurt: 1,
                timeBetweenHurt: 0
            })
        ],
        "axolotl_on_land": [
            new BPEntityComponents.SetDryingOutTimer({
                totalTime: 300,
                waterBottleRefillTime: 90,
                driedOutEvent: {
                    event: "dried_out"
                },
                stoppedDryingOutEvent: {
                    event: "stop_drying_out"
                },
                recoverAfterDriedOutEvent: {
                    event: "recover_after_dried_out"
                }
            })
        ],
        "axolotl_on_land_in_rain": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.inWaterOrRain(true, "self", "!="),
                        event: "start_drying_out"
                    },
                    {
                        filters: EntityFilters.inWater(true, "self", "=="),
                        event: "enter_water"
                    }
                ]
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAmbientSoundInterval({
            soundEvents: [
                {
                    soundID: "ambient.in.water",
                    condition: `${MoLang.headIsInWater()}`
                }
            ],
            minRandomCooldownSound: 6,
            maxRandomCooldownSound: 16
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:axolotl": "minecraft:axolotl"
            },
            mutationFactor: {
                variant: 0.00083
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "axolotl", "mob"]
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.75,
            height: 0.42
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0,
            breathesWater: true,
            breathesAir: true,
            generatesBubbles: false
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetHealth({
            value: 14
        }),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "lightning",
                    dealsDamage: "yes",
                    damageMultiplier: 2000
                }
            ]
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
        new BPEntityComponents.SetNavigationGeneric({
            isAmphibious: true,
            canPathOverWater: true,
            canSwim: true,
            canWalk: true,
            canSink: false,
            avoidDamageBlocks: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetMovementAmphibious({
            maxTurn: 15
        }),
        new BPEntityComponents.SetMovement({
            value: 0.1
        }),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.2
        }),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetLeashable({
            unleashOnRemoval: false
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetAttack({
            damage: 2
        }),
        new BPEntityComponents.SetCombatRegeneration(),
        new BPEntityComponents.SetBehaviorPlayDead({
            priority: 0,
            duration: 10,
            forceBelowHealth: 8,
            randomStartChance: 0.33,
            randomDamageRange: {
                min: 0,
                max: 2
            },
            damageSources: [
                "contact",
                "entity_attack",
                "entity_explosion",
                "magic",
                "projectile",
                "thorns",
                "wither"
            ],
            applyRegeneration: true,
            filters: EntityFilters.inWater(true, "self", "==")
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 2,
            speedMultiplier: 1.1,
            canTemptVertically: true,
            items: ["tropical_fish_bucket"]
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            priority: 3,
            mustSee: true,
            reselectTargets: true,
            withinRadius: 20,
            mustSeeForgetDuration: 17,
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.inWater(true, "other"),
                        EntityFilters.hasComponent("minecraft:attack_cooldown", "self", "!="),
                        EntityFilters.anyOf(
                            EntityFilters.isFamily("squid", "other"),
                            EntityFilters.isFamily("fish", "other"),
                            EntityFilters.isFamily("tadpole", "other")
                        )
                    ),
                    maxDist: 8
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.inWater(true, "other"),
                        EntityFilters.anyOf(
                            EntityFilters.isFamily("drowned", "other"),
                            EntityFilters.isFamily("guardian", "other"),
                            EntityFilters.isFamily("guardian_elder", "other")
                        )
                    ),
                    maxDist: 8
                }
            ]
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            priority: 4,
            onAttack: {
                event: "killed_enemy_event"
            }
        }),
        new BPEntityComponents.SetBehaviorMoveToWater({
            priority: 6,
            searchRange: 16,
            searchHeight: 5,
            searchCount: 1,
            goalRadius: 0.1
        }),
        new BPEntityComponents.SetBehaviorSwimIdle({
            priority: 7,
            idleTime: 5,
            successRate: 0.05
        }),
        new BPEntityComponents.SetBehaviorRandomSwim({
            priority: 8,
            interval: 0,
            xzDist: 30,
            yDist: 15
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 9,
            interval: 100
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 10,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetUsesLegacyFriction()
    ],
    events: {
        "minecraft:entity_spawned": {
            sequence: [
                {
                    add: {
                        componentGroups: ["axolotl_adult", "axolotl_in_water"]
                    }
                },
                {
                    randomize: [
                        {
                            weight: 25,
                            add: {
                                componentGroups: ["axolotl_cyan"]
                            }
                        },
                        {
                            weight: 25,
                            add: {
                                componentGroups: ["axolotl_gold"]
                            }
                        },
                        {
                            weight: 25,
                            add: {
                                componentGroups: ["axolotl_lucy"]
                            }
                        },
                        {
                            weight: 25,
                            add: {
                                componentGroups: ["axolotl_wild"]
                            }
                        }
                    ]
                }
            ]
        },
        "attack_cooldown_complete_event": {
            remove: {
                componentGroups: ["attack_cooldown"]
            }
        },
        "killed_enemy_event": {
            add: {
                componentGroups: ["attack_cooldown"]
            }
        },
        "minecraft:entity_born": {
            sequence: [
                {
                    remove: {
                        componentGroups: ["axolotl_adult"]
                    },
                    add: {
                        componentGroups: ["axolotl_baby", "axolotl_in_water"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                    add: {
                        componentGroups: ["axolotl_blue"]
                    }
                }
            ]
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["axolotl_baby"]
            },
            add: {
                componentGroups: ["axolotl_adult"]
            }
        },
        "stop_drying_out": {
            remove: {
                componentGroups: ["axolotl_on_land", "axolotl_dried"]
            },
            add: {
                componentGroups: ["axolotl_on_land_in_rain"]
            }
        },
        "start_drying_out": {
            remove: {
                componentGroups: ["axolotl_on_land_in_rain", "axolotl_in_water"]
            },
            add: {
                componentGroups: ["axolotl_on_land"]
            }
        },
        "dried_out": {
            add: {
                componentGroups: ["axolotl_dried"]
            }
        },
        "recover_after_dried_out": {
            remove: {
                componentGroups: ["axolotl_dried"]
            }
        },
        "enter_water": {
            remove: {
                componentGroups: ["axolotl_on_land", "axolotl_on_land_in_rain", "axolotl_dried"]
            },
            add: {
                componentGroups: ["axolotl_in_water"]
            }
        }
    }
});
