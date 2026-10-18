import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type DifficultyList = "easy" | "normal" | "hard" | "peaceful";

interface DifficultyFilterData extends BPComponent {
    min: DifficultyList;
    max: DifficultyList;
}

export class SetDifficultyFilter extends BehaviorSpawnRuleComponentBuilder<DifficultyFilterData, "minecraft:difficulty_filter"> {
    /**
     * 
     * @param {DifficultyFilterData} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DifficultyFilterData) {
        super("minecraft:difficulty_filter", params);
    }
}