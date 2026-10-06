import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Shulker para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const ShulkerTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Shulker,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:shulker_black": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:shulker_red": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:shulker_green": [
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "minecraft:shulker_silver": [
            new BPEntityComponents.SetVariant({
                value: 7
            })
        ],
        "minecraft:shulker_lime": [
            new BPEntityComponents.SetVariant({
                value: 10
            })
        ],
        "minecraft:shulker_blue": [
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "minecraft:shulker_brown": [
            new BPEntityComponents.SetVariant({
                value: 3
            })
        ],
        "minecraft:shulker_gray": [
            new BPEntityComponents.SetVariant({
                value: 8
            })
        ],
        "minecraft:shulker_cyan": [
            new BPEntityComponents.SetVariant({
                value: 6
            })
        ],
        "minecraft:shulker_light_blue": [
            new BPEntityComponents.SetVariant({
                value: 12
            })
        ],
        "minecraft:shulker_magenta": [
            new BPEntityComponents.SetVariant({
                value: 13
            })
        ],
        "minecraft:shulker_undyed": [
            new BPEntityComponents.SetVariant({
                value: 16
            })
        ],
        "minecraft:shulker_orange": [
            new BPEntityComponents.SetVariant({
                value: 14
            })
        ],
        "minecraft:shulker_pink": [
            new BPEntityComponents.SetVariant({
                value: 9
            })
        ],
        "minecraft:shulker_purple": [
            new BPEntityComponents.SetVariant({
                value: 5
            })
        ],
        "minecraft:shulker_white": [
            new BPEntityComponents.SetVariant({
                value: 15
            })
        ],
        "minecraft:shulker_yellow": [
            new BPEntityComponents.SetVariant({
                value: 11
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorHurtByTarget({
            entityTypes: {
                filters: EntityFilters.isFamily("shulker", "other", "!=")
            },
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 6,
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.isFamily('player', 'other')
                }
            ],
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorRangedAttack({
            attackInterval: {
                min: 1,
                max: 3
            },
            attackRange: {
                min: 15,
                max: 15
            }
        }),
        new BPEntityComponents.SetBreathable({
            breathesLava: false,
            breathesWater: false,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 10,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? 5: 0`
        }),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetHealth({
            max: 30,
            value: 30
        }),
        new BPEntityComponents.SetInteract({
            interactions: [
                {
                    onInteract: {
                        event: "minecraft:turn_black",
                        filters: EntityFilters.allOf(
                            EntityFilters.anyOf(
                                EntityFilters.hasEquipment("dye:0", "hand", "other"),
                                EntityFilters.hasEquipment("dye:16", "hand", "other")
                            ),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_gray",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:8", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_silver",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:7", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_white",
                        filters: EntityFilters.allOf(
                            EntityFilters.anyOf(
                                EntityFilters.hasEquipment("dye:15", "hand", "other"),
                                EntityFilters.hasEquipment("dye:19", "hand", "other")
                            ),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_light_blue",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:12", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_orange",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:14", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_red",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:1", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_blue",
                        filters: EntityFilters.allOf(
                            EntityFilters.anyOf(
                                EntityFilters.hasEquipment("dye:4", "hand", "other"),
                                EntityFilters.hasEquipment("dye:18", "hand", "other")
                            ),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_purple",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:5", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_magenta",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:13", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_pink",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:9", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_brown",
                        filters: EntityFilters.allOf(
                            EntityFilters.anyOf(
                                EntityFilters.hasEquipment("dye:3", "hand", "other"),
                                EntityFilters.hasEquipment("dye:17", "hand", "other")
                            ),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_yellow",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:11", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_lime",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:10", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_green",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:2", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                },
                {
                    onInteract: {
                        event: "minecraft:turn_cyan",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("dye:6", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasAbility("instabuild", "other")
                        )
                    },
                    swing: false,
                    useItem: true
                }
            ]
        }),
        new BPEntityComponents.SetIsCollidable(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/shulker.json"
        }),
        new BPEntityComponents.SetMovement({
            max: 0,
            value: 0
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPeek({
            onClose: {
                event: "minecraft:on_close"
            },
            onOpen: {
                event: "minecraft:on_open"
            },
            onTargetOpen: {
                event: "minecraft:on_open"
            }
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetRendersWhenInvisible(),
        new BPEntityComponents.SetShooter({
            projectiles: [
                {
                    def: MinecraftEntityTypes.ShulkerBullet
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["shulker", "monster", "mob"]
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:shulker_undyed"]
            }
        },
        "minecraft:turn_magenta": {
            add: {
                componentGroups: ["minecraft:shulker_magenta"]
            }
        },
        "minecraft:turn_green": {
            add: {
                componentGroups: ["minecraft:shulker_green"]
            }
        },
        "minecraft:turn_black": {
            add: {
                componentGroups: ["minecraft:shulker_black"]
            }
        },
        "minecraft:turn_blue": {
            add: {
                componentGroups: ["minecraft:shulker_blue"]
            }
        },
        "minecraft:turn_pink": {
            add: {
                componentGroups: ["minecraft:shulker_pink"]
            }
        },
        "minecraft:turn_brown": {
            add: {
                componentGroups: ["minecraft:shulker_brown"]
            }
        },
        "minecraft:turn_gray": {
            add: {
                componentGroups: ["minecraft:shulker_gray"]
            }
        },
        "minecraft:turn_cyan": {
            add: {
                componentGroups: ["minecraft:shulker_cyan"]
            }
        },
        "minecraft:turn_light_blue": {
            add: {
                componentGroups: ["minecraft:shulker_light_blue"]
            }
        },
        "minecraft:turn_lime": {
            add: {
                componentGroups: ["minecraft:shulker_lime"]
            }
        },
        "minecraft:turn_orange": {
            add: {
                componentGroups: ["minecraft:shulker_orange"]
            }
        },
        "minecraft:turn_purple": {
            add: {
                componentGroups: ["minecraft:shulker_purple"]
            }
        },
        "minecraft:turn_red": {
            add: {
                componentGroups: ["minecraft:shulker_red"]
            }
        },
        "minecraft:turn_silver": {
            add: {
                componentGroups: ["minecraft:shulker_silver"]
            }
        },
        "minecraft:turn_white": {
            add: {
                componentGroups: ["minecraft:shulker_white"]
            }
        },
        "minecraft:turn_yellow": {
            add: {
                componentGroups: ["minecraft:shulker_yellow"]
            }
        }
    }
});
