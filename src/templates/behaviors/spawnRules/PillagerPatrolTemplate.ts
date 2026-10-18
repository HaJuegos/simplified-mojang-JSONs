import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const PillagerPatrolTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:pillager_patrol",
    categoryControl: "pillager",
    conditions: [
        [
            new BPSpawnRuleComponents.SetMobEventFilter({
                event: "minecraft:pillager_patrols_event"
            }),
            new BPSpawnRuleComponents.SetWorldAgeFilter({
                min: 6000
            }),
            new BPSpawnRuleComponents.SetDelayFilter({
                min: 600,
                max: 660,
                identifier: "minecraft:pillager_patrol_easy",
                spawnChance: 20
            }),
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetDistanceFilter({
                min: 24,
                max: 48
            }),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                max: "easy"
            }),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 0,
                max: 7,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 5,
                initialEvent: "minecraft:promote_to_patrol_captain",
                initialEventCount: 1,
                event: "minecraft:spawn_as_patrol_follower",
                eventSkipCount: 1
            }),
            new BPSpawnRuleComponents.SetPermuteType([
                {
                    weight: 100,
                    entityType: "minecraft:pillager<minecraft:spawn_as_patrol_follower>"
                }
            ]),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("mooshroom_island", "self", "!="),
                    EntityFilters.hasBiomeTag("nether", "self", "!="),
                    EntityFilters.hasBiomeTag("the_end", "self", "!=")
                )
            ),
            new BPSpawnRuleComponents.SetPlayerInVillageFilter({
                distance: 48,
                villageBorderTolerance: 32
            })
        ],
        [
            new BPSpawnRuleComponents.SetMobEventFilter({
                event: "minecraft:pillager_patrols_event"
            }),
            new BPSpawnRuleComponents.SetWorldAgeFilter({
                min: 6000
            }),
            new BPSpawnRuleComponents.SetDelayFilter({
                min: 600,
                max: 660,
                identifier: "minecraft:pillager_patrol_normal",
                spawnChance: 20
            }),
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetDistanceFilter({
                min: 24,
                max: 48
            }),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "normal",
                max: "normal"
            }),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 0,
                max: 7,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 5,
                initialEvent: "minecraft:promote_to_patrol_captain",
                initialEventCount: 1,
                event: "minecraft:spawn_as_patrol_follower",
                eventSkipCount: 1
            }),
            new BPSpawnRuleComponents.SetPermuteType([
                {
                    weight: 100,
                    entityType: "minecraft:pillager<minecraft:spawn_as_patrol_follower>"
                }
            ]),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("mooshroom_island", "self", "!="),
                    EntityFilters.hasBiomeTag("nether", "self", "!="),
                    EntityFilters.hasBiomeTag("the_end", "self", "!=")
                )
            ),
            new BPSpawnRuleComponents.SetPlayerInVillageFilter({
                distance: 48,
                villageBorderTolerance: 32
            })
        ],
        [
            new BPSpawnRuleComponents.SetMobEventFilter({
                event: "minecraft:pillager_patrols_event"
            }),
            new BPSpawnRuleComponents.SetWorldAgeFilter({
                min: 6000
            }),
            new BPSpawnRuleComponents.SetDelayFilter({
                min: 600,
                max: 660,
                identifier: "minecraft:pillager_patrol_hard",
                spawnChance: 20
            }),
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetDistanceFilter({
                min: 24,
                max: 48
            }),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "hard"
            }),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 0,
                max: 7,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 5,
                initialEvent: "minecraft:promote_to_patrol_captain",
                initialEventCount: 1,
                event: "minecraft:spawn_as_patrol_follower",
                eventSkipCount: 1
            }),
            new BPSpawnRuleComponents.SetPermuteType([
                {
                    weight: 100,
                    entityType: "minecraft:pillager<minecraft:spawn_as_patrol_follower>"
                }
            ]),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("mooshroom_island", "self", "!="),
                    EntityFilters.hasBiomeTag("nether", "self", "!="),
                    EntityFilters.hasBiomeTag("the_end", "self", "!=")
                )
            ),
            new BPSpawnRuleComponents.SetPlayerInVillageFilter({
                distance: 48,
                villageBorderTolerance: 32
            })
        ]
    ]
});
