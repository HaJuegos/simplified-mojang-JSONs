import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Command Block en Minecart para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 03-10-2026
 */
export const CommandBlockMinecartTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.CommandBlockMinecart,
    description: {
        spawnCategory: SpawnCategoryEntities.Misc,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: false
    },
    componentsGroups: {
        "minecraft:command_block_active": [
            new BPEntityComponents.SetRailSensor({
                checkBlockTypes: true,
                onDeactivate: {
                    event: "minecraft:command_block_deactivate"
                },
                ejectOnActivate: false,
                ejectOnDeactivate: false,
                tickCommandBlockOnActivate: true,
                tickCommandBlockOnDeactivate: false
            })
        ],
        "minecraft:command_block_inactive": [
            new BPEntityComponents.SetRailSensor({
                checkBlockTypes: false,
                ejectOnActivate: false,
                ejectOnDeactivate: false,
                onActivate: {
                    event: "minecraft:command_block_activate"
                },
                tickCommandBlockOnActivate: true,
                tickCommandBlockOnDeactivate: false
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
        new BPEntityComponents.SetInventory(),
        new BPEntityComponents.SetPhysics(),
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
        new BPEntityComponents.SetRailMovement(),
        new BPEntityComponents.SetTypeFamily({
            family: ["minecart", "inanimate"]
        })
    ],
    events: {
        "minecraft:command_block_activate": {
            add: {
                componentGroups: ["minecraft:command_block_active"]
            },
            remove: {
                componentGroups: ["minecraft:command_block_inactive"]
            }
        },
        "minecraft:command_block_deactivate": {
            add: {
                componentGroups: ["minecraft:command_block_inactive"]
            },
            remove: {
                componentGroups: ["minecraft:command_block_active"]
            }
        },
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["minecraft:command_block_inactive"]
            }
        }
    }
});
