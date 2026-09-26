import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSwellData extends BPComponent {
    priority: number;
    startDistance?: number;
    stopDistance?: number;
}

export class SetBehaviorSwell extends BehaviorEntityComponentBuilder<BehaviorSwellData> {
    /**
     * 
     * @param {BehaviorSwellData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSwellData) {
        super("minecraft:behavior.swell", params);
    }
}