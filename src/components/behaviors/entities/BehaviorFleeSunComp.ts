import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorFleeSunData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
}

export class SetBehaviorFleeSun extends BehaviorEntityComponentBuilder<BehaviorFleeSunData, "minecraft:behavior.flee_sun"> {
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