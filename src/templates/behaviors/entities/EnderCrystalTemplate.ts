import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

export const EnderCrystalTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.EnderCrystal,
    formatVersion: FormatVersionEntities.V1_26_0,
    description: {
        isExperimental: false,
        isSummonable: true,
        isSpawneable: false,
        spawnCategory: SpawnCategoryEntities.Misc
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
        new BPEntityComponents.SetPhysics({})
        // TODO(migrate): componente sin clase "minecraft:pushable": {"is_pushable": true, "is_pushable_by_piston": true}
    ],
    events: {
        "minecraft:crystal_explode": {
            add: {
                componentGroups: ["crystal_exploding"]
            },
            remove: {}
        }
    }
});
