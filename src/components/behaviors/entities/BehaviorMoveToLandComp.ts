import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMoveToLandData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    goalRadius?: number;
    searchCount?: number;
    searchHeight?: number;
    searchRange?: number;
}

export class SetBehaviorMoveToLand extends BehaviorEntityComponentBuilder<BehaviorMoveToLandData> {
    /**
     * 
     * @param {BehaviorMoveToLandData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveToLandData) {
        super("minecraft:behavior.move_to_land", params);
    }
}