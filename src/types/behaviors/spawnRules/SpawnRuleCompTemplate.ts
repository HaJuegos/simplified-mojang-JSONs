import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";

export {
    BPSpawnRuleFile,
    BPSpawnRuleComponent,
};

/**
 * Tipado general fijo para la definicion de un nuevo archivo spawn rule.
 * @author HaJuegos - 17-10-2026
 */
type BPSpawnRuleFile = Readonly<Record<string, unknown>>;

/**
 * Tipado general fijo para la definicion de un nuevo componente para un archivo spawn rule.
 * @author HaJuegos - 17-10-2026
 */
type BPSpawnRuleComponent = BehaviorSpawnRuleComponentBuilder<any, string>;