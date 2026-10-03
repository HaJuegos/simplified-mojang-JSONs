import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

export const EnderDragonTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.EnderDragon,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    componentsGroups: {
        "dragon_death": [
            new BPEntityComponents.SetBehaviorDragonDeath({
                priority: 0
            })
        ],
        "dragon_flying": [
            new BPEntityComponents.SetBehaviorDragonChargePlayer({
                priority: 1
            }),
            new BPEntityComponents.SetBehaviorDragonHoldingPattern({
                priority: 3
            }),
            new BPEntityComponents.SetBehaviorDragonStrafePlayer({
                priority: 2
            }),
            new BPEntityComponents.SetBehaviorDragonTakeOff({
                priority: 0
            }),
            new BPEntityComponents.SetShooter({
                // TODO(migrate): clave no soportada "def": "minecraft:dragon_fireball"
            })
        ],
        "dragon_sitting": [
            new BPEntityComponents.SetBehaviorDragonFlaming({
                priority: 1
            }),
            new BPEntityComponents.SetBehaviorDragonLanding({
                priority: 0
            }),
            new BPEntityComponents.SetBehaviorDragonScanning({
                priority: 2
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 3
        }),
        new BPEntityComponents.SetBoss({
            hudRange: 125,
            shouldDarkenSky: false
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 4,
            width: 13
        }),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetDimensionBound(),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetFlyingSpeed({
            value: 0.6
        }),
        // TODO(migrate): componente sin clase "minecraft:freezing_immune": {}
        new BPEntityComponents.SetGameEventMovementTracking({
            emitFlap: true
        }),
        new BPEntityComponents.SetHealth({
            max: 200,
            value: 200
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetKnockbackResistance({
            max: 100,
            value: 100
        }),
        new BPEntityComponents.SetMovement({
            value: 0.3
        }),
        new BPEntityComponents.SetOnDeath({
            event: "minecraft:start_death",
            target: "self"
        }),
        new BPEntityComponents.SetOnStartLanding({
            event: "minecraft:start_land",
            target: "self"
        }),
        new BPEntityComponents.SetOnStartTakeoff({
            event: "minecraft:start_fly",
            target: "self"
        }),
        new BPEntityComponents.SetPersistent(),
        new BPEntityComponents.SetPhysics({
            hasCollision: false,
            hasGravity: false
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["dragon", "mob"]
        })
    ],
    events: {
        "minecraft:entity_spawned": {
            add: {
                componentGroups: ["dragon_flying"]
            },
            remove: {}
        },
        "minecraft:start_death": {
            add: {
                componentGroups: ["dragon_death"]
            },
            remove: {
                componentGroups: ["dragon_sitting", "dragon_flying"]
            }
        },
        "minecraft:start_fly": {
            add: {
                componentGroups: ["dragon_flying"]
            },
            remove: {
                componentGroups: ["dragon_sitting"]
            }
        },
        "minecraft:start_land": {
            add: {
                componentGroups: ["dragon_sitting"]
            },
            remove: {
                componentGroups: ["dragon_flying"]
            }
        }
    }
});
