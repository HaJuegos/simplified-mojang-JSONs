import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

export const TntTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Tnt,
    formatVersion: FormatVersionEntities.V1_26_0,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: false,
        spawnCategory: SpawnCategoryEntities.Misc
    },
    componentsGroups: {
        "from_explosion": [
            new BPEntityComponents.SetExplode({
                causesFire: false,
                fuseLit: true,
                power: 4,
                fuseLength: {
                    rangeMax: 2,
                    rangeMin: 0.5
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetCollisionBox({
            height: 0.98,
            width: 0.98
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 5,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetExplode({
            causesFire: false,
            fuseLit: true,
            power: 4,
            fuseLength: 4
        }),
        new BPEntityComponents.SetPhysics({}),
        // TODO(migrate): componente sin clase "minecraft:pushable": {"is_pushable": false, "is_pushable_by_piston": true}
        new BPEntityComponents.SetTypeFamily({
            family: ["tnt", "inanimate"]
        })
    ],
    events: {
        "from_explosion": {
            add: {
                componentGroups: ["from_explosion"]
            }
        }
    }
});
