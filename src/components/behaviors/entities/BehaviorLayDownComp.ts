import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorLayDownData extends BPComponent {
    priority: number;
    interval?: number;
    randomStopInterval?: number;
}

export class SetBehaviorLayDown extends BehaviorEntityComponentBuilder<BehaviorLayDownData> {
    /**
     * 
     * @param {BehaviorLayDownData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorLayDownData) {
        super("minecraft:behavior.lay_down", params);
    }
}