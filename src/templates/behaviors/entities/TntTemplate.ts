import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla de la TNT para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const TntTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Tnt,
    description: {
        spawnCategory: SpawnCategoryEntities.Misc,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: false
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
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
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
