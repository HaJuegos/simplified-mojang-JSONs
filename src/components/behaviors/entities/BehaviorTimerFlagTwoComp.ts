import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorTimerFlagTwoData extends BPComponent {
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

export class SetBehaviorTimerFlagTwo extends BehaviorEntityComponentBuilder<BehaviorTimerFlagTwoData> {
    /**
     * 
     * @param {BehaviorTimerFlagTwoData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorTimerFlagTwoData) {
        super("minecraft:behavior.timer_flag_2", params);
    }
}