import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Ansuelo de Pesca para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const FishingHookTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.FishingHook,
    description: {
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {
        "loot_jungle": [
            new BPEntityComponents.SetLoot({
                table: "loot_tables/gameplay/jungle_fishing.json"
            })
        ]
    },
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "fishing_hook"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.15,
            width: 0.15
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 7,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetDimensionBound(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/gameplay/fishing.json"
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetProjectile({
            onHit: {
                stickInGround: {}
            },
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetTransient()
    ],
    events: {
        "minecraft:entity_spawned": {
            sequence: [
                {
                    filters: EntityFilters.isBiome("jungle"),
                    add: {
                        componentGroups: ["loot_jungle"]
                    }
                }
            ]
        }
    }
});
