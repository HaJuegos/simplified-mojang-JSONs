import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const PiglinTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Piglin,
    formatVersion: FormatVersionEntities.V1_26_20,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "zombification_sensor": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    filters: EntityFilters.inNether(false),
                    event: "start_zombification_event"
                }
            })
        ],
        "start_zombification": [
            new BPEntityComponents.SetIsShaking(),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    filters: EntityFilters.inNether(),
                    event: "stop_zombification_event"
                }
            }),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: 15,
                timeDownEvent: {
                    event: "become_zombie_event"
                }
            })
        ],
        "become_zombie": [
            new BPEntityComponents.SetTransformation({
                into: "minecraft:zombie_pigman",
                transformationSound: "converted_to_zombified",
                keepLevel: true,
                dropInventory: true,
                preserveEquipment: true
            })
        ],
        "ranged_unit": [
            new BPEntityComponents.SetBehaviorRangedAttack({
                priority: 8,
                // TODO(migrate): clave no soportada "attack_interval_min": 1
                // TODO(migrate): clave no soportada "attack_interval_max": 1
                attackRadius: 8,
                attackRadiusMin: 4,
                speedMultiplier: 1,
                targetInSightTime: 0.1
            }),
            new BPEntityComponents.SetShooter({
                // TODO(migrate): clave no soportada "def": "minecraft:arrow"
            }),
            new BPEntityComponents.SetBehaviorChargeHeldItem({
                priority: 3,
                items: ["minecraft:arrow"]
            }),
            new BPEntityComponents.SetEquipment({
                table: "loot_tables/entities/piglin_gear_ranged.json"
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "melee_unit": [
            new BPEntityComponents.SetBehaviorUseKineticWeapon({
                priority: 8,
                trackTarget: true,
                approachDistance: 10,
                repositionDistance: {
                    min: 6,
                    max: 7
                },
                cooldownDistance: {
                    min: 9,
                    max: 11
                },
                weaponReachMultiplier: 0.5,
                weaponMinSpeedMultiplier: 0.2,
                hijackMountNavigation: true
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                priority: 9,
                speedMultiplier: 1,
                trackTarget: true
            }),
            new BPEntityComponents.SetAttack({
                damage: 5
            }),
            new BPEntityComponents.SetEquipment({
                table: "loot_tables/entities/piglin_gear_melee.json"
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "angry": [
            new BPEntityComponents.SetAngry({
                duration: 30,
                broadcastAnger: true,
                broadcastAngerOnAttack: true,
                broadcastAngerOnBeingAttacked: true,
                broadcastRange: 16,
                broadcastTargets: ["piglin"],
                calmEvent: {
                    event: "become_calm_event",
                    target: "self"
                },
                filters: EntityFilters.allOf(
                    EntityFilters.isFamily("piglin", "other", "not"),
                    EntityFilters.hasComponent("minecraft:attack_cooldown", "self", "not")
                ),
                angrySoundId: "angry",
                soundInterval: {
                    range_min: 2,
                    range_max: 5
                }
            })
        ],
        "attack_cooldown": [
            new BPEntityComponents.SetAttackCooldown({
                attackCooldownTime: [30, 120],
                attackCooldownCompleteEvent: {
                    event: "attack_cooldown_complete_event",
                    target: "self"
                }
            })
        ],
        "piglin_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.96,
                width: 0.98
            }),
            new BPEntityComponents.SetMovement({
                value: 0.42
            }),
            new BPEntityComponents.SetExperienceReward({
                onDeath: "query.last_hit_by_player ? 1 + (query.equipment_count * Math.Random(1,2)) : 0"
            }),
            new BPEntityComponents.SetBehaviorPanic({
                priority: 1,
                speedMultiplier: 1.1
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["piglin", "baby_piglin", "monster", "mob"]
            })
        ],
        "piglin_adult": [
            new BPEntityComponents.SetGroupSize({
                radius: 32,
                filters: EntityFilters.allOf(
                    EntityFilters.hasComponent("minecraft:is_baby", "self", "not"),
                    EntityFilters.isFamily("piglin")
                )
            }),
            new BPEntityComponents.SetMovement({
                value: 0.35
            }),
            new BPEntityComponents.SetBarter({
                barterTable: "loot_tables/entities/piglin_barter.json",
                cooldownAfterBeingAttacked: 20
            }),
            new BPEntityComponents.SetExperienceReward({
                onDeath: "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
            }),
            new BPEntityComponents.SetCelebrateHunt({
                celebrationTargets: EntityFilters.allOf(EntityFilters.isFamily("hoglin")),
                broadcast: true,
                duration: 10,
                celebrateSound: "celebrate",
                soundInterval: {
                    rangeMin: 2,
                    rangeMax: 5
                },
                radius: 16
            }),
            new BPEntityComponents.SetBlockSensor({
                sensorRadius: 16,
                onBreak: [
                    {
                        blockList: [
                            "minecraft:gold_block",
                            "minecraft:gilded_blackstone",
                            "minecraft:nether_gold_ore",
                            "minecraft:deepslate_gold_ore",
                            "minecraft:raw_gold_block",
                            "minecraft:gold_ore",
                            "minecraft:chest",
                            "minecraft:trapped_chest",
                            "minecraft:ender_chest",
                            "minecraft:copper_chest",
                            "minecraft:exposed_copper_chest",
                            "minecraft:weathered_copper_chest",
                            "minecraft:oxidized_copper_chest",
                            "minecraft:waxed_copper_chest",
                            "minecraft:waxed_exposed_copper_chest",
                            "minecraft:waxed_weathered_copper_chest",
                            "minecraft:waxed_oxidized_copper_chest",
                            "minecraft:barrel",
                            "minecraft:white_shulker_box",
                            "minecraft:orange_shulker_box",
                            "minecraft:magenta_shulker_box",
                            "minecraft:light_blue_shulker_box",
                            "minecraft:yellow_shulker_box",
                            "minecraft:lime_shulker_box",
                            "minecraft:pink_shulker_box",
                            "minecraft:gray_shulker_box",
                            "minecraft:light_gray_shulker_box",
                            "minecraft:cyan_shulker_box",
                            "minecraft:purple_shulker_box",
                            "minecraft:blue_shulker_box",
                            "minecraft:brown_shulker_box",
                            "minecraft:green_shulker_box",
                            "minecraft:red_shulker_box",
                            "minecraft:black_shulker_box",
                            "minecraft:undyed_shulker_box"
                        ],
                        onBlockBroken: "important_block_destroyed_event"
                    }
                ]
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 0.6,
                height: 1.9
            })
        ],
        "interactable_piglin": [
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("gold_ingot", "hand", "other"),
                                EntityFilters.isFamily("player", "other"),
                                EntityFilters.hasComponent("minecraft:is_baby", "self", "!=")
                            )
                        },
                        barter: true,
                        admire: true,
                        useItem: true,
                        cooldownAfterBeingAttacked: 20,
                        interactText: "action.interact.barter"
                    }
                ]
            })
        ],
        "hunter": [
            new BPEntityComponents.SetTypeFamily({
                family: ["piglin", "piglin_hunter", "monster", "mob"]
            })
        ],
        "not_hunter": [
            new BPEntityComponents.SetTypeFamily({
                family: ["piglin", "monster", "mob"]
            })
        ],
        "alert_for_attack_targets": [
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                priority: 7,
                withinRadius: 16,
                persistTime: 0,
                entityTypes: [
                    {
                        filters: EntityFilters.anyOf(EntityFilters.isFamily("wither", "other")),
                        maxDist: 16
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("piglin_hunter"),
                            EntityFilters.isFamily("hoglin_huntable", "other"),
                            EntityFilters.hasComponent("minecraft:is_baby", "other", "not"),
                            EntityFilters.hasComponent("minecraft:attack_cooldown", "self", "not")
                        ),
                        maxDist: 16
                    },
                    {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasEquipment("golden_helmet", "head", "other", "not"),
                            EntityFilters.hasEquipment("golden_chestplate", "torso", "other", "not"),
                            EntityFilters.hasEquipment("golden_leggings", "leg", "other", "not"),
                            EntityFilters.hasEquipment("golden_boots", "feet", "other", "not")
                        ),
                        maxDist: 16,
                        reevaluateDescription: true
                    },
                    {
                        filters: EntityFilters.anyOf(EntityFilters.hasContainerOpen(true, "other")),
                        maxDist: 16
                    }
                ],
                mustSee: true
            })
        ],
        "take_target_as_response_to_block_break": [
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                priority: 7,
                entityTypes: [
                    {
                        filters: EntityFilters.isFamily("player", "other"),
                        maxDist: 16
                    }
                ]
            })
        ],
        "piglin_jockey": [
            new BPEntityComponents.SetBehaviorFindMount({
                priority: 1,
                withinRadius: 16,
                startDelay: 15,
                maxFailedAttempts: 20
            })
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetEquipItem({
            excludedItems: [
                {
                    item: "minecraft:banner:15"
                }
            ]
        }),
        new BPEntityComponents.SetAdmireItem({
            duration: 8,
            cooldownAfterBeingAttacked: 20
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetOnTargetAcquired({
            event: "become_angry_event",
            target: "self"
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetHealth({
            value: 16,
            max: 16
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
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/piglin.json"
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            canOpenDoors: true
        }),
        new BPEntityComponents.SetAnnotationOpenDoor(),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:piglin": "minecraft:piglin"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetInventory({
            inventorySize: 8
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorAdmireItem({
            priority: 2,
            admireItemSound: "admire",
            soundInterval: {
                min: 8,
                max: 8
            },
            onAdmireItemStart: {
                event: "admire_item_started_event",
                target: "self"
            },
            onAdmireItemStop: {
                event: "admire_item_stopped_event",
                target: "self"
            }
        }),
        new BPEntityComponents.SetBehaviorBarter({
            priority: 3
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetBehaviorAvoidMobType({
            priority: 4,
            removeTarget: true,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(EntityFilters.isFamily("zombie_pigman", "other")),
                    maxDist: 6
                },
                {
                    filters: EntityFilters.anyOf(EntityFilters.isFamily("zoglin", "other")),
                    maxDist: 6
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.hasTarget(true, "other"),
                        EntityFilters.isFamily("hoglin", "other")
                    ),
                    sprintSpeedMultiplier: 1.2,
                    checkIfOutnumbered: true
                }
            ],
            onEscapeEvent: {
                event: "become_calm_event",
                target: "self"
            },
            avoidMobSound: "retreat",
            soundInterval: {
                min: 2,
                max: 5
            }
        }),
        new BPEntityComponents.SetBehaviorEquipItem({
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorPickupItems({
            priority: 6,
            maxDist: 10,
            goalRadius: 2,
            speedMultiplier: 0.8,
            pickupBasedOnChance: false,
            canPickupAnyItem: false,
            cooldownAfterBeingAttacked: 20
        }),
        new BPEntityComponents.SetBehaviorAvoidBlock({
            priority: 9,
            tickInterval: 5,
            searchRange: 8,
            searchHeight: 4,
            sprintSpeedModifier: 1.1,
            targetSelectionMethod: "nearest",
            targetBlocks: [
                "minecraft:soul_fire",
                "minecraft:soul_lantern",
                "minecraft:soul_torch",
                "minecraft:item.soul_campfire"
            ],
            avoidBlockSound: "retreat",
            soundInterval: {
                min: 2,
                max: 5
            }
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 10,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 11,
            lookDistance: 8
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 12
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetFollowRange({
            value: 64
        }),
        new BPEntityComponents.SetShareables({
            singularPickup: true,
            items: [
                {
                    item: "minecraft:golden_sword",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_spear",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_axe",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_hoe",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_pickaxe",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_shovel",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_helmet",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_chestplate",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_leggings",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_boots",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_apple",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:appleEnchanted",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_carrot",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:gold_block",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:gold_nugget",
                    priority: 2,
                    storedInInventory: true
                },
                {
                    item: "minecraft:raw_gold",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:gold_ore",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:nether_gold_ore",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:deepslate_gold_ore",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:raw_gold_block",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:gilded_blackstone",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:horsearmorgold",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:golden_nautilus_armor",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:crossbow",
                    priority: 2
                },
                {
                    item: "minecraft:porkchop",
                    consumeItem: true,
                    priority: 3,
                    maxAmount: 64
                },
                {
                    item: "minecraft:cooked_porkchop",
                    consumeItem: true,
                    priority: 3,
                    maxAmount: 64
                },
                {
                    item: "minecraft:netherite_helmet",
                    priority: 3
                },
                {
                    item: "minecraft:diamond_helmet",
                    priority: 4
                },
                {
                    item: "minecraft:iron_helmet",
                    priority: 5
                },
                {
                    item: "minecraft:chainmail_helmet",
                    priority: 6
                },
                {
                    item: "minecraft:copper_helmet",
                    priority: 7
                },
                {
                    item: "minecraft:leather_helmet",
                    priority: 8
                },
                {
                    item: "minecraft:skull:0",
                    wantAmount: 1,
                    surplusAmount: 1,
                    priority: 9
                },
                {
                    item: "minecraft:skull:1",
                    wantAmount: 1,
                    surplusAmount: 1,
                    priority: 9
                },
                {
                    item: "minecraft:skull:2",
                    wantAmount: 1,
                    surplusAmount: 1,
                    priority: 9
                },
                {
                    item: "minecraft:skull:3",
                    wantAmount: 1,
                    surplusAmount: 1,
                    priority: 9
                },
                {
                    item: "minecraft:skull:4",
                    wantAmount: 1,
                    surplusAmount: 1,
                    priority: 9
                },
                {
                    item: "minecraft:skull:5",
                    wantAmount: 1,
                    surplusAmount: 1,
                    priority: 9
                },
                {
                    item: "minecraft:carved_pumpkin",
                    wantAmount: 1,
                    surplusAmount: 1,
                    priority: 9
                },
                {
                    item: "minecraft:turtle_helmet",
                    wantAmount: 1,
                    surplusAmount: 1,
                    priority: 9
                },
                {
                    item: "minecraft:netherite_chestplate",
                    priority: 3
                },
                {
                    item: "minecraft:diamond_chestplate",
                    priority: 4
                },
                {
                    item: "minecraft:iron_chestplate",
                    priority: 5
                },
                {
                    item: "minecraft:chainmail_chestplate",
                    priority: 6
                },
                {
                    item: "minecraft:copper_chestplate",
                    priority: 7
                },
                {
                    item: "minecraft:leather_chestplate",
                    priority: 8
                },
                {
                    item: "minecraft:elytra",
                    priority: 8
                },
                {
                    item: "minecraft:netherite_leggings",
                    priority: 3
                },
                {
                    item: "minecraft:diamond_leggings",
                    priority: 4
                },
                {
                    item: "minecraft:iron_leggings",
                    priority: 5
                },
                {
                    item: "minecraft:chainmail_leggings",
                    priority: 6
                },
                {
                    item: "minecraft:copper_leggings",
                    priority: 7
                },
                {
                    item: "minecraft:leather_leggings",
                    priority: 8
                },
                {
                    item: "minecraft:netherite_boots",
                    priority: 3
                },
                {
                    item: "minecraft:diamond_boots",
                    priority: 4
                },
                {
                    item: "minecraft:iron_boots",
                    priority: 5
                },
                {
                    item: "minecraft:chainmail_boots",
                    priority: 6
                },
                {
                    item: "minecraft:bell",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:clock",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:speckled_melon",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:light_weighted_pressure_plate",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:copper_boots",
                    priority: 7
                },
                {
                    item: "minecraft:leather_boots",
                    priority: 8
                },
                {
                    item: "minecraft:netherite_sword",
                    priority: 3
                },
                {
                    item: "minecraft:diamond_sword",
                    priority: 4
                },
                {
                    item: "minecraft:iron_sword",
                    priority: 5
                },
                {
                    item: "minecraft:copper_sword",
                    priority: 6
                },
                {
                    item: "minecraft:stone_sword",
                    priority: 7
                },
                {
                    item: "minecraft:wooden_sword",
                    priority: 8
                },
                {
                    item: "minecraft:netherite_spear",
                    priority: 3
                },
                {
                    item: "minecraft:diamond_spear",
                    priority: 4
                },
                {
                    item: "minecraft:iron_spear",
                    priority: 5
                },
                {
                    item: "minecraft:copper_spear",
                    priority: 6
                },
                {
                    item: "minecraft:stone_spear",
                    priority: 7
                },
                {
                    item: "minecraft:wooden_spear",
                    priority: 8
                },
                {
                    item: "minecraft:shield",
                    priority: 9
                },
                {
                    item: "minecraft:golden_dandelion",
                    priority: 2,
                    admire: true,
                    pickupLimit: 1,
                    storedInInventory: true
                },
                {
                    item: "minecraft:gold_ingot",
                    priority: 1,
                    pickupLimit: 1,
                    admire: true,
                    barter: true
                }
            ]
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 5,
                    trigger: "spawn_baby"
                },
                {
                    weight: 95,
                    trigger: "spawn_adult"
                }
            ]
        },
        "minecraft:entity_born": {
            trigger: "spawn_baby"
        },
        "spawn_adult_no_hunting": {
            randomize: [
                {
                    weight: 1,
                    trigger: "spawn_adult_ranged_no_hunting"
                },
                {
                    weight: 1,
                    trigger: "spawn_adult_melee_no_hunting"
                }
            ]
        },
        "spawn_adult": {
            randomize: [
                {
                    weight: 1,
                    trigger: "spawn_adult_ranged"
                },
                {
                    weight: 1,
                    trigger: "spawn_adult_melee"
                }
            ]
        },
        "spawn_adult_ranged": {
            add: {
                componentGroups: [
                    "piglin_adult",
                    "zombification_sensor",
                    "alert_for_attack_targets",
                    "ranged_unit",
                    "attack_cooldown",
                    "hunter",
                    "interactable_piglin"
                ]
            }
        },
        "spawn_adult_ranged_no_hunting": {
            add: {
                componentGroups: [
                    "piglin_adult",
                    "zombification_sensor",
                    "alert_for_attack_targets",
                    "ranged_unit",
                    "attack_cooldown",
                    "not_hunter",
                    "interactable_piglin"
                ]
            }
        },
        "spawn_adult_melee": {
            add: {
                componentGroups: [
                    "piglin_adult",
                    "zombification_sensor",
                    "alert_for_attack_targets",
                    "melee_unit",
                    "attack_cooldown",
                    "hunter",
                    "interactable_piglin"
                ]
            }
        },
        "spawn_adult_melee_no_hunting": {
            add: {
                componentGroups: [
                    "piglin_adult",
                    "zombification_sensor",
                    "alert_for_attack_targets",
                    "melee_unit",
                    "attack_cooldown",
                    "not_hunter",
                    "interactable_piglin"
                ]
            }
        },
        "spawn_baby": {
            randomize: [
                {
                    weight: 9,
                    add: {
                        componentGroups: ["piglin_baby", "zombification_sensor"]
                    }
                },
                {
                    weight: 1,
                    add: {
                        componentGroups: ["piglin_baby", "zombification_sensor", "piglin_jockey"]
                    }
                }
            ]
        },
        "stop_zombification_event": {
            add: {
                componentGroups: ["zombification_sensor"]
            },
            remove: {
                componentGroups: ["start_zombification"]
            }
        },
        "start_zombification_event": {
            add: {
                componentGroups: ["start_zombification"]
            },
            remove: {
                componentGroups: ["zombification_sensor"]
            }
        },
        "become_angry_event": {
            add: {
                componentGroups: ["angry"]
            }
        },
        "become_calm_event": {
            remove: {
                componentGroups: ["angry", "take_target_as_response_to_block_break"]
            },
            add: {
                componentGroups: ["alert_for_attack_targets", "attack_cooldown"]
            }
        },
        "attack_cooldown_complete_event": {
            remove: {
                componentGroups: ["attack_cooldown"]
            }
        },
        "become_zombie_event": {
            add: {
                componentGroups: ["become_zombie"]
            }
        },
        "important_block_destroyed_event": {
            remove: {
                componentGroups: ["alert_for_attack_targets"]
            },
            add: {
                componentGroups: ["take_target_as_response_to_block_break"]
            }
        },
        "admire_item_started_event": {
            remove: {
                componentGroups: ["interactable_piglin"]
            }
        },
        "admire_item_stopped_event": {
            add: {
                componentGroups: ["interactable_piglin"]
            }
        }
    }
});
