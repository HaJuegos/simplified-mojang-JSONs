import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const BoggedTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Bogged,
    formatVersion: FormatVersionEntities.V1_26_30,
    description: {
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    componentsGroups: {
        "minecraft:bogged_sheared": [
            new BPEntityComponents.SetIsSheared()
        ],
        "minecraft:melee_attack": [
            new BPEntityComponents.SetAttack({
                damage: 3
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                speedMultiplier: 1.25,
                trackTarget: true,
                priority: 4
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "minecraft:ranged_mode",
                        filters: EntityFilters.allOf(
                            EntityFilters.inWater(false, "self", "=="),
                            EntityFilters.hasRangedWeapon(true, "self", "==")
                        )
                    }
                ]
            })
        ],
        "minecraft:ranged_attack": [
            new BPEntityComponents.SetBehaviorRangedAttack({
                attackInterval: 3.5,
                attackRadius: 15,
                priority: 0
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "minecraft:melee_mode",
                        filters: EntityFilters.isUnderwater(true, "self", "==")
                    },
                    {
                        event: "minecraft:melee_mode",
                        filters: EntityFilters.hasRangedWeapon(false, "self", "==")
                    },
                    {
                        event: "minecraft:switch_to_hard_ranged",
                        filters: EntityFilters.isDifficulty("hard")
                    }
                ]
            }),
            new BPEntityComponents.SetShooter({
                // TODO(migrate): clave no soportada "aux_val": 26
                // TODO(migrate): clave no soportada "def": "minecraft:arrow"
                sound: "bow"
            })
        ],
        "minecraft:ranged_attack_hard": [
            new BPEntityComponents.SetBehaviorRangedAttack({
                attackInterval: 2.5,
                attackRadius: 15,
                priority: 0
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        event: "minecraft:melee_mode",
                        filters: EntityFilters.isUnderwater(true, "self", "==")
                    },
                    {
                        event: "minecraft:melee_mode",
                        filters: EntityFilters.hasRangedWeapon(false, "self", "==")
                    },
                    {
                        event: "minecraft:switch_to_normal_ranged",
                        filters: EntityFilters.isDifficulty("hard", "self", "!=")
                    }
                ]
            }),
            new BPEntityComponents.SetShooter({
                // TODO(migrate): clave no soportada "aux_val": 26
                // TODO(migrate): clave no soportada "def": "minecraft:arrow"
                sound: "bow"
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("wolf", "other"),
                    maxDist: 6,
                    walkSpeedMultiplier: 1.2,
                    sprintSpeedMultiplier: 1.2
                }
            ],
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorEquipItem({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorFleeSun({
            priority: 2,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("breeze", "other", "!=")
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            reselectTargets: true,
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("player", "other")
                },
                {
                    filters: EntityFilters.isFamily("irongolem", "other")
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("baby_turtle", "other"),
                        EntityFilters.inWater(true, "other", "!=")
                    )
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            canPickupAnyItem: true,
            excludedItems: [
                {
                    tags: "q.all_tags('minecraft:is_spear')"
                }
            ],
            pickupBasedOnChance: true,
            goalRadius: 2,
            priority: 5,
            maxDist: 3,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBreathable({
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetBurnsInDaylight({}),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetEnvironmentSensor({
            triggers: [
                {
                    event: "minecraft:melee_mode",
                    filters: EntityFilters.isUnderwater(true, "self", "==")
                },
                {
                    event: "minecraft:melee_mode",
                    filters: EntityFilters.hasRangedWeapon(false, "self", "==")
                }
            ]
        }),
        new BPEntityComponents.SetEquipItem({
            excludedItems: [
                {
                    item: "minecraft:banner:15"
                }
            ]
        }),
        new BPEntityComponents.SetEquipment({
            table: "loot_tables/entities/skeleton_gear.json"
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
        }),
        new BPEntityComponents.SetHealth({
            max: 16,
            value: 16
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
        new BPEntityComponents.SetInteract({
            interactions: [
                {
                    hurtItem: 1,
                    interactText: "action.interact.shear",
                    onInteract: {
                        event: "be_sheared",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("shears", "hand", "other"),
                            EntityFilters.hasComponent("minecraft:is_sheared", "self", "!=")
                        ),
                        target: "self"
                    },
                    spawnItems: {
                        table: "loot_tables/entities/bogged_shear.json"
                    },
                    playSounds: "shear",
                    useItem: false
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/bogged.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.25
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidSun: true,
            isAmphibious: true,
            avoidWater: true
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetShareables({
            items: [
                {
                    item: "minecraft:netherite_sword",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_sword",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_sword",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_sword",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_sword",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:stone_sword",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:wooden_sword",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:bow",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_helmet",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_helmet",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_helmet",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:chainmail_helmet",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_helmet",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_helmet",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:leather_helmet",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:turtle_helmet",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:skull:0",
                    priority: 8,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:skull:1",
                    priority: 8,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:carved_pumpkin",
                    priority: 8,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_chestplate",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_chestplate",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_chestplate",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:chainmail_chestplate",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_chestplate",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_chestplate",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:leather_chestplate",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_leggings",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_leggings",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_leggings",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:chainmail_leggings",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_leggings",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_leggings",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:leather_leggings",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_boots",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_boots",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_boots",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:chainmail_boots",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_boots",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_boots",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:leather_boots",
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                }
            ],
            singularPickup: true
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["bogged", "skeleton", "monster", "mob", "undead"]
        })
    ],
    events: {
        "be_sheared": {
            add: {
                componentGroups: ["minecraft:bogged_sheared"]
            },
            remove: {}
        },
        "minecraft:melee_mode": {
            add: {
                componentGroups: ["minecraft:melee_attack"]
            },
            remove: {
                componentGroups: ["minecraft:ranged_attack", "minecraft:ranged_attack_hard"]
            }
        },
        "minecraft:entity_spawned": {
            sequence: [
                {
                    filters: EntityFilters.isDifficulty("hard"),
                    add: {
                        componentGroups: ["minecraft:ranged_attack_hard"]
                    }
                },
                {
                    filters: EntityFilters.isDifficulty("hard", "self", "!="),
                    add: {
                        componentGroups: ["minecraft:ranged_attack"]
                    }
                }
            ]
        },
        "minecraft:switch_to_hard_ranged": {
            add: {
                componentGroups: ["minecraft:ranged_attack_hard"]
            },
            remove: {
                componentGroups: ["minecraft:ranged_attack"]
            }
        },
        "minecraft:switch_to_normal_ranged": {
            add: {
                componentGroups: ["minecraft:ranged_attack"]
            },
            remove: {
                componentGroups: ["minecraft:ranged_attack_hard"]
            }
        },
        "minecraft:ranged_mode": {
            sequence: [
                {
                    filters: EntityFilters.isDifficulty("hard"),
                    add: {
                        componentGroups: ["minecraft:ranged_attack_hard"]
                    },
                    remove: {
                        componentGroups: ["minecraft:melee_attack", "minecraft:ranged_attack"]
                    }
                },
                {
                    filters: EntityFilters.isDifficulty("hard", "self", "!="),
                    add: {
                        componentGroups: ["minecraft:ranged_attack"]
                    },
                    remove: {
                        componentGroups: ["minecraft:melee_attack", "minecraft:ranged_attack_hard"]
                    }
                }
            ]
        }
    }
});
