import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorMoveToWaterData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    searchRange?: number;
    searchHeight?: number;
    searchCount?: number;
    goalRadius?: number;
}

export class SetBehaviorMoveToWater extends BehaviorEntityComponentBuilder<BehaviorMoveToWaterData, "minecraft:behavior.move_to_water"> {
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