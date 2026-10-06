import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de la Araña de cueva para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const ZoglinTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Zoglin,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "angry_zoglin": [
            new BPEntityComponents.SetAngry({
                angrySoundId: "angry",
                calmEvent: {
                    event: "become_calm_event",
                    target: "self"
                },
                duration: 10,
                soundInterval: {
                    range_max: 5,
                    range_min: 2
                }
            })
        ],
        "zoglin_adult": [
            new BPEntityComponents.SetAttack({
                damage: [3, 8]
            }),
            new BPEntityComponents.SetBehaviorHurtByTarget({
                priority: 1
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.4,
                width: 1.4
            }),
            new BPEntityComponents.SetCustomHitTest({
                hitboxes: [
                    {
                        height: 1.75,
                        pivot: [0, 1, 0],
                        width: 2
                    }
                ]
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetTypeFamily({
                family: ["zoglin", "zoglin_adult", "undead", "monster", "mob"]
            })
        ],
        "zoglin_baby": [
            new BPEntityComponents.SetAttack({
                damage: 0.5
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1.7,
                width: 1.5
            }),
            new BPEntityComponents.SetCustomHitTest({
                hitboxes: [
                    {
                        height: 0.85,
                        pivot: [0, 0.5, 0],
                        width: 1
                    }
                ]
            }),
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["zoglin", "zoglin_baby", "undead", "monster", "mob"]
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookDistance: 6,
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            speedMultiplier: 1.15,
            trackTarget: true,
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            withinRadius: 16,
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("zoglin", "other", "!="),
                        EntityFilters.isFamily("creeper", "other", "!=")
                    )
                }
            ],
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 7,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBreathable({
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            filters: EntityFilters.anyOf(
                EntityFilters.allOf(
                    EntityFilters.isPersistent(false),
                    EntityFilters.distanceToNearestPlayer(54, "self", ">")
                ),
                EntityFilters.allOf(
                    EntityFilters.isPersistent(false),
                    EntityFilters.inactivityTimer(30),
                    EntityFilters.randomChance(800),
                    EntityFilters.distanceToNearestPlayer(32, "self", ">")
                )
            )
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 : 0`
        }),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetHealth({
            max: 40,
            value: 40
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetKnockbackResistance({
            value: 0.6
        }),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/zoglin.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.25
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidDamageBlocks: true,
            avoidWater: true,
            canPathOverWater: false,
            isAmphibious: true
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:zoglin": "minecraft:zoglin"
            }
        }),
        new BPEntityComponents.SetOnTargetAcquired({
            event: "become_angry_event",
            target: "self"
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetSpawnEggInteraction()
    ],
    events: {
        "become_calm_event": {
            remove: {
                componentGroups: ["angry_zoglin"]
            }
        },
        "become_angry_event": {
            add: {
                componentGroups: ["angry_zoglin"]
            }
        },
        "minecraft:entity_born": {
            trigger: "minecraft:as_baby"
        },
        "minecraft:as_adult": {
            add: {
                componentGroups: ["zoglin_adult"]
            }
        },
        "minecraft:as_baby": {
            add: {
                componentGroups: ["zoglin_baby"]
            }
        },
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 95,
                    add: {
                        componentGroups: ["zoglin_adult"]
                    }
                },
                {
                    weight: 5,
                    add: {
                        componentGroups: ["zoglin_baby"]
                    }
                }
            ]
        },
        "minecraft:entity_transformed": {
            sequence: [
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "other"),
                    add: {
                        componentGroups: ["zoglin_baby"]
                    }
                },
                {
                    filters: EntityFilters.hasComponent("minecraft:is_baby", "other", "!="),
                    add: {
                        componentGroups: ["zoglin_adult"]
                    }
                }
            ]
        }
    }
});
