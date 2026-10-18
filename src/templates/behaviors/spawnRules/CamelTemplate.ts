import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const CamelTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:camel",
    categoryControl: "animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                "minecraft:sand",
                "minecraft:red_sand",
                "minecraft:sandstone"
            ]),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 1
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 1
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("desert")
            )
        ]
    ]
});
