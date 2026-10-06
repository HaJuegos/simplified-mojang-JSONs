import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Wandering Trader para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const WanderingTraderTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.WanderingTrader,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "despawning": [
            new BPEntityComponents.SetTypeFamily({
                family: ["wandering_trader", "wandering_trader_despawning", "mob"]
            })
        ],
        "managed": [
            new BPEntityComponents.SetManagedWanderingTrader()
        ],
        "minecraft:scared": [
            new BPEntityComponents.SetAngry({
                broadcastAnger: true,
                broadcastRange: 10,
                calmEvent: {
                    event: "minecraft:become_calm",
                    target: "self"
                },
                broadcastFilters: EntityFilters.isLeashedTo(true, "other"),
                broadcastTargets: ["llama", "trader_llama"],
                duration: 5
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorAvoidMobType({
            maxDist: 6,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('zombie', 'other'),
                        EntityFilters.isFamily('zombie_villager', 'other'),
                        EntityFilters.isFamily('zombie_pigman', 'other'),
                        EntityFilters.isFamily('illager', 'other'),
                        EntityFilters.isFamily('vex', 'other'),
                        EntityFilters.isFamily('zoglin', 'other'),
                    ),
                    walkSpeedMultiplier: 0.6,
                    sprintSpeedMultiplier: 0.6
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorDrinkMilk({
            filters: EntityFilters.allOf(
                EntityFilters.isDaytime(),
                EntityFilters.isVisible(),
                EntityFilters.isAvoidingMobs()
            ),
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorDrinkPotion({
            potions: [
                {
                    chance: 1,
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            EntityFilters.hourlyClockTime(18000, "self", ">="),
                            EntityFilters.hourlyClockTime(12000, "self", "<")
                        ),
                        EntityFilters.isVisible(),
                        EntityFilters.anyOf(
                            EntityFilters.isAvoidingMobs(),
                            EntityFilters.allOf(
                                EntityFilters.hasComponent("minecraft:angry"),
                                EntityFilters.isFamily("player", "target", "!=")
                            )
                        )
                    ),
                    id: 7
                },
                {
                    chance: 1,
                    filters: EntityFilters.allOf(
                        EntityFilters.hourlyClockTime(12000, "self", ">="),
                        EntityFilters.hourlyClockTime(18000, "self", "<"),
                        EntityFilters.isVisible(),
                        EntityFilters.anyOf(
                            EntityFilters.isAvoidingMobs(),
                            EntityFilters.hasComponent("minecraft:angry")
                        )
                    ),
                    id: 8
                }
            ],
            priority: 1,
            speedModifier: -0.2
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorLookAtTradingPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorMoveTowardsHomeRestriction({
            speedMultiplier: 0.6,
            priority: 6
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 7,
            speedMultiplier: 0.6
        }),
        new BPEntityComponents.SetBehaviorTradeInterest({
            carriedItemSwitchTime: 2,
            cooldown: 2,
            interestTime: 45,
            withinRadius: 6,
            priority: 3,
            removeItemTime: 1
        }),
        new BPEntityComponents.SetBehaviorTradeWithPlayer({
            filters: EntityFilters.allOf(
                EntityFilters.allOf(EntityFilters.inWater(false)),
                EntityFilters.anyOf(EntityFilters.onGround(), EntityFilters.isSleeping())
            ),
            priority: 1
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "entity_attack",
                    onDamage: {
                        event: "minecraft:become_scared"
                    },
                    dealsDamage: "yes"
                },
                {
                    cause: "projectile",
                    onDamage: {
                        event: "minecraft:become_scared"
                    },
                    dealsDamage: "yes"
                },
                {
                    cause: "magic",
                    onDamage: {
                        event: "minecraft:become_scared"
                    },
                    dealsDamage: "yes"
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            filters: EntityFilters.allOf(
                EntityFilters.anyOf(
                    EntityFilters.isFamily("wandering_trader_despawning"),
                    EntityFilters.hasTradeSupply(false)
                ),
                EntityFilters.distanceToNearestPlayer(24, "self", ">")
            ),
            removeChildEntities: true
        }),
        new BPEntityComponents.SetEconomyTradeTable({
            displayName: "entity.wandering_trader.name",
            newScreen: true,
            table: "trading/economy_trades/wandering_trader_trades.json"
        }),
        new BPEntityComponents.SetHealth({
            max: 20,
            value: 20
        }),
        new BPEntityComponents.SetHome({
            restrictionRadius: 16,
            restrictionType: 'random_movement'
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
        new BPEntityComponents.SetMovement({
            value: 0.5
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidWater: true,
            canOpenDoors: false,
            usingDoorAnnotation: true,
            canPassDoors: true,
            canPathOverWater: true
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetSpawnEntity({
            entities: [
                {
                    maxWaitTime: 0,
                    minWaitTime: 0,
                    numToSpawn: 2,
                    singleUse: true,
                    shouldLeash: true,
                    spawnEntity: "trader_llama",
                    spawnEvent: "minecraft:from_wandering_trader"
                }
            ]
        }),
        new BPEntityComponents.SetTimer({
            looping: false,
            randomTimeChoices: [
                {
                    value: 2400,
                    weight: 50
                },
                {
                    value: 3600,
                    weight: 50
                }
            ],
            timeDownEvent: {
                event: "minecraft:start_despawn",
                target: "self"
            }
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["wandering_trader", "mob"]
        })
    ],
    events: {
        "minecraft:become_calm": {
            remove: {
                componentGroups: ["minecraft:scared"]
            }
        },
        "minecraft:become_scared": {
            add: {
                componentGroups: ["minecraft:scared"]
            }
        },
        "minecraft:scheduled": {
            add: {
                componentGroups: ["managed"]
            }
        },
        "minecraft:start_despawn": {
            add: {
                componentGroups: ["despawning"]
            }
        }
    }
});
