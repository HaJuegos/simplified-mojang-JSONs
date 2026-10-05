import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Huevo para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const EggTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Egg,
    description: {
        isSummonable: true,
        isSpawneable: false
    },
    properties: {
        "minecraft:climate_variant": {
            clientSync: true,
            type: "enum",
            default: "temperate",
            values: ["temperate", "warm", "cold"]
        }
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetTypeFamily({
            family: ["projectile", "egg"]
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 0.25,
            width: 0.25
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization({
            defaultValues: {
                maxDroppedTicks: 7,
                maxOptimizedDistance: 80,
                useMotionPredictionHints: true
            }
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetProjectile({
            angleOffset: 0,
            onHit: {
                impactDamage: {
                    applyKnockbackToBlockingTargets: true,
                    damage: {
                        min: 0,
                        max: 0
                    },
                    knockback: true,
                    destroyOnHit: true
                },
                spawnChance: {
                    firstSpawnChance: 0.125,
                    firstSpawnCount: 1,
                    spawnBaby: true,
                    onSpawn: [
                        {
                            event: "minecraft:hatch_warm",
                            filters: EntityFilters.enumProperty("minecraft:climate_variant", "warm", "other")
                        },
                        {
                            event: "minecraft:hatch_cold",
                            filters: EntityFilters.enumProperty("minecraft:climate_variant", "cold", "other")
                        }
                    ],
                    spawnDefinition: "minecraft:chicken",
                    secondSpawnChance: 0.03125,
                    secondSpawnCount: 4
                },
                particleOnHit: {
                    numParticles: 6,
                    onOtherHit: true,
                    onEntityHit: true,
                    particleType: "iconcrack",
                    particleItemName: {
                        blueEgg: EntityFilters.enumProperty("minecraft:climate_variant", "cold"),
                        brownEgg: EntityFilters.enumProperty("minecraft:climate_variant", "warm")
                    }
                },
                removeOnHit: {}
            },
            gravity: 0.03,
            power: 1.5,
            isolatedPhysics: false
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetApplyKnockbackRules({
            presets: [
                {
                    verticalPower: 0.1,
                    verticalVelocityCap: 0.1
                }
            ]
        })
    ],
    events: {
        "minecraft:spawn_cold": {
            setProperty: {
                "minecraft:climate_variant": "cold"
            }
        },
        "minecraft:spawn_temperate": {
            setProperty: {
                "minecraft:climate_variant": "temperate"
            }
        },
        "minecraft:spawn_warm": {
            setProperty: {
                "minecraft:climate_variant": "warm"
            }
        }
    }
});
