import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSquidOutOfWaterData extends BPComponent {
    priority: number;
}

export class SetBehaviorSquidOutOfWater extends BehaviorEntityComponentBuilder<BehaviorSquidOutOfWaterData> {
    /**
     * 
     * @param {BehaviorSquidOutOfWaterData} params Parametros del componente.
     * @author HaJuegos - 25-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSquidOutOfWaterData) {
        super("minecraft:behavior.squid_out_of_water", params);
    }
}