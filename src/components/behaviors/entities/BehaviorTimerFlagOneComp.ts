import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorTimerFlagOneData extends BPComponent {
    priority: number;
    cooldownRange?: number | {
        min: number;
        max: number;
    };
    durationRange?: number | {
        min: number;
        max: number;
    };
    onEnd?: string | EntityFilterTrigger | EntityFilterTrigger[];
    onStart?: string | EntityFilterTrigger | EntityFilterTrigger[];
}

export class SetBehaviorTimerFlagOne extends BehaviorEntityComponentBuilder<BehaviorTimerFlagOneData, "minecraft:behavior.timer_flag_1"> {
    /**
     * 
     * @param {BehaviorTimerFlagOneData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorTimerFlagOneData) {
        super("minecraft:behavior.timer_flag_1", params);
    }
}