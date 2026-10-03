import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Arrow para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 03-10-2026
 */
export const ArrowTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Arrow,
    description: {
        isSummonable: true,
        isSpawneable: false
    },
    componentsGroups: {
        "minecraft:player_arrow": [
            new BPEntityComponents.SetProjectile({
                anchor: "eye_height",
                gravity: 0.05,
                power: 3,
                hitSound: "bow.hit",
                onHit: {
                    arrowEffect: {
                        applyEffectToBlockingTargets: false
                    },
                    impactDamage: {
                        applyKnockbackToBlockingTargets: true,
                        damage: {
                            min: 0,
                            max: 0
                        },
                        knockback: true,
                        powerMultiplier: 2,
                        ceilPreCriticalDamage: true,
                        destroyOnHit: true
                    },
                    stickInGround: {
                        shakeTime: 0.35
                    }
                },
                offset: [0, -0.1, 0],
                shouldBounce: "if_no_damage_dealt",
                uncertaintyBase: 1,
                uncertaintyMultiplier: 0,
                isolatedPhysics: false
            })
        ],
        "minecraft:player_crossbow_arrow": [
            new BPEntityComponents.SetProjectile({
                anchor: "eye_height",
                gravity: 0.05,
                power: 3.15,
                hitSound: "bow.hit",
                onHit: {
                    arrowEffect: {
                        applyEffectToBlockingTargets: false
                    },
                    impactDamage: {
                        applyKnockbackToBlockingTargets: true,
                        damage: {
                            min: 0,
                            max: 0
                        },
                        knockback: true,
                        powerMultiplier: 2,
                        ceilPreCriticalDamage: true,
                        destroyOnHit: true
                    },
                    stickInGround: {
                        shakeTime: 0.35
                    }
                },
                offset: [0, -0.1, 0],
                shouldBounce: "if_no_damage_dealt",
                uncertaintyBase: 1,
                uncertaintyMultiplier: 0,
                isolatedPhysics: false
            })
        ],
        "minecraft:mob_arrow": [
            new BPEntityComponents.SetProjectile({
                anchor: "eye_height",
                gravity: 0.05,
                power: 1.6,
                hitSound: "bow.hit",
                onHit: {
                    arrowEffect: {
                        applyEffectToBlockingTargets: false
                    },
                    impactDamage: {
                        applyKnockbackToBlockingTargets: true,
                        damage: {
                            min: 0,
                            max: 0
                        },
                        powerMultiplier: 2,
                        ceilPreCriticalDamage: true,
                        knockback: true,
                        destroyOnHit: true,
                        difficultyRandomization: "multiplicative"
                    },
                    stickInGround: {
                        shakeTime: 0.35
                    }
                },
                offset: [0, -0.1, 0],
                shouldBounce: "if_no_damage_dealt",
                uncertaintyBase: 16,
                uncertaintyMultiplier: 4,
                isolatedPhysics: false
            })
        ],
        "minecraft:mob_crossbow_arrow": [
            new BPEntityComponents.SetProjectile({
                anchor: "eye_height",
                gravity: 0.05,
                power: 1.6,
                hitSound: "bow.hit",
                onHit: {
                    arrowEffect: {
                        applyEffectToBlockingTargets: false
                    },
                    impactDamage: {
                        applyKnockbackToBlockingTargets: true,
                        damage: {
                            min: 0,
                            max: 0
                        },
                        powerMultiplier: 2,
                        ceilPreCriticalDamage: true,
                        knockback: true,
                        destroyOnHit: true
                    },
                    stickInGround: {
                        shakeTime: 0.35
                    }
                },
                offset: [0, -0.1, 0],
                shouldBounce: "if_no_damage_dealt",
                uncertaintyBase: 16,
                uncertaintyMultiplier: 4,
                isolatedPhysics: false
            })
        ]
    },
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "arrow"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.25,
            width: 0.25
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 7,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetDimensionBound(),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    cause: "lava",
                    damagePerTick: 4,
                    filters: EntityFilters.inLava()
                }
            ]
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetProjectile({
            anchor: "eye_height",
            gravity: 0.05,
            power: 1.1,
            hitSound: "bow.hit",
            onHit: {
                arrowEffect: {
                    applyEffectToBlockingTargets: false
                },
                impactDamage: {
                    applyKnockbackToBlockingTargets: true,
                    damage: {
                        min: 0,
                        max: 0
                    },
                    powerMultiplier: 2,
                    ceilPreCriticalDamage: true,
                    knockback: true,
                    destroyOnHit: true
                },
                stickInGround: {
                    shakeTime: 0.35
                }
            },
            offset: [0, -0.1, 0],
            shouldBounce: "if_no_damage_dealt",
            uncertaintyBase: 16,
            uncertaintyMultiplier: 4,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {
        "minecraft:entity_spawned": {
            firstValid: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("player", "other"),
                        EntityFilters.hasEquipment("minecraft:crossbow", "hand", "other")
                    ),
                    add: {
                        componentGroups: ["minecraft:player_crossbow_arrow"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("player", "other"),
                    add: {
                        componentGroups: ["minecraft:player_arrow"]
                    }
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("mob", "other"),
                        EntityFilters.hasEquipment("minecraft:crossbow", "hand", "other")
                    ),
                    add: {
                        componentGroups: ["minecraft:mob_crossbow_arrow"]
                    }
                },
                {
                    filters: EntityFilters.isFamily("mob", "other"),
                    add: {
                        componentGroups: ["minecraft:mob_arrow"]
                    }
                }
            ]
        }
    }
});
