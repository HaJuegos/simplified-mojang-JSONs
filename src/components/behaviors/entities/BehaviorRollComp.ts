import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRollData extends BPComponent {
    priority: number;
    probability?: number;
}

export class SetBehaviorRoll extends BehaviorEntityComponentBuilder<BehaviorRollData> {
    /**
     * 
     * @param {BehaviorRollData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRollData) {
        super("minecraft:behavior.roll", params);
    }
}