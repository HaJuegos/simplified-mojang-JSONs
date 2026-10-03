import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const FrogTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Frog,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Creature
    },
    componentsGroups: {
        "cold_frog": [
            new BPEntityComponents.SetVariant({
                value: 1
            })
        ],
        "pregnant": [
            new BPEntityComponents.SetBehaviorLayEgg({
                allowLayingFromBelow: true,
                laySeconds: 2,
                eggType: "minecraft:frog_spawn",
                searchHeight: 3,
                priority: 2,
                goalRadius: 1.7,
                layEggSound: "lay_spawn",
                onLay: {
                    event: "laid_egg",
                    target: "self"
                },
                searchRange: 10,
                useDefaultAnimation: false,
                speedMultiplier: 1,
                targetBlocks: ["minecraft:sand", "minecraft:water"],
                targetMaterialsAboveBlock: ["air", "air"]
            }),
            new BPEntityComponents.SetBehaviorMoveToWater({
                goalRadius: 1.5,
                priority: 3,
                searchHeight: 5,
                searchRange: 20
            })
        ],
        "temperate_frog": [
            new BPEntityComponents.SetVariant({
                value: 0
            })
        ],
        "warm_frog": [
            new BPEntityComponents.SetVariant({
                value: 2
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAmbientSoundInterval({
            soundEvents: [
                {
                    soundID: "ambient.baby",
                    condition: "query.is_baby"
                }
            ],
            minRandomCooldownSound: 6,
            maxRandomCooldownSound: 16
        }),
        new BPEntityComponents.SetBehaviorBreed({
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorCroak({
            duration: {
                min: 4.5,
                max: 4.5
            },
            filters: EntityFilters.allOf(EntityFilters.inWater(false), EntityFilters.inLava(false)),
            interval: {
                min: 10,
                max: 20
            },
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorEatMob({
            runSpeed: 2,
            eatAnimationTime: 0.3,
            pullInForce: 0.75,
            reachMobDistance: 1.75,
            eatMobSound: "tongue",
            lootTable: "loot_tables/entities/frog.json",
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorJumpToBlock({
            cooldownRange: {
                min: 5,
                max: 7
            },
            priority: 10,
            maxVelocity: 1,
            forbiddenBlocks: [
                {
                    name: "minecraft:water"
                }
            ],
            minimumDistance: 1,
            minimumPathLength: 2,
            preferredBlocks: [
                {
                    name: "minecraft:waterlily"
                },
                {
                    name: "minecraft:big_dripleaf"
                }
            ],
            preferredBlocksChance: 0.5,
            scaleFactor: 0.6,
            searchHeight: 4,
            searchWidth: 8
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookDistance: 6,
            priority: 12
        }),
        new BPEntityComponents.SetBehaviorMoveToLand({
            goalRadius: 2,
            priority: 6,
            searchCount: 80,
            searchHeight: 8,
            searchRange: 30
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            withinRadius: 16,
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("slime", "other"),
                        EntityFilters.isVariant(1, "other", "==")
                    )
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("magmacube", "other"),
                        EntityFilters.isVariant(1, "other", "==")
                    )
                }
            ],
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 2
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 11
        }),
        new BPEntityComponents.SetBehaviorTempt({
            canTemptVertically: true,
            items: ["slime_ball"],
            priority: 5,
            speedMultiplier: 1.25
        }),
        new BPEntityComponents.SetBreathable({
            breathesAir: true,
            breathesWater: true,
            suffocateTime: 0,
            generatesBubbles: false,
            totalSupply: 15
        }),
        new BPEntityComponents.SetBreedable({
            breedItems: ["slime_ball"],
            breedsWith: {
                "minecraft:frog": {
                    event: "become_pregnant",
                    target: "self"
                }
            },
            causesPregnancy: true,
            requireTame: false
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.55,
            width: 0.5
        }),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    damageModifier: -5,
                    dealsDamage: "yes"
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onBred: "Math.Random(1,7)",
            onDeath: "query.last_hit_by_player ? Math.Random(1,3) : 0"
        }),
        new BPEntityComponents.SetHealth({
            value: 10
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
        new BPEntityComponents.SetLeashable({
            unleashOnRemoval: false
        }),
        new BPEntityComponents.SetLeashableTo({
            unleashOnRemoval: false
        }),
        new BPEntityComponents.SetMovement({
            value: 0.1
        }),
        new BPEntityComponents.SetMovementAmphibious({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationGeneric({
            avoidDamageBlocks: true,
            canPathOverWater: true,
            canSink: false,
            canSwim: true,
            canWalk: true,
            isAmphibious: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:frog": "minecraft:tadpole"
            }
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetTypeFamily({
            family: ["frog", "mob"]
        }),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.15
        }),
        new BPEntityComponents.SetUsesLegacyFriction()
    ],
    events: {
        "spawn_warm": {
            add: {
                componentGroups: ["warm_frog"]
            }
        },
        "become_pregnant": {
            add: {
                componentGroups: ["pregnant"]
            }
        },
        "laid_egg": {
            remove: {
                componentGroups: ["pregnant"]
            }
        },
        "spawn_temperate": {
            add: {
                componentGroups: ["temperate_frog"]
            }
        },
        "minecraft:entity_spawned": {
            sequence: [
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    add: {
                        componentGroups: ["temperate_frog"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("desert"),
                        EntityFilters.hasBiomeTag("jungle"),
                        EntityFilters.hasBiomeTag("savanna"),
                        EntityFilters.hasBiomeTag("mesa"),
                        EntityFilters.hasBiomeTag("nether"),
                        EntityFilters.allOf(EntityFilters.hasBiomeTag("warm"), EntityFilters.hasBiomeTag("ocean")),
                        EntityFilters.allOf(
                            EntityFilters.hasBiomeTag("lukewarm"),
                            EntityFilters.hasBiomeTag("ocean")
                        ),
                        EntityFilters.hasBiomeTag("mangrove_swamp")
                    ),
                    add: {
                        componentGroups: ["warm_frog"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("mountain"),
                        EntityFilters.allOf(
                            EntityFilters.hasBiomeTag("mountains"),
                            EntityFilters.hasBiomeTag("meadow", "self", "!="),
                            EntityFilters.hasBiomeTag("cherry_grove", "self", "!="),
                            EntityFilters.hasBiomeTag("stony_peaks", "self", "!=")
                        ),
                        EntityFilters.hasBiomeTag("ice"),
                        EntityFilters.hasBiomeTag("cold"),
                        EntityFilters.hasBiomeTag("frozen"),
                        EntityFilters.hasBiomeTag("the_end"),
                        EntityFilters.hasBiomeTag("deep_dark")
                    ),
                    add: {
                        componentGroups: ["cold_frog"]
                    }
                }
            ]
        },
        "spawn_cold": {
            add: {
                componentGroups: ["cold_frog"]
            }
        },
        "minecraft:entity_transformed": {
            sequence: [
                {
                    filters: EntityFilters.allOf(),
                    // TODO(migrate): este item no tenia filters en el JSON original
                    add: {
                        componentGroups: ["temperate_frog"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("desert"),
                        EntityFilters.hasBiomeTag("jungle"),
                        EntityFilters.hasBiomeTag("savanna"),
                        EntityFilters.hasBiomeTag("mesa"),
                        EntityFilters.hasBiomeTag("nether"),
                        EntityFilters.allOf(EntityFilters.hasBiomeTag("warm"), EntityFilters.hasBiomeTag("ocean")),
                        EntityFilters.allOf(
                            EntityFilters.hasBiomeTag("lukewarm"),
                            EntityFilters.hasBiomeTag("ocean")
                        ),
                        EntityFilters.hasBiomeTag("mangrove_swamp")
                    ),
                    add: {
                        componentGroups: ["warm_frog"]
                    }
                },
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("mountain"),
                        EntityFilters.allOf(
                            EntityFilters.hasBiomeTag("mountains"),
                            EntityFilters.hasBiomeTag("meadow", "self", "!="),
                            EntityFilters.hasBiomeTag("cherry_grove", "self", "!="),
                            EntityFilters.hasBiomeTag("stony_peaks", "self", "!=")
                        ),
                        EntityFilters.hasBiomeTag("ice"),
                        EntityFilters.hasBiomeTag("cold"),
                        EntityFilters.hasBiomeTag("frozen"),
                        EntityFilters.hasBiomeTag("the_end"),
                        EntityFilters.hasBiomeTag("deep_dark")
                    ),
                    add: {
                        componentGroups: ["cold_frog"]
                    }
                }
            ]
        }
    }
});
