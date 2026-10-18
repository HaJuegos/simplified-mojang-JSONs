import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const ArmadilloTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:armadillo",
    categoryControl: "animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                {
                    name: "minecraft:grass_block"
                },
                {
                    name: "minecraft:red_sand"
                },
                {
                    name: "minecraft:coarse_dirt"
                },
                {
                    name: "minecraft:brown_terracotta"
                },
                {
                    name: "minecraft:hardened_clay"
                },
                {
                    name: "minecraft:orange_terracotta"
                },
                {
                    name: "minecraft:light_gray_terracotta"
                },
                {
                    name: "minecraft:red_terracotta"
                },
                {
                    name: "minecraft:white_terracotta"
                },
                {
                    name: "minecraft:yellow_terracotta"
                }
            ]),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 10
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 3
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("savanna")
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter([
                {
                    name: "minecraft:grass_block"
                },
                {
                    name: "minecraft:red_sand"
                },
                {
                    name: "minecraft:coarse_dirt"
                },
                {
                    name: "minecraft:brown_terracotta"
                },
                {
                    name: "minecraft:hardened_clay"
                },
                {
                    name: "minecraft:orange_terracotta"
                },
                {
                    name: "minecraft:light_gray_terracotta"
                },
                {
                    name: "minecraft:red_terracotta"
                },
                {
                    name: "minecraft:white_terracotta"
                },
                {
                    name: "minecraft:yellow_terracotta"
                }
            ]),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 6,
                rarity: 3
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 2
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("mesa"),
                    EntityFilters.hasBiomeTag("plateau", "self", "not")
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
                    name: "minecraft:red_sand"
                },
                {
                    name: "minecraft:coarse_dirt"
                },
                {
                    name: "minecraft:brown_terracotta"
                },
                {
                    name: "minecraft:hardened_clay"
                },
                {
                    name: "minecraft:orange_terracotta"
                },
                {
                    name: "minecraft:light_gray_terracotta"
                },
                {
                    name: "minecraft:red_terracotta"
                },
                {
                    name: "minecraft:white_terracotta"
                },
                {
                    name: "minecraft:yellow_terracotta"
                }
            ]),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 7,
                max: 15,
                adjustForWeather: false
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 6,
                rarity: 2
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 2
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("mesa"),
                    EntityFilters.hasBiomeTag("plateau")
                )
            )
        ]
    ]
});
