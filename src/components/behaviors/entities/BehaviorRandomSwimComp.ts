import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRandomSwimData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    avoidSurface?: boolean;
    interval?: number;
    xzDist?: number;
    yDist?: number;
}

export class SetBehaviorRandomSwim extends BehaviorEntityComponentBuilder<BehaviorRandomSwimData> {
    /**
     * 
     * @param {BehaviorRandomSwimData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRandomSwimData) {
        super("minecraft:behavior.random_swim", params);
    }
}