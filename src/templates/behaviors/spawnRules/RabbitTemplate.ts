import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const RabbitTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:rabbit",
    categoryControl: "animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                "minecraft:grass",
                "minecraft:snow",
                "minecraft:sand",
                "minecraft:snow_layer"
            ]),
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
                maxSize: 3
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.anyOf(
                    EntityFilters.allOf(
                        EntityFilters.hasBiomeTag("taiga"),
                        EntityFilters.hasBiomeTag("mega", "self", "not")
                    ),
                    EntityFilters.isSnowCovered(),
                    EntityFilters.hasBiomeTag("desert")
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                "minecraft:grass",
                "minecraft:snow",
                "minecraft:sand",
                "minecraft:snow_layer"
            ]),
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
                maxSize: 3
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag("flower_forest"),
                    EntityFilters.hasBiomeTag("snowy_slopes")
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                "minecraft:grass",
                "minecraft:snow",
                "minecraft:sand",
                "minecraft:snow_layer"
            ]),
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
                maxSize: 3
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("grove")
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                "minecraft:grass",
                "minecraft:snow",
                "minecraft:sand",
                "minecraft:snow_layer"
            ]),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 2
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 6
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag("meadow"),
                    EntityFilters.hasBiomeTag("cherry_grove")
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                "minecraft:grass"
            ]),
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
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("dappled_forest")
            )
        ]
    ]
});
