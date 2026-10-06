import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorFindUnderwaterTreasureData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    searchRange?: number;
    stopDistance?: number;
}

export class SetBehaviorFindUnderwaterTreasure extends BehaviorEntityComponentBuilder<BehaviorFindUnderwaterTreasureData, "minecraft:behavior.find_underwater_treasure"> {
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