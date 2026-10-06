import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Slime para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const SlimeTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Slime,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:slime_aggressive": [
            new BPEntityComponents.SetMovementJump({
                jump_delay: [0.16, 0.5]
            })
        ],
        "minecraft:slime_calm": [
            new BPEntityComponents.SetMovementJump({
                jump_delay: [0.5, 1.5]
            })
        ],
        "minecraft:slime_large": [
            new BPEntityComponents.SetAreaAttack({
                cause: "entity_attack",
                damageCooldown: 0.5,
                damagePerTick: 4,
                damageRange: 0.15,
                entityFilter: EntityFilters.anyOf(
                    EntityFilters.isFamily('player', 'other'),
                    EntityFilters.isFamily('irongolem', 'other'),
                    EntityFilters.isFamily('snowgolem', 'other')
                )
            }),
            new BPEntityComponents.SetAttack({
                damage: 4
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 2.08,
                width: 2.08
            }),
            new BPEntityComponents.SetHealth({
                max: 16,
                value: 16
            }),
            new BPEntityComponents.SetMovement({
                value: 0.6
            }),
            new BPEntityComponents.SetVariant({
                value: 4
            })
        ],
        "minecraft:slime_medium": [
            new BPEntityComponents.SetAreaAttack({
                cause: "entity_attack",
                damageCooldown: 0.5,
                damagePerTick: 2,
                damageRange: 0.15,
                entityFilter: EntityFilters.anyOf(
                    EntityFilters.isFamily('player', 'other'),
                    EntityFilters.isFamily('irongolem', 'other'),
                    EntityFilters.isFamily('snowgolem', 'other')
                )
            }),
            new BPEntityComponents.SetAttack({
                damage: 2
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.04,
                width: 1.04
            }),
            new BPEntityComponents.SetHealth({
                max: 4,
                value: 4
            }),
            new BPEntityComponents.SetMovement({
                value: 0.4
            }),
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ],
        "minecraft:slime_small": [
            new BPEntityComponents.SetAttack({
                damage: 0
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 0.52,
                width: 0.52
            }),
            new BPEntityComponents.SetHealth({
                max: 1,
                value: 1
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/slime.json"
            }),
            new BPEntityComponents.SetMovement({
                value: 0.3
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
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.isFamily('snowgolem', 'other'),
                        EntityFilters.isFamily('irongolem', 'other')
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
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 2.08,
            width: 2.08
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? ${MoLang.variant()} : 0`
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
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetMobEffectImmunity({
            mobEffects: ["oozing"]
        }),
        new BPEntityComponents.SetMovementJump({
            jump_delay: [0.5, 1.5]
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
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetTypeFamily({
            family: ["slime", "monster", "mob"]
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
