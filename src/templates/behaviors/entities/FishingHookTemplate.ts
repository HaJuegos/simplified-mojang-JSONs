import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const FishingHookTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.FishingHook,
    formatVersion: FormatVersionEntities.MostRecent,
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
        new BPEntityComponents.SetPhysics({}),
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
