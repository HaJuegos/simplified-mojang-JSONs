import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorRandomStrollData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    interval?: number;
    xzDist?: number;
    yDist?: number;
}

export class SetBehaviorRandomStroll extends BehaviorEntityComponentBuilder<BehaviorRandomStrollData, "minecraft:behavior.random_stroll"> {
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