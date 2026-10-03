import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const IronGolemTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.IronGolem,
    formatVersion: FormatVersionEntities.V1_26_20,
    description: {
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:player_created": [
            new BPEntityComponents.SetBehaviorHurtByTarget({
                entityTypes: {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("player", "other", "not"),
                        EntityFilters.isFamily("creeper", "other", "not")
                    )
                },
                priority: 2
            })
        ],
        "minecraft:village_created": [
            new BPEntityComponents.SetBehaviorDefendVillageTarget({
                mustReach: true,
                entityTypes: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.anyOf(
                                {
                                    test: "is_family",
                                    subject: 1,
                                    operator: 0,
                                    value: "mob"
                                },
                                {
                                    test: "is_family",
                                    subject: 1,
                                    operator: 0,
                                    value: "player"
                                }
                            )
                        )
                    }
                ],
                priority: 1
            }),
            new BPEntityComponents.SetDweller({
                dwellingType: "village",
                canFindPoi: false,
                canMigrate: true,
                dwellerRole: "defender",
                firstFoundingReward: 0,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: {
                rangeMax: 21,
                rangeMin: 7
            }
        }),
        new BPEntityComponents.SetBalloonable({
            mass: 2
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            entityTypes: {
                filters: EntityFilters.isFamily("creeper", "other", "not")
            },
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 6,
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            trackTarget: true,
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorMoveThroughVillage({
            onlyAtNight: true,
            priority: 3,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBehaviorMoveTowardsDwellingRestriction({
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorMoveTowardsTarget({
            priority: 2,
            speedMultiplier: 0.9,
            withinRadius: 32
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustReach: true,
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        {
                            test: "is_family",
                            subject: 1,
                            operator: 0,
                            value: "monster"
                        },
                        {
                            test: "is_family",
                            subject: 1,
                            operator: 1,
                            value: "creeper"
                        }
                    )
                },
                {
                    filters: EntityFilters.allOf(
                        {
                            test: "is_family",
                            subject: 1,
                            operator: 0,
                            value: "hoglin"
                        },
                        {
                            test: "is_difficulty",
                            subject: 0,
                            operator: 1,
                            value: 0
                        }
                    )
                },
                {
                    filters: EntityFilters.allOf(
                        {
                            test: "is_family",
                            subject: 1,
                            operator: 0,
                            value: "zoglin"
                        },
                        {
                            test: "is_difficulty",
                            subject: 0,
                            operator: 1,
                            value: 0
                        }
                    )
                }
            ],
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorOfferFlower({
            filters: EntityFilters.isDaytime(),
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 0.6,
            xzDist: 16
        }),
        new BPEntityComponents.SetBehaviorTargetWhenPushed({
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("monster", "other"),
                        EntityFilters.isFamily("creeper", "other", "not")
                    )
                }
            ],
            percentChance: 5,
            priority: 1
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 2.9,
            width: 1.4
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetFollowRange({
            value: 64
        }),
        new BPEntityComponents.SetHealth({
            max: 100,
            value: 100
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    cause: "lava",
                    damagePerTick: 4,
                    filters: EntityFilters.inLava()
                }
            ]
        }),
        new BPEntityComponents.SetInteract({
            interactions: [
                {
                    healthAmount: 25,
                    interactText: "action.interact.repair",
                    onInteract: {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasEquipment("iron_ingot", "hand", "other"),
                            EntityFilters.isMissingHealth()
                        )
                    },
                    playSounds: "irongolem.repair",
                    swing: false,
                    useItem: true
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetKnockbackResistance({
            value: 1
        }),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetLeashableTo(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/iron_golem.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.25
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidDamageBlocks: true,
            avoidWater: true,
            canPathOverWater: false,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPersistent(),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPreferredPath({
            defaultBlockCost: 1.5,
            jumpCost: 5,
            preferredPathBlocks: [
                {
                    blocks: ["grass_path"],
                    cost: 0
                },
                {
                    blocks: [
                        "cobblestone",
                        "stone",
                        "granite",
                        "polished_granite",
                        "diorite",
                        "polished_diorite",
                        "andesite",
                        "polished_andesite",
                        "stone_bricks",
                        "mossy_stone_bricks",
                        "cracked_stone_bricks",
                        "chiseled_stone_bricks",
                        "sandstone",
                        "cut_sandstone",
                        "chiseled_sandstone",
                        "smooth_sandstone",
                        "mossy_cobblestone",
                        "smooth_stone_slab",
                        "sandstone_slab",
                        "cobblestone_slab",
                        "brick_slab",
                        "stone_brick_slab",
                        "quartz_slab",
                        "nether_brick_slab",
                        "red_sandstone_slab",
                        "purpur_slab",
                        "prismarine_slab",
                        "dark_prismarine_slab",
                        "prismarine_brick_slab",
                        "mossy_cobblestone_slab",
                        "smooth_sandstone_slab",
                        "red_nether_brick_slab",
                        "end_stone_brick_slab",
                        "smooth_red_sandstone_slab",
                        "polished_andesite_slab",
                        "andesite_slab",
                        "diorite_slab",
                        "polished_diorite_slab",
                        "granite_slab",
                        "polished_granite_slab",
                        "mossy_stone_brick_slab",
                        "smooth_quartz_slab",
                        "normal_stone_slab",
                        "cut_sandstone_slab",
                        "cut_red_sandstone_slab",
                        "smooth_stone_double_slab",
                        "sandstone_double_slab",
                        "cobblestone_double_slab",
                        "brick_double_slab",
                        "stone_brick_double_slab",
                        "quartz_double_slab",
                        "nether_brick_double_slab",
                        "red_sandstone_double_slab",
                        "purpur_double_slab",
                        "prismarine_double_slab",
                        "dark_prismarine_double_slab",
                        "prismarine_brick_double_slab",
                        "mossy_cobblestone_double_slab",
                        "smooth_sandstone_double_slab",
                        "red_nether_brick_double_slab",
                        "end_stone_brick_double_slab",
                        "smooth_red_sandstone_double_slab",
                        "polished_andesite_double_slab",
                        "andesite_double_slab",
                        "diorite_double_slab",
                        "polished_diorite_double_slab",
                        "granite_double_slab",
                        "polished_granite_double_slab",
                        "mossy_stone_brick_double_slab",
                        "smooth_quartz_double_slab",
                        "normal_stone_double_slab",
                        "cut_sandstone_double_slab",
                        "cut_red_sandstone_double_slab",
                        "oak_slab",
                        "spruce_slab",
                        "birch_slab",
                        "jungle_slab",
                        "acacia_slab",
                        "dark_oak_slab",
                        "oak_double_slab",
                        "spruce_double_slab",
                        "birch_double_slab",
                        "jungle_double_slab",
                        "acacia_double_slab",
                        "dark_oak_double_slab",
                        "oak_planks",
                        "spruce_planks",
                        "birch_planks",
                        "jungle_planks",
                        "acacia_planks",
                        "dark_oak_planks",
                        "brick_block",
                        "nether_brick",
                        "red_nether_brick",
                        "end_bricks",
                        "red_sandstone",
                        "cut_red_sandstone",
                        "chiseled_red_sandstone",
                        "smooth_red_sandstone",
                        "white_stained_glass",
                        "orange_stained_glass",
                        "magenta_stained_glass",
                        "light_blue_stained_glass",
                        "yellow_stained_glass",
                        "lime_stained_glass",
                        "pink_stained_glass",
                        "gray_stained_glass",
                        "light_gray_stained_glass",
                        "cyan_stained_glass",
                        "purple_stained_glass",
                        "blue_stained_glass",
                        "brown_stained_glass",
                        "green_stained_glass",
                        "red_stained_glass",
                        "black_stained_glass",
                        "glass",
                        "glowstone",
                        "prismarine",
                        "emerald_block",
                        "diamond_block",
                        "lapis_block",
                        "gold_block",
                        "redstone_block",
                        "purple_glazed_terracotta",
                        "white_glazed_terracotta",
                        "orange_glazed_terracotta",
                        "magenta_glazed_terracotta",
                        "light_blue_glazed_terracotta",
                        "yellow_glazed_terracotta",
                        "lime_glazed_terracotta",
                        "pink_glazed_terracotta",
                        "gray_glazed_terracotta",
                        "silver_glazed_terracotta",
                        "cyan_glazed_terracotta",
                        "blue_glazed_terracotta",
                        "brown_glazed_terracotta",
                        "green_glazed_terracotta",
                        "red_glazed_terracotta",
                        "black_glazed_terracotta"
                    ],
                    cost: 1
                },
                {
                    blocks: [
                        "bed",
                        "lectern",
                        "composter",
                        "grindstone",
                        "blast_furnace",
                        "smoker",
                        "fletching_table",
                        "cartography_table",
                        "brewing_stand",
                        "smithing_table",
                        "cauldron",
                        "barrel",
                        "loom",
                        "stonecutter"
                    ],
                    cost: 50
                }
            ],
            maxFallBlocks: 1
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetTypeFamily({
            family: ["irongolem", "mob"]
        }),
        new BPEntityComponents.SetApplyKnockbackRules({
            presets: [
                {
                    horizontalPower: 0.52,
                    verticalPower: 0.39,
                    verticalVelocityCap: 0.8
                }
            ]
        })
    ],
    events: {
        "minecraft:from_player": {
            add: {
                componentGroups: ["minecraft:player_created"]
            }
        },
        "minecraft:from_village": {
            add: {
                componentGroups: ["minecraft:village_created"]
            }
        }
    }
});
