import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Evoker para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const EvocationIllagerTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.EvocationIllager,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:celebrate": [
            new BPEntityComponents.SetBehaviorCelebrate({
                celebrationSound: "celebrate",
                duration: 30,
                jumpInterval: {
                    max: 3.5,
                    min: 1
                },
                onCelebrationEndEvent: {
                    event: "minecraft:stop_celebrating",
                    target: "self"
                },
                priority: 5,
                soundInterval: {
                    max: 7,
                    min: 2
                }
            })
        ],
        "minecraft:raid_despawn": [
            new BPEntityComponents.SetDespawn({
                despawnFromDistance: {}
            })
        ],
        "minecraft:raid_configuration": [
            new BPEntityComponents.SetAmbientSoundInterval({
                soundEvents: "ambient.in.raid",
                minRandomCooldownSound: 2,
                maxRandomCooldownSound: 4
            }),
            new BPEntityComponents.SetBehaviorMoveToVillage({
                priority: 6,
                speedMultiplier: 0.7
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: false,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "hostile",
                firstFoundingReward: 0,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            })
        ],
        "minecraft:raid_persistence": [
            new BPEntityComponents.SetPersistent()
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.isFamily('player', 'other'),
                    maxDist: 8,
                    walkSpeedMultiplier: 0.6
                },
                {
                    filters: EntityFilters.isFamily('creaking', 'other'),
                    maxDist: 8,
                    sprintSpeedMultiplier: 1.2
                }
            ],
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorEquipItem({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            entityTypes: {
                filters: EntityFilters.isFamily("illager", "other", "!="),
                maxDist: 64
            },
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtEntity({
            lookTime: {
                min: 1,
                max: 2
            },
            priority: 10
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 3,
            probability: 1,
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.isFamily('snowgolem', 'other'),
                        EntityFilters.isFamily('irongolem', 'other'),
                        EntityFilters.isFamily('wandering_trader', 'other'),
                    ),
                    maxDist: 20
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.hasComponent('minecraft:is_baby', 'other', 'not'),
                        EntityFilters.isFamily('villager', 'other'),
                    ),
                    maxDist: 20
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            goalRadius: 2,
            priority: 7,
            maxDist: 3,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 8,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBehaviorSendEvent({
            eventChoices: [
                {
                    particleColor: "#FFB38033",
                    castDuration: 3,
                    maxActivationRange: 16,
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("sheep", "other"),
                        EntityFilters.isColor("blue", "other")
                    ),
                    cooldownTime: 5,
                    minActivationRange: 0,
                    startSoundEvent: "cast.spell",
                    sequence: [
                        {
                            baseDelay: 2,
                            event: "wololo",
                            soundEvent: "prepare.wololo"
                        }
                    ],
                    weight: 3
                }
            ],
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorSummonEntity({
            priority: 2,
            summonChoices: [
                {
                    castDuration: 2,
                    particleColor: "#FF664D59",
                    cooldownTime: 5,
                    maxActivationRange: 3,
                    minActivationRange: 0,
                    sequence: [
                        {
                            baseDelay: 1,
                            shape: "circle",
                            numEntitiesSpawned: 5,
                            delayPerSummon: 0,
                            entityLifespan: 1.1,
                            entityType: "minecraft:evocation_fang",
                            size: 1.5,
                            soundEvent: "prepare.attack",
                            target: "self"
                        },
                        {
                            baseDelay: 0.15,
                            target: "self",
                            delayPerSummon: 0,
                            numEntitiesSpawned: 8,
                            shape: "circle",
                            entityLifespan: 1.1,
                            entityType: "minecraft:evocation_fang",
                            size: 2.5
                        }
                    ],
                    startSoundEvent: "cast.spell",
                    weight: 3
                },
                {
                    castDuration: 2,
                    particleColor: "#FF664D59",
                    cooldownTime: 5,
                    minActivationRange: 3,
                    sequence: [
                        {
                            baseDelay: 1,
                            target: "self",
                            delayPerSummon: 0.05,
                            numEntitiesSpawned: 16,
                            shape: "line",
                            entityLifespan: 1.1,
                            entityType: "minecraft:evocation_fang",
                            size: 20
                        }
                    ],
                    startSoundEvent: "cast.spell",
                    weight: 3
                },
                {
                    castDuration: 5,
                    particleColor: "#FFB3B3CC",
                    cooldownTime: 17,
                    sequence: [
                        {
                            baseDelay: 5,
                            entityType: "minecraft:vex",
                            shape: "circle",
                            numEntitiesSpawned: 3,
                            summonCapRadius: 16,
                            size: 1,
                            soundEvent: "prepare.summon",
                            summonCap: 8,
                            summonEvent: "minecraft:add_damage_timer",
                            target: "self"
                        }
                    ],
                    weight: 1
                }
            ]
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCanJoinRaid(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetEquipItem(),
        new BPEntityComponents.SetExperienceReward({
            onDeath: 10
        }),
        new BPEntityComponents.SetFollowRange({
            value: 64
        }),
        new BPEntityComponents.SetHealth({
            max: 24,
            value: 24
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    cause: "lava",
                    damagePerTick: 4,
                    filters: EntityFilters.inLava(true, "self", "==")
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/evocation_illager.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.5
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidWater: true,
            canOpenDoors: true,
            usingDoorAnnotation: true,
            canPassDoors: true,
            canPathOverWater: true
        }),
        new BPEntityComponents.SetPersistent(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetShareables({
            items: [
                {
                    item: "minecraft:banner:15",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["evocation_illager", "monster", "illager", "mob"]
        })
    ],
    events: {
        "minecraft:raid_expired": {
            sequence: [
                {
                    filters: EntityFilters.hasNametag(false),
                    remove: {
                        componentGroups: ["minecraft:raid_persistence"]
                    }
                }
            ]
        },
        "minecraft:spawn_for_raid": {
            add: {
                componentGroups: [
                    "minecraft:raid_configuration",
                    "minecraft:raid_despawn",
                    "minecraft:raid_persistence"
                ]
            }
        },
        "minecraft:stop_celebrating": {
            remove: {
                componentGroups: ["minecraft:celebrate"]
            }
        },
        "minecraft:start_celebrating": {
            sequence: [
                {
                    add: {
                        componentGroups: ["minecraft:celebrate"]
                    }
                },
                {
                    filters: EntityFilters.hasNametag(false),
                    remove: {
                        componentGroups: ["minecraft:raid_persistence"]
                    }
                }
            ]
        }
    }
});
