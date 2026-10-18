import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const WolfTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:wolf",
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
                default: 8
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 4,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("taiga"),
                    EntityFilters.hasBiomeTag("cold", "self", "not"),
                    EntityFilters.hasBiomeTag("mega", "self", "not"),
                    EntityFilters.hasBiomeTag("mutated", "self", "not")
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                "minecraft:grass_block",
                "minecraft:snow",
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
                minSize: 4,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("taiga"),
                    EntityFilters.hasBiomeTag("cold")
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                {
                    name: "minecraft:podzol"
                },
                {
                    name: "minecraft:grass_block"
                },
                {
                    name: "minecraft:coarse_dirt"
                }
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
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("mega"),
                    EntityFilters.hasBiomeTag("taiga"),
                    EntityFilters.hasBiomeTag("forest"),
                    EntityFilters.hasBiomeTag("mutated", "self", "not")
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                {
                    name: "minecraft:podzol"
                },
                {
                    name: "minecraft:grass_block"
                },
                {
                    name: "minecraft:coarse_dirt"
                }
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
                minSize: 4,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("mega"),
                    EntityFilters.hasBiomeTag("taiga"),
                    EntityFilters.hasBiomeTag("forest"),
                    EntityFilters.hasBiomeTag("mutated")
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
                default: 8
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("edge"),
                    EntityFilters.hasBiomeTag("jungle")
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                "minecraft:grass_block",
                "minecraft:snow",
                "minecraft:snow_layer"
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
                EntityFilters.hasBiomeTag("grove")
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
                maxSize: 8
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("savanna"),
                    EntityFilters.hasBiomeTag("plateau")
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                {
                    name: "minecraft:grass_block"
                },
                {
                    name: "minecraft:coarse_dirt"
                }
            ]),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 2,
                rarity: 2
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 4,
                maxSize: 8
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("mesa"),
                    EntityFilters.hasBiomeTag("plateau"),
                    EntityFilters.hasBiomeTag("stone")
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
                default: 5
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 4,
                maxSize: 4
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("forest"),
                    EntityFilters.hasBiomeTag("birch", "self", "not"),
                    EntityFilters.hasBiomeTag("taiga", "self", "not"),
                    EntityFilters.hasBiomeTag("roofed", "self", "not"),
                    EntityFilters.hasBiomeTag("mutated", "self", "not"),
                    EntityFilters.hasBiomeTag("mountain", "self", "not"),
                    EntityFilters.hasBiomeTag("dappled_forest", "self", "not")
                )
            )
        ]
    ]
});
