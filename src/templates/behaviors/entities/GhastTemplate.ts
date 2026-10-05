import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Ghast para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const GhastTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Ghast,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorFloatWander({
            floatDuration: [2, 7],
            floatWanderHasMoveControl: false,
            randomReselect: true,
            mustReach: true,
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.isFamily('player', 'other'),
                    maxDist: 28
                }
            ],
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorRangedAttack({
            attackRange: {
                min: 64,
                max: 64
            },
            chargeChargedTrigger: 1,
            priority: 1,
            chargeShootTrigger: 2
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanFly(),
        new BPEntityComponents.SetCannotBeAttacked(),
        new BPEntityComponents.SetCollisionBox({
            height: 4,
            width: 4.02
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 + (${MoLang.equipmentCount()} * Math.Random(1,3)) : 0`
        }),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetFollowRange({
            max: 64,
            value: 64
        }),
        new BPEntityComponents.SetHealth({
            max: 10,
            value: 10
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/ghast.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.03
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationFloat({
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetShooter({
            projectiles: [
                {
                    def: "minecraft:fireball"
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["ghast", "monster", "mob"]
        })
    ],
    events: {}
});
