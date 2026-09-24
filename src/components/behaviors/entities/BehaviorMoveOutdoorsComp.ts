import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMoveOutdoorsData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    goalRadius?: number;
    searchCount?: number;
    searchHeight?: number;
    searchRange?: number;
    timeoutCooldown?: number;
}

export class SetBehaviorMoveOutdoors extends BehaviorEntityComponentBuilder<BehaviorMoveOutdoorsData> {
    /**
     * 
     * @param {BehaviorMoveOutdoorsData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveOutdoorsData) {
        super("minecraft:behavior.move_outdoors", params);
    }
}