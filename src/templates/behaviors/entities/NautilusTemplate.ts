import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Nautilo para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const NautilusTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Nautilus,
    description: {
        spawnCategory: SpawnCategoryEntities.WaterCreature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:nautilus_baby": [
            new BPEntityComponents.SetCollisionBox({
                width: 0.44,
                height: 0.5
            }),
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetMovement({
                value: 0.15
            }),
            new BPEntityComponents.SetUnderwaterMovement({
                value: 0.15
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: [
                    {
                        item: "pufferfish_bucket",
                        resultItem: "water_bucket:0"
                    },
                    {
                        item: "cod_bucket",
                        resultItem: "water_bucket:0"
                    },
                    {
                        item: "salmon_bucket",
                        resultItem: "water_bucket:0"
                    },
                    {
                        item: "tropical_fish_bucket",
                        resultItem: "water_bucket:0"
                    },
                    "pufferfish",
                    "fish",
                    "salmon",
                    "clownfish",
                    "cooked_fish",
                    "cooked_salmon"
                ],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorTempt({
                priority: 4,
                speedMultiplier: 2,
                items: [
                    "pufferfish_bucket",
                    "cod_bucket",
                    "salmon_bucket",
                    "tropical_fish_bucket",
                    "pufferfish",
                    "fish",
                    "salmon",
                    "clownfish",
                    "cooked_fish",
                    "cooked_salmon"
                ],
                onTemptEnd: {
                    event: 'minecraft:on_stop_tempting'
                }
            }),
            new BPEntityComponents.SetBehaviorPanic({
                priority: 1,
                speedMultiplier: 1.6
            })
        ],
        "minecraft:nautilus_adult": [
            new BPEntityComponents.SetCollisionBox({
                width: 0.875,
                height: 0.95
            }),
            new BPEntityComponents.SetBreedable({
                breedItems: [
                    {
                        item: "pufferfish_bucket",
                        resultItem: "water_bucket:0"
                    },
                    {
                        item: "cod_bucket",
                        resultItem: "water_bucket:0"
                    },
                    {
                        item: "salmon_bucket",
                        resultItem: "water_bucket:0"
                    },
                    {
                        item: "tropical_fish_bucket",
                        resultItem: "water_bucket:0"
                    },
                    "pufferfish",
                    "fish",
                    "salmon",
                    "clownfish",
                    "cooked_fish",
                    "cooked_salmon"
                ],
                breedsWith: {
                    "minecraft:nautilus": {}
                },
                requireTame: true
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 3,
                speedMultiplier: 1
            })
        ],
        "minecraft:nautilus_wild_adult_calm": [
            new BPEntityComponents.SetBehaviorNearestAttackableTarget({
                priority: 5,
                mustSee: true,
                reselectTargets: true,
                withinRadius: 25,
                mustSeeForgetDuration: 17,
                attackInterval: {
                    min: 120,
                    max: 180
                },
                targetAcquisitionProbability: 0.5,
                entityTypes: [
                    {
                        filters: EntityFilters.anyOf(EntityFilters.isFamily("pufferfish", "other")),
                        maxDist: 35
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorTempt({
                priority: 4,
                speedMultiplier: 2,
                items: ["pufferfish", "pufferfish_bucket"],
                onTemptEnd: {
                    event: "minecraft:on_stop_tempting"
                }
            }),
            new BPEntityComponents.SetTameable({
                probability: 0.33,
                tameItems: [
                    {
                        item: "pufferfish_bucket",
                        resultItem: "water_bucket:0"
                    },
                    "pufferfish"
                ],
                tameEvent: {
                    event: "minecraft:on_tame",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:become_angry",
                target: "self"
            })
        ],
        "minecraft:nautilus_tame": [
            new BPEntityComponents.SetBehaviorTempt({
                priority: 4,
                speedMultiplier: 2,
                items: [
                    "pufferfish_bucket",
                    "cod_bucket",
                    "salmon_bucket",
                    "tropical_fish_bucket",
                    "pufferfish",
                    "fish",
                    "salmon",
                    "clownfish",
                    "cooked_fish",
                    "cooked_salmon"
                ],
                onTemptEnd: {
                    event: "minecraft:on_stop_tempting"
                }
            }),
            new BPEntityComponents.SetIsTamed(),
            new BPEntityComponents.SetHealable({
                items: [
                    {
                        item: "pufferfish_bucket",
                        resultItem: "water_bucket:0",
                        healAmount: 2
                    },
                    {
                        item: "cod_bucket",
                        resultItem: "water_bucket:0",
                        healAmount: 4
                    },
                    {
                        item: "salmon_bucket",
                        resultItem: "water_bucket:0",
                        healAmount: 4
                    },
                    {
                        item: "tropical_fish_bucket",
                        resultItem: "water_bucket:0",
                        healAmount: 2
                    },
                    {
                        item: "fish",
                        healAmount: 4
                    },
                    {
                        item: "salmon",
                        healAmount: 4
                    },
                    {
                        item: "clownfish",
                        healAmount: 2
                    },
                    {
                        item: "pufferfish",
                        healAmount: 2
                    },
                    {
                        item: "cooked_fish",
                        healAmount: 10
                    },
                    {
                        item: "cooked_salmon",
                        healAmount: 12
                    }
                ]
            }),
            new BPEntityComponents.SetBehaviorPanic({
                priority: 1,
                speedMultiplier: 1.6
            })
        ],
        "minecraft:nautilus_tame_adult": [
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                crouchingSkipInteract: true,
                interactText: "action.interact.ride.horse",
                familyTypes: ["player"],
                onRiderEnterEvent: "minecraft:on_mount",
                onRiderExitEvent: "minecraft:on_dismount",
                seats: [
                    {
                        position: [0, 0.925, 0],
                        thirdPersonCameraRadius: 7
                    }
                ]
            }),
            new BPEntityComponents.SetInventory({
                containerType: "horse"
            }),
            new BPEntityComponents.SetEquippable({
                slots: [
                    {
                        slot: 0,
                        item: "saddle",
                        acceptedItems: ["saddle"],
                        onEquip: {
                            event: "minecraft:on_saddled"
                        },
                        onUnequip: {
                            event: "minecraft:on_unsaddled"
                        }
                    },
                    {
                        slot: 1,
                        item: "nautilusarmor",
                        acceptedItems: [
                            "minecraft:copper_nautilus_armor",
                            "minecraft:iron_nautilus_armor",
                            "minecraft:golden_nautilus_armor",
                            "minecraft:diamond_nautilus_armor",
                            "minecraft:netherite_nautilus_armor"
                        ],
                        onEquip: {
                            event: "minecraft:on_armor_equip"
                        }
                    }
                ]
            }),
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipment("saddle", "inventory", "self", "not"),
                                EntityFilters.hasEquipment("saddle", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            target: "self"
                        },
                        equipItemSlot: "0",
                        interactText: "action.interact.saddle"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.hasEquipmentTag("minecraft:nautilus_armor", "inventory", "self", "not"),
                                EntityFilters.hasEquipmentTag("minecraft:nautilus_armor", "hand", "player"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            target: "self"
                        },
                        equipItemSlot: "1",
                        interactText: "action.interact.equipnautilusarmor"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.riderCount(0),
                                EntityFilters.hasEquipmentTag("minecraft:nautilus_armor", "inventory"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            )
                        },
                        hurtItem: 1,
                        dropItemSlot: "1",
                        dropItemYOffset: 1.1,
                        interactText: "action.interact.removenautilusarmor",
                        playSounds: ["armor.unequip_generic"],
                        vibration: "shear"
                    },
                    {
                        onInteract: {
                            filters: EntityFilters.allOf(
                                EntityFilters.riderCount(0),
                                EntityFilters.hasEquipment("saddle", "inventory"),
                                EntityFilters.hasEquipment("shears", "hand", "other"),
                                EntityFilters.isSneakHeld(false, "other")
                            ),
                            target: "self"
                        },
                        hurtItem: 1,
                        dropItemSlot: "0",
                        interactText: "action.interact.removesaddle",
                        playSounds: ["unsaddle"],
                        vibration: "shear"
                    }
                ]
            })
        ],
        "minecraft:nautilus_leashable": [
            new BPEntityComponents.SetLeashable({
                onUnleash: {
                    event: "minecraft:on_unleashed",
                    target: "self"
                },
                presets: [
                    {
                        hardDistance: 10,
                        maxDistance: 14
                    }
                ]
            })
        ],
        "minecraft:nautilus_tame_saddled_in_water": [
            new BPEntityComponents.SetMobEffect({
                mobEffect: "breath_of_the_nautilus",
                ambient: true,
                effectRange: 1.6,
                effectTime: 2,
                entityFilter: EntityFilters.allOf(
                    EntityFilters.isFamily("player", "other"),
                    EntityFilters.isRidingSelf(true, "other")
                )
            }),
            new BPEntityComponents.SetFreeCameraControlled({
                strafeSpeedModifier: 0.7,
                backwardsMovementModifier: 0.5
            }),
            new BPEntityComponents.SetDashAction({
                cooldownTime: 2,
                horizontalMomentum: 154,
                verticalMomentum: 0.1,
                canDashUnderwater: true,
                direction: "passenger"
            }),
            new BPEntityComponents.SetUnderwaterMountBreathing(),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.inWater(false),
                        event: "minecraft:on_saddled_out_of_water"
                    }
                ]
            })
        ],
        "minecraft:nautilus_tame_saddled_on_ground": [
            new BPEntityComponents.SetInputGroundControlled(),
            new BPEntityComponents.SetDashAction({
                cooldownTime: 2,
                horizontalMomentum: 42,
                verticalMomentum: 0.1,
                canDashUnderwater: false,
                direction: "passenger"
            }),
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: [
                    {
                        filters: EntityFilters.inWater(),
                        event: "minecraft:on_saddled_in_water"
                    }
                ]
            })
        ],
        "minecraft:nautilus_tame_saddled": [
            new BPEntityComponents.SetIsSaddled(),
            new BPEntityComponents.SetHome({
                restrictionRadius: 16,
                restrictionType: 'random_movement'
            }),
            new BPEntityComponents.SetBehaviorPlayerRideTamed({
                priority: 0
            })
        ],
        "minecraft:nautilus_tame_unsaddled": [
            new BPEntityComponents.SetHome({
                restrictionRadius: 32,
                restrictionType: 'random_movement'
            })
        ],
        "minecraft:nautilus_player_controlled": [
            new BPEntityComponents.SetMovement({
                value: 0.015
            }),
            new BPEntityComponents.SetUnderwaterMovement({
                value: 0.055
            })
        ],
        "minecraft:nautilus_ai_controlled": [
            new BPEntityComponents.SetMovement({
                value: 0.15
            }),
            new BPEntityComponents.SetUnderwaterMovement({
                value: 0.07
            })
        ],
        "minecraft:nautilus_wild_adult_angry": [
            new BPEntityComponents.SetAngry({
                duration: 20,
                broadcastAnger: false,
                broadcastRange: 16,
                broadcastAngerWhenDying: false,
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetBehaviorAquaticChargeAttack({
                priority: 3,
                maxChargeDistance: 16,
                chargeSpeed: 1.2,
                attackReach: 0,
                knockbackForce: 2,
                chargeOvershootDistance: 1.5,
                chargeCooldownTime: {
                    min: 4,
                    max: 4
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAmbientSoundInterval({
            soundEvents: [
                {
                    soundID: "ambient.in.water",
                    condition: `${MoLang.headIsInWater()}`
                }
            ],
            minRandomCooldownSound: 8,
            maxRandomCooldownSound: 16
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:nautilus": "minecraft:nautilus"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0,
            breathesAir: false,
            breathesWater: true
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} && !${MoLang.isBaby()} ? Math.Random(1,3) : 0`,
            onBred: "Math.Random(1,7)"
        }),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/nautilus.json"
        }),
        new BPEntityComponents.SetHealth({
            value: 15,
            max: 15
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
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetHome(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity({
            presets: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("sulfur_cube", "other"),
                        EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "none", "other", "not"),
                        EntityFilters.isControllingPassengerFamily("player")
                    ),
                    pushMode: "none",
                    requireCollisionOverlap: false
                }
            ]
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "nautilus", "mob"]
        }),
        new BPEntityComponents.SetKnockbackResistance({
            value: 0.3
        }),
        new BPEntityComponents.SetMobEffectImmunity({
            mobEffects: ["poison"]
        }),
        new BPEntityComponents.SetNavigationGeneric({
            isAmphibious: false,
            canPathOverWater: false,
            canSwim: true,
            canWalk: false,
            canBreach: false,
            canSink: false,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetMovementSway({
            swayAmplitude: 0
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {
                minDistance: 32,
                maxDistance: 40
            }
        }),
        new BPEntityComponents.SetAttack({
            damage: 3
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorRandomSwim({
            priority: 6,
            speedMultiplier: 1.5,
            xzDist: 16,
            yDist: 4,
            interval: 0
        }),
        new BPEntityComponents.SetBehaviorSwimWander({
            priority: 7,
            interval: 10,
            lookAhead: 2,
            speedMultiplier: 1.5,
            wanderTime: 5
        }),
        new BPEntityComponents.SetBehaviorSwimIdle({
            priority: 8,
            idleTime: 5,
            successRate: 0.1
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 90,
                    trigger: "minecraft:spawn_wild_adult"
                },
                {
                    weight: 10,
                    trigger: "minecraft:spawn_wild_baby"
                }
            ]
        },
        "minecraft:entity_born": {
            trigger: "minecraft:spawn_tame_baby"
        },
        "minecraft:spawn_wild_adult": {
            add: {
                componentGroups: [
                    "minecraft:nautilus_adult",
                    "minecraft:nautilus_wild_adult_calm",
                    "minecraft:nautilus_ai_controlled",
                    "minecraft:nautilus_leashable"
                ]
            }
        },
        "minecraft:spawn_tame_adult": {
            add: {
                componentGroups: [
                    "minecraft:nautilus_adult",
                    "minecraft:nautilus_tame",
                    "minecraft:nautilus_tame_adult",
                    "minecraft:nautilus_tame_unsaddled",
                    "minecraft:nautilus_ai_controlled",
                    "minecraft:nautilus_leashable"
                ]
            }
        },
        "minecraft:spawn_wild_baby": {
            add: {
                componentGroups: ["minecraft:nautilus_baby", "minecraft:nautilus_leashable"]
            }
        },
        "minecraft:spawn_tame_baby": {
            add: {
                componentGroups: [
                    "minecraft:nautilus_baby",
                    "minecraft:nautilus_tame",
                    "minecraft:nautilus_tame_unsaddled",
                    "minecraft:nautilus_leashable"
                ]
            }
        },
        "minecraft:ageable_grow_up": {
            sequence: [
                {
                    remove: {
                        componentGroups: ["minecraft:nautilus_baby"]
                    },
                    add: {
                        componentGroups: ["minecraft:nautilus_adult", "minecraft:nautilus_ai_controlled"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_tamed"),
                    add: {
                        componentGroups: ["minecraft:nautilus_tame_adult"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_tamed", "self", "!="),
                    add: {
                        componentGroups: ["minecraft:nautilus_wild_adult_calm"]
                    }
                }
            ]
        },
        "minecraft:on_saddled": {
            sequence: [
                {
                    filters: EntityFilters.riderCount(0, "self", ">"),
                    trigger: "minecraft:switch_to_player_controlled"
                },
                {
                    remove: {
                        componentGroups: ["minecraft:nautilus_tame_unsaddled"]
                    },
                    add: {
                        componentGroups: ["minecraft:nautilus_tame_saddled"]
                    },
                    setHomePosition: {}
                },
                {
                    filters: EntityFilters.inWater(),
                    trigger: "minecraft:on_saddled_in_water"
                },
                {
                    filters: EntityFilters.inWater(false),
                    trigger: "minecraft:on_saddled_out_of_water"
                },
                {
                    playSound: {
                        sound: "saddle"
                    }
                }
            ]
        },
        "minecraft:on_saddled_in_water": {
            remove: {
                componentGroups: ["minecraft:nautilus_tame_saddled_on_ground"]
            },
            add: {
                componentGroups: ["minecraft:nautilus_tame_saddled_in_water"]
            }
        },
        "minecraft:on_saddled_out_of_water": {
            remove: {
                componentGroups: ["minecraft:nautilus_tame_saddled_in_water"]
            },
            add: {
                componentGroups: ["minecraft:nautilus_tame_saddled_on_ground"]
            }
        },
        "minecraft:on_unsaddled": {
            sequence: [
                {
                    filters: EntityFilters.riderCount(0, "self", ">"),
                    trigger: "minecraft:on_dismount"
                },
                {
                    remove: {
                        componentGroups: [
                            "minecraft:nautilus_tame_saddled",
                            "minecraft:nautilus_tame_saddled_in_water",
                            "minecraft:nautilus_tame_saddled_on_ground"
                        ]
                    },
                    add: {
                        componentGroups: ["minecraft:nautilus_tame_unsaddled"]
                    },
                    setHomePosition: {}
                }
            ]
        },
        "minecraft:on_armor_equip": {
            playSound: {
                sound: "armor.equip_generic"
            }
        },
        "minecraft:on_tame": {
            sequence: [
                {
                    remove: {
                        componentGroups: ["minecraft:nautilus_wild_adult_calm"]
                    },
                    add: {
                        componentGroups: ["minecraft:nautilus_tame", "minecraft:nautilus_tame_unsaddled"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "self", "!="),
                    add: {
                        componentGroups: ["minecraft:nautilus_tame_adult"]
                    }
                },
                {
                    setHomePosition: {}
                }
            ]
        },
        "minecraft:on_unleashed": {
            setHomePosition: {}
        },
        "minecraft:on_stop_tempting": {
            setHomePosition: {}
        },
        "minecraft:on_mount": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:is_saddled"),
                    trigger: "minecraft:switch_to_player_controlled"
                }
            ]
        },
        "minecraft:on_dismount": {
            trigger: "minecraft:switch_to_ai_controlled",
            setHomePosition: {}
        },
        "minecraft:become_angry": {
            remove: {
                componentGroups: ["minecraft:nautilus_wild_adult_calm", "minecraft:nautilus_leashable"]
            },
            add: {
                componentGroups: ["minecraft:nautilus_wild_adult_angry"]
            }
        },
        "minecraft:on_calm": {
            remove: {
                componentGroups: ["minecraft:nautilus_wild_adult_angry"]
            },
            add: {
                componentGroups: ["minecraft:nautilus_wild_adult_calm", "minecraft:nautilus_leashable"]
            }
        },
        "minecraft:switch_to_player_controlled": {
            remove: {
                componentGroups: ["minecraft:nautilus_ai_controlled"]
            },
            add: {
                componentGroups: ["minecraft:nautilus_player_controlled"]
            }
        },
        "minecraft:switch_to_ai_controlled": {
            remove: {
                componentGroups: ["minecraft:nautilus_player_controlled"]
            },
            add: {
                componentGroups: ["minecraft:nautilus_ai_controlled"]
            }
        }
    }
});
