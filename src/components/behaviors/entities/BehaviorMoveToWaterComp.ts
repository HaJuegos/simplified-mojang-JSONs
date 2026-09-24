import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMoveToWaterData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    searchRange?: number;
    searchHeight?: number;
    searchCount?: number;
    goalRadius?: number;
}

export class SetBehaviorMoveToWater extends BehaviorEntityComponentBuilder<BehaviorMoveToWaterData> {
    /**
     * 
     * @param {BehaviorMoveToWaterData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveToWaterData) {
        super("minecraft:behavior.move_to_water", params);
    }
}