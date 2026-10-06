import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { EntityFilters } from "../../../utils/EntityFilters";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del Glowing Squid para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const GlowSquidTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.GlowSquid,
    description: {
        spawnCategory: SpawnCategoryEntities.UndergroundWaterCreature,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "minecraft:squid_adult": [
            new BPEntityComponents.SetLeashableTo(),
            new BPEntityComponents.SetCollisionBox({
                height: 0.8,
                width: 0.8
            })
        ],
        "minecraft:squid_baby": [
            new BPEntityComponents.SetIsBaby(),
            new BPEntityComponents.SetAgeable({
                duration: 1200,
                pauseGrowItems: ["golden_dandelion"],
                resetGlowItems: ["golden_dandelion"],
                onGrowUp: {
                    event: "minecraft:ageable_grow_up",
                    target: "self"
                }
            }),
            new BPEntityComponents.SetScale({
                value: 0.5
            }),
            new BPEntityComponents.SetCollisionBox({
                height: 1,
                width: 1
            })
        ]
    },
    components: [
        new BPEntityComponents.SetBalloonable({
            mass: 0.5
        }),
        new BPEntityComponents.SetBehaviorSquidDive({
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorSquidFlee({
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorSquidIdle({
            priority: 2
        }),
        new BPEntityComponents.SetBehaviorSquidMoveAwayFromGround({
            priority: 1
        }),
        new BPEntityComponents.SetBehaviorSquidOutOfWater({
            priority: 2
        }),
        new BPEntityComponents.SetBreathable({
            breathesAir: false,
            breathesWater: true,
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanClimb(),
        new BPEntityComponents.SetCollisionBox({
            height: 0.8,
            width: 0.8
        }),
        new BPEntityComponents.SetDespawn({
            despawnFromDistance: {}
        }),
        new BPEntityComponents.SetExperienceReward({
            onDeath: `${MoLang.isBaby()} && ${MoLang.lastHitByPlayer()} ? Math.Random(1,3) : 0`
        }),
        new BPEntityComponents.SetHealth({
            max: 10,
            value: 10
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    cause: "lava",
                    damagePerTick: 4,
                    filters: EntityFilters.inLava()
                }
            ]
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/entities/glow_squid.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.2
        }),
        new BPEntityComponents.SetMovementBasic(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationWalk({
            canPathOverWater: true,
            canSink: false
        }),
        new BPEntityComponents.SetOffspring({
            offspringPairs: {
                "minecraft:glow_squid": "minecraft:glow_squid"
            }
        }),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetSpawnEggInteraction(),
        new BPEntityComponents.SetTypeFamily({
            family: ["aquatic", "squid", "mob"]
        })
    ],
    events: {
        "minecraft:entity_born": {
            add: {
                componentGroups: ["minecraft:squid_baby"]
            }
        },
        "minecraft:entity_spawned": {
            randomize: [
                {
                    weight: 95,
                    add: {
                        componentGroups: ["minecraft:squid_adult"]
                    }
                },
                {
                    weight: 5,
                    trigger: "minecraft:entity_born"
                }
            ]
        },
        "minecraft:ageable_grow_up": {
            remove: {
                componentGroups: ["minecraft:squid_baby"]
            },
            add: {
                componentGroups: ["minecraft:squid_adult"]
            }
        }
    }
});
