import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de la Tortuga para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const TurtleTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Turtle,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:baby": [
            new BPEntityComponents.SetTypeFamily({
                family: ["aquatic", "turtle", "baby_turtle", "mob"]
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 4,
                height: 1.333333
            }),
            new BPEntityComponents.SetUnderwaterMovement({
                value: 0.06
            }),
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetScale({
                value: 0.16
            }),
            new BPEntityComponents.SetBehaviorMoveToWater({
                priority: 1,
                searchRange: 15,
                searchHeight: 5,
                goalRadius: 0.1
            }),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                feedItemsToGrow: ["seagrass"],
                dropItemsOnGrow: ["turtle_shell_piece"],
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            })
        ],
        "minecraft:adult": [
            new BPEntityComponents.SetExperienceReward({
                onBred: "Math.Random(1,7)",
                onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
            }),
            new BPEntityComponents.SetTypeFamily({
                family: ["aquatic", "turtle", "mob"]
            }),
            new BPEntityComponents.SetCollisionBox({
                width: 1.2,
                height: 0.4
            }),
            new BPEntityComponents.SetUnderwaterMovement({
                value: 0.12
            }),
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/sea_turtle.json"
            }),
            new BPEntityComponents.SetBreedable({
                requireTame: false,
                causesPregnancy: true,
                breedsWith: {
                    "minecraft:turtle": {
                        event: "minecraft:become_pregnant",
                        target: "self"
                    }
                },
                breedItems: ["seagrass"]
            }),
            new BPEntityComponents.SetBehaviorBreed({
                priority: 2,
                speedMultiplier: 1
            }),
            new BPEntityComponents.SetBehaviorMoveToLand({
                priority: 6,
                searchRange: 16,
                searchHeight: 5,
                goalRadius: 0.5
            }),
            new BPEntityComponents.SetBehaviorRandomStroll({
                priority: 9,
                interval: 100
            })
        ],
        "minecraft:pregnant": [
            new BPEntityComponents.SetBehaviorGoHome({
                priority: 1,
                speedMultiplier: 1,
                interval: 700,
                goalRadius: 4,
                onHome: [
                    {
                        event: "minecraft:go_lay_egg",
                        target: "self"
                    }
                ]
            })
        ],
        "minecraft:wants_to_lay_egg": [
            new BPEntityComponents.SetBehaviorLayEgg({
                priority: 1,
                speedMultiplier: 1,
                searchRange: 16,
                searchHeight: 4,
                goalRadius: 1.5,
                onLay: {
                    event: "minecraft:laid_egg",
                    target: "self"
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:turtle": "minecraft:turtle"
            }
        }),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0,
            breathesWater: true,
            breathesAir: true,
            generatesBubbles: false
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetHealth({
            value: 30
        }),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "lightning",
                    dealsDamage: "yes",
                    damageMultiplier: 2000
                }
            ]
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
            value: 0.1
        }),
        new BPEntityComponents.SetWaterMovement({
            dragFactor: 0.9
        }),
        new BPEntityComponents.SetNavigationGeneric({
            isAmphibious: true,
            canPathOverWater: false,
            canSwim: true,
            canWalk: true,
            canSink: false,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementAmphibious({
            maxTurn: 5
        }),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetHome(),
        new BPEntityComponents.SetFollowRange({
            value: 1024
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 0,
            preferWater: true,
            speedMultiplier: 1.2
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 3,
            speedMultiplier: 1.1,
            canTemptVertically: true,
            items: ["seagrass"]
        }),
        new BPEntityComponents.SetBehaviorMoveToWater({
            priority: 4,
            searchRange: 16,
            searchHeight: 5,
            goalRadius: 1.5
        }),
        new BPEntityComponents.SetBehaviorRandomSwim({
            priority: 7,
            interval: 0,
            xzDist: 30,
            yDist: 15
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 8,
            lookDistance: 6,
            probability: 0.02
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization()
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 9,
                    add: {
                        componentGroups: ["minecraft:adult"]
                    }
                },
                {
                    weight: 1,
                    add: {
                        componentGroups: ["minecraft:baby"]
                    }
                }
            ]
        },
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:baby"]
            }
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:baby"]
            },
            add: {
                componentGroups: ["minecraft:adult"]
            }
        },
        "minecraft:become_pregnant": {
            add: {
                componentGroups: ["minecraft:pregnant"]
            }
        },
        "minecraft:go_lay_egg": {
            add: {
                componentGroups: ["minecraft:wants_to_lay_egg"]
            },
            remove: {
                componentGroups: ["minecraft:pregnant"]
            }
        },
        "minecraft:laid_egg": {
            remove: {
                componentGroups: ["minecraft:wants_to_lay_egg"]
            }
        }
    }
});
