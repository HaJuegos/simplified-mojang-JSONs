import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSquidDiveData extends BPComponent {
    priority: number;
}

export class SetBehaviorSquidDive extends BehaviorEntityComponentBuilder<BehaviorSquidDiveData> {
    /**
     * 
     * @param {BehaviorSquidDiveData} params Parametros del componente.
     * @author HaJuegos - 25-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSquidDiveData) {
        super("minecraft:behavior.squid_dive", params);
    }
}