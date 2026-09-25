import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMoveToLavaData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    goalRadius?: number;
    searchCount?: number;
    searchHeight?: number;
    searchRange?: number;
}

export class SetBehaviorMoveToLava extends BehaviorEntityComponentBuilder<BehaviorMoveToLavaData> {
    /**
     * 
     * @param {BehaviorMoveToLavaData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveToLavaData) {
        super("minecraft:behavior.move_to_lava", params);
    }
}