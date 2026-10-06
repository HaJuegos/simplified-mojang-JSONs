import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorReceiveLoveData extends BPComponent {
    priority: number;
}

export class SetBehaviorReceiveLove extends BehaviorEntityComponentBuilder<BehaviorReceiveLoveData, "minecraft:behavior.receive_love"> {
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