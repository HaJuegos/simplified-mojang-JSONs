import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const WitherTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Wither,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetBehaviorFloat({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            priority: 6
        }),
        new BPEntityComponents.SetBehaviorLookAtTarget({
            lookTime: {
                min: 1,
                max: 2
            },
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.allOf({
                        test: "is_family",
                        subject: 1,
                        operator: 0,
                        value: "player"
                    }),
                    maxDist: 70
                },
                {
                    filters: EntityFilters.allOf(
                        {
                            test: "is_family",
                            subject: 1,
                            operator: 1,
                            value: "undead"
                        },
                        {
                            test: "is_family",
                            subject: 1,
                            operator: 1,
                            value: "inanimate"
                        }
                    ),
                    maxDist: 70
                }
            ],
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 5,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorWitherRandomAttackPosGoal({
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorWitherTargetHighestDamage({
            priority: 1
        }),
        new BPEntityComponents.SetBoss({
            hudRange: 55,
            shouldDarkenSky: true
        }),
        new BPEntityComponents.SetBreathable({
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCanFly(),
        new BPEntityComponents.SetCollisionBox({
            height: 3,
            width: 1
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    dealsDamage: "no",
                    onDamage: {
                        filters: EntityFilters.isFamily("undead", "other")
                    }
                }
            ]
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: "50"
        }),
        new BPEntityComponents.SetFireImmune(),
        // TODO(migrate): componente sin clase "minecraft:freezing_immune": {}
        new BPEntityComponents.SetHealth({
            max: 600,
            value: 600
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/wither_boss.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.25
        }),
        new BPEntityComponents.SetMovementBasic({
            maxTurn: 180
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidWater: true,
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPersistent(),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetTypeFamily({
            family: ["wither", "skeleton", "monster", "undead", "mob"]
        })
    ],
    events: {
        "minecraft:entity_spawned": {}
    }
});
