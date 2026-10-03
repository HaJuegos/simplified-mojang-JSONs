import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const WitchTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Witch,
    formatVersion: FormatVersionEntities.V1_26_0,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    componentsGroups: {
        "minecraft:celebrate": [
            new BPEntityComponents.SetBehaviorCelebrate({
                celebrationSound: "celebrate",
                duration: 30,
                jumpInterval: {
                    rangeMax: 3.5,
                    rangeMin: 1
                },
                onCelebrationEndEvent: {
                    event: "minecraft:stop_celebrating",
                    target: "self"
                },
                priority: 5,
                soundInterval: {
                    rangeMax: 7,
                    rangeMin: 2
                }
            })
        ],
        "minecraft:raid_configuration": [
            new BPEntityComponents.SetAmbientSoundInterval({
                soundEvents: "ambient.in.raid",
                minRandomCooldownSound: 2,
                maxRandomCooldownSound: 4
            }),
            new BPEntityComponents.SetBehaviorMoveToVillage({
                goalRadius: 2,
                priority: 3,
                speedMultiplier: 1.2
            }),
            new BPEntityComponents.SetDweller({
                canFindPoi: false,
                dwellingType: "village",
                canMigrate: true,
                dwellerRole: "hostile",
                firstFoundingReward: 0,
                updateIntervalBase: 60,
                updateIntervalVariant: 40
            })
        ],
        "minecraft:raid_persistence": [
            new BPEntityComponents.SetPersistent()
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorDrinkPotion({
            potions: [
                {
                    chance: 0.15,
                    filters: EntityFilters.allOf(
                        EntityFilters.isUnderwater(),
                        EntityFilters.noneOf(EntityFilters.hasMobEffect("water_breathing"))
                    ),
                    id: 19
                },
                {
                    chance: 0.15,
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            EntityFilters.onFire(),
                            EntityFilters.onHotBlock(),
                            EntityFilters.takingFireDamage()
                        ),
                        EntityFilters.noneOf(EntityFilters.hasMobEffect("fire_resistance"))
                    ),
                    id: 12
                },
                {
                    chance: 0.05,
                    filters: EntityFilters.allOf(EntityFilters.isMissingHealth()),
                    id: 21
                },
                {
                    chance: 0.25,
                    filters: EntityFilters.allOf(
                        EntityFilters.hasTarget(),
                        EntityFilters.noneOf(EntityFilters.hasMobEffect("speed")),
                        EntityFilters.targetDistance(11, "self", ">=")
                    ),
                    id: 14
                }
            ],
            priority: 1,
            speedModifier: -0.25
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 16,
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorNearestPrioritizedAttackableTarget({
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily("player", "other"),
                        EntityFilters.isFamily("snowgolem", "other"),
                        EntityFilters.isFamily("irongolem", "other")
                    ),
                    maxDist: 10,
                    priority: 1
                },
                {
                    cooldown: 10,
                    filters: EntityFilters.allOf(
                        EntityFilters.isRaider(true, "other"),
                        EntityFilters.isRaider(),
                        EntityFilters.noneOf(EntityFilters.isFamily("witch", "other"))
                    ),
                    maxDist: 10,
                    priority: 2
                }
            ],
            mustReach: true,
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            // TODO(migrate): clave no soportada "look_distance": 8
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 4,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorRangedAttack({
            // TODO(migrate): clave no soportada "attack_interval_max": 3
            // TODO(migrate): clave no soportada "attack_interval_min": 3
            attackRadius: 10,
            priority: 2,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCanJoinRaid(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.9,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({}),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: "query.last_hit_by_player ? (query.is_baby ? 12 : 5) + (Math.die_roll(query.equipment_count,1,3)) : 0"
        }),
        new BPEntityComponents.SetFollowRange({
            value: 64
        }),
        new BPEntityComponents.SetHealth({
            max: 26,
            value: 26
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
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/witch.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.25
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidWater: false,
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({}),
        // TODO(migrate): componente sin clase "minecraft:pushable": {"is_pushable": true, "is_pushable_by_piston": true}
        new BPEntityComponents.SetShooter({
            // TODO(migrate): clave no soportada "aux_val": 23
            // TODO(migrate): clave no soportada "def": "minecraft:splash_potion"
            magic: true,
            sound: "throw",
            power: 0.75,
            projectiles: [
                {
                    auxVal: 21,
                    def: "minecraft:splash_potion",
                    filters: EntityFilters.allOf(
                        EntityFilters.isRaider(true, "other"),
                        EntityFilters.actorHealth(4, "other", "<=")
                    ),
                    loseTarget: true
                },
                {
                    auxVal: 28,
                    def: "minecraft:splash_potion",
                    filters: EntityFilters.allOf(EntityFilters.isRaider(true, "other")),
                    loseTarget: true
                },
                {
                    auxVal: 17,
                    def: "minecraft:splash_potion",
                    filters: EntityFilters.allOf(
                        EntityFilters.targetDistance(8, "self", ">="),
                        EntityFilters.noneOf(EntityFilters.hasMobEffect("slowness", "other"))
                    )
                },
                {
                    auxVal: 25,
                    def: "minecraft:splash_potion",
                    filters: EntityFilters.allOf(
                        EntityFilters.actorHealth(8, "other", ">="),
                        EntityFilters.noneOf(EntityFilters.hasMobEffect("poison", "other"))
                    )
                },
                {
                    auxVal: 34,
                    chance: 0.25,
                    def: "minecraft:splash_potion",
                    filters: EntityFilters.allOf(
                        EntityFilters.targetDistance(3, "self", "<="),
                        EntityFilters.noneOf(EntityFilters.hasMobEffect("weakness", "other"))
                    )
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["witch", "monster", "mob"]
        })
    ],
    events: {
        "minecraft:raid_expired": {
            sequence: [
                {
                    filters: EntityFilters.hasNametag(false),
                    remove: {
                        componentGroups: ["minecraft:raid_persistence"]
                    }
                }
            ]
        },
        "minecraft:spawn_for_raid": {
            add: {
                componentGroups: ["minecraft:raid_configuration", "minecraft:raid_persistence"]
            }
        },
        "minecraft:stop_celebrating": {
            remove: {
                componentGroups: ["minecraft:celebrate"]
            }
        },
        "minecraft:start_celebrating": {
            sequence: [
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    add: {
                        componentGroups: ["minecraft:celebrate"]
                    }
                },
                {
                    filters: EntityFilters.hasNametag(false),
                    remove: {
                        componentGroups: ["minecraft:raid_persistence"]
                    }
                }
            ]
        }
    }
});
