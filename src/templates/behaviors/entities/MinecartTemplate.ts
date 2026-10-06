import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Minecart para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const MinecartTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Minecart,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: false
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
                        EntityFilters.isMoving()
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
        new BPEntityComponents.SetIsStackable(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity({
            presets: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("sulfur_cube", "other"),
                        EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "none", "other", "not"),
                        EntityFilters.isControllingPassengerFamily("player")
                    ),
                    pushMode: "none"
                },
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
        new BPEntityComponents.SetRailSensor({
            ejectOnActivate: true
        }),
        new BPEntityComponents.SetRideable({
            interactText: "action.interact.ride.minecart",
            pullInEntities: true,
            seatCount: 1,
            seats: [
                {
                    position: [0, -0.2, 0]
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["minecart", "inanimate"]
        })
    ],
    events: {}
});
