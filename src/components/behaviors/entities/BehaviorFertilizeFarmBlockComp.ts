import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorFertilizeFarmBlockData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    goalRadius?: number;
    maxFertilizerUsage?: number;
    searchCooldownMaxSeconds?: number;
    searchCount?: number;
    searchHeight?: number;
    searchRange?: number;
}

export class SetBehaviorFertilizeFarmBlock extends BehaviorEntityComponentBuilder<BehaviorFertilizeFarmBlockData> {
    /**
     * 
     * @param {BehaviorFertilizeFarmBlockData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFertilizeFarmBlockData) {
        super("minecraft:behavior.fertilize_farm_block", params);
    }
}