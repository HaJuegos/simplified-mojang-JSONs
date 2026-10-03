import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const EndermanTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Enderman,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "minecraft:enderman_calm": [
            new BPEntityComponents.SetOnTargetAcquired({
                event: "minecraft:become_angry",
                target: "self"
            }),
            new BPEntityComponents.SetMovement({
                value: 0.3
            })
        ],
        "minecraft:enderman_angry": [
            new BPEntityComponents.SetAngry({
                duration: 25,
                calmEvent: {
                    event: "minecraft:on_calm",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetMovement({
                value: 0.45
            }),
            new BPEntityComponents.SetBehaviorMeleeBoxAttack({
                priority: 2
            })
        ],
        "minecraft:riding": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    filters: EntityFilters.isRiding(false, "self", "=="),
                    event: "minecraft:stopped_riding"
                }
            })
        ],
        "minecraft:not_riding": [
            new BPEntityComponents.SetEnvironmentSensor({
                triggers: {
                    filters: EntityFilters.isRiding(true, "self", "=="),
                    event: "minecraft:started_riding"
                }
            }),
            new BPEntityComponents.SetTeleport({
                randomTeleports: true,
                maxRandomTeleportTime: 30,
                randomTeleportCube: [32, 32, 32],
                targetDistance: 16,
                targetTeleportChance: 0.05,
                lightTeleportChance: 0.05
                // TODO(migrate): clave no soportada "teleports_on_projectile_hit": true
            })
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetRendersWhenInvisible(),
        new BPEntityComponents.SetExperienceReward({
            onDeath: "query.last_hit_by_player ? 5 : 0"
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["enderman", "monster", "mob"]
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 15,
            suffocateTime: 0
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/enderman.json"
        }),
        new BPEntityComponents.SetHealth({
            value: 40,
            max: 40
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    filters: EntityFilters.inLava(),
                    cause: "lava",
                    damagePerTick: 4
                },
                {
                    filters: EntityFilters.inContactWithWater(),
                    cause: "drowning",
                    damagePerTick: 1
                }
            ]
        }),
        new BPEntityComponents.SetAttack({
            damage: 7
        }),
        new BPEntityComponents.SetFollowRange({
            value: 64,
            max: 64
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.6,
            height: 2.9
        }),
        new BPEntityComponents.SetTeleport({
            randomTeleports: true,
            maxRandomTeleportTime: 30,
            randomTeleportCube: [32, 32, 32],
            targetDistance: 16,
            targetTeleportChance: 0.05,
            lightTeleportChance: 0.05
            // TODO(migrate): clave no soportada "teleports_on_projectile_hit": true
        }),
        new BPEntityComponents.SetLookedAt({
            searchRadius: 64,
            setTarget: "once_and_stop_scanning",
            findPlayersOnly: true,
            minLookedAtDuration: 0.25,
            filters: EntityFilters.hasEquipment("carved_pumpkin", "head", "other", "not")
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            priority: 5,
            mustSee: true,
            attackInterval: {
                min: 0,
                max: 10
            },
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("endermite", "other"),
                    maxDist: 64
                }
            ]
        }),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: false,
            avoidWater: true
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxOptimizedDistance: 80,
                maxDroppedTicks: 10,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetVariableMaxAutoStep({
            baseValue: 1.0625,
            jumpPreventedValue: 0.5625
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 7,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 8,
            lookDistance: 8,
            probability: 1
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorPlaceBlock({
            priority: 10,
            xzRange: {
                min: -1,
                max: 1
            },
            yRange: {
                min: 0,
                max: 2
            },
            chance: 0.0005
        }),
        new BPEntityComponents.SetBehaviorTakeBlock({
            priority: 11,
            xzRange: {
                min: -2,
                max: 2
            },
            yRange: {
                min: 0,
                max: 3
            },
            chance: 0.05,
            blocks: [
                "dirt",
                "grass_block",
                "podzol",
                "coarse_dirt",
                "mycelium",
                "dirt_with_roots",
                "moss_block",
                "pale_moss_block",
                "muddy_mangrove_roots",
                "mud",
                "sand",
                "red_sand",
                "gravel",
                "brown_mushroom",
                "red_mushroom",
                "tnt",
                "cactus",
                "cactus_flower",
                "clay",
                "pumpkin",
                "carved_pumpkin",
                "melon_block",
                "crimson_fungus",
                "crimson_nylium",
                "crimson_roots",
                "warped_fungus",
                "warped_nylium",
                "warped_roots",
                "dandelion",
                "open_eyeblossom",
                "closed_eyeblossom",
                "poppy",
                "blue_orchid",
                "allium",
                "azure_bluet",
                "red_tulip",
                "orange_tulip",
                "white_tulip",
                "pink_tulip",
                "oxeye_daisy",
                "cornflower",
                "lily_of_the_valley",
                "wither_rose",
                "torchflower",
                "golden_dandelion"
            ]
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            remove: {},
            add: {
                componentGroups: ["minecraft:enderman_calm", "minecraft:not_riding"]
            }
        },
        "minecraft:become_angry": {
            remove: {
                componentGroups: ["minecraft:enderman_calm"]
            },
            add: {
                componentGroups: ["minecraft:enderman_angry"]
            }
        },
        "minecraft:on_calm": {
            remove: {
                componentGroups: ["minecraft:enderman_angry"]
            },
            add: {
                componentGroups: ["minecraft:enderman_calm"]
            }
        },
        "minecraft:stopped_riding": {
            add: {
                componentGroups: ["minecraft:not_riding"]
            },
            remove: {
                componentGroups: ["minecraft:riding"]
            }
        },
        "minecraft:started_riding": {
            add: {
                componentGroups: ["minecraft:riding"]
            },
            remove: {
                componentGroups: ["minecraft:not_riding"]
            }
        }
    }
});
