import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const ZombieTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:zombie",
    categoryControl: "monster",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 0,
                max: 7,
                adjustForWeather: true
            }),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "easy",
                max: "hard"
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 55
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 2
            }),
            new BPSpawnRuleComponents.SetPermuteType([
                {
                    weight: 91
                },
                {
                    weight: 9,
                    entityType: "minecraft:zombie_villager_v2"
                }
            ]),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("monster"),
                    EntityFilters.hasBiomeTag("sulfur_caves")
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 0,
                max: 7,
                adjustForWeather: true
            }),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "easy",
                max: "hard"
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 100
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetPermuteType([
                {
                    weight: 95
                },
                {
                    weight: 5,
                    entityType: "minecraft:zombie_villager_v2"
                }
            ]),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("monster"),
                    EntityFilters.hasBiomeTag("sulfur_caves", "self", "!=")
                )
            )
        ]
    ]
});
