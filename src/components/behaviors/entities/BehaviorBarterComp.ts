import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorBarterData extends BPComponent {
    priority: number;
}

export class SetBehaviorBarter extends BehaviorEntityComponentBuilder<BehaviorBarterData> {
    /**
     * 
     * @param {BehaviorBarterData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorBarterData) {
        super("minecraft:behavior.barter", params);
    }
}