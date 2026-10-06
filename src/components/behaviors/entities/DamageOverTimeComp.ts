import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DamageOverTimeData extends BPComponent {
    damagePerHurt?: number;
    timeBetweenHurt?: number;
}

export class SetDamageOverTime extends BehaviorEntityComponentBuilder<DamageOverTimeData, "minecraft:damage_over_time"> {
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