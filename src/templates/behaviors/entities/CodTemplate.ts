import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Cod para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 04-10-2026
 */
export const CodTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Cod,
    description: {
        spawnCategory: SpawnCategoryEntities.WaterAmbient,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.isFamily('axolotl', 'other')
                    ),
                    maxDist: 6,
                    walkSpeedMultiplier: 1.5,
                    sprintSpeedMultiplier: 2
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorRandomSwim({
            interval: 0,
            xzDist: 16,
            priority: 3,
            speedMultiplier: 1,
            yDist: 4
        }),
        new BPEntityComponents.SetBehaviorSwimIdle({
            priority: 5
        }),
        new BPEntityComponents.SetBehaviorSwimWander({
            interval: 0.1,
            lookAhead: 2,
            priority: 4
        }),
        new BPEntityComponents.SetBreathable({
            breathesAir: false,
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.3,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {
                maxDistance: 40,
                minDistance: 32
            }
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
        }),
        new BPEntityComponents.SetFlocking({
            breachInfluence: 7,
            blockDistance: 2,
            highFlockLimit: 8,
            blockWeight: 0.85,
            minHeight: 1.5,
            cohesionThreshold: 1.95,
            inWater: true,
            cohesionWeight: 2,
            goalWeight: 2,
            influenceRadius: 3,
            innnerCohesionThreshold: 1.25,
            lonerChance: 0.1,
            lowFlockLimit: 4,
            matchVariants: false,
            maxHeight: 6,
            separationThreshold: 0.95,
            separationWeight: 1.75,
            useCenterOfMass: true
        }),
        new BPEntityComponents.SetHealth({
            max: 3,
            value: 3
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
            table: "loot_tables/entities/fish.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.1
        }),
        new BPEntityComponents.SetMovementSway({
            swayAmplitude: 0
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationGeneric({
            canBreach: false,
            canWalk: false,
            canPathOverWater: false,
            canSink: false,
            canSwim: true,
            isAmphibious: false,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({
            hasGravity: false
        }),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetScale({
            value: 1
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "cod", "fish"]
        }),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.1
        })
    ],
    events: {}
});
