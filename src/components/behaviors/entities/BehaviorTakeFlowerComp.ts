import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorTakeFlowerData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    filters?: EntityFilter | EntityFilter[];
    maxHeadRotationY?: number;
    maxRotationX?: number;
    maxWaitTime?: number;
    minDistanceToTarget?: number;
    minWaitTime?: number;
    searchArea?: [number, number, number];
    onTakeFlower?: string | EntityFilterTrigger | EntityFilterTrigger[];
}

export class SetBehaviorTakeFlower extends BehaviorEntityComponentBuilder<BehaviorTakeFlowerData> {
    /**
     * 
     * @param {BehaviorTakeFlowerData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorTakeFlowerData) {
        super("minecraft:behavior.take_flower", params);
    }
}