import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const BreezeTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Breeze,
    formatVersion: FormatVersionEntities.MostRecent,
    description: {
        isSummonable: true,
        isSpawneable: true,
        spawnCategory: SpawnCategoryEntities.Monster
    },
    properties: {
        "minecraft:is_playing_idle_ground_sound": {
            idProperty: "minecraft:is_playing_idle_ground_sound",
            clientSync: false,
            type: "bool",
            default: false
        }
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetAmbientSoundInterval({
            soundEvents: [
                {
                    soundID: "ambient.in.air",
                    condition: "!query.is_on_ground"
                }
            ],
            minRandomCooldownSound: 8,
            maxRandomCooldownSound: 16
        }),
        new BPEntityComponents.SetBehaviorFireAtTarget({
            postShootDelay: 0.2,
            attackCooldown: 0.5,
            attackRange: {
                min: 0,
                max: 16
            },
            filters: EntityFilters.allOf(EntityFilters.isNavigating(false)),
            ownerAnchor: 2,
            ownerOffset: [0, 0.3, 0],
            preShootDelay: 0.75,
            priority: 2,
            projectileDef: "minecraft:breeze_wind_charge_projectile",
            rangedFov: 90,
            targetAnchor: 0,
            targetOffset: [0, 0.5, 0]
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 0
        }),
        new BPEntityComponents.SetBehaviorHurtByTarget({
            entityTypes: [
                {
                    filters: EntityFilters.allOf(
                        EntityFilters.isFamily("skeleton", "other", "!="),
                        EntityFilters.isFamily("stray", "other", "!="),
                        EntityFilters.isFamily("zombie", "other", "!="),
                        EntityFilters.isFamily("husk", "other", "!="),
                        EntityFilters.isFamily("spider", "other", "!="),
                        EntityFilters.isFamily("cavespider", "other", "!="),
                        EntityFilters.isFamily("slime", "other", "!=")
                    )
                }
            ],
            priority: 4
        }),
        new BPEntityComponents.SetBehaviorJumpAroundTarget({
            jumpCooldownDuration: 0.5,
            checkCollision: false,
            filters: EntityFilters.allOf(
                EntityFilters.anyOf(EntityFilters.inWater(), EntityFilters.onGround()),
                EntityFilters.isRiding(false),
                EntityFilters.inLava(false)
            ),
            entityBoundingBoxScale: 0.7,
            landingPositionSpreadDegrees: 90,
            requiredVerticalSpace: 4,
            jumpAngles: [40, 55, 60, 75, 80],
            jumpCooldownWhenHurtDuration: 0.1,
            landingDistanceFromTarget: {
                min: 4,
                max: 8
            },
            lastHurtDuration: 2,
            lineOfSightObstructionHeightIgnore: 4,
            maxJumpVelocity: 1.4,
            prepareJumpDuration: 0.5,
            priority: 5,
            snapToSurfaceBlockRange: 10,
            validDistanceToTarget: {
                min: 4,
                max: 20
            }
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 16,
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorMoveAroundTarget({
            destinationPosSpreadDegrees: 360,
            destinationPositionRange: {
                min: 4,
                max: 8
            },
            priority: 3,
            filters: EntityFilters.allOf(
                EntityFilters.onGround(),
                EntityFilters.targetDistance(24, "self", "<=")
            ),
            heightDifferenceLimit: 0,
            movementSpeed: 1.2
        }),
        new BPEntityComponents.SetBehaviorNearestAttackableTarget({
            mustSee: true,
            withinRadius: 24,
            entityTypes: [
                {
                    filters: EntityFilters.allOf({
                        test: "is_family",
                        subject: 1,
                        operator: 0,
                        value: "player"
                    }),
                    maxDist: 24
                },
                {
                    filters: EntityFilters.allOf({
                        test: "is_family",
                        subject: 1,
                        operator: 0,
                        value: "irongolem"
                    }),
                    maxDist: 24
                }
            ],
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorRandomStroll({
            priority: 6,
            speedMultiplier: 1
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.77,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "fall",
                    dealsDamage: "no"
                },
                {
                    cause: "projectile",
                    onDamage: {
                        filters: EntityFilters.isFamily("wind_charge", "damager", "!=")
                    },
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetEnvironmentSensor({
            triggers: [
                {
                    event: "minecraft:stop_playing_idle_ground_sound",
                    filters: EntityFilters.allOf(
                        EntityFilters.onGround(),
                        EntityFilters.hasTarget(),
                        EntityFilters.boolProperty("minecraft:is_playing_idle_ground_sound", true, "self", "==")
                    )
                },
                {
                    event: "minecraft:start_playing_idle_ground_sound",
                    filters: EntityFilters.allOf(
                        EntityFilters.boolProperty("minecraft:is_playing_idle_ground_sound", true, "self", "!="),
                        EntityFilters.anyOf(EntityFilters.onGround(false), EntityFilters.hasTarget(false))
                    )
                }
            ]
        }),
        new BPEntityComponents.SetExperienceReward({
            onBred: "Math.Random(1,7)",
            onDeath: "query.last_hit_by_player ? 10 : 0"
        }),
        new BPEntityComponents.SetFollowRange({
            value: 32
        }),
        new BPEntityComponents.SetHealth({
            max: 30,
            value: 30
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    cause: "lava",
                    damagePerTick: 4,
                    filters: EntityFilters.inLava(true, "self", "==")
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetKnockbackResistance({
            value: 0
        }),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/breeze.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.4
        }),
        new BPEntityComponents.SetMovementBasic({}),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            blocksToAvoid: [
                {
                    tags: "query.any_tag('trapdoors')"
                }
            ],
            usingDoorAnnotation: true
        }),
        new BPEntityComponents.SetPersistent(),
        new BPEntityComponents.SetPhysics({}),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetReflectProjectiles({
            azimuthAngle: "180.0 + Math.random(-20.0, 20.0)",
            reflectedProjectiles: [
                "xp_bottle",
                "thrown_trident",
                "shulker_bullet",
                "dragon_fireball",
                "arrow",
                "snowball",
                "egg",
                "fireball",
                "splash_potion",
                "ender_pearl",
                "wither_skull",
                "wither_skull_dangerous",
                "small_fireball",
                "lingering_potion",
                "llama_spit",
                "fireworks_rocket",
                "fishing_hook"
            ],
            reflectionScale: "0.5"
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["breeze", "monster", "mob"]
        }),
        new BPEntityComponents.SetUsesLegacyFriction()
    ],
    events: {
        "minecraft:stop_playing_idle_ground_sound": {
            setProperty: {
                "minecraft:is_playing_idle_ground_sound": false
            }
            // TODO(migrate): remove referenciaba grupos inexistentes: ["minecraft:playing_idle_ground_sound"]
        },
        "minecraft:start_playing_idle_ground_sound": {
            // TODO(migrate): add referenciaba grupos inexistentes: ["minecraft:playing_idle_ground_sound"]
            setProperty: {
                "minecraft:is_playing_idle_ground_sound": true
            }
        }
    }
});
