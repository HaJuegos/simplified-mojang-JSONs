import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del SnowGolem para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const SnowGolemTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.SnowGolem,
    description: {
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:snowman_sheared": [
            new BPEntityComponents.SetIsSheared()
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 2
        }),
        new BPEntityComponents.SetBalloonable(),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookDistance: 6,
            priority: 3
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            entityTypes: [
                {
                    filters: EntityFilters.isFamily("monster", "other"),
                    maxDist: 6
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 2,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBehaviorRangedAttack({
            attackInterval: {
                min: 1,
                max: 1
            },
            attackRange: {
                min: 0,
                max: 10
            },
            priority: 1,
            speedMultiplier: 1.25
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.8,
            width: 0.4
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetFreezingImmune(),
        new BPEntityComponents.SetHealth({
            max: 4,
            value: 4
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    cause: "lava",
                    damagePerTick: 4,
                    filters: EntityFilters.inLava(true, "self", "==")
                },
                {
                    cause: "temperature",
                    damagePerTick: 1,
                    filters: EntityFilters.allOf(
                        EntityFilters.isTemperatureValue(1, "self", ">"),
                        EntityFilters.hasComponent("minecraft:effect.fire_resistance", "self", "!=")
                    )
                },
                {
                    cause: "drowning",
                    damagePerTick: 1,
                    filters: EntityFilters.inContactWithWater(true, "self", "==")
                }
            ]
        }),
        new BPEntityComponents.SetInteract({
            interactions: [
                {
                    playSounds: ["shear"],
                    cooldown: 2.5,
                    hurtItem: 1,
                    spawnItems: {
                        table: "loot_tables/entities/snow_golem_shear.json"
                    },
                    onInteract: {
                        event: "minecraft:on_sheared",
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment("shears", "hand", "other"),
                            EntityFilters.isFamily("player", "other"),
                            EntityFilters.hasComponent("minecraft:is_sheared", "self", "!=")
                        ),
                        target: "self"
                    },
                    interactText: "action.interact.shear",
                    swing: true,
                    vibration: "shear",
                    useItem: false
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLeashable({
            unleashOnRemoval: false
        }),
        new BPEntityComponents.SetLeashableTo({
            unleashOnRemoval: false
        }),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/snowman.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.2
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            avoidWater: true
        }),
        new BPEntityComponents.SetPersistent(),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetShooter({
            projectiles: [
                {
                    def: MinecraftEntityTypes.Snowball
                }
            ]
        }),
        new BPEntityComponents.SetTrail({
            blockType: "minecraft:snow_layer",
            spawnFilter: EntityFilters.isTemperatureValue(0.81, "self", "<")
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["snowgolem", "mob"]
        })
    ],
    events: {
        "minecraft:on_sheared": {
            add: {
                componentGroups: ["minecraft:snowman_sheared"]
            }
        }
    }
});
