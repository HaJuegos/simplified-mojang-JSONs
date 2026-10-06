import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

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

export class SetBehaviorFertilizeFarmBlock extends BehaviorEntityComponentBuilder<BehaviorFertilizeFarmBlockData, "minecraft:behavior.fertilize_farm_block"> {
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