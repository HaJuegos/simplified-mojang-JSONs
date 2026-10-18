import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const NautilusTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:nautilus",
    categoryControl: "animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "peaceful",
                max: "hard"
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 25
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 5
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 1
            }),
            new BPSpawnRuleComponents.SetHeightFilter({
                min: 38,
                max: 58
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("ocean", "self", "=="),
                    EntityFilters.noneOf(
                        EntityFilters.hasBiomeTag("frozen", "self", "=="),
                        EntityFilters.allOf(
                            EntityFilters.hasBiomeTag("cold", "self", "=="),
                            EntityFilters.hasBiomeTag("deep", "self", "!=")
                        )
                    )
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "peaceful",
                max: "hard"
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 10
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 5
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 1
            }),
            new BPSpawnRuleComponents.SetHeightFilter({
                min: 38,
                max: 58
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("ocean", "self", "=="),
                    EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("frozen", "self", "=="),
                        EntityFilters.allOf(EntityFilters.hasBiomeTag("cold", "self", "=="),
                            EntityFilters.hasBiomeTag("deep", "self", "!=")
                        )
                    )
                )
            )
        ]
    ]
});
