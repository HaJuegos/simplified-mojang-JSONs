import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorStayWhileSittingData extends BPComponent {
    priority: number;
}

export class SetBehaviorStayWhileSitting extends BehaviorEntityComponentBuilder<BehaviorStayWhileSittingData, "minecraft:behavior.stay_while_sitting"> {
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