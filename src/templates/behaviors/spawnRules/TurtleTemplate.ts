import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const TurtleTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:turtle",
    categoryControl: "animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter("minecraft:sand"),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetHeightFilter({
                min: 60,
                max: 67
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 8
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 6
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("beach", "self", "=="),
                    EntityFilters.hasBiomeTag("warm", "self", "==")
                )
            )
        ]
    ]
});
