import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const AxolotlTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:axolotl",
    categoryControl: "water_animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
            new BPSpawnRuleComponents.SetDisallowSpawnsInBubble(),
            new BPSpawnRuleComponents.SetWeight({
                default: 10
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                underground: 5
            }),
            new BPSpawnRuleComponents.SetSpawnsOnBlockFilter("minecraft:clay"),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 4,
                maxSize: 6,
                event: "minecraft:entity_born",
                eventSkipCount: 2
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("lush_caves", "self", "==")
            )
        ]
    ]
});
