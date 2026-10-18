import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const FrogTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:frog",
    categoryControl: "animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetWeight({
                default: 10
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 2,
                maxSize: 5
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.anyOf(
                    EntityFilters.hasBiomeTag("swamp", "self", "=="),
                    EntityFilters.hasBiomeTag("mangrove_swamp", "self", "==")
                )
            )
        ]
    ]
});
