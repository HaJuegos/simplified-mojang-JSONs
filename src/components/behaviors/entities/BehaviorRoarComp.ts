import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRoarData extends BPComponent {
    priority: unknown;
    duration?: number;
}

export class SetBehaviorRoar extends BehaviorEntityComponentBuilder<BehaviorRoarData> {
    /**
     * 
     * @param {BehaviorRoarData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRoarData) {
        super("minecraft:behavior.roar", params);
    }
}