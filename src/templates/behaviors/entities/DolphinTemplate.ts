import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Delfin para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 04-10-2026
 */
export const DolphinTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Dolphin,
    description: {
        spawnCategory: SpawnCategoryEntities.WaterCreature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "dolphin_adult": [
            new BPEntityComponents.SetExperienceReward({
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/dolphin.json"
            }),
            new BPEntityComponents.SetBribeable({
                bribeItems: ["fish", "salmon"]
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                priority: 2,
                trackTarget: true
            })
        ],
        "dolphin_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.65
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: ["fish", "salmon"],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 4,
                speedMultiplier: 1.1
            }),
            new BPEntityComponents.SetBehaviorPanic({
                priority: 1,
                speedMultiplier: 1.25
            })
        ],
        "dolphin_angry": [
            new BPEntityComponents.SetAngry({
                duration: 25,
                broadcastAnger: true,
                broadcastRange: 16,
                calmEvent: {
                    event: "on_calm",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetOnTargetAcquired()
        ],
        "dolphin_dried": [
            new BPEntityComponents.SetDamageOverTime({
                damagePerHurt: 1,
                timeBetweenHurt: 0
            })
        ],
        "dolphin_swimming_navigation": [
            new BPEntityComponents.SetBehaviorLookAtPlayer({
                priority: 8,
                lookDistance: 6
            }),
            new BPEntityComponents.SetNavigationGeneric({
                isAmphibious: true,
                canPathOverWater: false,
                canSwim: true,
                canWalk: false,
                canBreach: true,
                canSink: false
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.onGround(true, "self", "=="),
                            EntityFilters.inWater(true, "self", "!=")
                        ),
                        event: "navigation_on_land"
                    }
                ]
            })
        ],
        "dolphin_on_land": [
            new BPEntityComponents.SetNavigationGeneric({
                isAmphibious: true,
                canPathOverWater: true,
                canSwim: true,
                canWalk: true,
                canBreach: false,
                canJump: false
            }),
            new BPEntityComponents.SetDryingOutTimer({
                totalTime: 120,
                waterBottleRefillTime: 0,
                driedOutEvent: {
                    event: "dried_out"
                },
                stoppedDryingOutEvent: {
                    event: "stop_dryingout"
                },
                recoverAfterDriedOutEvent: {
                    event: "recover_after_dried_out"
                }
            })
        ],
        "dolphin_on_land_in_rain": [
            new BPEntityComponents.SetNavigationGeneric({
                isAmphibious: true,
                canPathOverWater: true,
                canSwim: true,
                canWalk: true,
                canBreach: false,
                canJump: false
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.inWater(true, "self", "=="),
                        event: "navigation_off_land"
                    },
                    {
                        filters: EntityFilters.inWaterOrRain(true, "self", "!="),
                        event: "start_dryingout"
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
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:dolphin": "minecraft:dolphin"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "dolphin", "mob"]
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.9,
            height: 0.6
        }),
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
        new BPEntityComponents.SetFollowRange({
            value: 48,
            max: 48
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 240,
            suffocateTime: 0,
            breathesAir: true,
            breathesWater: false,
            generatesBubbles: false
        }),
        new BPEntityComponents.SetAttack({
            damage: 3
        }),
        new BPEntityComponents.SetMovement({
            value: 0.1
        }),
        new BPEntityComponents.SetNavigationGeneric({
            isAmphibious: true,
            canPathOverWater: true,
            canSwim: true,
            canWalk: false,
            canBreach: true,
            canSink: false,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.15
        }),
        new BPEntityComponents.SetJumpStatic({
            jumpPower: 0.6
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetBehaviorSwimUpForBreath({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorSwimWithEntity({
            priority: 4,
            successRate: 0.1,
            chanceToStop: 0.0333,
            stateCheckInterval: 0.5,
            catchUpThreshold: 12,
            matchDirectionThreshold: 2,
            catchUpMultiplier: 2.5,
            speedMultiplier: 1.5,
            searchRange: 20,
            stopDistance: 5,
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("player", "other")
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorRandomSwim({
            priority: 5,
            interval: 0,
            xzDist: 20
        }),
        new BPEntityComponents.SetBehaviorRandomBreach({
            priority: 6,
            interval: 50,
            xzDist: 6,
            cooldownTime: 2
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorAvoidMobType({
            priority: 2,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily("guardian_elder", "other"),
                        EntityFilters.isFamily("guardian", "other")
                    ),
                    maxDist: 8,
                    walkSpeedMultiplier: 1,
                    sprintSpeedMultiplier: 1
                }
            ],
            probabilityPerStrength: 0.14
        }),
        new BPEntityComponents.SetBehaviorFindUnderwaterTreasure({
            priority: 2,
            speedMultiplier: 2,
            searchRange: 30,
            stopDistance: 50
        }),
        new BPEntityComponents.SetBehaviorMoveToWater({
            priority: 1,
            searchRange: 15,
            searchHeight: 5
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetFlocking({
            inWater: false,
            matchVariants: false,
            useCenterOfMass: false,
            lowFlockLimit: 4,
            highFlockLimit: 8,
            goalWeight: 2,
            lonerChance: 0.1,
            influenceRadius: 6,
            breachInfluence: 0,
            separationWeight: 1.75,
            separationThreshold: 3,
            cohesionWeight: 1.85,
            cohesionThreshold: 6.5,
            innnerCohesionThreshold: 3.5,
            minHeight: 4,
            maxHeight: 4,
            blockDistance: 1,
            blockWeight: 0
        }),
        new BPEntityComponents.SetOnTargetAcquired({
            event: "become_angry",
            target: "self"
        }),
        new BPEntityComponents.SetOnTargetEscape({
            target: "self"
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetLeashable({
            presets: [
                {
                    softDistance: 4,
                    hardDistance: 6,
                    maxDistance: 10
                }
            ],
            unleashOnRemoval: false
        }),
        new BPEntityComponents.SetBalloonable({
            mass: 0.4
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetUsesLegacyFriction()
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 90,
                    add: {
                        componentGroups: ["dolphin_adult", "dolphin_swimming_navigation"]
                    }
                },
                {
                    weight: 10,
                    trigger: "minecraft:entity_born"
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["dolphin_baby", "dolphin_swimming_navigation"]
            }
        },
        "ageable_grow_up": {
            remove: {
                componentGroups: ["dolphin_baby"]
            },
            add: {
                componentGroups: ["dolphin_adult"]
            }
        },
        "become_angry": {
            add: {
                componentGroups: ["dolphin_angry"]
            }
        },
        "on_calm": {
            remove: {
                componentGroups: ["dolphin_angry"]
            }
        },
        "stop_dryingout": {
            remove: {
                componentGroups: ["dolphin_on_land", "dolphin_dried"]
            },
            add: {
                componentGroups: ["dolphin_on_land_in_rain"]
            }
        },
        "start_dryingout": {
            remove: {
                componentGroups: ["dolphin_on_land_in_rain"]
            },
            add: {
                componentGroups: ["dolphin_on_land"]
            }
        },
        "dried_out": {
            add: {
                componentGroups: ["dolphin_dried"]
            }
        },
        "recover_after_dried_out": {
            remove: {
                componentGroups: ["dolphin_dried"]
            }
        },
        "navigation_on_land": {
            add: {
                componentGroups: ["dolphin_on_land"]
            },
            remove: {
                componentGroups: ["dolphin_swimming_navigation"]
            }
        },
        "navigation_off_land": {
            add: {
                componentGroups: ["dolphin_swimming_navigation"]
            },
            remove: {
                componentGroups: ["dolphin_on_land_in_rain", "dolphin_on_land", "dolphin_dried"]
            }
        }
    }
});
