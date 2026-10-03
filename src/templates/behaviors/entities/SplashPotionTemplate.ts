import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

export const SplashPotionTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.SplashPotion,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isSummonable: true,
        isSpawneable: false,
        spawnCategory: SpawnCategoryEntities.Misc
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "splash_potion"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.25,
            width: 0.25
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 5,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetProjectile({
            angleOffset: -20,
            onHit: {
                douseFire: {},
                removeOnHit: {},
                thrownPotionEffect: {}
            },
            gravity: 0.05,
            hitSound: "glass",
            power: 0.5,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {}
});
