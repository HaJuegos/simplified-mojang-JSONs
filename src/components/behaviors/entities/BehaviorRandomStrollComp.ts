import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRandomStrollData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    interval?: number;
    xzDist?: number;
    yDist?: number;
}

export class SetBehaviorRandomStroll extends BehaviorEntityComponentBuilder<BehaviorRandomStrollData> {
    /**
     * 
     * @param {BehaviorRandomStrollData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRandomStrollData) {
        super("minecraft:behavior.random_stroll", params);
    }
}