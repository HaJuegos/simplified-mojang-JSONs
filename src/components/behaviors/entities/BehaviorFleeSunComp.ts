import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorFleeSunData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
}

export class SetBehaviorFleeSun extends BehaviorEntityComponentBuilder<BehaviorFleeSunData> {
    /**
     * 
     * @param {BehaviorFleeSunData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFleeSunData) {
        super("minecraft:behavior.flee_sun", params);
    }
}