import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { EntityFireImmuneComponent } from "@minecraft/server";
import { MoLang } from "../../../utils/MoLang";


/**
 * Plantilla vanilla del Phatom para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const PhantomTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Phantom,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetAttack({
            damage: 6
        }),
        new BPEntityComponents.SetBehaviorAvoidMobType({
            ignoreVisibility: true,
            maxDist: 16,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily("ocelot", "other"),
                        EntityFilters.isFamily("cat", "other")
                    )
                }
            ]
        }),
        new BPEntityComponents.SetBehaviorCircleAroundAnchor({
            goalRadius: 1,
            heightOffsetRange: {
                min: -4,
                max: 5
            },
            heightAboveTargetRange: {
                min: 20,
                max: 40
            },
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            reselectTargets: true,
            scanInterval: 20,
            targetSearchHeight: 80,
            withinRadius: 64,
            mustSeeForgetDuration: 0.5,
            entityTypes: [
                {
                    filters: EntityFilters.isFamily('player', 'other'),
                    maxDist: 64
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorSwoopAttack({
            priority: 2
        }),
        new BPEntityComponents.SetBreathable({
            breathesAir: true,
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetBurnsInDaylight(),
        new BPEntityComponents.SetCollisionBox({
            height: 0.5,
            width: 0.9
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 : 0`
        }),
        new BPEntityComponents.SetFollowRange({
            max: 64,
            value: 64
        }),
        new BPEntityComponents.SetGameEventMovementTracking({
            emitFlap: true
        }),
        new BPEntityComponents.SetHealth({
            max: 20,
            value: 20
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
            table: "loot_tables/entities/phantom.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 1.8
        }),
        new BPEntityComponents.SetMovementGlide({
            speedWhenTurning: 0.2,
            startSpeed: 0.1
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetPhysics({
            hasGravity: false
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetRendersWhenInvisible(),
        new BPEntityComponents.SetTypeFamily({
            family: ["phantom", "undead", "monster", "mob"]
        })
    ],
    events: {}
});
