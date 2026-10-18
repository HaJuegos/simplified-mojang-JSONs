import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const ZombiePigmanTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:zombie_pigman",
    categoryControl: "monster",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockPreventedFilter([
                "minecraft:nether_wart_block",
                "minecraft:shroomlight"
            ]),
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
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("spawn_zombified_piglin", "self", "==")
            ),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 0,
                max: 11,
                adjustForWeather: true
            })
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockPreventedFilter([
                "minecraft:nether_wart_block",
                "minecraft:shroomlight"
            ]),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "easy",
                max: "hard"
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 1
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("spawn_few_zombified_piglins", "self", "==")
            ),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 0,
                max: 11,
                adjustForWeather: true
            })
        ]
    ]
});
