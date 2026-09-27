import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface DamageOverTimeData extends BPComponent {
    damagePerHurt?: number;
    timeBetweenHurt?: number;
}

export class SetDamageOverTime extends BehaviorEntityComponentBuilder<DamageOverTimeData> {
    /**
     * 
     * @param {DamageOverTimeData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: DamageOverTimeData) {
        super("minecraft:damage_over_time", params);
    }
}