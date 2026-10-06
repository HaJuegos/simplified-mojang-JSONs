import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Bote para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 03-10-2026
 */
export const BoatTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Boat,
    description: {
        isSummonable: true,
        isSpawneable: false
    },
    componentsGroups: {
        "minecraft:above_bubble_column_down": [
            new BPEntityComponents.SetBuoyant({
                applyGravity: true,
                baseBuoyancy: 1,
                liquidBlocks: ["minecraft:water", "minecraft:flowing_water"],
                dragDownOnBuoyancyRemoved: 0.7,
                movementType: "none"
            }),
            new BPEntityComponents.SetOutOfControl(),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: 3,
                timeDownEvent: {
                    event: "minecraft:sink",
                    target: "self"
                }
            })
        ],
        "minecraft:above_bubble_column_up": [
            new BPEntityComponents.SetBuoyant({
                applyGravity: true,
                baseBuoyancy: 1,
                liquidBlocks: ["minecraft:water", "minecraft:flowing_water"],
                dragDownOnBuoyancyRemoved: 0.7,
                movementType: "none"
            }),
            new BPEntityComponents.SetOutOfControl()
        ],
        "minecraft:can_ride_bamboo": [
            new BPEntityComponents.SetRideable({
                interactText: "action.interact.ride.boat",
                seats: [
                    {
                        minRiderCount: 0,
                        lockRiderRotation: 90,
                        position: [0, 0.1, 0],
                        maxRiderCount: 1,
                        rotateRiderBy: -90
                    },
                    {
                        minRiderCount: 2,
                        lockRiderRotation: 90,
                        position: [0.2, 0.1, 0],
                        maxRiderCount: 2,
                        rotateRiderBy: `${MoLang.hasAnyFamily('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman', 'happy_ghast')} ? -90 : 0`
                    },
                    {
                        minRiderCount: 2,
                        lockRiderRotation: 90,
                        position: [-0.6, 0.1, 0],
                        maxRiderCount: 2,
                        rotateRiderBy: `${MoLang.hasAnyFamily('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman', 'happy_ghast')} ? -90 : 0`
                    }
                ],
                passengerMaxWidth: 1.375,
                pullInEntities: true,
                seatCount: 2
            })
        ],
        "minecraft:can_ride_default": [
            new BPEntityComponents.SetRideable({
                interactText: "action.interact.ride.boat",
                seats: [
                    {
                        minRiderCount: 0,
                        lockRiderRotation: 90,
                        position: [0, -0.2, 0],
                        maxRiderCount: 1,
                        rotateRiderBy: -90
                    },
                    {
                        minRiderCount: 2,
                        lockRiderRotation: 90,
                        position: [0.2, -0.2, 0],
                        maxRiderCount: 2,
                        rotateRiderBy: `${MoLang.hasAnyFamily('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman', 'happy_ghast')} ? -90 : 0`
                    },
                    {
                        minRiderCount: 2,
                        lockRiderRotation: 90,
                        position: [-0.6, -0.2, 0],
                        maxRiderCount: 2,
                        rotateRiderBy: `${MoLang.hasAnyFamily('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman', 'happy_ghast')} ? -90 : 0`
                    }
                ],
                passengerMaxWidth: 1.375,
                pullInEntities: true,
                seatCount: 2
            })
        ],
        "minecraft:floating": [
            new BPEntityComponents.SetBuoyant({
                applyGravity: true,
                bigWaveProbability: 0.03,
                baseBuoyancy: 1,
                bigWaveSpeed: 10,
                liquidBlocks: ["minecraft:water", "minecraft:flowing_water"],
                movementType: "waves"
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetBuoyant({
            applyGravity: true,
            baseBuoyancy: 1,
            bigWaveProbability: 0.03,
            bigWaveSpeed: 10,
            liquidBlocks: ["minecraft:water", "minecraft:flowing_water"],
            movementType: "waves"
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.455,
            width: 1.4
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            conditionalValues: [
                {
                    conditionalValues: [
                        EntityFilters.isMoving()
                    ],
                    maxDroppedTicks: 0,
                    maxOptimizedDistance: 0,
                    useMotionPredictionHints: true
                }
            ],
            defaultValues: {
                maxDroppedTicks: 20,
                maxOptimizedDistance: 60,
                useMotionPredictionHints: true
            }
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
        new BPEntityComponents.SetInsideBlockNotifier({
            blockList: [
                {
                    block: {
                        name: "minecraft:bubble_column",
                        states: {
                            "drag_down": true
                        }
                    },
                    enteredBlockEvent: {
                        event: "minecraft:entered_bubble_column_down",
                        target: "self"
                    },
                    exitedBlockEvent: {
                        event: "minecraft:exited_bubble_column",
                        target: "self"
                    }
                },
                {
                    block: {
                        name: "minecraft:bubble_column",
                        states: {
                            "drag_down": false
                        }
                    },
                    enteredBlockEvent: {
                        event: "minecraft:entered_bubble_column_up",
                        target: "self"
                    },
                    exitedBlockEvent: {
                        event: "minecraft:exited_bubble_column",
                        target: "self"
                    }
                }
            ]
        }),
        new BPEntityComponents.SetIsCollidable(),
        new BPEntityComponents.SetIsStackable(),
        new BPEntityComponents.SetLeashable({
            presets: [
                {
                    filter: EntityFilters.isFamily("happy_ghast", "other"),
                    rotationAdjustment: 90,
                    springType: "quad_dampened"
                },
                {
                    hardDistance: 4,
                    rotationAdjustment: 90,
                    softDistance: 2
                }
            ]
        }),
        new BPEntityComponents.SetLeashableTo(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/boat.json"
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity({
            presets: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("sulfur_cube", "other"),
                        EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "none", "other", "not"),
                        EntityFilters.isControllingPassengerFamily("player")
                    ),
                    pushMode: "none"
                },
                {
                    pushMode: "legacy_boat",
                    strengthMultiplier: 0.1,
                    minDistance: 0.55,
                    pushScaleSelf: 0.5,
                    pushScaleOther: 0.25
                }
            ]
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetRideable({
            interactText: "action.interact.ride.boat",
            passengerMaxWidth: 1.375,
            seats: [
                {
                    lockRiderRotation: 90,
                    minRiderCount: 0,
                    maxRiderCount: 1,
                    position: [0, -0.2, 0],
                    rotateRiderBy: -90
                },
                {
                    lockRiderRotation: 90,
                    minRiderCount: 2,
                    maxRiderCount: 2,
                    position: [0.2, -0.2, 0],
                    rotateRiderBy: `${MoLang.hasAnyFamily('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman', 'happy_ghast') ? -90 : 0}`
                },
                {
                    lockRiderRotation: 90,
                    minRiderCount: 2,
                    maxRiderCount: 2,
                    position: [-0.6, -0.2, 0],
                    rotateRiderBy: `${MoLang.hasAnyFamily('blaze', 'creeper', 'enderman', 'illager', 'magmacube', 'piglin', 'player', 'skeleton', 'slime', 'villager', 'wandering_trader', 'witch', 'zombie', 'zombie_pigman', 'happy_ghast') ? -90 : 0}`
                }
            ],
            pullInEntities: true,
            seatCount: 2
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["boat", "inanimate"]
        })
    ],
    events: {
        "minecraft:add_can_ride": {
            sequence: [
                {
                    filters: EntityFilters.isVariant(7, "self", "!="),
                    add: {
                        componentGroups: ["minecraft:can_ride_default"]
                    }
                },
                {
                    filters: EntityFilters.isVariant(7, "self", "=="),
                    add: {
                        componentGroups: ["minecraft:can_ride_bamboo"]
                    }
                }
            ]
        },
        "minecraft:entered_bubble_column_down": {
            add: {
                componentGroups: ["minecraft:above_bubble_column_down"]
            },
            remove: {
                componentGroups: ["minecraft:floating"]
            }
        },
        "minecraft:exited_bubble_column": {
            add: {
                componentGroups: ["minecraft:floating"]
            },
            remove: {
                componentGroups: ["minecraft:above_bubble_column_down", "minecraft:above_bubble_column_up"]
            },
            trigger: "minecraft:add_can_ride"
        },
        "minecraft:entered_bubble_column_up": {
            add: {
                componentGroups: ["minecraft:above_bubble_column_up"]
            },
            remove: {
                componentGroups: ["minecraft:floating"]
            }
        },
        "minecraft:entity_spawned": {
            trigger: "minecraft:add_can_ride"
        },
        "minecraft:sink": {
            remove: {
                componentGroups: [
                    "minecraft:floating",
                    "minecraft:can_ride_default",
                    "minecraft:can_ride_bamboo",
                    "minecraft:above_bubble_column_down",
                    "minecraft:above_bubble_column_up"
                ]
            }
        }
    }
});
