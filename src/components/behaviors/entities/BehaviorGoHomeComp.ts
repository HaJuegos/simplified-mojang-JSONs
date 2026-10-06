import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorGoHomeData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    goalRadius?: number;
    interval?: number;
    onHome?: string | EntityFilterTrigger | EntityFilterTrigger[];
    onFailed?: string | EntityFilterTrigger | EntityFilterTrigger[];
    calculateNewPathRadius?: number;
}

export class SetBehaviorGoHome extends BehaviorEntityComponentBuilder<BehaviorGoHomeData, "minecraft:behavior.go_home"> {
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