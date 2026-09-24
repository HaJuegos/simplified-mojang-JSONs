import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorGoHomeData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    goalRadius?: number;
    interval?: number;
    onHome?: string | EntityFilter | EntityFilter[];
    onFailed?: EntityFilter | EntityFilter[];
    calculateNewPathRadius?: number;
}

export class SetBehaviorGoHome extends BehaviorEntityComponentBuilder<BehaviorGoHomeData> {
    /**
     * 
     * @param {BehaviorGoHomeData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorGoHomeData) {
        super("minecraft:behavior.go_home", params);
    }
}