import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Minecart con TNT para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const TntMinecartTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.TntMinecart,
    description: {
        spawnCategory: SpawnCategoryEntities.Misc,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: false
    },
    componentsGroups: {
        "minecraft:inactive": [
            new BPEntityComponents.SetInteract({
                interactions: [
                    {
                        interactText: "action.interact.creeper",
                        onInteract: {
                            event: "minecraft:on_prime",
                            filters: {
                                all_of: [
                                    {
                                        subject: "other",
                                        test: "is_family",
                                        value: "player"
                                    },
                                    {
                                        domain: "tntexplodes",
                                        operator: "==",
                                        test: "is_game_rule",
                                        value: true
                                    }
                                ],
                                any_of: [
                                    {
                                        domain: "hand",
                                        subject: "other",
                                        test: "has_equipment",
                                        value: "fireball:0"
                                    },
                                    {
                                        domain: "hand",
                                        subject: "other",
                                        test: "has_equipment",
                                        value: "flint_and_steel"
                                    }
                                ]
                            },
                            target: "self"
                        },
                        playSounds: ["ignite"],
                        swing: true
                    },
                    {
                        interactText: "action.interact.creeper",
                        onInteract: {
                            event: "minecraft:on_prime",
                            filters: {
                                all_of: [
                                    {
                                        domain: "tntexplodes",
                                        operator: "==",
                                        test: "is_game_rule",
                                        value: true
                                    }
                                ],
                                any_of: [
                                    {
                                        subject: "other",
                                        test: "has_component",
                                        value: "fire_aspect"
                                    }
                                ]
                            },
                            target: "self"
                        },
                        swing: true
                    }
                ]
            }),
            new BPEntityComponents.SetRailSensor({
                onActivate: {
                    event: "minecraft:on_prime",
                    filters: EntityFilters.allOf(EntityFilters.isGameRule("tntexplodes", true, "self", "=="))
                }
            })
        ],
        "minecraft:instant_explode_tnt": [
            new BPEntityComponents.SetExplode({
                causesFire: false,
                fuseLit: true,
                power: 3,
                fuseLength: 0
            }),
            new BPEntityComponents.SetIsIgnited(),
            new BPEntityComponents.SetRailSensor()
        ],
        "minecraft:primed_tnt": [
            new BPEntityComponents.SetExplode({
                causesFire: false,
                fuseLit: true,
                power: 3,
                fuseLength: 4
            }),
            new BPEntityComponents.SetIsIgnited(),
            new BPEntityComponents.SetRailSensor()
        ]
    },
    components: [
        new BPEntityComponents.SetCollisionBox({
            height: 0.7,
            width: 0.98
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            conditionalValues: [
                {
                    conditionalValues: [
                        EntityFilters.isMoving(true, "self", "==")
                    ],
                    maxDroppedTicks: 0,
                    maxOptimizedDistance: 0
                }
            ],
            defaultValues: {
                maxDroppedTicks: 20,
                maxOptimizedDistance: 60,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetIsStackable(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity({
            presets: [
                {
                    pushMode: "legacy_minecart",
                    strengthMultiplier: 0.1,
                    minDistance: 0.01,
                    pushScaleSelf: 0.5,
                    pushScaleOther: 0.25
                }
            ]
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetRailMovement(),
        new BPEntityComponents.SetTypeFamily({
            family: ["minecart", "inanimate"]
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:inactive"]
            }
        },
        "minecraft:on_instant_prime": {
            add: {
                componentGroups: ["minecraft:instant_explode_tnt"]
            },
            remove: {
                componentGroups: ["minecraft:inactive"]
            }
        },
        "minecraft:on_prime": {
            add: {
                componentGroups: ["minecraft:primed_tnt"]
            },
            remove: {
                componentGroups: ["minecraft:inactive"]
            }
        }
    }
});
