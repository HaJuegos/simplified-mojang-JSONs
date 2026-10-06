import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Wither para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const WitherTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Wither,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true
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
                    filters: EntityFilters.isFamily('player', 'other'),
                    maxDist: 70
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily('undead', 'other', 'not'),
                        EntityFilters.isFamily('inanimate', 'other', 'not')
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
        new BPEntityComponents.SetFreezingImmune(),
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
        new BPEntityComponents.SetPhysics(),
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
