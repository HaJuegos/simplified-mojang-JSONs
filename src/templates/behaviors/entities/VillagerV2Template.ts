import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Aldeano Actual para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const VillagerV2Template = createBPEntityTemplate({
    id: MinecraftEntityTypes.VillagerV2,
    description: {
        isSummonable: false,
        isSpawneable: true
    },
    componentsGroups: {
        "adult": [
            new BPEntityComponents.SetPreferredPath({
                defaultBlockCost: 3,
                jumpCost: 20,
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
            new BPEntityComponents.SetCollisionBox({
                height: 1.9,
                width: 0.6
            })
        ],
        "become_zombie": [
            new BPEntityComponents.SetTransformation({
                into: "minecraft:zombie_villager_v2",
                keepLevel: true
            })
        ],
        "armorer": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "armorer",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.armor",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/armorer_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "blacksmith", "armorer", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 8
            })
        ],
        "bed_schedule_villager": [
            new BPEntityComponents.SetBehaviorSleep({
                priority: 3,
                sleepColliderHeight: 0.3,
                sleepColliderWidth: 1,
                sleepYOffset: 0.6,
                speedMultiplier: 0.6,
                timeoutCooldown: 10
            })
        ],
        "cartographer": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "cartographer",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.cartographer",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/cartographer_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "cartographer", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 6
            })
        ],
        "basic_schedule": [
            new BPEntityComponents.SetScheduler({
                maxDelaySecs: 10,
                scheduledEvents: [
                    {
                        event: "minecraft:schedule_wander_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(0, "self", ">="),
                            EntityFilters.hourlyClockTime(8000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_gather_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(8000, "self", ">="),
                            EntityFilters.hourlyClockTime(10000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_wander_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(10000, "self", ">="),
                            EntityFilters.hourlyClockTime(11000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_home_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(11000, "self", ">="),
                            EntityFilters.hourlyClockTime(12000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_bed_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(12000, "self", ">="),
                            EntityFilters.hourlyClockTime(24000, "self", "<")
                        )
                    }
                ],
                minDelaySecs: 0
            })
        ],
        "snow_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 4
            })
        ],
        "baby": [
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorTakeFlower({
                filters: EntityFilters.allOf(EntityFilters.isDaytime()),
                priority: 9
            }),
            new BPEntityComponents.SetIsBaby(),
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
                            "mossy_cobblestone",
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
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.96,
                width: 0.98
            })
        ],
        "make_and_receive_love": [
            new BPEntityComponents.SetBehaviorMakeLove({
                priority: 5
            }),
            new BPEntityComponents.SetBehaviorReceiveLove({
                priority: 6
            })
        ],
        "behavior_non_peasant": [
            new BPEntityComponents.SetShareables({
                items: [
                    {
                        item: "minecraft:bread",
                        storedInInventory: true,
                        surplusAmount: 6,
                        wantAmount: 3
                    },
                    {
                        item: "minecraft:carrot",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 12
                    },
                    {
                        item: "minecraft:potato",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 12
                    },
                    {
                        item: "minecraft:beetroot",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 12
                    }
                ]
            })
        ],
        "become_witch": [
            new BPEntityComponents.SetTransformation({
                delay: 0.5,
                into: "minecraft:witch"
            })
        ],
        "weaponsmith": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "weaponsmith",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.weapon",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/weapon_smith_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "blacksmith", "weaponsmith", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 9
            })
        ],
        "butcher": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "butcher",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.butcher",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/butcher_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "artisan", "butcher", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 11
            })
        ],
        "behavior_peasant": [
            new BPEntityComponents.SetShareables({
                items: [
                    {
                        item: "minecraft:bread",
                        storedInInventory: true,
                        surplusAmount: 6,
                        wantAmount: 3
                    },
                    {
                        item: "minecraft:carrot",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 60
                    },
                    {
                        item: "minecraft:potato",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 60
                    },
                    {
                        item: "minecraft:beetroot",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 60
                    },
                    {
                        item: "minecraft:wheat_seeds",
                        pickupOnly: true,
                        storedInInventory: true,
                        surplusAmount: 64,
                        wantAmount: 64
                    },
                    {
                        item: "minecraft:beetroot_seeds",
                        pickupOnly: true,
                        storedInInventory: true,
                        surplusAmount: 64,
                        wantAmount: 64
                    },
                    {
                        craftInto: "minecraft:bread",
                        wantAmount: 45,
                        item: "minecraft:wheat",
                        storedInInventory: true,
                        surplusAmount: 18
                    }
                ]
            })
        ],
        "minecraft:celebrate": [
            new BPEntityComponents.SetBehaviorCelebrateSurvive({
                duration: 30,
                fireworksInterval: {
                    max: 7,
                    min: 2
                },
                onCelebrationEndEvent: {
                    event: "minecraft:stop_celebrating",
                    target: "self"
                },
                priority: 5
            }),
            new BPEntityComponents.SetBehaviorMoveOutdoors({
                priority: 2,
                speedMultiplier: 0.8,
                timeoutCooldown: 8
            })
        ],
        "child_schedule": [
            new BPEntityComponents.SetScheduler({
                maxDelaySecs: 10,
                scheduledEvents: [
                    {
                        event: "minecraft:schedule_play_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(0, "self", ">="),
                            EntityFilters.hourlyClockTime(11000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_home_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(11000, "self", ">="),
                            EntityFilters.hourlyClockTime(12000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_bed_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(12000, "self", ">="),
                            EntityFilters.hourlyClockTime(24000, "self", "<")
                        )
                    }
                ],
                minDelaySecs: 0
            })
        ],
        "cleric": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "cleric",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.cleric",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/cleric_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "priest", "cleric", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 7
            })
        ],
        "desert_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 1
            })
        ],
        "farmer": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "farmer",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.farmer",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/farmer_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "peasant", "farmer", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "work_schedule_farmer": [
            new BPEntityComponents.SetBehaviorFertilizeFarmBlock({
                priority: 8
            }),
            new BPEntityComponents.SetBehaviorHarvestFarmBlock({
                priority: 7
            }),
            new BPEntityComponents.SetBehaviorWorkComposter({
                activeTime: 250,
                priority: 9,
                canWorkInRain: false,
                onArrival: {
                    event: "minecraft:resupply_trades",
                    target: "self"
                },
                goalCooldown: 200,
                speedMultiplier: 0.5,
                workInRainTolerance: 100
            }),
            new BPEntityComponents.SetShareables({
                items: [
                    {
                        item: "minecraft:bread",
                        storedInInventory: true,
                        surplusAmount: 6,
                        wantAmount: 3
                    },
                    {
                        item: "minecraft:carrot",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 60
                    },
                    {
                        item: "minecraft:potato",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 60
                    },
                    {
                        item: "minecraft:beetroot",
                        storedInInventory: true,
                        surplusAmount: 24,
                        wantAmount: 60
                    },
                    {
                        item: "minecraft:wheat_seeds",
                        pickupOnly: true,
                        storedInInventory: true,
                        surplusAmount: 64,
                        wantAmount: 64
                    },
                    {
                        item: "minecraft:beetroot_seeds",
                        pickupOnly: true,
                        storedInInventory: true,
                        surplusAmount: 64,
                        wantAmount: 64
                    },
                    {
                        item: "minecraft:torchflower_seeds",
                        pickupOnly: true,
                        storedInInventory: true,
                        surplusAmount: 64,
                        wantAmount: 64
                    },
                    {
                        item: "minecraft:pitcher_pod",
                        pickupOnly: true,
                        storedInInventory: true,
                        surplusAmount: 64,
                        wantAmount: 64
                    },
                    {
                        item: "minecraft:bone_meal",
                        storedInInventory: true,
                        surplusAmount: 64,
                        wantAmount: 64
                    },
                    {
                        craftInto: "minecraft:bread",
                        wantAmount: 45,
                        item: "minecraft:wheat",
                        storedInInventory: true,
                        surplusAmount: 18
                    }
                ]
            })
        ],
        "farmer_schedule": [
            new BPEntityComponents.SetScheduler({
                maxDelaySecs: 10,
                scheduledEvents: [
                    {
                        event: "minecraft:schedule_work_farmer",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(0, "self", ">="),
                            EntityFilters.hourlyClockTime(8000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_gather_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(8000, "self", ">="),
                            EntityFilters.hourlyClockTime(10000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_work_farmer",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(10000, "self", ">="),
                            EntityFilters.hourlyClockTime(11000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_home_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(11000, "self", ">="),
                            EntityFilters.hourlyClockTime(12000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_bed_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(12000, "self", ">="),
                            EntityFilters.hourlyClockTime(24000, "self", "<")
                        )
                    }
                ],
                minDelaySecs: 0
            })
        ],
        "work_schedule": [
            new BPEntityComponents.SetScheduler({
                maxDelaySecs: 10,
                scheduledEvents: [
                    {
                        event: "minecraft:schedule_work_pro_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(0, "self", ">="),
                            EntityFilters.hourlyClockTime(8000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_gather_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(8000, "self", ">="),
                            EntityFilters.hourlyClockTime(10000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_work_pro_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(10000, "self", ">="),
                            EntityFilters.hourlyClockTime(11000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_home_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(11000, "self", ">="),
                            EntityFilters.hourlyClockTime(12000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_bed_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(12000, "self", ">="),
                            EntityFilters.hourlyClockTime(24000, "self", "<")
                        )
                    }
                ],
                minDelaySecs: 0
            })
        ],
        "fisher_schedule": [
            new BPEntityComponents.SetScheduler({
                maxDelaySecs: 10,
                scheduledEvents: [
                    {
                        event: "minecraft:schedule_work_fisher",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(0, "self", ">="),
                            EntityFilters.hourlyClockTime(8000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_gather_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(8000, "self", ">="),
                            EntityFilters.hourlyClockTime(10000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_work_fisher",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(10000, "self", ">="),
                            EntityFilters.hourlyClockTime(11000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_home_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(11000, "self", ">="),
                            EntityFilters.hourlyClockTime(12000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_bed_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(12000, "self", ">="),
                            EntityFilters.hourlyClockTime(24000, "self", "<")
                        )
                    }
                ],
                minDelaySecs: 0
            })
        ],
        "villager_skin_2": [
            new BPEntityComponents.SetSkinId({
                value: 2
            })
        ],
        "fisherman": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "fisherman",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.fisherman",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/fisherman_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "peasant", "fisherman", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "fletcher": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "fletcher",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.fletcher",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/fletcher_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "peasant", "fletcher", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "gather_schedule_villager": [
            new BPEntityComponents.SetBehaviorMingle({
                cooldownTime: 10,
                duration: 30,
                mingleDistance: 2,
                minglePartnerType: "minecraft:villager_v2",
                priority: 7,
                speedMultiplier: 0.5
            })
        ],
        "home_schedule_villager": [],
        "job_specific_goals": [
            new BPEntityComponents.SetBehaviorExploreOutskirts(),
            new BPEntityComponents.SetBehaviorHarvestFarmBlock(),
            new BPEntityComponents.SetBehaviorInspectBookshelf(),
            new BPEntityComponents.SetBehaviorMingle(),
            new BPEntityComponents.SetBehaviorSleep(),
            new BPEntityComponents.SetBehaviorWork(),
            new BPEntityComponents.SetBehaviorWorkComposter()
        ],
        "work_schedule_librarian": [
            new BPEntityComponents.SetBehaviorInspectBookshelf({
                goalRadius: 0.8,
                priority: 8,
                searchCount: 0,
                searchHeight: 3,
                searchRange: 4,
                speedMultiplier: 0.6
            }),
            new BPEntityComponents.SetBehaviorWork({
                priority: 7,
                activeTime: 250,
                onArrival: {
                    event: "minecraft:resupply_trades",
                    target: "self"
                },
                canWorkInRain: false,
                speedMultiplier: 0.5,
                goalCooldown: 200,
                soundDelayMax: 200,
                workInRainTolerance: 100,
                soundDelayMin: 100
            })
        ],
        "jobless_schedule": [
            new BPEntityComponents.SetScheduler({
                maxDelaySecs: 10,
                scheduledEvents: [
                    {
                        event: "minecraft:schedule_wander_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(2000, "self", ">="),
                            EntityFilters.hourlyClockTime(13000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_home_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(13000, "self", ">="),
                            EntityFilters.hourlyClockTime(14000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_bed_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(14000, "self", ">="),
                            EntityFilters.hourlyClockTime(24000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_bed_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(0, "self", ">="),
                            EntityFilters.hourlyClockTime(2000, "self", "<")
                        )
                    }
                ],
                minDelaySecs: 0
            })
        ],
        "librarian": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "librarian",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.librarian",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/librarian_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "librarian", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 5
            })
        ],
        "jungle_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 2
            })
        ],
        "leatherworker": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "leatherworker",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.leather",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/leather_worker_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "artisan", "leatherworker", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 12
            })
        ],
        "librarian_schedule": [
            new BPEntityComponents.SetScheduler({
                maxDelaySecs: 10,
                scheduledEvents: [
                    {
                        event: "minecraft:schedule_work_librarian",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(0, "self", ">="),
                            EntityFilters.hourlyClockTime(8000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_gather_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(8000, "self", ">="),
                            EntityFilters.hourlyClockTime(10000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_work_librarian",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(10000, "self", ">="),
                            EntityFilters.hourlyClockTime(11000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_home_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(11000, "self", ">="),
                            EntityFilters.hourlyClockTime(12000, "self", "<")
                        )
                    },
                    {
                        event: "minecraft:schedule_bed_villager",
                        filters: EntityFilters.allOf(
                            EntityFilters.hourlyClockTime(12000, "self", ">="),
                            EntityFilters.hourlyClockTime(24000, "self", "<")
                        )
                    }
                ],
                minDelaySecs: 0
            })
        ],
        "mason": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "mason",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.mason",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/stone_mason_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "artisan", "stone_mason", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 13
            })
        ],
        "work_schedule_fisher": [
            new BPEntityComponents.SetBehaviorWork({
                priority: 7,
                activeTime: 250,
                onArrival: {
                    event: "minecraft:resupply_trades",
                    target: "self"
                },
                canWorkInRain: false,
                speedMultiplier: 0.5,
                goalCooldown: 200,
                soundDelayMax: 200,
                workInRainTolerance: 100,
                soundDelayMin: 100
            })
        ],
        "nitwit": [
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "peasant", "nitwit", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 14
            })
        ],
        "play_schedule_villager": [
            new BPEntityComponents.SetBehaviorPlay({
                friendTypes: [
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("villager", "other"),
                            EntityFilters.isBaby(true, "other", "==")
                        )
                    }
                ],
                priority: 8,
                speedMultiplier: 0.6
            })
        ],
        "savanna_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 3
            })
        ],
        "unskilled": [
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "peasant", "unskilled", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "shepherd": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "shepherd",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.shepherd",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/shepherd_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "peasant", "shepherd", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "swamp_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 5
            })
        ],
        "taiga_villager": [
            new BPEntityComponents.SetMarkVariant({
                value: 6
            })
        ],
        "toolsmith": [
            new BPEntityComponents.SetBehaviorTradeInterest({
                carriedItemSwitchTime: 2,
                cooldown: 2,
                interestTime: 45,
                withinRadius: 6,
                priority: 5,
                removeItemTime: 1
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: true,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "inhabitant",
                preferredProfession: "toolsmith",
                firstFoundingReward: 5,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            }),
            new BPEntityComponents.SetEconomyTradeTable({
                curedDiscount: [-25, -20],
                displayName: "entity.villager.tool",
                maxCuredDiscount: [-25, -20],
                newScreen: true,
                persistTrades: true,
                table: "trading/economy_trades/tool_smith_trades.json"
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["villager", "blacksmith", "toolsmith", "mob"]
            }),
            new BPEntityComponents.SetVariant({
                value: 10
            })
        ],
        "trade_components": [
            new BPEntityComponents.SetBehaviorTradeInterest(),
            new BPEntityComponents.SetEconomyTradeTable()
        ],
        "trade_resupply_component_group": [
            new BPEntityComponents.SetTradeResupply()
        ],
        "villager_skin_0": [
            new BPEntityComponents.SetSkinId({
                value: 0
            })
        ],
        "villager_skin_1": [
            new BPEntityComponents.SetSkinId({
                value: 1
            })
        ],
        "work_schedule_villager": [
            new BPEntityComponents.SetBehaviorWork({
                priority: 7,
                activeTime: 250,
                onArrival: {
                    event: "minecraft:resupply_trades",
                    target: "self"
                },
                canWorkInRain: false,
                speedMultiplier: 0.5,
                goalCooldown: 200,
                soundDelayMax: 200,
                workInRainTolerance: 100,
                soundDelayMin: 100
            })
        ],
        "villager_skin_3": [
            new BPEntityComponents.SetSkinId({
                value: 3
            })
        ],
        "villager_skin_4": [
            new BPEntityComponents.SetSkinId({
                value: 4
            })
        ],
        "villager_skin_5": [
            new BPEntityComponents.SetSkinId({
                value: 5
            })
        ],
        "wander_schedule_villager": [
            new BPEntityComponents.SetBehaviorExploreOutskirts({
                maxWaitTime: 10,
                speedMultiplier: 0.6,
                exploreDist: 6,
                minDistFromTarget: 2.5,
                priority: 9
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAnnotationOpenDoor(),
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily("zombie", "other"),
                        EntityFilters.isFamily("zombie_villager", "other"),
                        EntityFilters.isFamily("illager", "other"),
                        EntityFilters.isFamily("vex", "other"),
                        EntityFilters.isFamily("zoglin", "other")
                    ),
                    maxDist: 8,
                    walkSpeedMultiplier: 0.6,
                    sprintSpeedMultiplier: 0.6
                }
            ],
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorHide({
            duration: 30,
            poiType: "bed",
            priority: 0,
            speedMultiplier: 0.8
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorLookAtTradingPlayer({
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorMoveIndoors({
            priority: 6,
            speedMultiplier: 0.8,
            timeoutCooldown: 8
        }),
        new BPEntityComponents.SetBehaviorMoveTowardsDwellingRestriction({
            speedMultiplier: 0.6,
            priority: 11
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            canPickupToHandOrEquipment: false,
            goalRadius: 2,
            priority: 4,
            maxDist: 3,
            speedMultiplier: 0.5
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 11,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBehaviorShareItems({
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("villager", "other")
                }
            ],
            goalRadius: 2,
            priority: 10,
            maxDist: 3,
            speedMultiplier: 0.5
        }),
        new BPEntityComponents.SetBehaviorTradeWithPlayer({
            filters: EntityFilters.allOf(
                EntityFilters.allOf(EntityFilters.inWater(false)),
                EntityFilters.anyOf(EntityFilters.onGround(), EntityFilters.isSleeping())
            ),
            priority: 2
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    dealsDamage: "no",
                    onDamage: {
                        event: "become_witch",
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("lightning", "other"),
                            EntityFilters.isDifficulty("peaceful", "self", "!=")
                        )
                    }
                },
                {
                    onDamage: {
                        event: "become_zombie",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasDamage('fatal'),
                            EntityFilters.anyOf(
                                EntityFilters.isFamily('zombie', 'other'),
                                EntityFilters.isFamily('husk', 'other')
                            )
                        )
                    }
                }
            ]
        }),
        new BPEntityComponents.SetDweller({
            canFindPoi: true,
            dwellingType: "village",
            canMigrate: true,
            dwellerRole: "inhabitant",
            firstFoundingReward: 5,
            updateIntervalBase: 60,
            updateIntervalVariant: 40
        }),
        new BPEntityComponents.SetEquipment({
            slotDropChance: [
                {
                    dropChance: 0,
                    slot: "slot.weapon.mainhand"
                }
            ]
        }),
        new BPEntityComponents.SetFollowRange({
            value: 128
        }),
        new BPEntityComponents.SetHealth({
            max: 20,
            value: 20
        }),
        new BPEntityComponents.SetHide(),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    cause: "lava",
                    damagePerTick: 4,
                    filters: EntityFilters.inLava(true, "self", "==")
                }
            ]
        }),
        new BPEntityComponents.SetInventory({
            inventorySize: 8,
            private: true
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetMarkVariant({
            value: 0
        }),
        new BPEntityComponents.SetMovement({
            value: 0.5
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidWater: true,
            canOpenDoors: true,
            canPassDoors: true,
            canPathOverWater: true
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:villager_v2": "minecraft:villager_v2"
            }
        }),
        new BPEntityComponents.SetPersistent(),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetTypeFamily({
            family: ["villager", "mob"]
        })
    ],
    events: {
        "become_witch": {
            add: {
                componentGroups: ["become_witch"]
            }
        },
        "become_zombie": {
            sequence: [
                {
                    filters: EntityFilters.isDifficulty("normal"),
                    randomize: [
                        {
                            weight: 50,
                            add: {
                                componentGroups: ["become_zombie"]
                            }
                        },
                        {
                            weight: 50
                        }
                    ]
                },
                {
                    filters: EntityFilters.isDifficulty("hard"),
                    add: {
                        componentGroups: ["become_zombie"]
                    }
                }
            ]
        },
        "minecraft:stop_celebrating": {
            remove: {
                componentGroups: ["minecraft:celebrate"]
            }
        },
        "minecraft:schedule_work_fisher": {
            add: {
                componentGroups: ["make_and_receive_love", "work_schedule_fisher"]
            },
            remove: {
                componentGroups: [
                    "home_schedule_villager",
                    "gather_schedule_villager",
                    "wander_schedule_villager",
                    "bed_schedule_villager",
                    "job_specific_goals",
                    "play_schedule_villager"
                ]
            }
        },
        "minecraft:become_farmer": {
            add: {
                componentGroups: [
                    "farmer",
                    "adult",
                    "make_and_receive_love",
                    "behavior_peasant",
                    "farmer_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:start_celebrating": {
            add: {
                componentGroups: ["minecraft:celebrate"]
            }
        },
        "minecraft:become_butcher": {
            add: {
                componentGroups: [
                    "butcher",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "work_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:ageable_grow_up": {
            randomize: [
                {
                    weight: 10,
                    add: {
                        componentGroups: [
                            "adult",
                            "make_and_receive_love",
                            "nitwit",
                            "behavior_peasant",
                            "jobless_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                },
                {
                    weight: 90,
                    add: {
                        componentGroups: [
                            "adult",
                            "make_and_receive_love",
                            "unskilled",
                            "behavior_peasant",
                            "basic_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                }
            ]
        },
        "minecraft:schedule_work_pro_villager": {
            add: {
                componentGroups: ["make_and_receive_love", "work_schedule_villager"]
            },
            remove: {
                componentGroups: [
                    "home_schedule_villager",
                    "gather_schedule_villager",
                    "wander_schedule_villager",
                    "bed_schedule_villager",
                    "play_schedule_villager"
                ]
            }
        },
        "minecraft:become_cleric": {
            add: {
                componentGroups: [
                    "cleric",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "work_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:become_armorer": {
            add: {
                componentGroups: [
                    "armorer",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "work_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:become_cartographer": {
            add: {
                componentGroups: [
                    "cartographer",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "work_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:become_fletcher": {
            add: {
                componentGroups: [
                    "fletcher",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "work_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:become_fisherman": {
            add: {
                componentGroups: [
                    "fisherman",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "fisher_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:become_leatherworker": {
            add: {
                componentGroups: [
                    "leatherworker",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "work_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:become_librarian": {
            add: {
                componentGroups: [
                    "librarian",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "librarian_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:become_mason": {
            add: {
                componentGroups: [
                    "mason",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "work_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:entity_transformed": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "other", "=="),
                    add: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "other", "!="),
                    sequence: [
                        {
                            add: {
                                componentGroups: ["adult", "make_and_receive_love"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("farmer", "other"),
                            add: {
                                componentGroups: ["farmer", "behavior_peasant", "farmer_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("fisherman", "other"),
                            add: {
                                componentGroups: ["fisherman", "behavior_peasant", "fisher_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("shepherd", "other"),
                            add: {
                                componentGroups: ["shepherd", "behavior_peasant", "work_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("fletcher", "other"),
                            add: {
                                componentGroups: ["fletcher", "behavior_peasant", "work_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("librarian", "other"),
                            add: {
                                componentGroups: ["librarian", "behavior_non_peasant", "librarian_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("cartographer", "other"),
                            add: {
                                componentGroups: ["cartographer", "behavior_non_peasant", "work_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("cleric", "other"),
                            add: {
                                componentGroups: ["cleric", "behavior_non_peasant", "work_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("armorer", "other"),
                            add: {
                                componentGroups: ["armorer", "behavior_non_peasant", "work_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("weaponsmith", "other"),
                            add: {
                                componentGroups: ["weaponsmith", "behavior_non_peasant", "work_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("toolsmith", "other"),
                            add: {
                                componentGroups: ["toolsmith", "behavior_non_peasant", "work_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("butcher", "other"),
                            add: {
                                componentGroups: ["butcher", "behavior_non_peasant", "work_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("leatherworker", "other"),
                            add: {
                                componentGroups: ["leatherworker", "behavior_non_peasant", "work_schedule"]
                            }
                        },
                        {
                            filters: EntityFilters.isFamily("stone_mason", "other"),
                            add: {
                                componentGroups: ["mason", "behavior_non_peasant", "work_schedule"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.isFamily("zombie_villager", "other", "=="),
                    sequence: [
                        {
                            filters: EntityFilters.isSkinId(0, "other"),
                            add: {
                                componentGroups: ["villager_skin_0"]
                            }
                        },
                        {
                            filters: EntityFilters.isSkinId(1, "other"),
                            add: {
                                componentGroups: ["villager_skin_1"]
                            }
                        },
                        {
                            filters: EntityFilters.isSkinId(2, "other"),
                            add: {
                                componentGroups: ["villager_skin_2"]
                            }
                        },
                        {
                            filters: EntityFilters.isSkinId(3, "other"),
                            add: {
                                componentGroups: ["villager_skin_3"]
                            }
                        },
                        {
                            filters: EntityFilters.isSkinId(4, "other"),
                            add: {
                                componentGroups: ["villager_skin_4"]
                            }
                        },
                        {
                            filters: EntityFilters.isSkinId(5, "other"),
                            add: {
                                componentGroups: ["villager_skin_5"]
                            }
                        },
                        {
                            filters: EntityFilters.isMarkVariant(1, "other"),
                            add: {
                                componentGroups: ["desert_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.isMarkVariant(2, "other"),
                            add: {
                                componentGroups: ["jungle_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.isMarkVariant(3, "other"),
                            add: {
                                componentGroups: ["savanna_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.isMarkVariant(4, "other"),
                            add: {
                                componentGroups: ["snow_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.isMarkVariant(5, "other"),
                            add: {
                                componentGroups: ["swamp_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.isMarkVariant(6, "other"),
                            add: {
                                componentGroups: ["taiga_villager"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.isFamily("villager", "other", "=="),
                    sequence: [
                        {
                            randomize: [
                                {
                                    weight: 1,
                                    add: {
                                        componentGroups: ["villager_skin_0"]
                                    }
                                },
                                {
                                    weight: 1,
                                    add: {
                                        componentGroups: ["villager_skin_1"]
                                    }
                                },
                                {
                                    weight: 1,
                                    add: {
                                        componentGroups: ["villager_skin_2"]
                                    }
                                },
                                {
                                    weight: 1,
                                    add: {
                                        componentGroups: ["villager_skin_3"]
                                    }
                                },
                                {
                                    weight: 1,
                                    add: {
                                        componentGroups: ["villager_skin_4"]
                                    }
                                },
                                {
                                    weight: 1,
                                    add: {
                                        componentGroups: ["villager_skin_5"]
                                    }
                                }
                            ]
                        },
                        {
                            filters: EntityFilters.anyOf(
                                EntityFilters.hasBiomeTag("desert"),
                                EntityFilters.hasBiomeTag("mesa")
                            ),
                            add: {
                                componentGroups: ["desert_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.hasBiomeTag("jungle"),
                            add: {
                                componentGroups: ["jungle_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.hasBiomeTag("savanna"),
                            add: {
                                componentGroups: ["savanna_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.anyOf(
                                EntityFilters.allOf(
                                    EntityFilters.hasBiomeTag("cold"),
                                    EntityFilters.hasBiomeTag("ocean", "self", "!=")
                                ),
                                EntityFilters.hasBiomeTag("frozen")
                            ),
                            add: {
                                componentGroups: ["snow_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.anyOf(
                                EntityFilters.hasBiomeTag("swamp"),
                                EntityFilters.hasBiomeTag("mangrove_swamp")
                            ),
                            add: {
                                componentGroups: ["swamp_villager"]
                            }
                        },
                        {
                            filters: EntityFilters.allOf(
                                EntityFilters.anyOf(
                                    EntityFilters.hasBiomeTag("taiga"),
                                    EntityFilters.hasBiomeTag("extreme_hills")
                                ),
                                EntityFilters.hasBiomeTag("cold", "self", "!=")
                            ),
                            add: {
                                componentGroups: ["taiga_villager"]
                            }
                        }
                    ]
                }
            ]
        },
        "minecraft:become_sheperd": {
            add: {
                componentGroups: [
                    "shepherd",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "work_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:schedule_play_villager": {
            add: {
                componentGroups: ["play_schedule_villager"]
            },
            remove: {
                componentGroups: [
                    "home_schedule_villager",
                    "gather_schedule_villager",
                    "wander_schedule_villager",
                    "bed_schedule_villager",
                    "job_specific_goals",
                    "trade_resupply_component_group"
                ]
            }
        },
        "minecraft:become_toolsmith": {
            add: {
                componentGroups: [
                    "toolsmith",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "work_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:spawn_from_village": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                    randomize: [
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["baby", "child_schedule"]
                            }
                        },
                        {
                            weight: 95,
                            sequence: [
                                {
                                    add: {
                                        componentGroups: [
                                            "adult",
                                            "make_and_receive_love"
                                        ]
                                    }
                                },
                                {
                                    randomize: [
                                        {
                                            weight: 90,
                                            add: {
                                                componentGroups: ["unskilled", "behavior_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 10,
                                            add: {
                                                componentGroups: ["nitwit", "behavior_peasant", "jobless_schedule"]
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:skin_id", "self", "!="),
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_0"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_1"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_2"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_3"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_4"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_5"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("desert"),
                        EntityFilters.hasBiomeTag("mesa")
                    ),
                    add: {
                        componentGroups: ["desert_villager"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("jungle"),
                    add: {
                        componentGroups: ["jungle_villager"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("savanna"),
                    add: {
                        componentGroups: ["savanna_villager"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.allOf(
                            EntityFilters.hasBiomeTag("cold"),
                            EntityFilters.hasBiomeTag("ocean", "self", "!=")
                        ),
                        EntityFilters.hasBiomeTag("frozen")
                    ),
                    add: {
                        componentGroups: ["snow_villager"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("swamp"),
                        EntityFilters.hasBiomeTag("mangrove_swamp")
                    ),
                    add: {
                        componentGroups: ["swamp_villager"]
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            EntityFilters.hasBiomeTag("taiga"),
                            EntityFilters.hasBiomeTag("extreme_hills")
                        ),
                        EntityFilters.hasBiomeTag("cold", "self", "!=")
                    ),
                    add: {
                        componentGroups: ["taiga_villager"]
                    }
                }
            ]
        },
        "minecraft:schedule_work_farmer": {
            add: {
                componentGroups: ["make_and_receive_love", "work_schedule_farmer"]
            },
            remove: {
                componentGroups: [
                    "home_schedule_villager",
                    "gather_schedule_villager",
                    "wander_schedule_villager",
                    "bed_schedule_villager",
                    "job_specific_goals",
                    "play_schedule_villager"
                ]
            }
        },
        "minecraft:become_unskilled": {
            add: {
                componentGroups: [
                    "adult",
                    "make_and_receive_love",
                    "unskilled",
                    "behavior_peasant",
                    "basic_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:become_weaponsmith": {
            add: {
                componentGroups: [
                    "weaponsmith",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "work_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule", "job_specific_goals", "trade_components"]
            }
        },
        "minecraft:entity_born": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:skin_id", "self", "!="),
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_0"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_1"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_2"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_3"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_4"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_5"]
                            }
                        }
                    ]
                },
                {
                    add: {
                        componentGroups: ["baby", "unskilled", "child_schedule"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("desert"),
                    add: {
                        componentGroups: ["desert_villager"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("jungle"),
                    add: {
                        componentGroups: ["jungle_villager"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("savanna"),
                    add: {
                        componentGroups: ["savanna_villager"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("cold"),
                        EntityFilters.hasBiomeTag("frozen")
                    ),
                    add: {
                        componentGroups: ["snow_villager"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("swamp"),
                        EntityFilters.hasBiomeTag("mangrove_swamp")
                    ),
                    add: {
                        componentGroups: ["swamp_villager"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("taiga"),
                    add: {
                        componentGroups: ["taiga_villager"]
                    }
                }
            ]
        },
        "minecraft:entity_spawned": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:skin_id", "self", "!="),
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_0"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_1"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_2"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_3"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_4"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["villager_skin_5"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:variant", "self", "!="),
                    randomize: [
                        {
                            weight: 5,
                            add: {
                                componentGroups: ["baby", "child_schedule"]
                            }
                        },
                        {
                            weight: 95,
                            sequence: [
                                {
                                    add: {
                                        componentGroups: ["adult", "make_and_receive_love"]
                                    }
                                },
                                {
                                    randomize: [
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["farmer", "behavior_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["fisherman", "behavior_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["shepherd", "behavior_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["fletcher", "behavior_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["librarian", "behavior_non_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["cartographer", "behavior_non_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["cleric", "behavior_non_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["armorer", "behavior_non_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["weaponsmith", "behavior_non_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["toolsmith", "behavior_non_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["butcher", "behavior_non_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["leatherworker", "behavior_non_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["mason", "behavior_non_peasant", "basic_schedule"]
                                            }
                                        },
                                        {
                                            weight: 1,
                                            add: {
                                                componentGroups: ["nitwit", "behavior_peasant", "jobless_schedule"]
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("desert"),
                        EntityFilters.hasBiomeTag("mesa")
                    ),
                    add: {
                        componentGroups: ["desert_villager"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("jungle"),
                    add: {
                        componentGroups: ["jungle_villager"]
                    }
                },
                {
                    filters: EntityFilters.hasBiomeTag("savanna"),
                    add: {
                        componentGroups: ["savanna_villager"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.allOf(
                            EntityFilters.hasBiomeTag("cold"),
                            EntityFilters.hasBiomeTag("ocean", "self", "!=")
                        ),
                        EntityFilters.hasBiomeTag("frozen")
                    ),
                    add: {
                        componentGroups: ["snow_villager"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("swamp"),
                        EntityFilters.hasBiomeTag("mangrove_swamp")
                    ),
                    add: {
                        componentGroups: ["swamp_villager"]
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            EntityFilters.hasBiomeTag("taiga"),
                            EntityFilters.hasBiomeTag("extreme_hills")
                        ),
                        EntityFilters.hasBiomeTag("cold", "self", "!=")
                    ),
                    add: {
                        componentGroups: ["taiga_villager"]
                    }
                }
            ]
        },
        "minecraft:resupply_trades": {
            add: {
                componentGroups: ["trade_resupply_component_group"]
            }
        },
        "minecraft:schedule_home_villager": {
            add: {
                componentGroups: ["make_and_receive_love", "home_schedule_villager"]
            },
            remove: {
                componentGroups: [
                    "bed_schedule_villager",
                    "wander_schedule_villager",
                    "gather_schedule_villager",
                    "job_specific_goals",
                    "play_schedule_villager",
                    "trade_resupply_component_group"
                ]
            }
        },
        "minecraft:schedule_bed_villager": {
            add: {
                componentGroups: ["bed_schedule_villager"]
            },
            remove: {
                componentGroups: [
                    "make_and_receive_love",
                    "home_schedule_villager",
                    "gather_schedule_villager",
                    "wander_schedule_villager",
                    "job_specific_goals",
                    "play_schedule_villager",
                    "trade_resupply_component_group"
                ]
            }
        },
        "minecraft:schedule_gather_villager": {
            add: {
                componentGroups: ["make_and_receive_love", "gather_schedule_villager"]
            },
            remove: {
                componentGroups: [
                    "bed_schedule_villager",
                    "wander_schedule_villager",
                    "home_schedule_villager",
                    "job_specific_goals",
                    "play_schedule_villager",
                    "trade_resupply_component_group"
                ]
            }
        },
        "minecraft:schedule_wander_villager": {
            add: {
                componentGroups: ["make_and_receive_love", "wander_schedule_villager"]
            },
            remove: {
                componentGroups: [
                    "home_schedule_villager",
                    "bed_schedule_villager",
                    "wander_schedule_villager",
                    "job_specific_goals",
                    "play_schedule_villager",
                    "trade_resupply_component_group"
                ]
            }
        },
        "minecraft:schedule_work_librarian": {
            add: {
                componentGroups: ["make_and_receive_love", "work_schedule_librarian"]
            },
            remove: {
                componentGroups: [
                    "home_schedule_villager",
                    "gather_schedule_villager",
                    "wander_schedule_villager",
                    "bed_schedule_villager",
                    "job_specific_goals",
                    "play_schedule_villager"
                ]
            }
        },
        "minecraft:spawn_cleric": {
            add: {
                componentGroups: [
                    "cleric",
                    "adult",
                    "make_and_receive_love",
                    "behavior_non_peasant",
                    "basic_schedule"
                ]
            },
            remove: {
                componentGroups: ["baby", "child_schedule"]
            }
        },
        "minecraft:spawn_armorer": {
            randomize: [
                {
                    weight: 6,
                    add: {
                        componentGroups: [
                            "armorer",
                            "adult",
                            "make_and_receive_love",
                            "behavior_non_peasant",
                            "basic_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                },
                {
                    weight: 6,
                    add: {
                        componentGroups: [
                            "weaponsmith",
                            "adult",
                            "make_and_receive_love",
                            "behavior_non_peasant",
                            "basic_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                },
                {
                    weight: 6,
                    add: {
                        componentGroups: [
                            "toolsmith",
                            "adult",
                            "make_and_receive_love",
                            "behavior_non_peasant",
                            "basic_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                }
            ]
        },
        "minecraft:spawn_butcher": {
            randomize: [
                {
                    weight: 10,
                    add: {
                        componentGroups: [
                            "butcher",
                            "adult",
                            "make_and_receive_love",
                            "behavior_non_peasant",
                            "basic_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                },
                {
                    weight: 10,
                    add: {
                        componentGroups: [
                            "leatherworker",
                            "adult",
                            "make_and_receive_love",
                            "behavior_non_peasant",
                            "basic_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                }
            ]
        },
        "minecraft:spawn_farmer": {
            randomize: [
                {
                    weight: 5,
                    add: {
                        componentGroups: [
                            "farmer",
                            "adult",
                            "make_and_receive_love",
                            "behavior_peasant",
                            "basic_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                },
                {
                    weight: 5,
                    add: {
                        componentGroups: [
                            "fisherman",
                            "adult",
                            "make_and_receive_love",
                            "behavior_peasant",
                            "basic_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                },
                {
                    weight: 5,
                    add: {
                        componentGroups: [
                            "shepherd",
                            "adult",
                            "make_and_receive_love",
                            "behavior_peasant",
                            "basic_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                },
                {
                    weight: 5,
                    add: {
                        componentGroups: [
                            "fletcher",
                            "adult",
                            "make_and_receive_love",
                            "behavior_peasant",
                            "basic_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                },
                {
                    weight: 5,
                    add: {
                        componentGroups: [
                            "mason",
                            "adult",
                            "make_and_receive_love",
                            "behavior_non_peasant",
                            "work_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                }
            ]
        },
        "minecraft:spawn_librarian": {
            randomize: [
                {
                    weight: 20,
                    add: {
                        componentGroups: [
                            "librarian",
                            "adult",
                            "make_and_receive_love",
                            "behavior_non_peasant",
                            "basic_schedule"
                        ]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                },
                {
                    weight: 20,
                    add: {
                        componentGroups: ["cartographer", "behavior_non_peasant", "basic_schedule"]
                    },
                    remove: {
                        componentGroups: ["baby", "child_schedule"]
                    }
                }
            ]
        }
    }
});
