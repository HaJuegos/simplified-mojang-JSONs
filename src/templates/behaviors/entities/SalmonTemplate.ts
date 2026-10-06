import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Salmon para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const SalmonTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Salmon,
    description: {
        spawnCategory: SpawnCategoryEntities.WaterAmbient,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "scale_large": [
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/salmon_large.json"
            }),
            new BPEntityComponents.SetScale({
                value: 1.5
            })
        ],
        "scale_normal": [
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/salmon_normal.json"
            }),
            new BPEntityComponents.SetScale({
                value: 1
            })
        ],
        "scale_small": [
            new BPEntityComponents.SetLoot({
                table: "loot_tables/entities/salmon_normal.json"
            }),
            new BPEntityComponents.SetScale({
                value: 0.5
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBehaviorAvoidMobType({
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.isFamily('axolotl', 'other')
                    ),
                    maxDist: 3,
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
            interval: 0.0166,
            speedMultiplier: 0.014,
            priority: 4
        }),
        new BPEntityComponents.SetBreathable({
            breathesAir: false,
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.5,
            width: 0.5
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
            blockDistance: 1,
            highFlockLimit: 8,
            blockWeight: 0.75,
            minHeight: 4,
            cohesionThreshold: 1.5,
            inWater: true,
            cohesionWeight: 2.25,
            goalWeight: 2,
            influenceRadius: 3,
            innnerCohesionThreshold: 1.5,
            lonerChance: 0.1,
            lowFlockLimit: 4,
            matchVariants: false,
            maxHeight: 4,
            separationThreshold: 0.15,
            separationWeight: 0.65,
            useCenterOfMass: false
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
        new BPEntityComponents.SetMovement({
            value: 0.12
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
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "salmon", "fish"]
        }),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.12
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 30,
                    add: {
                        componentGroups: ["scale_small"]
                    }
                },
                {
                    weight: 50,
                    add: {
                        componentGroups: ["scale_normal"]
                    }
                },
                {
                    weight: 15,
                    add: {
                        componentGroups: ["scale_large"]
                    }
                }
            ]
        }
    }
});
