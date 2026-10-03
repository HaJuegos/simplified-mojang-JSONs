import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const TripodCameraTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.TripodCamera,
    formatVersion: FormatVersionEntities.V1_26_0,
    description: {
        isExperimental: false,
        isSummonable: false,
        isSpawneable: false,
        spawnCategory: SpawnCategoryEntities.Misc
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetCollisionBox({
            height: 1.8,
            width: 0.75
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetHealth({
            max: 4,
            value: 4
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
        new BPEntityComponents.SetLoot({
            table: "loot_tables/empty.json"
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetTypeFamily({
            family: ["tripodcamera", "inanimate", "mob"]
        })
    ],
    events: {}
});
