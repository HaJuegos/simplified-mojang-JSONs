import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Vindicador para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const VindicatorTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Vindicator,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:default_targeting": [
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                mustSee: true,
                withinRadius: 12,
                mustSeeForgetDuration: 40,
                entityTypes: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily('player', 'other'),
                            EntityFilters.isFamily('snowgolem', 'other'),
                            EntityFilters.isFamily('irongolem', 'other'),
                            EntityFilters.isFamily('wandering_trader', 'other')
                        ),
                        maxDist: 12
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily('villager', 'other'),
                            EntityFilters.hasComponent('minecraft:is_baby', 'other', 'not')
                        ),
                        maxDist: 12
                    }
                ],
                priority: 2
            })
        ],
        "minecraft:patrol_follower": [
            new BPEntityComponents.SetBehaviorFollowTargetLeader({
                followDistance: 5,
                priority: 5,
                speedMultiplier: 0.8,
                withinRadius: 64
            })
        ],
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
        "minecraft:illager_squad_captain": [
            new BPEntityComponents.SetEquipment({
                slotDropChance: [
                    {
                        dropChance: 1,
                        slot: "slot.armor.chest"
                    }
                ],
                table: "loot_tables/entities/vindicator_captain_equipment.json"
            }),
            new BPEntityComponents.SetIsIllagerCaptain(),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/pillager_captain.json"
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:patrol_captain": [
            new BPEntityComponents.SetBehaviorMoveToRandomBlock({
                blockDistance: 512,
                priority: 5,
                speedMultiplier: 0.55,
                withinRadius: 8
            }),
            new BPEntityComponents.SetEquipment({
                slotDropChance: [
                    {
                        dropChance: 1,
                        slot: "slot.armor.chest"
                    }
                ],
                table: "loot_tables/entities/vindicator_captain_equipment.json"
            }),
            new BPEntityComponents.SetIsIllagerCaptain(),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/pillager_captain.json"
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:raid_configuration": [
            new BPEntityComponents.SetAmbientSoundInterval({
                soundEvents: "ambient.in.raid",
                minRandomCooldownSound: 2,
                maxRandomCooldownSound: 4
            }),
            new BPEntityComponents.SetAnnotationBreakDoor({
                breakTime: 30,
                minDifficulty: "normal"
            }),
            new BPEntityComponents.SetBehaviorMoveToVillage({
                goalRadius: 2,
                priority: 4,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: false,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "hostile",
                firstFoundingReward: 0,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/vindicator_raid.json"
            }),
            new BPEntityComponents.SetNavigationWalk({
                canBreakDoors: true,
                canPassDoors: true,
                canPathOverWater: true
            })
        ],
        "minecraft:raid_persistence": [
            new BPEntityComponents.SetPersistent()
        ],
        "minecraft:vindicator_aggro": [
            new BPEntityComponents.SetAngry({
                broadcastAnger: false,
                calmEvent: {
                    event: "minecraft:stop_aggro",
                    target: "self"
                },
                duration: -1
            })
        ],
        "minecraft:vindicator_johnny": [
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                mustSee: true,
                withinRadius: 12,
                mustSeeForgetDuration: 40,
                entityTypes: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily('illager', 'other', 'not')
                        ),
                        maxDist: 12
                    }
                ],
                priority: 2
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 8
        }),
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.isFamily('creaking', 'other'),
                    maxDist: 8,
                    sprintSpeedMultiplier: 1.2
                }
            ],
            priority: 2
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
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            priority: 10
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            goalRadius: 2,
            priority: 7,
            maxDist: 3,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 9,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanJoinRaid(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetEquipItem(),
        new BPEntityComponents.SetEquipment({
            table: "loot_tables/entities/vindicator_gear.json"
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? (${MoLang.isBaby()} ? 12 : 5) + (Math.die_roll(${MoLang.equipmentCount()},1,3)) : 0`
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
            table: "loot_tables/entities/vindication_illager.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.35
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable({
            defaultTrigger: {
                event: "minecraft:stop_johnny",
                target: "self"
            },
            nameActions: [
                {
                    nameFilter: "Johnny",
                    onNamed: {
                        event: "minecraft:start_johnny",
                        target: "self"
                    }
                }
            ]
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetOnTargetAcquired({
            event: "minecraft:become_aggro",
            target: "self"
        }),
        new BPEntityComponents.SetOnTargetEscape({
            event: "minecraft:stop_aggro",
            target: "self"
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
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
            family: ["vindicator", "monster", "illager", "mob"]
        }),
        new BPEntityComponents.SetVariant({
            value: 0
        })
    ],
    events: {
        "minecraft:spawn_for_raid": {
            add: {
                componentGroups: [
                    "minecraft:default_targeting",
                    "minecraft:raid_configuration",
                    "minecraft:raid_persistence",
                    "minecraft:raid_despawn"
                ]
            }
        },
        "minecraft:become_aggro": {
            add: {
                componentGroups: ["minecraft:vindicator_aggro"]
            }
        },
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:default_targeting"]
            }
        },
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
        "minecraft:promote_to_illager_captain": {
            add: {
                componentGroups: ["minecraft:default_targeting", "minecraft:illager_squad_captain"]
            },
            remove: {
                componentGroups: ["minecraft:patrol_follower"]
            }
        },
        "minecraft:spawn_as_illager_captain": {
            add: {
                componentGroups: ["minecraft:default_targeting", "minecraft:illager_squad_captain"]
            }
        },
        "minecraft:promote_to_patrol_captain": {
            add: {
                componentGroups: ["minecraft:default_targeting", "minecraft:patrol_captain"]
            },
            remove: {
                componentGroups: ["minecraft:patrol_follower"]
            }
        },
        "minecraft:spawn_as_patrol_follower": {
            add: {
                componentGroups: ["minecraft:default_targeting", "minecraft:patrol_follower"]
            }
        },
        "minecraft:stop_johnny": {
            add: {
                componentGroups: ["minecraft:default_targeting"]
            },
            remove: {
                componentGroups: ["minecraft:vindicator_johnny"]
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
        },
        "minecraft:start_johnny": {
            add: {
                componentGroups: ["minecraft:vindicator_johnny"]
            }
        },
        "minecraft:stop_aggro": {
            remove: {
                componentGroups: ["minecraft:vindicator_aggro"]
            }
        },
        "minecraft:stop_celebrating": {
            remove: {
                componentGroups: ["minecraft:celebrate"]
            }
        }
    }
});
