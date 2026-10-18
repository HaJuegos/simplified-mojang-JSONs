import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface WeightData extends BPComponent {
    default: number;
    rarity?: number;
}

export class SetWeight extends BehaviorSpawnRuleComponentBuilder<WeightData, "minecraft:weight"> {
    /**
     * 
     * @param {WeightData} params Parametros del componente.
     * @author HaJuegos - CURRENT_DAY-10-2026
     * @constructor
     * @public
     */
    public constructor (params: WeightData) {
        super("minecraft:weight", params);
    }
}