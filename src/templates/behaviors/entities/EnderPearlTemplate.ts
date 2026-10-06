import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Ender Pearl para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const EnderPearlTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.EnderPearl,
    description: {
        spawnCategory: SpawnCategoryEntities.Misc,
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {
        "minecraft:no_spawn": [
            new BPEntityComponents.SetProjectile({
                angleOffset: 0,
                onHit: {
                    removeOnHit: {},
                    teleportOwner: {}
                },
                gravity: 0.025,
                inertia: 1,
                liquidInertia: 1,
                power: 1.5,
                isolatedPhysics: false
            })
        ]
    },
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "ender_pearl"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.25,
            width: 0.25
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 7,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetProjectile({
            angleOffset: 0,
            onHit: {
                spawnChance: {
                    firstSpawnCount: 1,
                    firstSpawnChance: 0.05,
                    spawnDefinition: "minecraft:endermite"
                },
                removeOnHit: {},
                teleportOwner: {}
            },
            gravity: 0.025,
            inertia: 1,
            liquidInertia: 1,
            power: 1.5,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {
        "minecraft:entity_spawned": {
            sequence: [
                {
                    filters: EntityFilters.isGameRule("domobspawning", false),
                    add: {
                        componentGroups: ["minecraft:no_spawn"]
                    }
                }
            ]
        }
    }
});
