import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const CushionTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Cushion,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isSpawneable: false,
        isSummonable: true,
        isExperimental: true
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetNameable({
            allowNameTagRenaming: false
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["cushion", "inanimate", "actor"]
        }),
        new BPEntityComponents.SetVariant({
            value: 15
        }),
        new BPEntityComponents.SetCollisionBox({
            width: 0.999,
            height: 0.249
        }),
        new BPEntityComponents.SetRideable({
            seatCount: 1,
            interactText: "action.interact.ride.cushion",
            dismountMode: "on_top_center",
            seats: [
                {
                    position: [0, 0.1875, 0],
                    rotateRiderBy: -90
                }
            ]
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    filters: EntityFilters.inLava(),
                    cause: "lava",
                    damagePerTick: 4
                }
            ]
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization()
    ],
    events: {}
});
