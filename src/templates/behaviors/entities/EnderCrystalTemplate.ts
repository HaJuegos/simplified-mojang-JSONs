import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla del Ender Crystal para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const EnderCrystalTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.EnderCrystal,
    description: {
        spawnCategory: SpawnCategoryEntities.Misc,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: false
    },
    componentsGroups: {
        "crystal_exploding": [
            new BPEntityComponents.SetExplode({
                causesFire: false,
                fuseLit: true,
                power: 6,
                destroyAffectedByGriefing: true,
                fuseLength: 0
            })
        ]
    },
    components: [
        new BPEntityComponents.SetCollisionBox({
            height: 2,
            width: 2
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetHealth({
            max: 1,
            value: 1
        }),
        new BPEntityComponents.SetOnHurt({
            event: "minecraft:crystal_explode",
            target: "self"
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity()
    ],
    events: {
        "minecraft:crystal_explode": {
            add: {
                componentGroups: ["crystal_exploding"]
            }
        }
    }
});
