import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DensityLimitData extends BPComponent {
    surface?: number;
    underground?: number;
}

export class SetDensityLimit extends BehaviorSpawnRuleComponentBuilder<DensityLimitData, "minecraft:density_limit"> {
    /**
     * 
     * @param {DensityLimitData} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DensityLimitData) {
        super("minecraft:density_limit", params);
    }
}