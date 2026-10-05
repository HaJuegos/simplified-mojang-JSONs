import { MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Bogged para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 03-10-2026
 */
export const BoggedTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Bogged,
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
                attackInterval: {
                    min: 3.5,
                    max: 3.5
                },
                attackRange: {
                    min: 15,
                    max: 15
                },
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
                sound: "bow",
                projectiles: [
                    {
                        def: MinecraftEntityTypes.Arrow,
                        auxVal: 26
                    }
                ]
            })
        ],
        "minecraft:ranged_attack_hard": [
            new BPEntityComponents.SetBehaviorRangedAttack({
                attackInterval: {
                    min: 2.5,
                    max: 2.5
                },
                attackRange: {
                    min: 15,
                    max: 15
                },
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
                sound: "bow",
                projectiles: [
                    {
                        def: MinecraftEntityTypes.Arrow,
                        auxVal: 26
                    }
                ]
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
                    tags: `${MoLang.allTags('minecraft:is_spear')}`
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
        new BPEntityComponents.SetBurnsInDaylight(),
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
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 + (${MoLang.equipmentCount()} * Math.Random(1,3)) : 0`
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
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidSun: true,
            isAmphibious: true,
            avoidWater: true
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetShareables({
            items: [
                {
                    item: MinecraftItemTypes.NetheriteSword,
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.DiamondSword,
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.IronSword,
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.GoldenSword,
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.CopperSword,
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.StoneSword,
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.WoodenSword,
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.Bow,
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.NetheriteHelmet,
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.DiamondHelmet,
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.IronHelmet,
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.ChainmailHelmet,
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.GoldenHelmet,
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.CopperHelmet,
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.LeatherHelmet,
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.TurtleHelmet,
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.SkeletonSkull,
                    priority: 8,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.WitherSkeletonSkull,
                    priority: 8,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.CarvedPumpkin,
                    priority: 8,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.NetheriteChestplate,
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.DiamondChestplate,
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.IronChestplate,
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.ChainmailChestplate,
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.GoldenChestplate,
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.CopperChestplate,
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.LeatherChestplate,
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.NetheriteLeggings,
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.DiamondLeggings,
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.IronLeggings,
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.ChainmailLeggings,
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.GoldenLeggings,
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.CopperLeggings,
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.LeatherLeggings,
                    priority: 6,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.NetheriteBoots,
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.DiamondBoots,
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.IronBoots,
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.ChainmailBoots,
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.GoldenBoots,
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.CopperBoots,
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: MinecraftItemTypes.LeatherBoots,
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
            }
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
