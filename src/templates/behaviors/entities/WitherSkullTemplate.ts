import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla del Wither Skull para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const WitherSkullTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.WitherSkull,
    description: {
        isSummonable: false,
        isSpawneable: false
    },
    componentsGroups: {
        "minecraft:exploding": [
            new BPEntityComponents.SetExplode({
                causesFire: false,
                fuseLit: true,
                power: 1,
                destroyAffectedByGriefing: true,
                fuseLength: 0
            })
        ]
    },
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "wither_skull"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.15,
            width: 0.15
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 7,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetDimensionBound(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetProjectile({
            anchor: "eye_height",
            gravity: 0,
            power: 1.2,
            hitSound: "bow.hit",
            inertia: 1,
            liquidInertia: 1,
            onHit: {
                definitionEvent: {
                    affectProjectile: true,
                    eventTrigger: {
                        event: "minecraft:explode",
                        target: "self"
                    }
                },
                mobEffect: {
                    effects: [
                        {
                            amplifier: 1,
                            durationhard: 800,
                            effect: "wither",
                            durationeasy: 0,
                            durationnormal: 200
                        }
                    ]
                }
            },
            offset: [0, -0.1, 0],
            shootSound: "bow",
            shootTarget: false,
            uncertaintyBase: 7.5,
            uncertaintyMultiplier: 1,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock()
    ],
    events: {
        "minecraft:explode": {
            add: {
                componentGroups: ["minecraft:exploding"]
            }
        }
    }
});
