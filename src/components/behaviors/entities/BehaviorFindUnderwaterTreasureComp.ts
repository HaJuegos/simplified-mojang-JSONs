import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorFindUnderwaterTreasureData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    searchRange?: number;
    stopDistance?: number;
}

export class SetBehaviorFindUnderwaterTreasure extends BehaviorEntityComponentBuilder<BehaviorFindUnderwaterTreasureData> {
    /**
     * 
     * @param {BehaviorFindUnderwaterTreasureData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFindUnderwaterTreasureData) {
        super("minecraft:behavior.find_underwater_treasure", params);
    }
}