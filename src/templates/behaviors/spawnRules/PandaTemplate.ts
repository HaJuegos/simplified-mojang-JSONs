import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const PandaTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:panda",
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
                default: 10
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 2
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("jungle", "self", "=="),
                    EntityFilters.hasBiomeTag("bamboo", "self", "!=")
                )
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
                default: 40
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 2
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("bamboo", "self", "==")
            )
        ]
    ]
});
