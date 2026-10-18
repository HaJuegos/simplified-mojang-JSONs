import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const DrownedTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:drowned",
    categoryControl: "monster",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
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
                default: 5
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 5
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 4,
                initialEvent: "minecraft:as_rider",
                initialEventCount: 1
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("ocean", "self", "==")
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
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
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 5
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("ocean", "self", "==")
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
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
                default: 5
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 2
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 1
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("river", "self", "==")
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
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
                default: 95
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                underground: 5
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("dripstone_caves", "self", "==")
            )
        ]
    ]
});
