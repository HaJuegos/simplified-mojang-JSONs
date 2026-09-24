import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorDragonTakeOffData extends BPComponent {
    priority: number;
}

export class SetBehaviorDragonTakeOff extends BehaviorEntityComponentBuilder<BehaviorDragonTakeOffData> {
    /**
     * 
     * @param {BehaviorDragonTakeOffData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDragonTakeOffData) {
        super("minecraft:behavior.dragontakeoff", params);
    }
}