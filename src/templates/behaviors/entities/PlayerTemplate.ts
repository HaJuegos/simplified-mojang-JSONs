import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";

export const PlayerTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Player,
    formatVersion: FormatVersionEntities.V1_26_30,
    description: {
        isSummonable: false,
        isSpawneable: false,
        spawnCategory: SpawnCategoryEntities.Creature
    },
    componentsGroups: {
        "minecraft:add_raid_omen": [
            new BPEntityComponents.SetSpellEffects({
                addEffects: [
                    {
                        displayOnScreenAnimation: true,
                        duration: 30,
                        effect: "raid_omen"
                    }
                ],
                removeEffects: "bad_omen"
            }),
            new BPEntityComponents.SetTimer({
                looping: false,
                time: [0, 0],
                timeDownEvent: {
                    event: "minecraft:clear_add_raid_omen",
                    target: "self"
                }
            })
        ],
        "minecraft:clear_raid_omen_spell_effect": [
            new BPEntityComponents.SetSpellEffects({})
        ],
        "minecraft:raid_trigger": [
            new BPEntityComponents.SetRaidTrigger({
                triggeredEvent: {
                    event: "minecraft:remove_raid_trigger",
                    target: "self"
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAttack({
            damage: 1
        }),
        new BPEntityComponents.SetBlockClimber(),
        new BPEntityComponents.SetBreathable({
            generatesBubbles: false,
            inhaleTime: 3.75,
            suffocateTime: -1,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 1.8,
            width: 0.6
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetEnvironmentSensor({
            triggers: {
                event: "minecraft:gain_raid_omen",
                filters: EntityFilters.allOf(EntityFilters.hasMobEffect("bad_omen"), EntityFilters.isInVillage())
            }
        }),
        new BPEntityComponents.SetExhaustionValues({
            sprint: 0.1,
            jump: 0.05,
            attack: 0.1,
            damage: 0.1,
            heal: 6,
            lunge: 4,
            sprintJump: 0.2,
            mine: 0.005,
            swim: 0.01,
            walk: 0
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: "Math.Min(query.player_level * 7, 100)"
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
        new BPEntityComponents.SetInsomnia({
            daysUntilInsomnia: 3
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/empty.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.1
        }),
        new BPEntityComponents.SetNameable({
            allowNameTagRenaming: false,
            alwaysShow: true
        }),
        new BPEntityComponents.SetPhysics({
            pushTowardsClosestSpace: true
        }),
        new BPEntityComponents.SetPlayerExhaustion({
            max: 20,
            value: 0
        }),
        new BPEntityComponents.SetPlayerExperience({
            max: 1,
            value: 0
        }),
        new BPEntityComponents.SetPlayerLevel({
            max: 24791,
            value: 0
        }),
        new BPEntityComponents.SetPlayerSaturation({
            max: 20,
            value: 5
        }),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetApplyKnockbackRules({
            presets: [
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "bouncy", "other"),
                    horizontalPower: 0.165,
                    verticalPower: 0.105,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                },
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "regular", "other"),
                    horizontalPower: 0.165,
                    verticalPower: 0.105,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                },
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "slow_bouncy", "other"),
                    horizontalPower: 0.165,
                    verticalPower: 0.24,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                },
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "slow_flat", "other"),
                    horizontalPower: 0.165,
                    verticalPower: 0.105,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                },
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "fast_flat", "other"),
                    horizontalPower: 0.365,
                    verticalPower: 0.09,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                },
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "light", "other"),
                    horizontalPower: 0.165,
                    verticalPower: 0.18,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                },
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "fast_sliding", "other"),
                    horizontalPower: 0.265,
                    verticalPower: 0.09,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                },
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "slow_sliding", "other"),
                    horizontalPower: 0.165,
                    verticalPower: 0.09,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                },
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "sticky", "other"),
                    horizontalPower: 0.165,
                    verticalPower: 0.09,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                },
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "high_resistance", "other"),
                    horizontalPower: 0.165,
                    verticalPower: 0.09,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                },
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "explosive", "other"),
                    horizontalPower: 0.165,
                    verticalPower: 0.09,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                },
                {
                    filter: EntityFilters.enumProperty("minecraft:sulfur_cube_archetype", "hot", "other"),
                    horizontalPower: 0.165,
                    verticalPower: 0.105,
                    verticalVelocityCap: 8,
                    slowdownScale: 1,
                    scaleWithDamage: true,
                    knockbackMode: "hit_direction",
                    extraKnockbackApproach: "multiply_reduced"
                }
            ]
        }),
        new BPEntityComponents.SetRideable({
            familyTypes: ["parrot_tame"],
            pullInEntities: true,
            seatCount: 2,
            seats: [
                {
                    lockRiderRotation: 0,
                    minRiderCount: 0,
                    maxRiderCount: 0,
                    position: [0.4, -0.2, -0.1]
                },
                {
                    lockRiderRotation: 0,
                    minRiderCount: 1,
                    maxRiderCount: 2,
                    position: [-0.4, -0.2, -0.1]
                }
            ]
        }),
        new BPEntityComponents.SetTypeFamily({
            family: ["player"]
        })
    ],
    events: {
        "minecraft:clear_add_raid_omen": {
            add: {
                componentGroups: ["minecraft:clear_raid_omen_spell_effect"]
            },
            remove: {
                componentGroups: ["minecraft:add_raid_omen"]
            }
        },
        "minecraft:remove_raid_trigger": {
            remove: {
                componentGroups: ["minecraft:raid_trigger"]
            }
        },
        "minecraft:gain_raid_omen": {
            add: {
                componentGroups: ["minecraft:add_raid_omen"]
            }
        },
        "minecraft:trigger_raid": {
            add: {
                componentGroups: ["minecraft:raid_trigger"]
            }
        }
    }
});
