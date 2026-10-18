import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const CodTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:cod",
    categoryControl: "water_animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
            new BPSpawnRuleComponents.SetDistanceFilter({
                min: 12,
                max: 32
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 75
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 20
            }),
            new BPSpawnRuleComponents.SetHeightFilter({
                min: 0,
                max: 64
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 4,
                maxSize: 7
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("ocean", "self", "=="),
                    EntityFilters.hasBiomeTag("warm", "self", "!=")
                )
            )
        ]
    ]
});
