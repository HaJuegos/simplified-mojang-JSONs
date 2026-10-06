import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Silverfish para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const SilverfishTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Silverfish,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
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
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.isFamily('snowgolem', 'other'),
                        EntityFilters.isFamily('irongolem', 'other')
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
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 : 0`
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
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetCanStandOnPowderSnow(),
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
                componentGroups: [
                    "minecraft:silverfish_calm"
                ]
            }
        },
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:silverfish_calm"]
            }
        },
        "minecraft:on_calm": {
            add: {
                componentGroups: ["minecraft:silverfish_calm"]
            },
            remove: {
                componentGroups: [
                    "minecraft:silverfish_angry"
                ]
            }
        }
    }
});
