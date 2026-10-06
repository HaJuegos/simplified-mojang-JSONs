import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Pez Tropical para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const TropicalfishTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Tropicalfish,
    description: {
        spawnCategory: SpawnCategoryEntities.WaterAmbient,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:tropicalfish_base_pink": [
            new BPEntityComponents.SetColor({
                value: 6
            })
        ],
        "minecraft:anenonme": [
            new BPEntityComponents.SetColor({
                value: 1
            }),
            new BPEntityComponents.SetColorTwo({
                value: 7
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 1
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:clownfish": [
            new BPEntityComponents.SetColor({
                value: 1
            }),
            new BPEntityComponents.SetColorTwo({
                value: 0
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 0
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:tropicalfish_variant_pattern_2": [
            new BPEntityComponents.SetMarkVariant({
                value: 1
            })
        ],
        "minecraft:black_tang": [
            new BPEntityComponents.SetColor({
                value: 7
            }),
            new BPEntityComponents.SetColorTwo({
                value: 7
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 0
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:tropicalfish_variant_pattern_5": [
            new BPEntityComponents.SetMarkVariant({
                value: 4
            })
        ],
        "minecraft:cc_betta": [
            new BPEntityComponents.SetColor({
                value: 6
            }),
            new BPEntityComponents.SetColorTwo({
                value: 3
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 5
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:dog_fish": [
            new BPEntityComponents.SetColor({
                value: 10
            }),
            new BPEntityComponents.SetColorTwo({
                value: 4
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 3
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:tropicalfish_base_lightblue": [
            new BPEntityComponents.SetColor({
                value: 3
            })
        ],
        "minecraft:blue_dory": [
            new BPEntityComponents.SetColor({
                value: 7
            }),
            new BPEntityComponents.SetColorTwo({
                value: 3
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 1
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:butterfly_fish": [
            new BPEntityComponents.SetColor({
                value: 0
            }),
            new BPEntityComponents.SetColorTwo({
                value: 7
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 4
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:tropicalfish_base_magenta": [
            new BPEntityComponents.SetColor({
                value: 2
            })
        ],
        "minecraft:cichlid": [
            new BPEntityComponents.SetColor({
                value: 11
            }),
            new BPEntityComponents.SetColorTwo({
                value: 7
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 1
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:tropicalfish_pattern_lightblue": [
            new BPEntityComponents.SetColorTwo({
                value: 3
            })
        ],
        "minecraft:e_red_snapper": [
            new BPEntityComponents.SetColor({
                value: 0
            }),
            new BPEntityComponents.SetColorTwo({
                value: 14
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 5
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:tropicalfish_pattern_lightgreen": [
            new BPEntityComponents.SetColorTwo({
                value: 5
            })
        ],
        "minecraft:tropicalfish_pattern_red": [
            new BPEntityComponents.SetColorTwo({
                value: 14
            })
        ],
        "minecraft:goat_fish": [
            new BPEntityComponents.SetColor({
                value: 0
            }),
            new BPEntityComponents.SetColorTwo({
                value: 4
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 5
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:moorish_idol": [
            new BPEntityComponents.SetColor({
                value: 0
            }),
            new BPEntityComponents.SetColorTwo({
                value: 7
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 2
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:ornate_butterfly": [
            new BPEntityComponents.SetColor({
                value: 0
            }),
            new BPEntityComponents.SetColorTwo({
                value: 1
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 5
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:red_snapper": [
            new BPEntityComponents.SetColor({
                value: 14
            }),
            new BPEntityComponents.SetColorTwo({
                value: 0
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 3
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:parrot_fish": [
            new BPEntityComponents.SetColor({
                value: 9
            }),
            new BPEntityComponents.SetColorTwo({
                value: 6
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 3
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:queen_angel_fish": [
            new BPEntityComponents.SetColor({
                value: 5
            }),
            new BPEntityComponents.SetColorTwo({
                value: 3
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 4
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:red_cichlid": [
            new BPEntityComponents.SetColor({
                value: 14
            }),
            new BPEntityComponents.SetColorTwo({
                value: 0
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 4
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:tropicalfish_variant_pattern_6": [
            new BPEntityComponents.SetMarkVariant({
                value: 5
            })
        ],
        "minecraft:red_lipped_benny": [
            new BPEntityComponents.SetColor({
                value: 7
            }),
            new BPEntityComponents.SetColorTwo({
                value: 14
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 2
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:tropicalfish_variant_pattern_1": [
            new BPEntityComponents.SetMarkVariant({
                value: 0
            })
        ],
        "minecraft:threadfin": [
            new BPEntityComponents.SetColor({
                value: 0
            }),
            new BPEntityComponents.SetColorTwo({
                value: 4
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 0
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:tropicalfish_pattern_silver": [
            new BPEntityComponents.SetColorTwo({
                value: 8
            })
        ],
        "minecraft:yellow_tang": [
            new BPEntityComponents.SetColor({
                value: 4
            }),
            new BPEntityComponents.SetColorTwo({
                value: 4
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 1
            }),
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:tomato_clown": [
            new BPEntityComponents.SetColor({
                value: 14
            }),
            new BPEntityComponents.SetColorTwo({
                value: 0
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 1
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:tropicalfish_pattern_brown": [
            new BPEntityComponents.SetColorTwo({
                value: 12
            })
        ],
        "minecraft:tropicalfish_pattern_pink": [
            new BPEntityComponents.SetColorTwo({
                value: 6
            })
        ],
        "minecraft:tropicalfish_variant_a": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:triggerfish": [
            new BPEntityComponents.SetColor({
                value: 7
            }),
            new BPEntityComponents.SetColorTwo({
                value: 0
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 1
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:tropicalfish_base_green": [
            new BPEntityComponents.SetColor({
                value: 13
            })
        ],
        "minecraft:tropicalfish_base_blue": [
            new BPEntityComponents.SetColor({
                value: 11
            })
        ],
        "minecraft:tropicalfish_base_brown": [
            new BPEntityComponents.SetColor({
                value: 12
            })
        ],
        "minecraft:tropicalfish_base_cyan": [
            new BPEntityComponents.SetColor({
                value: 9
            })
        ],
        "minecraft:tropicalfish_base_gray": [
            new BPEntityComponents.SetColor({
                value: 7
            })
        ],
        "minecraft:tropicalfish_base_lightgreen": [
            new BPEntityComponents.SetColor({
                value: 5
            })
        ],
        "minecraft:tropicalfish_base_orange": [
            new BPEntityComponents.SetColor({
                value: 1
            })
        ],
        "minecraft:tropicalfish_base_purple": [
            new BPEntityComponents.SetColor({
                value: 10
            })
        ],
        "minecraft:tropicalfish_base_red": [
            new BPEntityComponents.SetColor({
                value: 14
            })
        ],
        "minecraft:tropicalfish_base_silver": [
            new BPEntityComponents.SetColor({
                value: 8
            })
        ],
        "minecraft:tropicalfish_base_white": [
            new BPEntityComponents.SetColor({
                value: 0
            })
        ],
        "minecraft:tropicalfish_base_yellow": [
            new BPEntityComponents.SetColor({
                value: 4
            })
        ],
        "minecraft:tropicalfish_pattern_cyan": [
            new BPEntityComponents.SetColorTwo({
                value: 9
            })
        ],
        "minecraft:tropicalfish_pattern_blue": [
            new BPEntityComponents.SetColorTwo({
                value: 11
            })
        ],
        "minecraft:tropicalfish_pattern_gray": [
            new BPEntityComponents.SetColorTwo({
                value: 7
            })
        ],
        "minecraft:yellow_tail_parrot": [
            new BPEntityComponents.SetColor({
                value: 9
            }),
            new BPEntityComponents.SetColorTwo({
                value: 4
            }),
            new BPEntityComponents.SetMarkVariant({
                value: 3
            }),
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "minecraft:tropicalfish_pattern_green": [
            new BPEntityComponents.SetColorTwo({
                value: 13
            })
        ],
        "minecraft:tropicalfish_pattern_magenta": [
            new BPEntityComponents.SetColorTwo({
                value: 2
            })
        ],
        "minecraft:tropicalfish_pattern_orange": [
            new BPEntityComponents.SetColorTwo({
                value: 1
            })
        ],
        "minecraft:tropicalfish_pattern_purple": [
            new BPEntityComponents.SetColorTwo({
                value: 10
            })
        ],
        "minecraft:tropicalfish_variant_pattern_4": [
            new BPEntityComponents.SetMarkVariant({
                value: 3
            })
        ],
        "minecraft:tropicalfish_pattern_white": [
            new BPEntityComponents.SetColorTwo({
                value: 0
            })
        ],
        "minecraft:tropicalfish_pattern_yellow": [
            new BPEntityComponents.SetColorTwo({
                value: 4
            })
        ],
        "minecraft:tropicalfish_variant_b": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "minecraft:tropicalfish_variant_pattern_3": [
            new BPEntityComponents.SetMarkVariant({
                value: 2
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.isFamily('axolotl', 'other')
                    ),
                    maxDist: 6,
                    walkSpeedMultiplier: 1.5,
                    sprintSpeedMultiplier: 2
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorRandomSwim({
            interval: 0,
            xzDist: 16,
            priority: 3,
            speedMultiplier: 1,
            yDist: 4
        }),
        new BPEntityComponents.SetBehaviorSwimIdle({
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorSwimWander({
            interval: 0.1,
            lookAhead: 2,
            priority: 4
        }),
        new BPEntityComponents.SetBreathable({
            breathesAir: false,
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.4,
            width: 0.4
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {
                maxDistance: 40,
                minDistance: 32
            }
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
        }),
        new BPEntityComponents.SetFlocking({
            breachInfluence: 7,
            blockDistance: 2,
            highFlockLimit: 8,
            blockWeight: 0.85,
            minHeight: 1.5,
            cohesionThreshold: 1.5,
            inWater: true,
            cohesionWeight: 2.75,
            goalWeight: 2,
            influenceRadius: 3,
            innnerCohesionThreshold: 1.5,
            lonerChance: 0.1,
            lowFlockLimit: 4,
            matchVariants: true,
            maxHeight: 6,
            separationThreshold: 0.15,
            separationWeight: 0.65,
            useCenterOfMass: false
        }),
        new BPEntityComponents.SetHealth({
            max: 3,
            value: 3
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
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/tropicalfish.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.12
        }),
        new BPEntityComponents.SetMovementSway({
            swayAmplitude: 0
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationGeneric({
            canBreach: false,
            canWalk: false,
            canPathOverWater: false,
            canSink: false,
            canSwim: true,
            isAmphibious: false,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({
            hasGravity: false
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetScale({
            value: 1.3
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "tropicalfish", "fish"]
        }),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.12
        })
    ],
    events: {
        "minecraft:become_red_snapper": {
            add: {
                componentGroups: ["minecraft:red_snapper"]
            }
        },
        "minecraft:become_anenonme": {
            add: {
                componentGroups: ["minecraft:anenonme"]
            }
        },
        "minecraft:become_cichlid": {
            add: {
                componentGroups: ["minecraft:cichlid"]
            }
        },
        "minecraft:become_black_tang": {
            add: {
                componentGroups: ["minecraft:black_tang"]
            }
        },
        "minecraft:become_blue_dory": {
            add: {
                componentGroups: ["minecraft:blue_dory"]
            }
        },
        "minecraft:become_dog_fish": {
            add: {
                componentGroups: ["minecraft:dog_fish"]
            }
        },
        "minecraft:become_triggerfish": {
            add: {
                componentGroups: ["minecraft:triggerfish"]
            }
        },
        "minecraft:become_butterfly_fish": {
            add: {
                componentGroups: ["minecraft:butterfly_fish"]
            }
        },
        "minecraft:become_cc_betta": {
            add: {
                componentGroups: ["minecraft:cc_betta"]
            }
        },
        "minecraft:become_clownfish": {
            add: {
                componentGroups: ["minecraft:clownfish"]
            }
        },
        "minecraft:become_e_red_snapper": {
            add: {
                componentGroups: ["minecraft:e_red_snapper"]
            }
        },
        "minecraft:become_goat_fish": {
            add: {
                componentGroups: ["minecraft:goat_fish"]
            }
        },
        "minecraft:become_moorish_idol": {
            add: {
                componentGroups: ["minecraft:moorish_idol"]
            }
        },
        "minecraft:become_ornate_butterfly": {
            add: {
                componentGroups: ["minecraft:ornate_butterfly"]
            }
        },
        "minecraft:become_queen_angel_fish": {
            add: {
                componentGroups: ["minecraft:queen_angel_fish"]
            }
        },
        "minecraft:become_parrot_fish": {
            add: {
                componentGroups: ["minecraft:parrot_fish"]
            }
        },
        "minecraft:become_tomato_clown": {
            add: {
                componentGroups: ["minecraft:tomato_clown"]
            }
        },
        "minecraft:become_red_cichlid": {
            add: {
                componentGroups: ["minecraft:red_cichlid"]
            }
        },
        "minecraft:become_red_lipped_benny": {
            add: {
                componentGroups: ["minecraft:red_lipped_benny"]
            }
        },
        "minecraft:become_threadfin": {
            add: {
                componentGroups: ["minecraft:threadfin"]
            }
        },
        "minecraft:become_yellow_tail_parrot": {
            add: {
                componentGroups: ["minecraft:yellow_tail_parrot"]
            }
        },
        "minecraft:become_yellow_tang": {
            add: {
                componentGroups: ["minecraft:yellow_tang"]
            }
        },
        "minecraft:entity_spawned": {
            sequence: [
                {
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_variant_a"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_variant_b"]
                            }
                        }
                    ]
                },
                {
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_variant_pattern_1"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_variant_pattern_2"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_variant_pattern_3"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_variant_pattern_4"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_variant_pattern_5"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_variant_pattern_6"]
                            }
                        }
                    ]
                },
                {
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_white"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_orange"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_magenta"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_lightblue"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_yellow"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_lightgreen"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_pink"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_gray"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_silver"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_cyan"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_purple"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_blue"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_brown"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_green"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_base_red"]
                            }
                        }
                    ]
                },
                {
                    randomize: [
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_white"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_orange"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_magenta"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_lightblue"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_yellow"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_lightgreen"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_pink"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_gray"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_silver"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_cyan"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_purple"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_blue"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_brown"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_green"]
                            }
                        },
                        {
                            weight: 1,
                            add: {
                                componentGroups: ["minecraft:tropicalfish_pattern_red"]
                            }
                        }
                    ]
                }
            ]
        }
    }
});
