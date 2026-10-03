import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const CopperGolemTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.CopperGolem,
    formatVersion: FormatVersionEntities.V1_26_0,
    description: {
        isSummonable: true,
        isSpawneable: true
    },
    properties: {
        "minecraft:oxidation_level": {
            idProperty: "minecraft:oxidation_level",
            clientSync: true,
            type: "enum",
            default: "unoxidized",
            values: ["unoxidized", "exposed", "weathered", "oxidized"]
        },
        "minecraft:is_waxed": {
            idProperty: "minecraft:is_waxed",
            clientSync: false,
            type: "bool",
            default: false
        },
        "minecraft:chest_interaction": {
            idProperty: "minecraft:chest_interaction",
            clientSync: true,
            type: "enum",
            default: "none",
            values: ["none", "take", "take_fail", "put", "put_fail"]
        },
        "minecraft:has_flower": {
            idProperty: "minecraft:has_flower",
            clientSync: true,
            type: "bool",
            default: false
        },
        "minecraft:is_becoming_statue": {
            idProperty: "minecraft:is_becoming_statue",
            clientSync: false,
            type: "bool",
            default: false
        }
    },
    componentsGroups: {
        "minecraft:became_statue": [
            new BPEntityComponents.SetInstantDespawn({}),
            new BPEntityComponents.SetSpawnEntity({
                entities: {
                    filters: EntityFilters.boolProperty("minecraft:has_flower"),
                    maxWaitTime: 0,
                    minWaitTime: 0,
                    spawnItem: "poppy"
                }
            })
        ],
        "minecraft:becoming_statue": [
            new BPEntityComponents.SetBehaviorPlaceBlock({
                affectedByGriefingRule: false,
                randomlyPlaceableBlocks: [
                    {
                        block: {
                            name: "minecraft:oxidized_copper_golem_statue",
                            states: {
                                "minecraft:cardinal_direction": "north"
                            }
                        },
                        filter: EntityFilters.anyOf(
                            EntityFilters.allOf(
                                EntityFilters.yRotation(135, "self", ">="),
                                EntityFilters.yRotation(180, "self", "<")
                            ),
                            EntityFilters.allOf(
                                EntityFilters.yRotation(-180, "self", ">="),
                                EntityFilters.yRotation(-135, "self", "<")
                            )
                        )
                    },
                    {
                        block: {
                            name: "minecraft:oxidized_copper_golem_statue",
                            states: {
                                "minecraft:cardinal_direction": "east"
                            }
                        },
                        filter: EntityFilters.allOf(
                            EntityFilters.yRotation(-135, "self", ">="),
                            EntityFilters.yRotation(-45, "self", "<")
                        )
                    },
                    {
                        block: {
                            name: "minecraft:oxidized_copper_golem_statue",
                            states: {
                                "minecraft:cardinal_direction": "south"
                            }
                        },
                        filter: EntityFilters.allOf(
                            EntityFilters.yRotation(-45, "self", ">="),
                            EntityFilters.yRotation(45, "self", "<")
                        )
                    },
                    {
                        block: {
                            name: "minecraft:oxidized_copper_golem_statue",
                            states: {
                                "minecraft:cardinal_direction": "west"
                            }
                        },
                        filter: EntityFilters.allOf(
                            EntityFilters.yRotation(45, "self", ">="),
                            EntityFilters.yRotation(135, "self", "<")
                        )
                    }
                ],
                canPlace: EntityFilters.boolProperty("minecraft:is_becoming_statue", false),
                chance: 0.0058,
                priority: 1,
                onPlace: {
                    event: "minecraft:become_statue",
                    target: "self"
                },
                xzRange: 0,
                yRange: 0
            })
        ],
        "minecraft:copper_oxidizing": [
            new BPEntityComponents.SetTimer({
                looping: true,
                time: [25200, 27600],
                timeDownEvent: {
                    event: "minecraft:oxidize_copper"
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAnnotationOpenDoor(),
        new BPEntityComponents.SetAttack({
            damage: 2
        }),
        new BPEntityComponents.SetBalloonable({}),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 6,
            priority: 6
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 2,
            speedMultiplier: 1.5
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 5,
            xzDist: 3
        }),
        new BPEntityComponents.SetBehaviorTakeFlower({
            filters: EntityFilters.allOf(
                EntityFilters.isDaytime(),
                EntityFilters.boolProperty("minecraft:has_flower", false)
            ),
            onTakeFlower: {
                event: "minecraft:on_take_flower"
            },
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorTransportItems({
            sourceContainerTypes: [
                {
                    name: "minecraft:copper_chest"
                },
                {
                    name: "minecraft:exposed_copper_chest"
                },
                {
                    name: "minecraft:oxidized_copper_chest"
                },
                {
                    name: "minecraft:waxed_copper_chest"
                },
                {
                    name: "minecraft:waxed_exposed_copper_chest"
                },
                {
                    name: "minecraft:waxed_oxidized_copper_chest"
                },
                {
                    name: "minecraft:waxed_weathered_copper_chest"
                },
                {
                    name: "minecraft:weathered_copper_chest"
                }
            ],
            destinationContainerTypes: [
                {
                    name: "minecraft:chest"
                },
                {
                    name: "minecraft:trapped_chest"
                }
            ],
            maxStackSize: 16,
            searchStrategy: "nearest",
            searchDistance: [32, 8],
            maxVisitedContainers: 10,
            initialCooldown: 3,
            idleCooldown: 7,
            placeStrategy: "with_matching_or_empty",
            priority: 3
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 0.98,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                },
                {
                    dealsDamage: "no",
                    onDamage: {
                        event: "minecraft:remove_oxidation_layer",
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("lightning", "other"),
                            EntityFilters.isVariant(0, "self", "==")
                        )
                    }
                }
            ]
        }),
        new BPEntityComponents.SetEquipment({
            slotDropChance: [
                {
                    dropChance: 1,
                    slot: "slot.weapon.mainhand"
                }
            ]
        }),
        new BPEntityComponents.SetHealth({
            max: 12,
            value: 12
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
                    interactText: "action.interact.wax_on",
                    onInteract: {
                        event: "minecraft:wax_on",
                        filters: EntityFilters.allOf(
                            EntityFilters.boolProperty("minecraft:is_waxed", false),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasEquipment("honeycomb", "hand", "other")
                        )
                    },
                    particleOnStart: {
                        copperEvent: "wax_on"
                    },
                    useItem: true,
                    swing: true
                },
                {
                    hurtItem: 1,
                    interactText: "action.interact.scrape",
                    onInteract: {
                        event: "minecraft:remove_oxidation_layer",
                        filters: EntityFilters.allOf(
                            EntityFilters.boolProperty("minecraft:is_waxed", false),
                            EntityFilters.enumProperty("minecraft:oxidation_level", "unoxidized", "self", "not"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasEquipmentTag("minecraft:is_axe", "hand", "other")
                        )
                    },
                    particleOnStart: {
                        copperEvent: "scrape"
                    },
                    swing: true
                },
                {
                    hurtItem: 1,
                    interactText: "action.interact.wax_off",
                    onInteract: {
                        event: "minecraft:wax_off",
                        filters: EntityFilters.allOf(
                            EntityFilters.boolProperty("minecraft:is_waxed"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasEquipmentTag("minecraft:is_axe", "hand", "other")
                        )
                    },
                    particleOnStart: {
                        copperEvent: "wax_off"
                    },
                    swing: true
                },
                {
                    dropItemSlot: "slot.weapon.mainhand",
                    interactText: "action.interact.drop_item",
                    onInteract: {
                        filters: EntityFilters.allOf(
                            EntityFilters.allSlotsEmpty("hand", "self", "not"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.allSlotsEmpty("main_hand", "other")
                        )
                    },
                    swing: true
                },
                {
                    playSounds: "shear",
                    cooldown: 2.5,
                    hurtItem: 1,
                    spawnItems: {
                        table: "loot_tables/entities/copper_golem_shear.json"
                    },
                    onInteract: {
                        event: "minecraft:on_sheared",
                        filters: EntityFilters.allOf(
                            EntityFilters.boolProperty("minecraft:has_flower"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasEquipment("shears", "hand", "other")
                        ),
                        target: "self"
                    },
                    interactText: "action.interact.shear",
                    swing: false,
                    vibration: "shear",
                    useItem: false
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetLeashableTo(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/copper_golem.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.2
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidDamageBlocks: true,
            canPassDoors: true,
            avoidWater: true,
            canOpenDoors: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPersistent(),
        new BPEntityComponents.SetPhysics({}),
        // TODO(migrate): componente sin clase "minecraft:pushable": {"is_pushable": true, "is_pushable_by_piston": true}
        new BPEntityComponents.SetTypeFamily({
            family: ["copper_golem", "mob"]
        })
    ],
    events: {
        "minecraft:become_statue": {
            dropItem: {
                slot: "slot.weapon.mainhand"
            },
            setProperty: {
                "minecraft:is_becoming_statue": true
            },
            trigger: {
                event: "minecraft:serialize_entity",
                target: "block"
            }
        },
        "minecraft:begin_oxidizing": {
            add: {
                componentGroups: ["minecraft:copper_oxidizing"]
            }
        },
        "minecraft:from_player_weathered": {
            setProperty: {
                "minecraft:oxidation_level": "weathered"
            },
            trigger: "minecraft:from_player_spawned"
        },
        "minecraft:from_player_default": {
            setProperty: {
                "minecraft:oxidation_level": "unoxidized"
            },
            trigger: "minecraft:from_player_spawned"
        },
        "minecraft:entity_spawned": {
            trigger: "minecraft:begin_oxidizing"
        },
        "minecraft:from_player_exposed": {
            setProperty: {
                "minecraft:oxidation_level": "exposed"
            },
            trigger: "minecraft:from_player_spawned"
        },
        "minecraft:transport_items.start_take_succeed": {
            setProperty: {
                "minecraft:chest_interaction": "take"
            }
        },
        "minecraft:from_player_spawned": {
            trigger: "minecraft:begin_oxidizing",
            playSound: {
                sound: "spawn"
            }
        },
        "minecraft:from_player_oxidized": {
            trigger: "minecraft:maximum_oxidation",
            playSound: {
                sound: "spawn"
            },
            setProperty: {
                "minecraft:oxidation_level": "oxidized"
            }
        },
        "minecraft:transport_items.stop_interaction": {
            setProperty: {
                "minecraft:chest_interaction": "none"
            }
        },
        "minecraft:from_serialized_entity": {
            setProperty: {
                "minecraft:is_becoming_statue": false,
                "minecraft:oxidation_level": "unoxidized"
            },
            trigger: "minecraft:restart_oxidation_timer"
        },
        "minecraft:maximum_oxidation": {
            add: {
                componentGroups: ["minecraft:becoming_statue"]
            },
            remove: {
                componentGroups: ["minecraft:copper_oxidizing"]
            }
        },
        "minecraft:on_sheared": {
            setProperty: {
                "minecraft:has_flower": false
            }
        },
        "minecraft:on_take_flower": {
            setProperty: {
                "minecraft:has_flower": true
            }
        },
        "minecraft:oxidize_copper": {
            firstValid: [
                {
                    filters: EntityFilters.enumProperty("minecraft:oxidation_level", "unoxidized"),
                    setProperty: {
                        "minecraft:oxidation_level": "exposed"
                    }
                },
                {
                    filters: EntityFilters.enumProperty("minecraft:oxidation_level", "exposed"),
                    setProperty: {
                        "minecraft:oxidation_level": "weathered"
                    }
                },
                {
                    filters: EntityFilters.enumProperty("minecraft:oxidation_level", "weathered"),
                    setProperty: {
                        "minecraft:oxidation_level": "oxidized"
                    },
                    trigger: "minecraft:maximum_oxidation"
                }
            ]
        },
        "minecraft:remove_oxidation_layer": {
            sequence: [
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    trigger: "minecraft:restart_oxidation_timer"
                },
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    firstValid: [
                        {
                            filters: EntityFilters.enumProperty("minecraft:oxidation_level", "exposed"),
                            setProperty: {
                                "minecraft:oxidation_level": "unoxidized"
                            }
                        },
                        {
                            filters: EntityFilters.enumProperty("minecraft:oxidation_level", "weathered"),
                            setProperty: {
                                "minecraft:oxidation_level": "exposed"
                            }
                        },
                        {
                            filters: EntityFilters.enumProperty("minecraft:oxidation_level", "oxidized"),
                            setProperty: {
                                "minecraft:oxidation_level": "weathered"
                            }
                        }
                    ]
                }
            ]
        },
        "minecraft:transport_items.start_place_fail": {
            setProperty: {
                "minecraft:chest_interaction": "put_fail"
            }
        },
        "minecraft:restart_oxidation_timer": {
            add: {
                componentGroups: ["minecraft:copper_oxidizing"]
            },
            remove: {
                componentGroups: ["minecraft:copper_oxidizing", "minecraft:becoming_statue"]
            }
        },
        "minecraft:serialize_entity_succeeded": {
            add: {
                componentGroups: ["minecraft:became_statue"]
            },
            trigger: {
                event: "minecraft:randomize_pose",
                target: "block"
            },
            playSound: {
                sound: "deactivate"
            }
        },
        "minecraft:transport_items.start_take_fail": {
            setProperty: {
                "minecraft:chest_interaction": "take_fail"
            }
        },
        "minecraft:transport_items.start_place_succeed": {
            setProperty: {
                "minecraft:chest_interaction": "put"
            }
        },
        "minecraft:wax_off": {
            sequence: [
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    firstValid: [
                        {
                            filters: EntityFilters.enumProperty("minecraft:oxidation_level", "oxidized"),
                            add: {
                                componentGroups: ["minecraft:becoming_statue"]
                            }
                        },
                        {
                            add: {
                                componentGroups: ["minecraft:copper_oxidizing"]
                            }
                        }
                    ]
                },
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    setProperty: {
                        "minecraft:is_waxed": false
                    }
                }
            ]
        },
        "minecraft:wax_on": {
            setProperty: {
                "minecraft:is_waxed": true
            },
            remove: {
                componentGroups: ["minecraft:copper_oxidizing", "minecraft:becoming_statue"]
            }
        }
    }
});
