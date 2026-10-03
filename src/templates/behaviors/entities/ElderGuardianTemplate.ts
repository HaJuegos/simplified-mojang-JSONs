import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const ElderGuardianTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.ElderGuardian,
    formatVersion: FormatVersionEntities.MostRecent,
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
                    condition: "query.head_is_in_water"
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
                    filters: EntityFilters.allOf(
                        EntityFilters.anyOf(
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "player"
                            },
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "squid"
                            },
                            {
                                test: "is_family",
                                subject: 1,
                                operator: 0,
                                value: "axolotl"
                            }
                        )
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
            onDeath: "query.last_hit_by_player ? 10 : 0"
        }),
        new BPEntityComponents.SetFollowRange({
            max: 16,
            value: 16
        }),
        new BPEntityComponents.SetHealth({
            max: 80,
            value: 80
        }),
        // TODO(migrate): componente sin clase "minecraft:home": {"restriction_radius": 16, "restriction_type": "random_movement"}
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
        new BPEntityComponents.SetMovementSway({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationGeneric({
            canBreach: true,
            canWalk: false,
            canPathOverWater: false,
            canSwim: true,
            isAmphibious: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({}),
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
