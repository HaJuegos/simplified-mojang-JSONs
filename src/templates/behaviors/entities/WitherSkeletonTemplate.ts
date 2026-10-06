import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Wither Skeleton para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const WitherSkeletonTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.WitherSkeleton,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetAttack({
            damage: 4,
            effectDuration: 10,
            effectName: "wither"
        }),
        new BPEntityComponents.SetBehaviorEquipItem({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            speedMultiplier: 1.25,
            trackTarget: true,
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            reselectTargets: true,
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.isFamily('player', 'other')
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily('piglin', 'other'),
                        EntityFilters.isDifficulty('peaceful', 'self', 'not')
                    )
                },
                {
                    filters: EntityFilters.isFamily('irongolem', 'other')
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily('baby_turtle', 'other'),
                        EntityFilters.inWater(true, 'other', 'not')
                    )
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            goalRadius: 2,
            priority: 5,
            maxDist: 3,
            speedMultiplier: 1,
            pickupBasedOnChance: true
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
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 2.01,
            width: 0.72
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetEquipItem({
            excludedItems: [
                {
                    item: "minecraft:banner:15"
                }
            ]
        }),
        new BPEntityComponents.SetEquipment({
            table: "loot_tables/entities/wither_skeleton_gear.json"
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 + (${MoLang.equipmentCount()} * Math.Random(1,3)) : 0`
        }),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetHealth({
            max: 20,
            value: 20
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/wither_skeleton.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.25
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidSun: true,
            isAmphibious: true,
            avoidWater: true,
            canPathOverLava: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetScale({
            value: 1.2
        }),
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
                    item: "minecraft:wooden_shovel",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:stone_shovel",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_shovel",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_shovel",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_shovel",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_shovel",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_shovel",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:wooden_pickaxe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:stone_pickaxe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_pickaxe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_pickaxe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_pickaxe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_pickaxe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_pickaxe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:wooden_axe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:stone_axe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_axe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_axe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_axe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_axe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_axe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:wooden_hoe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:stone_hoe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_hoe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_hoe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_hoe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_hoe",
                    priority: 7,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:netherite_hoe",
                    priority: 7,
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
            family: ["wither", "monster", "undead", "skeleton", "mob"]
        })
    ],
    events: {
        "minecraft:entity_spawned": {}
    }
});
