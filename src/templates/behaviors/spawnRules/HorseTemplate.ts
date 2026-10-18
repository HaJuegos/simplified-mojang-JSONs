import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const HorseTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:horse",
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
                default: 4
            }),
            new BPSpawnRuleComponents.SetHerd([
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_white"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_creamy"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_chestnut"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_brown"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_black"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_gray"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_darkbrown"
                }
            ]),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("plains", "self", "==")
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
                default: 1
            }),
            new BPSpawnRuleComponents.SetHerd([
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_white"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_creamy"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_chestnut"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_brown"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_black"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_gray"
                },
                {
                    minSize: 2,
                    maxSize: 6,
                    event: "minecraft:make_darkbrown"
                }
            ]),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("savanna", "self", "==")
            )
        ]
    ]
});
