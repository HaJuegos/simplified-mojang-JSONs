import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const ChestMinecartTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.ChestMinecart,
    formatVersion: FormatVersionEntities.V1_26_30,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: false,
        spawnCategory: SpawnCategoryEntities.Misc
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetCollisionBox({
            height: 0.7,
            width: 0.98
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            conditionalValues: [
                {
                    conditionalValues: [
                        EntityFilters.isMoving(true, "self", "==")
                    ],
                    maxDroppedTicks: 0,
                    maxOptimizedDistance: 0
                }
            ],
            defaultValues: {
                maxDroppedTicks: 20,
                maxOptimizedDistance: 60,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetInventory({
            canBeSiphonedFrom: true,
            inventorySize: 27,
            containerType: "minecart_chest"
        }),
        new BPEntityComponents.SetIsStackable({}),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity({
            presets: [
                {
                    pushMode: "legacy_minecart",
                    strengthMultiplier: 0.1,
                    minDistance: 0.01,
                    pushScaleSelf: 0.5,
                    pushScaleOther: 0.25
                }
            ]
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetRailMovement({}),
        new BPEntityComponents.SetTypeFamily({
            family: ["minecart", "inanimate"]
        })
    ],
    events: {}
});
