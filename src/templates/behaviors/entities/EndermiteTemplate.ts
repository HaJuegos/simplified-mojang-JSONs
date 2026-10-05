import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Endermite para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const EndermiteTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Endermite,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetAttack({
            damage: 2
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorMeleeBoxAttack({
            trackTarget: true,
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            withinRadius: 16,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.isFamily('enderman', 'other')
                    )
                }
            ],
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 1
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
            onDeath: `${MoLang.lastHitByPlayer()} ? 3 : 0`
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
        new BPEntityComponents.SetMovement({
            value: 0.25
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetCanStandOnPowderSnow(),
        new BPEntityComponents.SetTypeFamily({
            family: ["endermite", "arthropod", "monster", "mob"]
        })
    ],
    events: {}
});
