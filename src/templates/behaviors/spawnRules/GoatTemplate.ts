import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const GoatTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:goat",
    categoryControl: "animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                "minecraft:stone",
                "minecraft:granite",
                "minecraft:polished_granite",
                "minecraft:diorite",
                "minecraft:polished_diorite",
                "minecraft:andesite",
                "minecraft:polished_andesite",
                "minecraft:snow",
                "minecraft:powder_snow",
                "minecraft:snow_layer",
                "minecraft:packed_ice",
                "minecraft:gravel"
            ]),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 5
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 3
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag("snowy_slopes", "self", "=="),
                    EntityFilters.hasBiomeTag("jagged_peaks", "self", "=="),
                    EntityFilters.hasBiomeTag("frozen_peaks", "self", "==")
                )
            )
        ]
    ]
});
