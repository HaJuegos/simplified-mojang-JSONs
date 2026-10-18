import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface WorldAgeFilterData extends BPComponent {
    min: number;
}

export class SetWorldAgeFilter extends BehaviorSpawnRuleComponentBuilder<WorldAgeFilterData, "minecraft:world_age_filter"> {
    /**
     * 
     * @param {WorldAgeFilterData} params Parametros del componente.
     * @author HaJuegos - CURRENT_DAY-10-2026
     * @constructor
     * @public
     */
    public constructor (params: WorldAgeFilterData) {
        super("minecraft:world_age_filter", params);
    }
}