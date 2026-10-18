import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const FoxTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:fox",
    categoryControl: "animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 8
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 4,
                event: "minecraft:entity_born",
                eventSkipCount: 2
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("taiga")
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 4
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 4,
                event: "minecraft:entity_born",
                eventSkipCount: 2
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("grove")
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 4
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 4,
                event: "minecraft:entity_born",
                eventSkipCount: 2
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("dappled_forest")
            )
        ]
    ]
});
