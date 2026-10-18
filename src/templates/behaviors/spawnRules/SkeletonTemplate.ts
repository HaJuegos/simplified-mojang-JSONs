import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const SkeletonTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:skeleton",
    categoryControl: "monster",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockPreventedFilter([
                "minecraft:nether_wart_block",
                "minecraft:shroomlight"
            ]),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 0,
                max: 7,
                adjustForWeather: true
            }),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "easy",
                max: "hard"
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 50
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 2
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("monster"),
                    EntityFilters.hasBiomeTag("sulfur_caves")
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetSpawnsOnBlockPreventedFilter([
                "minecraft:nether_wart_block",
                "minecraft:shroomlight"
            ]),
            new BPSpawnRuleComponents.SetBrightnessFilter({
                min: 0,
                max: 7,
                adjustForWeather: true
            }),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "easy",
                max: "hard"
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 80
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 2
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.anyOf(
                    EntityFilters.allOf(
                        EntityFilters.hasBiomeTag("monster"),
                        EntityFilters.hasBiomeTag("frozen", "self", "!="),
                        EntityFilters.hasBiomeTag("mangrove_swamp", "self", "!="),
                        EntityFilters.hasBiomeTag("sulfur_caves", "self", "!=")
                    ),
                    EntityFilters.hasBiomeTag("soulsand_valley")
                )
            )
        ]
    ]
});
