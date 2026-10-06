import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Caballo esqueleto para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const SkeletonHorseTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.SkeletonHorse,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:skeleton_horse_r5_upgrade": [
            new BPEntityComponents.SetRideable()
        ],
        "minecraft:skeleton_horse_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetBehaviorFollowParent({
                priority: 4,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 1.96,
                height: 2.24
            })
        ],
        "minecraft:skeleton_horse_adult": [
            new BPEntityComponents.SetExperienceReward({
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/skeleton_horse.json"
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 1.4,
                height: 1.6
            }),
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetRideable({
                seatCount: 1,
                familyTypes: ["player", "skeleton", "zombie"],
                interactText: "action.interact.ride.horse",
                seats: [
                    {
                        position: [0, 1.1, -0.2]
                    }
                ]
            })
        ],
        "minecraft:skeleton_trap": [
            new BPEntityComponents.SetBehaviorSkeletonHorseTrap({
                withinRadius: 10,
                duration: 900,
                priority: 2
            })
        ],
        "minecraft:lightning_immune": [
            new BPEntityComponents.SetDamageSensor({
                triggers: [
                    {
                        onDamage: {
                            filters: EntityFilters.isFamily("lightning", "other")
                        },
                        dealsDamage: "no"
                    }
                ]
            })
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetAmbientSoundInterval(),
        new BPEntityComponents.SetTypeFamily({
            family: ["skeletonhorse", "undead", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0,
            breathesWater: true
        }),
        new BPEntityComponents.SetHealth({
            value: 15,
            max: 15
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    filters: EntityFilters.inLava(true, "self", "=="),
                    cause: "lava",
                    damagePerTick: 4
                }
            ]
        }),
        new BPEntityComponents.SetMovement({
            value: 0.2
        }),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.08
        }),
        new BPEntityComponents.SetNavigationWalk({
            isAmphibious: true,
            avoidWater: true,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:skeleton_horse": "minecraft:skeleton_horse"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetHorseJumpStrength({
            value: {
                rangeMin: 0.4,
                rangeMax: 1
            }
        }),
        new BPEntityComponents.SetLeashable({
            presets: [
                {
                    filter: EntityFilters.isFamily("happy_ghast", "other"),
                    springType: "quad_dampened"
                }
            ]
        }),
        new BPEntityComponents.SetRideable({
            seatCount: 1,
            familyTypes: ["player", "skeleton", "zombie"],
            interactText: "action.interact.ride.horse",
            seats: [
                {
                    position: [0, 1.2, -0.2]
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorMountPathing({
            priority: 2,
            speedMultiplier: 1.5,
            targetDist: 4,
            trackTarget: true
        }),
        new BPEntityComponents.SetBehaviorPlayerRideTamed(),
        new BPEntityComponents.SetInputGroundControlled(),
        new BPEntityComponents.SetCanPowerJump(),
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 0.7
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 7,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 8
        }),
        new BPEntityComponents.SetIsTamed(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity({
            presets: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("sulfur_cube", "other"),
                        EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "none", "other", "not"),
                        EntityFilters.isControllingPassengerFamily("player")
                    ),
                    pushMode: "none"
                }
            ]
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization()
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 36,
                    add: {
                        componentGroups: ["minecraft:skeleton_horse_adult"]
                    }
                },
                {
                    weight: 9,
                    remove: {
                        componentGroups: ["minecraft:skeleton_horse_r5_upgrade"]
                    },
                    add: {
                        componentGroups: ["minecraft:skeleton_horse_baby"]
                    }
                }
            ]
        },
        "minecraft:entity_born": {
            remove: {
                componentGroups: ["minecraft:skeleton_horse_r5_upgrade"]
            },
            add: {
                componentGroups: ["minecraft:skeleton_horse_baby"]
            }
        },
        "minecraft:set_trap": {
            add: {
                componentGroups: ["minecraft:skeleton_trap", "minecraft:lightning_immune"]
            }
        },
        "minecraft:spring_trap": {
            add: {
                componentGroups: ["minecraft:skeleton_horse_adult", "minecraft:lightning_immune"]
            }
        }
    }
});
