import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Bat para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 03-10-2026
 */
export const BatTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Bat,
    description: {
        spawnCategory: SpawnCategoryEntities.Ambient,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorFloatWander({
            priority: 1,
            floatDuration: {
                min: 0.1,
                max: 0.35
            },
            floatWanderHasMoveControl: false,
            randomReselect: true,
            yOffset: -2,
            useHomePositionRestriction: false,
            xzDist: 10,
            yDist: 7
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanFly(),
        new BPEntityComponents.SetCollisionBox({
            height: 0.9,
            width: 0.5
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
        new BPEntityComponents.SetGameEventMovementTracking({
            emitFlap: true
        }),
        new BPEntityComponents.SetHealth({
            max: 6,
            value: 6
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
            value: 0.1
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationFloat({
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetTypeFamily({
            family: ["bat", "mob"]
        })
    ],
    events: {}
});
