import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorHarvestFarmBlockData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    goalRadius?: number;
    maxSecondsBeforeSearch?: number;
    searchCooldownMaxSeconds?: number;
    searchCount?: number;
    searchHeight?: number;
    searchRange?: number;
    secondsUntilNewTask?: number;
}

export class SetBehaviorHarvestFarmBlock extends BehaviorEntityComponentBuilder<BehaviorHarvestFarmBlockData> {
    /**
     * 
     * @param {BehaviorHarvestFarmBlockData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorHarvestFarmBlockData) {
        super("minecraft:behavior.harvest_farm_block", params);
    }
}