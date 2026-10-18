import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DistanceFilterData extends BPComponent {
    min: number;
    max: number;
}

export class SetDistanceFilter extends BehaviorSpawnRuleComponentBuilder<DistanceFilterData, "minecraft:distance_filter"> {
    /**
     * 
     * @param {DistanceFilterData} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DistanceFilterData) {
        super("minecraft:distance_filter", params);
    }
}