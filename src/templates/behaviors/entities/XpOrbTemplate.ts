import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

export const XpOrbTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.XpOrb,
    formatVersion: FormatVersionEntities.V1_26_0,
    description: {
        isSummonable: true,
        isSpawneable: false,
        spawnCategory: SpawnCategoryEntities.Misc
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetBuoyant({
            applyGravity: false,
            liquidBlocks: ["minecraft:flowing_water", "minecraft:water"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.25,
            width: 0.25
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 10,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetHealth({
            max: 5,
            value: 5
        }),
        new BPEntityComponents.SetPhysics({}),
        // TODO(migrate): componente sin clase "minecraft:pushable": {"is_pushable": false, "is_pushable_by_piston": true}
        new BPEntityComponents.SetTypeFamily({
            family: ["inanimate"]
        })
    ],
    events: {}
});
