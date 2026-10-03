import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const HopperMinecartTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.HopperMinecart,
    formatVersion: FormatVersionEntities.V1_26_30,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: false,
        spawnCategory: SpawnCategoryEntities.Misc
    },
    componentsGroups: {
        "minecraft:hopper_active": [
            new BPEntityComponents.SetItemHopper(),
            new BPEntityComponents.SetRailSensor({
                onActivate: {
                    event: "minecraft:hopper_deactivate"
                }
            })
        ],
        "minecraft:hopper_inactive": [
            new BPEntityComponents.SetRailSensor({
                onDeactivate: {
                    event: "minecraft:hopper_activate"
                }
            })
        ]
    },
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
            inventorySize: 5,
            containerType: "minecart_hopper"
        }),
        new BPEntityComponents.SetIsStackable({}),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity({
            presets: [
                {
                    pushMode: "legacy_minecart",
                    strengthMultiplier: 0.1,
                    minDistance: 0.0001,
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
    events: {
        "minecraft:hopper_activate": {
            add: {
                componentGroups: ["minecraft:hopper_active"]
            },
            remove: {
                componentGroups: ["minecraft:hopper_inactive"]
            }
        },
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:hopper_active"]
            }
        },
        "minecraft:hopper_deactivate": {
            add: {
                componentGroups: ["minecraft:hopper_inactive"]
            },
            remove: {
                componentGroups: ["minecraft:hopper_active"]
            }
        }
    }
});
