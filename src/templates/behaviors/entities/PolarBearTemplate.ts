import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Oso Polar para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const PolarBearTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.PolarBear,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 4,
                speedMultiplier: 1.25
            })
        ],
        "minecraft:baby_wild": [
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:on_scared",
                target: "self"
            }),
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                priority: 4,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("player", "other"),
                        maxDist: 16
                    }
                ]
            })
        ],
        "minecraft:baby_scared": [
            new BPEntityComponents.SetAngry({
                duration: 1,
                broadcastAnger: true,
                broadcastRange: 41,
                calmEvent: {
                    event: "minecraft:baby_on_calm",
                    target: "self"
                }
            })
        ],
        "minecraft:adult": [
            new BPEntityComponents.SetExperienceReward({
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/polar_bear.json"
            }),
            new BPEntityComponents.SetLeashableTo({
                unleashOnRemoval: false
            })
        ],
        "minecraft:adult_wild": [
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:on_anger",
                target: "self"
            }),
            new BPEntityComponents.SetOnFriendlyAnger({
                event: "minecraft:on_anger",
                target: "self"
            }),
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                priority: 4,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("fox", "other"),
                        maxDist: 16
                    }
                ],
                mustSee: false
            })
        ],
        "minecraft:adult_hostile": [
            new BPEntityComponents.SetAttack({
                damage: 6
            }),
            new BPEntityComponents.SetAngry({
                duration: 500,
                broadcastAnger: false,
                broadcastRange: 20,
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorStompAttack({
                priority: 1,
                trackTarget: true,
                requireCompletePath: true,
                stompRangeMultiplier: 2,
                noDamageRangeMultiplier: 2
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
        new BPEntityComponents.SetTypeFamily({
            family: ["polarbear", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetFreezingImmune(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:polar_bear": "minecraft:polar_bear"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetHealth({
            value: 30
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
        new BPEntityComponents.SetCollisionBox({
            width: 1.4,
            height: 1.4
        }),
        new BPEntityComponents.SetMovement({
            value: 0.25
        }),
        new BPEntityComponents.SetWaterMovement({
            dragFactor: 0.98
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            avoidDamageBlocks: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetFollowRange({
            value: 48
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 1.25,
            damageSources: [
                "campfire",
                "fire",
                "fire_tick",
                "freezing",
                "lightning",
                "lava",
                "magma",
                "temperature",
                "soul_campfire"
            ],
            ignoreMobDamage: true
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 6,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 7
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetLeashable({
            unleashOnRemoval: false
        }),
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetUsesLegacyFriction()
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 9,
                    add: {
                        componentGroups: ["minecraft:adult", "minecraft:adult_wild"]
                    }
                },
                {
                    weight: 1,
                    add: {
                        componentGroups: ["minecraft:baby", "minecraft:baby_wild"]
                    }
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:baby", "minecraft:baby_wild"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:baby", "minecraft:baby_wild", "minecraft:baby_scared"]
            },
            add: {
                componentGroups: ["minecraft:adult", "minecraft:adult_wild"]
            }
        },
        "minecraft:on_calm": {
            remove: {
                componentGroups: ["minecraft:adult_hostile"]
            },
            add: {
                componentGroups: ["minecraft:adult_wild"]
            }
        },
        "minecraft:on_anger": {
            remove: {
                componentGroups: ["minecraft:adult_wild"]
            },
            add: {
                componentGroups: ["minecraft:adult_hostile"]
            }
        },
        "minecraft:baby_on_calm": {
            remove: {
                componentGroups: ["minecraft:baby_scared"]
            },
            add: {
                componentGroups: ["minecraft:baby_wild"]
            }
        },
        "minecraft:on_scared": {
            remove: {
                componentGroups: ["minecraft:baby_wild"]
            },
            add: {
                componentGroups: ["minecraft:baby_scared"]
            }
        }
    }
});
