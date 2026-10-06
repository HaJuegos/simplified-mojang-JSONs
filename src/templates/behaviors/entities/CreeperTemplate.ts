import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Creeper para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 03-10-2026
 */
export const CreeperTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Creeper,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:charged_creeper": [
            new BPEntityComponents.SetIsCharged()
        ],
        "minecraft:charged_exploding": [
            new BPEntityComponents.SetExplode({
                causesFire: false,
                fuseLit: true,
                power: 6,
                destroyAffectedByGriefing: true,
                fuseLength: 1.5
            })
        ],
        "minecraft:exploding": [
            new BPEntityComponents.SetExplode({
                causesFire: false,
                fuseLit: true,
                power: 3,
                destroyAffectedByGriefing: true,
                fuseLength: 1.5
            })
        ],
        "minecraft:forced_charged_exploding": [
            new BPEntityComponents.SetExplode({
                causesFire: false,
                fuseLit: true,
                power: 6,
                destroyAffectedByGriefing: true,
                fuseLength: 1.5
            }),
            new BPEntityComponents.SetOnTargetEscape(),
            new BPEntityComponents.SetTargetNearbySensor()
        ],
        "minecraft:forced_exploding": [
            new BPEntityComponents.SetExplode({
                causesFire: false,
                fuseLit: true,
                power: 3,
                destroyAffectedByGriefing: true,
                fuseLength: 1.5
            }),
            new BPEntityComponents.SetOnTargetEscape(),
            new BPEntityComponents.SetTargetNearbySensor()
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 3
        }),
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('ocelot', 'other'),
                        EntityFilters.isFamily('cat', 'other')
                    ),
                    maxDist: 6,
                    sprintSpeedMultiplier: 1.2
                }
            ],
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            priority: 6
        }),
        new BPEntityComponents.SetBehaviorMeleeAttack({
            reachMultiplier: 0,
            speedMultiplier: 1.25,
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.isFamily('player', 'other')
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 6
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 5,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorSwell({
            priority: 2,
            startDistance: 2.5,
            stopDistance: 6
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.8,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    dealsDamage: "no",
                    onDamage: {
                        event: "minecraft:become_charged",
                        filters: EntityFilters.isFamily("lightning", "other")
                    }
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 : 0`
        }),
        new BPEntityComponents.SetHealth({
            max: 20,
            value: 20
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
                    hurtItem: 1,
                    interactText: "action.interact.creeper",
                    onInteract: {
                        event: "minecraft:start_exploding_forced",
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasEquipment("flint_and_steel", "hand", "other"),
                            EntityFilters.hasComponent("minecraft:explode", "self", "!=")
                        ),
                        target: "self"
                    },
                    playSounds: ["ignite"],
                    swing: true
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/creeper.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.2
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetOnTargetEscape({
            event: "minecraft:stop_exploding",
            target: "self"
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetTargetNearbySensor({
            insideRange: 2.5,
            onInsideRange: {
                event: "minecraft:start_exploding",
                target: "self"
            },
            onVisionLostInsideRange: {
                event: "minecraft:stop_exploding",
                target: "self"
            },
            mustSee: true,
            onOutsideRange: {
                event: "minecraft:stop_exploding",
                target: "self"
            },
            outsideRange: 6
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["creeper", "monster", "mob"]
        })
    ],
    events: {
        "minecraft:become_charged": {
            add: {
                componentGroups: ["minecraft:charged_creeper"]
            },
            remove: {
                componentGroups: ["minecraft:exploding"]
            }
        },
        "minecraft:stop_exploding": {
            remove: {
                componentGroups: ["minecraft:exploding"]
            }
        },
        "minecraft:start_exploding": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:is_charged", "self", "!="),
                    add: {
                        componentGroups: ["minecraft:exploding"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_charged"),
                    add: {
                        componentGroups: ["minecraft:charged_exploding"]
                    }
                }
            ]
        },
        "minecraft:start_exploding_forced": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:is_charged", "self", "!="),
                    add: {
                        componentGroups: ["minecraft:forced_exploding"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_charged"),
                    add: {
                        componentGroups: ["minecraft:forced_charged_exploding"]
                    }
                }
            ]
        }
    }
});
