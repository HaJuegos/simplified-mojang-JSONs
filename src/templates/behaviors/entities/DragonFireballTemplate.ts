import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

export const DragonFireballTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.DragonFireball,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "dragon_fireball"]
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
        new BPEntityComponents.SetDimensionBound(),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetProjectile({
            anchor: "middle",
            gravity: 0,
            reflectOnHurt: true,
            hitSound: "explode",
            power: 1.3,
            inertia: 1,
            onHit: {
                removeOnHit: {},
                spawnAoeCloud: {
                    affectOwner: false,
                    duration: 120,
                    particle: "dragonbreath",
                    potion: 23,
                    reapplicationDelay: 20,
                    radius: 6,
                    radiusOnUse: 0
                }
            },
            offset: [0, 0.5, 0],
            uncertaintyBase: 10,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {}
});
