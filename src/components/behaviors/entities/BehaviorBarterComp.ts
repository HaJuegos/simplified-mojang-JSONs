import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorBarterData extends BPComponent {
    priority: number;
}

export class SetBehaviorBarter extends BehaviorEntityComponentBuilder<BehaviorBarterData, "minecraft:behavior.barter"> {
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