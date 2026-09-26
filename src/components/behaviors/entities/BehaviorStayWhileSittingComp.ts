import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorStayWhileSittingData extends BPComponent {
    priority: number;
}

export class SetBehaviorStayWhileSitting extends BehaviorEntityComponentBuilder<BehaviorStayWhileSittingData> {
    /**
     * 
     * @param {BehaviorStayWhileSittingData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorStayWhileSittingData) {
        super("minecraft:behavior.stay_while_sitting", params);
    }
}