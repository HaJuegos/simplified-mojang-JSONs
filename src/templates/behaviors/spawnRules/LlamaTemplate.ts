import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const LlamaTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:llama",
    categoryControl: "animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter("minecraft:grass_block"),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 5
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 4,
                maxSize: 6
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("extreme_hills", "self", "==")
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter("minecraft:grass_block"),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 8
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 4,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("savanna", "self", "==")
            )
        ]
    ]
});
