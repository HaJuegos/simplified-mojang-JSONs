import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorReceiveLoveData extends BPComponent {
    priority: number;
}

export class SetBehaviorReceiveLove extends BehaviorEntityComponentBuilder<BehaviorReceiveLoveData> {
    /**
     * 
     * @param {BehaviorReceiveLoveData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorReceiveLoveData) {
        super("minecraft:behavior.receive_love", params);
    }
}