import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";
import { EntityFireImmuneComponent } from "@minecraft/server";

/**
 * Plantilla vanilla del Pillager para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const PillagerTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Pillager,
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
        "minecraft:melee_attack": [
            new BPEntityComponents.SetAttack({
                damage: 3
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                trackTarget: true,
                priority: 4
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    event: "minecraft:ranged_mode",
                    filters: EntityFilters.inWater(false, "self", "==")
                }
            })
        ],
        "minecraft:patrol_follower": [
            new BPEntityComponents.SetBehaviorFollowTargetLeader({
                priority: 5,
                speedMultiplier: 0.8,
                withinRadius: 64,
                followDistance: 5
            }),
            new BPEntityComponents.SetBehaviorHoldGround({
                broadcast: true,
                broadcastRange: 8,
                minRadius: 10,
                priority: 6,
                withinRadiusEvent: {
                    event: "minecraft:ranged_mode",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetOnHurt({
                event: "minecraft:ranged_mode",
                target: "self"
            }),
            new BPEntityComponents.SetOnHurtByPlayer({
                event: "minecraft:ranged_mode",
                target: "self"
            }),
            new BPEntityComponents.SetOnTargetEscape({
                event: "minecraft:calm",
                target: "self"
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
                table: "loot_tables/entities/pillager_captain_equipment.json"
            }),
            new BPEntityComponents.SetIsIllagerCaptain(),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/pillager_captain.json"
            }),
            new BPEntityComponents.SetOnHurt({
                event: "minecraft:ranged_mode",
                target: "self"
            }),
            new BPEntityComponents.SetOnHurtByPlayer({
                event: "minecraft:ranged_mode",
                target: "self"
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:patrol_captain": [
            new BPEntityComponents.SetBehaviorHoldGround({
                broadcast: true,
                broadcastRange: 8,
                minRadius: 10,
                priority: 5,
                withinRadiusEvent: {
                    event: "minecraft:ranged_mode",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorMoveToRandomBlock({
                blockDistance: 512,
                priority: 6,
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
                table: "loot_tables/entities/pillager_captain_equipment.json"
            }),
            new BPEntityComponents.SetIsIllagerCaptain(),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/pillager_captain.json"
            }),
            new BPEntityComponents.SetOnHurt({
                event: "minecraft:ranged_mode",
                target: "self"
            }),
            new BPEntityComponents.SetOnHurtByPlayer({
                event: "minecraft:ranged_mode",
                target: "self"
            }),
            new BPEntityComponents.SetOnTargetEscape({
                event: "minecraft:calm",
                target: "self"
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
            new BPEntityComponents.SetBehaviorMoveToVillage({
                goalRadius: 2,
                priority: 5,
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
                table: "loot_tables/entities/pillager_raid.json"
            })
        ],
        "minecraft:raid_persistence": [
            new BPEntityComponents.SetPersistent()
        ],
        "minecraft:ranged_attack": [
            new BPEntityComponents.SetBehaviorRangedAttack({
                attackRange: {
                    min: 8,
                    max: 8
                },
                attackInterval: {
                    min: 1,
                    max: 1
                },
                priority: 4
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    event: "minecraft:melee_mode",
                    filters: EntityFilters.isUnderwater(true, "self", "==")
                }
            }),
            new BPEntityComponents.SetShooter({
                projectiles: [
                    {
                        def: "minecraft:arrow"
                    }
                ]
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.isFamily('creaking', 'other'),
                    maxDist: 8,
                    sprintSpeedMultiplier: 1.2
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorChargeHeldItem({
            items: ["minecraft:arrow"],
            priority: 3
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
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            reselectTargets: true,
            mustSee: true,
            withinRadius: 16,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.isFamily('irongolem', 'other'),
                        EntityFilters.isFamily('wandering_trader', 'other'),
                    )
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.hasComponent('minecraft:is_baby', 'other', 'not'),
                        EntityFilters.isFamily('villager', 'other')
                    )
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
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 10
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 8,
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
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetEquipItem(),
        new BPEntityComponents.SetEquipment({
            table: "loot_tables/entities/pillager_gear.json"
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
            table: "loot_tables/entities/pillager.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.35
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            usingDoorAnnotation: true
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
            family: ["pillager", "monster", "illager", "mob"]
        }),
        new BPEntityComponents.SetVariant({
            value: 0
        })
    ],
    events: {
        "minecraft:ranged_mode": {
            add: {
                componentGroups: ["minecraft:ranged_attack"]
            },
            remove: {
                componentGroups: ["minecraft:melee_attack"]
            }
        },
        "minecraft:calm": {
            remove: {
                componentGroups: ["minecraft:melee_attack", "minecraft:ranged_attack"]
            }
        },
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:ranged_attack"]
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
        "minecraft:melee_mode": {
            add: {
                componentGroups: ["minecraft:melee_attack"]
            },
            remove: {
                componentGroups: ["minecraft:ranged_attack"]
            }
        },
        "minecraft:promote_to_illager_captain": {
            add: {
                componentGroups: ["minecraft:ranged_attack", "minecraft:illager_squad_captain"]
            },
            remove: {
                componentGroups: ["minecraft:patrol_follower"]
            }
        },
        "minecraft:spawn_as_illager_captain": {
            add: {
                componentGroups: ["minecraft:ranged_attack", "minecraft:illager_squad_captain"]
            }
        },
        "minecraft:promote_to_patrol_captain": {
            add: {
                componentGroups: ["minecraft:ranged_attack", "minecraft:patrol_captain"]
            },
            remove: {
                componentGroups: ["minecraft:patrol_follower"]
            }
        },
        "minecraft:spawn_as_patrol_follower": {
            add: {
                componentGroups: ["minecraft:ranged_attack", "minecraft:patrol_follower"]
            }
        },
        "minecraft:spawn_for_raid": {
            add: {
                componentGroups: [
                    "minecraft:ranged_attack",
                    "minecraft:raid_configuration",
                    "minecraft:raid_persistence"
                ]
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
        "minecraft:stop_celebrating": {
            remove: {
                componentGroups: ["minecraft:celebrate"]
            }
        }
    }
});
