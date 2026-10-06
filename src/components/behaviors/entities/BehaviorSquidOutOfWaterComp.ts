import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorSquidOutOfWaterData extends BPComponent {
    priority: number;
}

export class SetBehaviorSquidOutOfWater extends BehaviorEntityComponentBuilder<BehaviorSquidOutOfWaterData, "minecraft:behavior.squid_out_of_water"> {
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