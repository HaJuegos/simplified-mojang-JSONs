import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Vex para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const VexTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Vex,
    description: {
        spawnCategory: SpawnCategoryEntities.Monster,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:periodic_damage": [
            new BPEntityComponents.SetDamageOverTime({
                damagePerHurt: 1,
                timeBetweenHurt: 1
            })
        ],
        "minecraft:start_damage_timer": [
            new BPEntityComponents.SetTimer({
                looping: false,
                time: [30, 119],
                timeDownEvent: {
                    event: "minecraft:add_periodic_damage"
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 3
        }),
        new BPEntityComponents.SetBehaviorChargeAttack({
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorLookAtEntity({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 6,
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 6,
            priority: 9
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            entityTypes: [
                {
                    filters: EntityFilters.anyOf(
                        EntityFilters.isFamily('player', 'other'),
                        EntityFilters.isFamily('irongolem', 'other'),
                        EntityFilters.isFamily('wandering_trader', 'other'),
                    ),
                    maxDist: 70
                },
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily('villager', 'other'),
                        EntityFilters.hasComponent('minecraft:is_baby', 'other', 'not')
                    ),
                    maxDist: 70
                }
            ],
            priority: 3
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 0.8,
            width: 0.4
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetEquipment({
            table: "loot_tables/entities/vex_gear.json"
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.lastHitByPlayer()} ? 5 + (${MoLang.equipmentCount()} * Math.Random(1,3)) : 0`
        }),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetGameEventMovementTracking({
            emitMove: false,
            emitSwim: false
        }),
        new BPEntityComponents.SetHealth({
            max: 14,
            value: 14
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetMovement({
            value: 1
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPhysics({
            hasCollision: false,
            hasGravity: false
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["vex", "monster", "mob"]
        })
    ],
    events: {
        "minecraft:add_periodic_damage": {
            add: {
                componentGroups: ["minecraft:periodic_damage"]
            },
            remove: {
                componentGroups: ["minecraft:start_damage_timer"]
            }
        },
        "minecraft:add_damage_timer": {
            add: {
                componentGroups: ["minecraft:start_damage_timer"]
            }
        }
    }
});
