import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const GhastTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:ghast",
    categoryControl: "monster",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetDifficultyFilter({
                min: "easy",
                max: "hard"
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 40
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 0,
                underground: 2
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("nether", "self", "=="),
                    EntityFilters.hasBiomeTag("spawn_ghast", "self", "==")
                )
            )
        ]
    ]
});
