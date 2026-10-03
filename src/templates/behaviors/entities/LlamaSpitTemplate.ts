import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

export const LlamaSpitTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.LlamaSpit,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isSummonable: false,
        isSpawneable: false,
        spawnCategory: SpawnCategoryEntities.Misc
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "llama_spit"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.31,
            width: 0.31
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 7,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetProjectile({
            anchor: "eye_height",
            gravity: 0.06,
            uncertaintyBase: 10,
            inertia: 1,
            onHit: {
                impactDamage: {
                    applyKnockbackToBlockingTargets: true,
                    damage: {
                        min: 1,
                        max: 1
                    },
                    knockback: false
                },
                removeOnHit: {}
            },
            offset: [0, -0.1, 0],
            reflectOnHurt: true,
            power: 1.5,
            uncertaintyMultiplier: 4,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {}
});
