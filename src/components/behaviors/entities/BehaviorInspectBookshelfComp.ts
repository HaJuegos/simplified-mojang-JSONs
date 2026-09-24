import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorInspectBookshelfData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    goalRadius?: number;
    searchCount?: number;
    searchHeight?: number;
    searchRange?: number;
}

export class SetBehaviorInspectBookshelf extends BehaviorEntityComponentBuilder<BehaviorInspectBookshelfData> {
    /**
     * 
     * @param {BehaviorInspectBookshelfData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorInspectBookshelfData) {
        super("minecraft:behavior.inspect_bookshelf", params);
    }
}