import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const PiglinTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:piglin",
    categoryControl: "monster",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockPreventedFilter([
                "minecraft:nether_wart_block",
                "minecraft:shroomlight"
            ]),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "peaceful",
                max: "hard"
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 5
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("spawn_piglin", "self", "==")
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockPreventedFilter([
                "minecraft:nether_wart_block",
                "minecraft:shroomlight"
            ]),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "peaceful",
                max: "hard"
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 15
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 4,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("spawn_few_piglins", "self", "==")
            )
        ]
    ]
});
