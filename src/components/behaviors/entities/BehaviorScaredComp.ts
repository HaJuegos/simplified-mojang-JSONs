import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorScaredData extends BPComponent {
    priority: number;
    soundInterval?: number;
}

export class SetBehaviorScared extends BehaviorEntityComponentBuilder<BehaviorScaredData> {
    /**
     * 
     * @param {BehaviorScaredData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorScaredData) {
        super("minecraft:behavior.scared", params);
    }
}