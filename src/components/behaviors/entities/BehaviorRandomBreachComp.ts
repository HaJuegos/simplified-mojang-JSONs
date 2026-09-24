import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRandomBreachData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    cooldownTime?: number;
    interval?: number;
    xzDist?: number;
    yDist?: number;
}

export class SetBehaviorRandomBreach extends BehaviorEntityComponentBuilder<BehaviorRandomBreachData> {
    /**
     * 
     * @param {BehaviorRandomBreachData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRandomBreachData) {
        super("minecraft:behavior.random_breach", params);
    }
}