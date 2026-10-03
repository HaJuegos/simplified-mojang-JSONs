import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const RavagerTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Ravager,
    formatVersion: FormatVersionEntities.V1_21_90,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:celebrate": [
            new BPEntityComponents.SetBehaviorCelebrate({
                priority: 5,
                celebrationSound: "celebrate",
                soundInterval: {
                    rangeMin: 2,
                    rangeMax: 7
                },
                jumpInterval: {
                    rangeMin: 1,
                    rangeMax: 3.5
                },
                duration: 30,
                onCelebrationEndEvent: {
                    event: "minecraft:stop_celebrating",
                    target: "self"
                }
            })
        ],
        "minecraft:pillager_rider": [
            new BPEntityComponents.SetAddRider({
                // TODO(migrate): clave no soportada "entity_type": "minecraft:pillager"
            })
        ],
        "minecraft:pillager_rider_for_raid": [
            new BPEntityComponents.SetAddRider({
                // TODO(migrate): clave no soportada "entity_type": "minecraft:pillager"
                // TODO(migrate): clave no soportada "spawn_event": "minecraft:spawn_for_raid"
            })
        ],
        "minecraft:evoker_rider_for_raid": [
            new BPEntityComponents.SetAddRider({
                // TODO(migrate): clave no soportada "entity_type": "minecraft:evocation_illager"
                // TODO(migrate): clave no soportada "spawn_event": "minecraft:spawn_for_raid"
            })
        ],
        "minecraft:pillager_captain_rider": [
            new BPEntityComponents.SetAddRider({
                // TODO(migrate): clave no soportada "entity_type": "minecraft:pillager"
                // TODO(migrate): clave no soportada "spawn_event": "minecraft:spawn_as_illager_captain"
            })
        ],
        "minecraft:vindicator_rider": [
            new BPEntityComponents.SetAddRider({
                // TODO(migrate): clave no soportada "entity_type": "minecraft:vindicator"
            })
        ],
        "minecraft:vindicator_captain_rider": [
            new BPEntityComponents.SetAddRider({
                // TODO(migrate): clave no soportada "entity_type": "minecraft:vindicator"
                // TODO(migrate): clave no soportada "spawn_event": "minecraft:spawn_as_illager_captain"
            })
        ],
        "minecraft:raid_configuration": [
            new BPEntityComponents.SetDweller({
                dwellingType: "village",
                dwellerRole: "hostile",
                updateIntervalBase: 60,
                updateIntervalVariant: 40,
                canFindPoi: false,
                canMigrate: true,
                firstFoundingReward: 0
            }),
            new BPEntityComponents.SetBehaviorMoveToVillage({
                priority: 5,
                speedMultiplier: 1,
                goalRadius: 2
            }),
            new BPEntityComponents.SetBehaviorRandomStroll({
                priority: 6,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetAmbientSoundInterval({
                soundEvents: "ambient.in.raid",
                minRandomCooldownSound: 4,
                maxRandomCooldownSound: 8
            })
        ],
        "minecraft:raid_persistence": [
            new BPEntityComponents.SetPersistent()
        ],
        "minecraft:hostile": [
            new BPEntityComponents.SetMovement({
                value: 0.4
            }),
            new BPEntityComponents.SetBehaviorDelayedAttack({
                priority: 4,
                attackOnce: false,
                trackTarget: true,
                requireCompletePath: false,
                randomStopInterval: 0,
                reachMultiplier: 1.5,
                speedMultiplier: 1,
                attackDuration: 0.75,
                hitDelayPct: 0.5
            }),
            new BPEntityComponents.SetBehaviorRandomStroll({
                priority: 6,
                speedMultiplier: 0.4
            }),
            new BPEntityComponents.SetBehaviorLookAtPlayer({
                priority: 7,
                lookDistance: 6,
                angleOfViewHorizontal: 45,
                probability: 1
            }),
            new BPEntityComponents.SetBehaviorLookAtEntity({
                priority: 10,
                lookDistance: 8,
                angleOfViewHorizontal: 45,
                filters: EntityFilters.isFamily("mob", "other")
            }),
            new BPEntityComponents.SetBehaviorHurtByTarget({
                priority: 2,
                entityTypes: {
                    filters: EntityFilters.isFamily("illager", "other", "!="),
                    maxDist: 64
                }
            }),
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                priority: 3,
                mustSee: true,
                withinRadius: 16,
                entityTypes: [
                    {
                        filters: EntityFilters.anyOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.isFamily("irongolem", "other"),
                            EntityFilters.isFamily("wandering_trader", "other")
                        ),
                        maxDist: 16
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("villager", "other"),
                            EntityFilters.hasComponent("minecraft:is_baby", "other", "!=")
                        ),
                        maxDist: 16
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorMountPathing({
                priority: 5,
                speedMultiplier: 1.25,
                targetDist: 0,
                trackTarget: true
            })
        ],
        "stunned": [
            new BPEntityComponents.SetIsStunned(),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: 2,
                timeDownEvent: {
                    event: "minecraft:start_roar"
                }
            })
        ],
        "roaring": [
            new BPEntityComponents.SetBehaviorKnockbackRoar({
                priority: 1,
                duration: 1,
                attackTime: 0.5,
                knockbackDamage: 6,
                knockbackHorizontalStrength: 3,
                knockbackVerticalStrength: 3,
                knockbackRange: 4,
                knockbackFilters: EntityFilters.isFamily("ravager", "other", "!="),
                damageFilters: EntityFilters.isFamily("illager", "other", "!="),
                onRoarEnd: {
                    event: "minecraft:end_roar"
                },
                cooldownTime: 0.1
            })
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetExperienceReward({
            onDeath: "query.last_hit_by_player ? 20 : 0"
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetRavagerBlocked({
            knockbackStrength: 3,
            reactionChoices: [
                {
                    weight: 1,
                    value: {
                        event: "minecraft:become_stunned",
                        target: "self"
                    }
                },
                {
                    weight: 1
                }
            ]
        }),
        new BPEntityComponents.SetAttack({
            damage: 12
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 2.2,
            width: 1.95
        }),
        new BPEntityComponents.SetHealth({
            max: 100,
            value: 100
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
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/ravager.json"
        }),
        new BPEntityComponents.SetKnockbackResistance({
            value: 0.75
        }),
        new BPEntityComponents.SetMovement({
            value: 0
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidDamageBlocks: true,
            canPathOverWater: true,
            canSink: false
        }),
        new BPEntityComponents.SetPhysics({}),
        // TODO(migrate): componente sin clase "minecraft:pushable": {"is_pushable": true, "is_pushable_by_piston": true}
        new BPEntityComponents.SetCanJoinRaid(),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBreakBlocks({
            breakableBlocks: [
                "bamboo",
                "bamboo_sapling",
                "beetroot",
                "brown_mushroom",
                "carrots",
                "carved_pumpkin",
                "chorus_flower",
                "chorus_plant",
                "deadbush",
                "double_plant",
                "leaves",
                "leaves2",
                "lit_pumpkin",
                "melon_block",
                "melon_stem",
                "potatoes",
                "pumpkin",
                "pumpkin_stem",
                "red_flower",
                "red_mushroom",
                "crimson_fungus",
                "warped_fungus",
                "reeds",
                "sapling",
                "snow_layer",
                "sweet_berry_bush",
                "tallgrass",
                "turtle_egg",
                "vine",
                "waterlily",
                "wheat",
                "dandelion",
                "azalea",
                "flowering_azalea",
                "azalea_leaves",
                "azalea_leaves_flowered",
                "cave_vines",
                "cave_vines_body_with_berries",
                "cave_vines_head_with_berries",
                "small_dripleaf_block",
                "big_dripleaf",
                "spore_blossom",
                "hanging_roots",
                "mangrove_leaves",
                "pale_hanging_moss",
                "cherry_leaves",
                "pale_oak_leaves",
                "firefly_bush",
                "bush"
            ]
        }),
        new BPEntityComponents.SetFollowRange({
            value: 64
        }),
        new BPEntityComponents.SetRideable({
            seatCount: 1,
            familyTypes: ["pillager", "vindicator", "evocation_illager"],
            seats: [
                {
                    position: [0, 2.025, -0.3]
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["monster", "ravager", "mob"]
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:hostile"]
            }
        },
        "minecraft:spawn_for_raid": {
            add: {
                componentGroups: [
                    "minecraft:hostile",
                    "minecraft:raid_configuration",
                    "minecraft:raid_persistence"
                ]
            }
        },
        "minecraft:spawn_for_raid_with_evoker_rider": {
            add: {
                componentGroups: [
                    "minecraft:hostile",
                    "minecraft:evoker_rider_for_raid",
                    "minecraft:raid_configuration",
                    "minecraft:raid_persistence"
                ]
            }
        },
        "minecraft:spawn_for_raid_with_pillager_rider": {
            add: {
                componentGroups: [
                    "minecraft:hostile",
                    "minecraft:pillager_rider_for_raid",
                    "minecraft:raid_configuration",
                    "minecraft:raid_persistence"
                ]
            }
        },
        "minecraft:spawn_with_pillager_rider": {
            add: {
                componentGroups: ["minecraft:hostile", "minecraft:pillager_rider"]
            }
        },
        "minecraft:spawn_with_pillager_captain_rider": {
            add: {
                componentGroups: ["minecraft:hostile", "minecraft:pillager_captain_rider"]
            }
        },
        "minecraft:spawn_with_vindicator_rider": {
            add: {
                componentGroups: ["minecraft:hostile", "minecraft:vindicator_rider"]
            }
        },
        "minecraft:spawn_with_vindicator_captain_rider": {
            add: {
                componentGroups: ["minecraft:hostile", "minecraft:vindicator_captain_rider"]
            }
        },
        "minecraft:become_stunned": {
            add: {
                componentGroups: ["stunned"]
            },
            remove: {
                componentGroups: ["minecraft:hostile"]
            }
        },
        "minecraft:start_roar": {
            add: {
                componentGroups: ["roaring"]
            },
            remove: {
                componentGroups: ["stunned"]
            }
        },
        "minecraft:end_roar": {
            add: {
                componentGroups: ["minecraft:hostile"]
            },
            remove: {
                componentGroups: ["roaring"]
            }
        },
        "minecraft:start_celebrating": {
            sequence: [
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
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
        }
    }
});
