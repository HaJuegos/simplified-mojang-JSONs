import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorFloatData extends BPComponent {
    priority: number;
    sinkWithPassengers?: boolean;
    chancePerTickToFloat?: number;
    timeUnderWaterToDismountPassengers?: number;
}

export class SetBehaviorFloat extends BehaviorEntityComponentBuilder<BehaviorFloatData, "minecraft:behavior.float"> {
    /**
     * 
     * @param {BehaviorFloatData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFloatData) {
        super("minecraft:behavior.float", params);
    }
}