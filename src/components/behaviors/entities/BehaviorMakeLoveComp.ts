import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMakeLoveData extends BPComponent {
    priority: number;
}

export class SetBehaviorMakeLove extends BehaviorEntityComponentBuilder<BehaviorMakeLoveData> {
    /**
     * 
     * @param {BehaviorMakeLoveData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMakeLoveData) {
        super("minecraft:behavior.make_love", params);
    }
}