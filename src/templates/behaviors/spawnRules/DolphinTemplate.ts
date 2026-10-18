import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const DolphinTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:dolphin",
    categoryControl: "animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
            new BPSpawnRuleComponents.SetWeight({
                default: 7
            }),
            new BPSpawnRuleComponents.SetHeightFilter({
                min: 0,
                max: 64
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 3,
                maxSize: 5
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 5,
                underground: 0
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("ocean", "self", "=="),
                    EntityFilters.hasBiomeTag("frozen", "self", "!="),
                    EntityFilters.hasBiomeTag("cold", "self", "!=")
                )
            )
        ]
    ]
});
