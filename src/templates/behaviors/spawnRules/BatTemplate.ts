import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const BatTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:bat",
    categoryControl: "ambient",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                "minecraft:stone",
                "minecraft:granite",
                "minecraft:diorite",
                "minecraft:andesite",
                "minecraft:tuff",
                "minecraft:deepslate"
            ]),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 0,
                max: 4,
                adjustForWeather: true
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 10
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 8,
                maxSize: 8
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 5
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("overworld"),
                    EntityFilters.hasBiomeTag("deep_dark", "self", "not")
                )
            )
        ]
    ]
});
