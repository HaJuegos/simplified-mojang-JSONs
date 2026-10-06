import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Zombie Pigman para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const ZombiePigmanTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.ZombiePigman,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:pig_zombie_baby": [
            new BPEntityComponents.SetExperienceReward({
                onDeath: `${MoLang.lastHitByPlayer()} ? 12 + (${MoLang.equipmentCount()} * Math.Random(1,3)) : 0`
            }),
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.96,
                width: 0.98
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["baby_undead", "baby_zombie_pigman", "undead", "monster", "mob"]
            })
        ],
        "minecraft:pig_zombie_adult": [
            new BPEntityComponents.SetExperienceReward({
                onDeath: `${MoLang.lastHitByPlayer()} ? 5 + (${MoLang.equipmentCount()} * Math.Random(1,3)) : 0`
            }),
            new BPEntityComponents.SetRideable({
                familyTypes: ["baby_undead"],
                seatCount: 1,
                seats: [
                    {
                        lockRiderRotation: 0,
                        position: [0, 1.175, -0.35]
                    }
                ]
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["zombie_pigman", "undead", "monster", "mob"]
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.9,
                width: 0.6
            })
        ],
        "minecraft:strider_jockey": [
            new BPEntityComponents.SetEquipment({
                table: "loot_tables/entities/zombified_piglin_rider_gear.json"
            })
        ],
        "minecraft:pig_zombie_angry": [
            new BPEntityComponents.SetAngry({
                broadcastAnger: true,
                broadcastAngerWhenDying: false,
                broadcastRange: 20,
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                },
                duration: 25
            })
        ],
        "minecraft:pig_zombie_jockey": [
            new BPEntityComponents.SetBehaviorFindMount({
                maxFailedAttempts: 20,
                priority: 1,
                startDelay: 15,
                withinRadius: 16
            })
        ],
        "minecraft:pig_zombie_calm": [
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:become_angry",
                target: "self"
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 5
        }),
        new BPEntityComponents.SetBehaviorEquipItem({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookDistance: 6,
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            speedMultiplier: 1.5,
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 2,
            targetDist: 0,
            speedMultiplier: 1.25,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            canPickupAnyItem: true,
            goalRadius: 2,
            priority: 7,
            maxDist: 3,
            speedMultiplier: 1,
            pickupBasedOnChance: true
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 10
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 8,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorStompTurtleEgg({
            goalRadius: 1.14,
            priority: 6,
            searchHeight: 2,
            interval: 20,
            searchRange: 10,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorUseKineticWeapon({
            approachDistance: 10,
            repositionDistance: {
                min: 6,
                max: 7
            },
            cooldownDistance: {
                min: 9,
                max: 11
            },
            cooldownSpeedMultiplier: 1.5,
            weaponReachMultiplier: 0.5,
            weaponMinSpeedMultiplier: 0.2,
            hijackMountNavigation: true,
            speedMultiplier: 1.5,
            trackTarget: true,
            priority: 4
        }),
        new BPEntityComponents.SetBreathable({
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetEquipItem({}),
        new BPEntityComponents.SetEquipment({
            table: "loot_tables/entities/zombie_pigman_gear.json"
        }),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetHealth({
            max: 20,
            value: 20
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/zombie_pigman.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.23
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidPortals: true,
            avoidWater: true,
            canOpenDoors: true,
            canPassDoors: true,
            canPathOverLava: true,
            isAmphibious: true
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:zombie_pigman": "minecraft:zombie_pigman"
            }
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
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
                    item: "minecraft:netherite_spear",
                    priority: 0,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:diamond_spear",
                    priority: 1,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:iron_spear",
                    priority: 2,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:golden_spear",
                    priority: 3,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:copper_spear",
                    priority: 4,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:stone_spear",
                    priority: 5,
                    surplusAmount: 1,
                    wantAmount: 1
                },
                {
                    item: "minecraft:wooden_spear",
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
            ]
        }),
        new BPEntityComponents.SetSpawnEggInteraction()
    ],
    events: {
        "minecraft:on_calm": {
            add: {
                componentGroups: ["minecraft:pig_zombie_calm"]
            },
            remove: {
                componentGroups: ["minecraft:pig_zombie_angry"]
            }
        },
        "minecraft:as_baby": {
            add: {
                componentGroups: ["minecraft:pig_zombie_baby", "minecraft:pig_zombie_calm"]
            }
        },
        "minecraft:entity_born": {
            trigger: "minecraft:as_baby"
        },
        "minecraft:become_angry": {
            add: {
                componentGroups: ["minecraft:pig_zombie_angry"]
            },
            remove: {
                componentGroups: ["minecraft:pig_zombie_calm"]
            }
        },
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 9500,
                    trigger: "spawn_adult"
                },
                {
                    weight: 425,
                    trigger: "spawn_baby"
                },
                {
                    weight: 75,
                    trigger: "spawn_baby_jockey"
                }
            ]
        },
        "spawn_adult": {
            add: {
                componentGroups: ["minecraft:pig_zombie_adult", "minecraft:pig_zombie_calm"]
            }
        },
        "minecraft:entity_transformed": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "other"),
                    trigger: "spawn_baby"
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "other", "!="),
                    trigger: "spawn_adult"
                }
            ]
        },
        "minecraft:spawn_as_strider_jockey": {
            add: {
                componentGroups: ["minecraft:strider_jockey"]
            }
        },
        "spawn_baby": {
            add: {
                componentGroups: ["minecraft:pig_zombie_baby", "minecraft:pig_zombie_calm"]
            }
        }
    }
});
