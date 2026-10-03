import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const SilverfishTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Silverfish,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    componentsGroups: {
        "minecraft:silverfish_angry": [
            new BPEntityComponents.SetAngry({
                broadcastAnger: true,
                broadcastAngerWhenDying: false,
                broadcastRange: 20,
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                },
                duration: -1
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                trackTarget: true,
                priority: 4
            }),
            new BPEntityComponents.SetBehaviorSilverfishWakeUpFriends({
                priority: 1
            })
        ],
        "minecraft:silverfish_calm": [
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:become_angry",
                target: "self"
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 1
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            attackInterval: {
                max: 10
            },
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
                                value: "snowgolem"
                            },
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "irongolem"
                            }
                        )
                    ),
                    maxDist: 8
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorSilverfishMergeWithStone({
            priority: 5
        }),
        new BPEntityComponents.SetBlockClimber(),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 0.3,
            width: 0.4
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: "query.last_hit_by_player ? 5 : 0"
        }),
        new BPEntityComponents.SetHealth({
            max: 8,
            value: 8
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
            table: "loot_tables/entities/silverfish.json"
        }),
        new BPEntityComponents.SetMobEffectImmunity({
            mobEffects: ["infested"]
        }),
        new BPEntityComponents.SetMovement({
            value: 0.25
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        // TODO(migrate): componente sin clase "minecraft:can_stand_on_powder_snow": {}
        new BPEntityComponents.SetTypeFamily({
            family: ["silverfish", "monster", "mob", "arthropod"]
        })
    ],
    events: {
        "minecraft:become_angry": {
            add: {
                componentGroups: ["minecraft:silverfish_angry"]
            },
            remove: {
                "minecraft:silverfish_calm": {}
            }
        },
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:silverfish_calm"]
            },
            remove: {}
        },
        "minecraft:on_calm": {
            add: {
                componentGroups: ["minecraft:silverfish_calm"]
            },
            remove: {
                "minecraft:silverfish_angry": {}
            }
        }
    }
});
