import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const MagmaCubeTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.MagmaCube,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    componentsGroups: {
        "minecraft:slime_aggressive": [
            new BPEntityComponents.SetMovementJump({
                jump_delay: [0.667, 2]
            })
        ],
        "minecraft:slime_calm": [
            new BPEntityComponents.SetMovementJump({
                jump_delay: [2, 6]
            })
        ],
        "minecraft:slime_large": [
            new BPEntityComponents.SetAreaAttack({
                cause: "entity_attack",
                damageCooldown: 0.5,
                damagePerTick: 6,
                damageRange: 0.15
                // TODO(migrate): clave no soportada "entity_filter": {"any_of": [{"subject": "other", "test": "is_family", "value": "player"}, {"subject": "other", "test": "is_family", "value": "irongolem"}]}
            }),
            new BPEntityComponents.SetAttack({
                damage: 6
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 2.08,
                width: 2.08
            }),
            new BPEntityComponents.SetHealth({
                max: 16,
                value: 16
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/magma_cube.json"
            }),
            new BPEntityComponents.SetMovement({
                value: 0.75
            }),
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "minecraft:slime_medium": [
            new BPEntityComponents.SetAreaAttack({
                cause: "entity_attack",
                damageCooldown: 0.5,
                damagePerTick: 4,
                damageRange: 0.15
                // TODO(migrate): clave no soportada "entity_filter": {"any_of": [{"subject": "other", "test": "is_family", "value": "player"}, {"subject": "other", "test": "is_family", "value": "irongolem"}]}
            }),
            new BPEntityComponents.SetAttack({
                damage: 4
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.02,
                width: 1.04
            }),
            new BPEntityComponents.SetHealth({
                max: 4,
                value: 4
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/magma_cube.json"
            }),
            new BPEntityComponents.SetMovement({
                value: 0.66
            }),
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "minecraft:slime_small": [
            new BPEntityComponents.SetAreaAttack({
                cause: "entity_attack",
                damageCooldown: 0.5,
                damagePerTick: 3,
                damageRange: 0.15
                // TODO(migrate): clave no soportada "entity_filter": {"any_of": [{"subject": "other", "test": "is_family", "value": "player"}, {"subject": "other", "test": "is_family", "value": "irongolem"}]}
            }),
            new BPEntityComponents.SetAttack({
                damage: 3
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 0.52,
                width: 0.52
            }),
            new BPEntityComponents.SetHealth({
                max: 1,
                value: 1
            }),
            new BPEntityComponents.SetMovement({
                value: 0.6
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "player"
                            },
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "irongolem"
                            }
                        )
                    )
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorSlimeAttack({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorSlimeFloat({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorSlimeKeepOnJumping({
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorSlimeRandomDirection({
            priority: 4
        }),
        new BPEntityComponents.SetBreathable({
            breathesLava: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetBurnsInDaylight({}),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 2.08,
            width: 2.08
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
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: "query.last_hit_by_player ? query.variant : 0"
        }),
        new BPEntityComponents.SetFireImmune(),
        // TODO(migrate): componente sin clase "minecraft:freezing_vulnerable": {}
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetMovementJump({
            jump_delay: [2, 6]
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidWater: true,
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetOnTargetAcquired({
            event: "minecraft:become_aggressive",
            target: "self"
        }),
        new BPEntityComponents.SetOnTargetEscape({
            event: "minecraft:become_calm",
            target: "self"
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetTypeFamily({
            family: ["magmacube", "monster", "mob"]
        })
    ],
    events: {
        "minecraft:become_aggressive": {
            add: {
                componentGroups: ["minecraft:slime_aggressive"]
            }
        },
        "minecraft:become_calm": {
            add: {
                componentGroups: ["minecraft:slime_calm"]
            }
        },
        "spawn_small": {
            add: {
                componentGroups: ["minecraft:slime_small", "minecraft:slime_calm"]
            }
        },
        "spawn_large": {
            add: {
                componentGroups: ["minecraft:slime_large", "minecraft:slime_calm"]
            }
        },
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 1,
                    trigger: "spawn_small"
                },
                {
                    weight: 1,
                    trigger: "spawn_medium"
                },
                {
                    weight: 1,
                    trigger: "spawn_large"
                }
            ]
        },
        "spawn_medium": {
            add: {
                componentGroups: ["minecraft:slime_medium", "minecraft:slime_calm"]
            }
        }
    }
});
