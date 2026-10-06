import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Tadpole para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const TadpoleTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Tadpole,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSpawneable: true,
        isSummonable: true
    },
    componentsGroups: {
        "grow_up": [
            new BPEntityComponents.SetTransformation({
                into: "minecraft:frog",
                transformationSound: "convert_to_frog"
            })
        ]
    },
    components: [
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "tadpole", "mob"]
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.8,
            height: 0.6
        }),
        new BPEntityComponents.SetBreathable({
            totalSupply: 8,
            suffocateTime: 0,
            breathesWater: true,
            breathesAir: false,
            generatesBubbles: false
        }),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetHealth({
            value: 6
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    filters: EntityFilters.inLava(true, "self", "=="),
                    cause: "lava",
                    damagePerTick: 4
                }
            ]
        }),
        new BPEntityComponents.SetNavigationGeneric({
            canPathOverWater: true,
            canSwim: true,
            canWalk: false,
            canSink: false,
            avoidDamageBlocks: true
        }),
        new BPEntityComponents.SetMovementSway({
            swayAmplitude: 0
        }),
        new BPEntityComponents.SetMovement({
            value: 0.1
        }),
        new BPEntityComponents.SetUnderwaterMovement({
            value: 0.1
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetIsBaby(),
        new BPEntityComponents.SetAgeable({
            duration: 1200,
            feedItemsToGrow: ["slime_ball"],
            pauseGrowItems: ["golden_dandelion"],
            resetGlowItems: ["golden_dandelion"],
            onGrowUp: {
                event: "ageable_grow_up",
                target: "self"
            }
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 2
        }),
        new BPEntityComponents.SetBehaviorTempt({
            priority: 5,
            speedMultiplier: 1.25,
            canTemptVertically: true,
            items: ["slime_ball"]
        }),
        new BPEntityComponents.SetBehaviorRandomSwim({
            priority: 2,
            interval: 100
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 3,
            lookDistance: 6,
            probability: 0.02
        })
    ],
    events: {
        "ageable_grow_up": {
            add: {
                componentGroups: ["grow_up"]
            }
        }
    }
});
