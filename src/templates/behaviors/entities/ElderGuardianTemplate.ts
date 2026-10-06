import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Elder Guardian para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const ElderGuardianTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.ElderGuardian,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetAmbientSoundInterval({
            soundEvents: [
                {
                    soundID: "ambient.in.water",
                    condition: `${MoLang.headIsInWater()}`
                }
            ],
            minRandomCooldownSound: 8,
            maxRandomCooldownSound: 16
        }),
        new BPEntityComponents.SetAttack({
            damage: 5
        }),
        new BPEntityComponents.SetBehaviorGuardianAttack({
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 12,
            probability: 0.01,
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorMoveTowardsHomeRestriction({
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            attackInterval: {
                max: 1
            },
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.isFamily('squid', 'other'),
                        EntityFilters.isFamily('axolotl', 'other'),
                    )
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorRandomSwim({
            avoidSurface: false,
            speedMultiplier: 0.5,
            priority: 7
        }),
        new BPEntityComponents.SetBreathable({
            breathesWater: true
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 1.99,
            width: 1.99
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? 10 : 0`
        }),
        new BPEntityComponents.SetFollowRange({
            max: 16,
            value: 16
        }),
        new BPEntityComponents.SetHealth({
            max: 80,
            value: 80
        }),
        new BPEntityComponents.SetHome({
            restrictionRadius: 16,
            restrictionType: 'random_movement'
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
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/elder_guardian.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.3
        }),
        new BPEntityComponents.SetMovementSway(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationGeneric({
            canBreach: true,
            canWalk: false,
            canPathOverWater: false,
            canSwim: true,
            isAmphibious: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "guardian_elder", "monster", "mob"]
        }),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.3
        }),
        new BPEntityComponents.SetUsesLegacyFriction()
    ],
    events: {}
});
