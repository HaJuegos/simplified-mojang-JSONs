import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Ocelote para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const OcelotTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Ocelot,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:ocelot_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: ["fish", "salmon"],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            })
        ],
        "minecraft:ocelot_adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/ocelot.json"
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetScale({
                value: 1
            })
        ],
        "minecraft:wild_child_ocelot_spawn": [
            new BPEntityComponents.SetSpawnEntity({
                entities: {
                    filters: EntityFilters.allOf(EntityFilters.randomChance(7)),
                    minWaitTime: 0,
                    maxWaitTime: 0,
                    numToSpawn: 2,
                    singleUse: true,
                    spawnEntity: "minecraft:ocelot",
                    spawnEvent: "minecraft:entity_born",
                    spawnMethod: "born",
                    spawnSound: ""
                }
            })
        ],
        "minecraft:ocelot_wild": [
            new BPEntityComponents.SetTrusting({
                probability: 0.33,
                trustItems: ["fish", "salmon"],
                trustEvent: {
                    event: "minecraft:on_trust",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorTempt({
                priority: 4,
                speedMultiplier: 0.5,
                withinRadius: 16,
                canGetScared: true,
                items: ["fish", "salmon"]
            }),
            new BPEntityComponents.SetBehaviorAvoidMobType({
                priority: 5,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("player", "other"),
                        maxDist: 10,
                        walkSpeedMultiplier: 0.8,
                        sprintSpeedMultiplier: 1.33
                    }
                ]
            }),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["baby_undead"],
                seats: [
                    {
                        position: [0, 0.35, 0]
                    }
                ]
            })
        ],
        "minecraft:ocelot_trusting": [
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                breedsWith: {
                    "minecraft:ocelot": {}
                },
                breedItems: ["fish", "salmon"]
            }),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 3,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBehaviorTempt({
                priority: 4,
                speedMultiplier: 0.5,
                withinRadius: 16,
                items: ["fish", "salmon"]
            })
        ],
        "minecraft:ocelot_tame": [
            new BPEntityComponents.SetIsTamed(),
            new BPEntityComponents.SetHealth({
                value: 20,
                max: 20
            }),
            new BPEntityComponents.SetSittable({}),
            new BPEntityComponents.SetBehaviorTeleportToOwner({
                priority: 0,
                filters: EntityFilters.allOf(
                    EntityFilters.ownerDistance(12, "self", ">"),
                    EntityFilters.isPanicking()
                )
            }),
            new BPEntityComponents.SetBehaviorStayWhileSitting({
                priority: 3
            }),
            new BPEntityComponents.SetBehaviorFollowOwner({
                priority: 4,
                speedMultiplier: 1,
                startDistance: 10,
                stopDistance: 2
            }),
            new BPEntityComponents.SetBehaviorOcelotSitOnBlock({
                priority: 6,
                speedMultiplier: 1
            })
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
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
        new BPEntityComponents.SetAttackDamage({
            value: 3
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:ocelot": "minecraft:ocelot"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetTypeFamily({
            family: ["ocelot", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.6,
            height: 0.7
        }),
        new BPEntityComponents.SetMovement({
            value: 0.3
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidWater: true,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetLeashable({
            onLeash: {
                event: "minecraft:on_leash",
                target: "self"
            },
            onUnleash: {
                event: "minecraft:on_unleash",
                target: "self"
            }
        }),
        new BPEntityComponents.SetBalloonable({
            mass: 0.7
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 1.25
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            priority: 1,
            reselectTargets: true,
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("chicken", "other"),
                    maxDist: 8
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("baby_turtle", "other"),
                        EntityFilters.inWater(true, "other", "!=")
                    ),
                    maxDist: 8
                }
            ]
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 1,
            speedMultiplier: 1.25,
            targetDist: 0,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorLeapAtTarget({
            priority: 3,
            targetDist: 0.3
        }),
        new BPEntityComponents.SetBehaviorOcelotattack({
            priority: 4,
            cooldownTime: 1,
            xMaxRotation: 30,
            yMaxHeadRotation: 30,
            maxDistance: 15,
            maxSneakRange: 15,
            maxSprintRange: 4,
            reachMultiplier: 2,
            sneakSpeedMultiplier: 0.6,
            sprintSpeedMultiplier: 1.33,
            walkSpeedMultiplier: 0.8
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 8,
            speedMultiplier: 0.8
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 9
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 3,
                            add: {
                                componentGroups: [
                                    "minecraft:ocelot_adult",
                                    "minecraft:ocelot_wild",
                                    "minecraft:wild_child_ocelot_spawn"
                                ]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:ocelot_baby", "minecraft:ocelot_wild"]
                            }
                        }
                    ]
                }
            ]
        },
        "minecraft:entity_born": {
            sequence: [
                {
                    add: {
                        componentGroups: ["minecraft:ocelot_baby", "minecraft:ocelot_trusting"]
                    }
                }
            ]
        },
        "minecraft:entity_born_wild": {
            remove: {
                componentGroups: ["minecraft:ocelot_trusting"]
            },
            add: {
                componentGroups: ["minecraft:ocelot_baby", "minecraft:ocelot_wild"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:ocelot_baby"]
            },
            add: {
                componentGroups: ["minecraft:ocelot_adult"]
            }
        },
        "minecraft:on_trust": {
            sequence: [
                {
                    remove: {
                        componentGroups: ["minecraft:ocelot_wild"]
                    }
                },
                {
                    add: {
                        componentGroups: ["minecraft:ocelot_trusting"]
                    }
                }
            ]
        }
    }
});
